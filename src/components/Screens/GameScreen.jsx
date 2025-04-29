// GameScreen.jsx
// Main gameplay manager: handles game grid, player actions, events, victory, and defeat.

import { useState, useEffect } from "react";
import {
	GameLayout,
	EventManager,
	GameStateManager,
	GameButtons,
} from "@components"; // Unified imports
import { useGridManager, useEventManager, useGameStats } from "@hooks"; // Using hooks alias

export default function GameScreen({ onRestartGame, onBackToMenu }) {
	const gridSize = 10;

	// Core game state
	const [playerScore, setPlayerScore] = useState(0);
	const [megaCorpControl, setMegaCorpControl] = useState(100);
	const [stealthLevel, setStealthLevel] = useState(100);
	const [isVictory, setIsVictory] = useState(false);
	const [isDefeat, setIsDefeat] = useState(false);
	const [defeatCause, setDefeatCause] = useState(null);

	// Grid management (custom hook)
	const {
		grid,
		setGrid,
		policeCount,
		setPoliceCount,
		plantAtCell,
		generateFullGrid,
	} = useGridManager(gridSize, stealthLevel, handleVictory, handleDefeat);

	// Event management (custom hook)
	const { activeEvent, triggerRandomEvent, closeEvent } = useEventManager(
		handleVictory,
		handleDefeat
	);

	// Stats tracking (custom hook)
	const { gardensCount, policeUnits, protests, megaCorpCells, rawSupport } =
		useGameStats(grid);

	// Cleanup "justSpawned" status after grid refresh
	useEffect(() => {
		const timer = setTimeout(() => {
			setGrid((prevGrid) =>
				prevGrid.map((cell) =>
					cell.justSpawned ? { ...cell, justSpawned: false } : cell
				)
			);
		}, 1000);

		return () => clearTimeout(timer);
	}, [grid]);

	// Handle victory state
	function handleVictory() {
		setIsVictory(true);
	}

	// Handle defeat state and cause
	function handleDefeat(cause) {
		setIsDefeat(true);
		setDefeatCause(cause);
	}

	// Handle planting at a grid cell
	function handlePlant(id) {
		if (isVictory || isDefeat || activeEvent) return;

		const plantedCell = grid.find((cell) => cell.id === id);
		if (!plantedCell) return;

		setGrid((prevGrid) =>
			prevGrid.map((cell) =>
				cell.id === id ? { ...cell, revealed: true } : cell
			)
		);

		if (plantedCell.terrain === "abandoned") {
			// Abandoned lot planting (event possible)
			plantAtCell(id, {});
			triggerRandomEvent(
				{ playerScore, megaCorpControl, stealthLevel },
				({ playerScore, megaCorpControl, stealthLevel }) => {
					setPlayerScore(playerScore);
					setMegaCorpControl(megaCorpControl);
					setStealthLevel(stealthLevel);
				},
				plantedCell.terrain
			);
		} else if (plantedCell.terrain === "empty") {
			// Empty lot planting (police risk)
			plantAtCell(id, {
				onPoliceCatch: () => handleDefeat("police"),
			});
		}

		const newPlayerScore = playerScore + 1;
		const newMegaCorpControl = Math.max(megaCorpControl - 2, 0);
		const newStealthLevel = Math.max(stealthLevel - 10, 0);

		setPlayerScore(newPlayerScore);
		setMegaCorpControl(newMegaCorpControl);
		setStealthLevel(newStealthLevel);

		if (newMegaCorpControl === 0) handleVictory();
		if (newStealthLevel <= 0) handleDefeat("megacorp");
	}

	// Handle full game restart
	function handleFullRestart() {
		generateFullGrid();
		setPlayerScore(0);
		setMegaCorpControl(100);
		setStealthLevel(100);
		setPoliceCount(1);
		setIsVictory(false);
		setIsDefeat(false);
		setDefeatCause(null);
		closeEvent();
	}

	const isGameFrozen = isVictory || isDefeat || activeEvent !== null;

	return (
		<div className="w-full flex flex-col items-center">
			{/* Endgame screen manager */}
			<GameStateManager
				isVictory={isVictory}
				isDefeat={isDefeat}
				defeatCause={defeatCause}
				onRestart={handleFullRestart}
				onBackToMenu={onBackToMenu}
			/>

			{/* Active event modal */}
			{!isVictory && !isDefeat && (
				<EventManager
					activeEvent={activeEvent}
					onClose={closeEvent}
				/>
			)}

			{/* Main gameplay layout */}
			<GameLayout
				grid={grid}
				onCellClick={handlePlant}
				playerScore={gardensCount}
				megaCorpControl={rawSupport}
				stealthLevel={stealthLevel}
				policeCount={policeUnits}
				isFrozen={isGameFrozen}
				momentum={0} // (Momentum system placeholder)
				resources={0} // (Resource system placeholder)
				surveillanceLevel={0} // (Placeholder for future expansion)
				droneActivity={0} // (Placeholder for future expansion)
				securityLevel={0} // (Placeholder for future expansion)
				protests={protests}
				megaCorpCells={megaCorpCells}
			/>

			{/* Action buttons (only when game is active) */}
			{!isVictory && !isDefeat && !activeEvent && (
				<GameButtons
					onRestart={handleFullRestart}
					onBackToMenu={onBackToMenu}
				/>
			)}
		</div>
	);
}
