import { useState, useEffect } from "react";
import GameLayout from "./GameLayout";
import EventManager from "./EventManager";
import GameStateManager from "./GameStateManager";
import useGridManager from "../hooks/useGridManager";
import useEventManager from "../hooks/useEventManager";

export default function GameScreen({ onRestartGame, onBackToMenu }) {
	const gridSize = 10;
	const [playerScore, setPlayerScore] = useState(0);
	const [megaCorpControl, setMegaCorpControl] = useState(100);
	const [stealthLevel, setStealthLevel] = useState(100);
	const [isVictory, setIsVictory] = useState(false);
	const [isDefeat, setIsDefeat] = useState(false);
	const [defeatCause, setDefeatCause] = useState(null);

	const {
		grid,
		setGrid,
		policeCount,
		setPoliceCount,
		plantAtCell,
		generateGrid,
	} = useGridManager(gridSize, stealthLevel, handleVictory, handleDefeat);

	const { activeEvent, triggerRandomEvent, closeEvent } = useEventManager(
		handleVictory,
		handleDefeat
	);

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

	function handleVictory() {
		setIsVictory(true);
	}

	function handleDefeat(cause) {
		setIsDefeat(true);
		setDefeatCause(cause);
	}

	function handlePlant(id) {
		if (isVictory || isDefeat || activeEvent) return;

		const plantedCell = grid.find((cell) => cell.id === id);
		if (!plantedCell) return;

		// Reveal cell first
		setGrid((prevGrid) =>
			prevGrid.map((cell) =>
				cell.id === id ? { ...cell, revealed: true } : cell
			)
		);

		// ✨ NEW LOGIC based on terrain type
		if (plantedCell.type === "abandoned") {
			// No police check, always trigger event
			plantAtCell(id, {});
			triggerRandomEvent(
				{ playerScore, megaCorpControl, stealthLevel },
				({ playerScore, megaCorpControl, stealthLevel }) => {
					setPlayerScore(playerScore);
					setMegaCorpControl(megaCorpControl);
					setStealthLevel(stealthLevel);
				},
				plantedCell.type
			);
		} else if (plantedCell.type === "empty") {
			// Normal behavior: police danger
			plantAtCell(id, {
				onPoliceCatch: () => handleDefeat("police"),
			});
			// No event triggered for empty lots
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

	function handleFullRestart() {
		setGrid(generateGrid());
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
			<GameStateManager
				isVictory={isVictory}
				isDefeat={isDefeat}
				defeatCause={defeatCause}
				onRestart={handleFullRestart}
				onBackToMenu={onBackToMenu}
			/>

			{!isVictory && !isDefeat && (
				<EventManager
					activeEvent={activeEvent}
					onClose={closeEvent}
				/>
			)}

			<GameLayout
				grid={grid}
				onCellClick={handlePlant}
				playerScore={playerScore}
				megaCorpControl={megaCorpControl}
				stealthLevel={stealthLevel}
				policeCount={policeCount}
				isFrozen={isGameFrozen}
			/>

			{!isVictory && !isDefeat && !activeEvent && (
				<div className="flex flex-col sm:flex-row gap-4 mt-8">
					<button
						onClick={handleFullRestart}
						className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-xl font-bold transition-all duration-300"
					>
						🔄 Restart
					</button>
					<button
						onClick={onBackToMenu}
						className="px-6 py-3 bg-yellow-600 hover:bg-yellow-500 text-white rounded-xl font-bold transition-all duration-300"
					>
						🏠 Main Menu
					</button>
				</div>
			)}
		</div>
	);
}
