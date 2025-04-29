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
import { triggerRandomEvent } from "@systems/EventSystem";
import { getPoliceAlertLevel, isPoliceCaught } from "@systems/PoliceSystem";
import { updateStealth, calculateSurveillance } from "@systems/StealthSystem"; // ✅ NEW

export default function GameScreen({ onRestartGame, onBackToMenu }) {
	const gridSize = 10;

	const [isVictory, setIsVictory] = useState(false);
	const [isDefeat, setIsDefeat] = useState(false);
	const [support, setSupport] = useState(1);
	const [previousSupport, setPreviousSupport] = useState(1);
	const [stealthLevel, setStealthLevel] = useState(100); // ✅ NEW
	const [surveillanceLevel, setSurveillanceLevel] = useState(0); // ✅ NEW
	const [defeatCause, setDefeatCause] = useState(null);
	const [victoryReason, setVictoryReason] = useState(null);
	const [hasPlayerActed, setHasPlayerActed] = useState(false);
	const [lastClickedCell, setLastClickedCell] = useState(null);
	const [activeEvent, setActiveEvent] = useState(null);

	const previousSupportRef = useRef(support);

	const { grid, plantAtCell, movePolice, generateFullGrid } = useGridManager(
		gridSize,
		stealthLevel,
		handleVictory
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
			stealthLevel: stealthLevel, // ✅ Use dynamic stealth
			protests: 0,
			lastClickedCell: clickedCell,
		};

		const defeat = checkDefeat(simulatedGameState);
		if (defeat.defeat) {
			handleDefeat(defeat.reason);
			return;
		}

		// 🚨 Police Tile
		if (clickedCell.unit === "police") {
			handleDefeat("Caught by Police 🚓");
			return;
		}

		// 🎲 Event Tile
		if (clickedCell.type === "event") {
			const event = triggerRandomEvent(clickedCell.randomEventCategory);
			setActiveEvent(event);

			plantAtCell(clickedCell.id);

			// ✅ Update stealth
			const newStealth = updateStealth(stealthLevel, "event");
			setStealthLevel(newStealth);
			setSurveillanceLevel(calculateSurveillance(newStealth));

			movePolice();
			setHasPlayerActed(true);
			return;
		}

		// 🌿 Empty Tile
		if (clickedCell.type === "empty") {
			const alertLevel = getPoliceAlertLevel(
				grid,
				clickedCell.id,
				gridSize
			);
			if (isPoliceCaught(alertLevel)) {
				handleDefeat("Captured by Surveillance 🚨");
				return;
			}

			plantAtCell(clickedCell.id);

			// ✅ Update stealth
			const newStealth = updateStealth(stealthLevel, "plant");
			setStealthLevel(newStealth);
			setSurveillanceLevel(calculateSurveillance(newStealth));

			movePolice();
			setHasPlayerActed(true);
		}
	}

	function evaluateGameState(currentSupport) {
		const gameState = {
			playerScore: countGardens(grid),
			megaCorpControl: countMegaCorpCells(grid),
			supportValue: currentSupport,
			stealthLevel: stealthLevel, // ✅ Real stealth
			protests: 0,
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
		setIsVictory(false);
		setIsDefeat(false);
		setVictoryReason(null);
		setDefeatCause(null);
		setHasPlayerActed(false);
		setLastClickedCell(null);
		setSupport(1);
		setPreviousSupport(1);
		setStealthLevel(100); // ✅ Reset stealth
		setSurveillanceLevel(0); // ✅ Reset surveillance
		previousSupportRef.current = 1;
		setActiveEvent(null);
		generateFullGrid();
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
				onClose={() => setActiveEvent(null)}
			/>

			{!isVictory && !isDefeat && (
				<>
					<GameLayout
						grid={grid}
						onCellClick={handlePlant}
						playerScore={countGardens(grid)}
						megaCorpControl={support}
						stealthLevel={stealthLevel} // ✅ Real stealth
						surveillanceLevel={surveillanceLevel} // ✅ Real surveillance
						policeCount={countPoliceUnits(grid)}
						isFrozen={isVictory || isDefeat}
						momentum={0}
						resources={0}
						droneActivity={0}
						securityLevel={0}
						protests={0}
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
