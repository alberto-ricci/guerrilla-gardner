import { useState, useEffect, useRef } from "react";
import {
	GameLayout,
	GameButtons,
	GameStateManager,
	EventManager,
} from "@components";
import { useGridManager } from "@hooks";
import {
	calculateCitySupport,
	countGardens,
	countMegaCorpCells,
	countPoliceUnits,
} from "@systems/GameScoreSystem";
import { checkVictory } from "@systems/WinCondition";
import { checkDefeat } from "@systems/LoseCondition";
import { getPoliceAlertLevel, isPoliceCaught } from "@systems/PoliceSystem";
import { useStealthManager } from "@hooks/useStealthManager";
import useEventManager from "@hooks/useEventManager";
import useMomentumManager from "@hooks/useMomentumManager";

export default function GameScreen({ onRestartGame, onBackToMenu }) {
	const gridSize = 10;

	const [isVictory, setIsVictory] = useState(false);
	const [isDefeat, setIsDefeat] = useState(false);
	const [support, setSupport] = useState(1);
	const [previousSupport, setPreviousSupport] = useState(1);
	const [defeatCause, setDefeatCause] = useState(null);
	const [victoryReason, setVictoryReason] = useState(null);
	const [hasPlayerActed, setHasPlayerActed] = useState(false);
	const [lastClickedCell, setLastClickedCell] = useState(null);
	const [isReady, setIsReady] = useState(false);

	const previousSupportRef = useRef(support);

	const { stealth, surveillance, applyStealthHit, resetStealth } =
		useStealthManager();

	const {
		grid,
		setGrid, // Make sure this is exposed from useGridManager
		plantAtCell,
		movePolice,
		generateFullGrid,
	} = useGridManager(gridSize, stealth, handleVictory);

	const { momentum, protestCount, handleGardenPlanted, resetMomentum } =
		useMomentumManager(grid, setGrid);

	const { activeEvent, triggerRandomEvent, closeEvent } = useEventManager(
		handleVictory,
		handleDefeat
	);

	function handleVictory(reason = "Victory!") {
		setIsVictory(true);
		setVictoryReason(reason);
	}

	function handleDefeat(cause = "Defeat...") {
		setIsDefeat(true);
		setDefeatCause(cause);
	}

	function handlePlant(clickedCell) {
		if (isVictory || isDefeat || !clickedCell) return;

		setLastClickedCell(clickedCell);

		const simulatedGameState = {
			playerScore: countGardens(grid),
			megaCorpControl: countMegaCorpCells(grid),
			supportValue: support,
			stealthLevel: stealth,
			protests: protestCount,
			lastClickedCell: clickedCell,
		};

		const defeat = checkDefeat(simulatedGameState);
		if (defeat.defeat) {
			handleDefeat(defeat.reason);
			return;
		}

		if (clickedCell.unit === "police") {
			handleDefeat("Caught by Police 🚓");
			return;
		}

		if (clickedCell.type === "event") {
			plantAtCell(clickedCell.id);
			handleGardenPlanted();

			triggerRandomEvent(
				{
					playerScore: countGardens(grid),
					megaCorpControl: support,
					stealthLevel: stealth,
				},
				({
					playerScore,
					megaCorpControl,
					stealthLevel: newStealth,
				}) => {
					setSupport(megaCorpControl);
					const stealthChange = stealth - newStealth;
					applyStealthHit(null, stealthChange);
				},
				"abandoned"
			);

			movePolice();
			setHasPlayerActed(true);
			return;
		}

		if (clickedCell.type === "empty" || clickedCell.type === "protest") {
			const alertLevel =
				clickedCell.type === "protest"
					? 0
					: getPoliceAlertLevel(grid, clickedCell.id, gridSize);

			if (isPoliceCaught(alertLevel)) {
				handleDefeat("Captured by Surveillance 🚨");
				return;
			}

			plantAtCell(clickedCell.id);
			handleGardenPlanted();

			if (clickedCell.type === "protest" || clickedCell.protestSupport) {
				applyStealthHit(null, 0);
			} else {
				applyStealthHit(null, clickedCell.stealthHit);
			}

			movePolice();
			setHasPlayerActed(true);
		}
	}

	function evaluateGameState(currentSupport) {
		const gameState = {
			playerScore: countGardens(grid),
			megaCorpControl: countMegaCorpCells(grid),
			supportValue: currentSupport,
			stealthLevel: stealth,
			protests: protestCount,
		};

		const victory = checkVictory(gameState);
		if (victory.victory) {
			handleVictory(victory.reason);
			return;
		}

		const defeat = checkDefeat({ ...gameState, lastClickedCell });
		if (defeat.defeat) {
			handleDefeat(defeat.reason);
			return;
		}
	}

	function handleFullRestart() {
		console.log("🔁 Restart triggered");
		setIsVictory(false);
		setIsDefeat(false);
		setVictoryReason(null);
		setDefeatCause(null);
		setHasPlayerActed(false);
		setLastClickedCell(null);
		setSupport(1);
		setPreviousSupport(1);
		previousSupportRef.current = 1;
		setIsReady(false);

		resetStealth();
		resetMomentum();

		requestAnimationFrame(() => {
			generateFullGrid(100);
		});
	}

	useEffect(() => {
		if (grid.length > 0 && hasPlayerActed) {
			const updatedSupport = calculateCitySupport(grid);
			setPreviousSupport(support);
			previousSupportRef.current = updatedSupport;
			setSupport(updatedSupport);
			evaluateGameState(updatedSupport);
		}
	}, [grid, hasPlayerActed]);

	useEffect(() => {
		if (grid.length > 0) {
			setIsReady(true);
			console.log("✅ Grid is ready with", grid.length, "cells");
		}
	}, [grid]);

	useEffect(() => {
		console.log("✅ Stealth updated:", stealth);
	}, [stealth]);

	const supportChange = support - previousSupport;

	return (
		<div className="w-full flex flex-col items-center">
			<GameStateManager
				isVictory={isVictory}
				isDefeat={isDefeat}
				defeatCause={defeatCause}
				victoryReason={victoryReason}
				onRestart={handleFullRestart}
				onBackToMenu={onBackToMenu}
			/>

			<EventManager
				activeEvent={activeEvent}
				onClose={closeEvent}
			/>

			{isReady && !isVictory && !isDefeat && (
				<>
					<GameLayout
						grid={grid}
						onCellClick={handlePlant}
						playerScore={countGardens(grid)}
						megaCorpControl={support}
						stealthLevel={stealth}
						surveillanceLevel={surveillance}
						policeCount={countPoliceUnits(grid)}
						isFrozen={isVictory || isDefeat}
						momentum={momentum}
						protests={protestCount}
						momentumLevel={momentum}
						megaCorpCells={countMegaCorpCells(grid)}
						supportChange={supportChange}
					/>

					<GameButtons
						onRestart={handleFullRestart}
						onBackToMenu={onBackToMenu}
					/>
				</>
			)}
		</div>
	);
}
