// GameScreen.jsx
import { useState, useEffect } from "react";
import { GameLayout, GameButtons, GameStateManager } from "@components";
import { useGridManager } from "@hooks";
import {
	calculateCitySupport,
	countGardens,
	countMegaCorpCells,
	countPoliceUnits,
} from "@systems/GameScoreSystem";

import { checkVictory } from "@systems/WinCondition";
import { checkDefeat } from "@systems/LoseCondition";

export default function GameScreen({ onRestartGame, onBackToMenu }) {
	const gridSize = 10;

	const [isVictory, setIsVictory] = useState(false);
	const [isDefeat, setIsDefeat] = useState(false);
	const [support, setSupport] = useState(1);
	const [defeatCause, setDefeatCause] = useState(null);
	const [victoryReason, setVictoryReason] = useState(null);
	const [hasPlayerActed, setHasPlayerActed] = useState(false);
	const [lastClickedCell, setLastClickedCell] = useState(null); // ✅ NEW

	const { grid, plantAtCell, movePolice, generateFullGrid } = useGridManager(
		gridSize,
		100,
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
		if (isVictory || isDefeat) return;

		if (!clickedCell) return;

		// Update the last clicked cell
		setLastClickedCell(clickedCell);

		// Create a simulated gameState for checkDefeat
		const simulatedGameState = {
			playerScore: countGardens(grid),
			megaCorpControl: countMegaCorpCells(grid),
			supportValue: support,
			stealthLevel: 100,
			protests: 0,
			lastClickedCell: clickedCell, // ✅ Include for defeat checking
		};

		// First, check if clicking this cell caused a defeat (police, etc.)
		const defeat = checkDefeat(simulatedGameState);
		if (defeat.defeat) {
			handleDefeat(defeat.reason);
			return;
		}

		// Otherwise, proceed normally
		plantAtCell(clickedCell.id);
		movePolice();
		setHasPlayerActed(true);
	}

	function evaluateGameState(currentSupport) {
		const gameState = {
			playerScore: countGardens(grid),
			megaCorpControl: countMegaCorpCells(grid),
			supportValue: currentSupport,
			stealthLevel: 100,
			protests: 0,
		};

		const victory = checkVictory(gameState);
		if (victory.victory) {
			handleVictory(victory.reason);
			return;
		}

		const defeat = checkDefeat({
			...gameState,
			lastClickedCell,
		});
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
		generateFullGrid();
		setSupport(1);
	}

	useEffect(() => {
		if (grid.length > 0 && hasPlayerActed) {
			const updatedSupport = calculateCitySupport(grid);
			setSupport(updatedSupport);

			evaluateGameState(updatedSupport);
		}
	}, [grid, hasPlayerActed]);

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

			{!isVictory && !isDefeat && (
				<>
					<GameLayout
						grid={grid}
						onCellClick={handlePlant} // ✅ Now expects full cell
						playerScore={countGardens(grid)}
						megaCorpControl={support}
						stealthLevel={100}
						policeCount={countPoliceUnits(grid)}
						isFrozen={isVictory || isDefeat}
						momentum={0}
						resources={0}
						surveillanceLevel={0}
						droneActivity={0}
						securityLevel={0}
						protests={0}
						megaCorpCells={countMegaCorpCells(grid)}
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
