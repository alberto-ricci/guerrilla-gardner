import { useState, useEffect } from "react";
import GameLayout from "./GameLayout";
import EventManager from "./EventManager";
import GameStateManager from "./GameStateManager";
import GameButtons from "./GameButtons";
import useGridManager from "../hooks/useGridManager";
import useEventManager from "../hooks/useEventManager";
import useGameStats from "../hooks/useGameStats";

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
		generateFullGrid,
	} = useGridManager(gridSize, stealthLevel, handleVictory, handleDefeat);

	const { activeEvent, triggerRandomEvent, closeEvent } = useEventManager(
		handleVictory,
		handleDefeat
	);

	const { gardensCount, policeUnits, protests, megaCorpCells, rawSupport } =
		useGameStats(grid);

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

		setGrid((prevGrid) =>
			prevGrid.map((cell) =>
				cell.id === id ? { ...cell, revealed: true } : cell
			)
		);

		if (plantedCell.terrain === "abandoned") {
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
				playerScore={gardensCount}
				megaCorpControl={rawSupport}
				stealthLevel={stealthLevel}
				policeCount={policeUnits}
				isFrozen={isGameFrozen}
				momentum={0}
				resources={0}
				surveillanceLevel={0}
				droneActivity={0}
				securityLevel={0}
				protests={protests}
				megaCorpCells={megaCorpCells}
			/>

			{!isVictory && !isDefeat && !activeEvent && (
				<GameButtons
					onRestart={handleFullRestart}
					onBackToMenu={onBackToMenu}
				/>
			)}
		</div>
	);
}
