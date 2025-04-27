import { useState } from "react";
import GameLayout from "./GameLayout";
import EventManager from "./EventManager";
import GameStateManager from "./GameStateManager";
import events from "../data/events";

export default function GameScreen({ onRestartGame, onBackToMenu }) {
	const gridSize = 10;

	const GOOD_EVENT_CHANCE = 0.2;
	const BAD_EVENT_CHANCE = 0.4;
	const NEUTRAL_EVENT_CHANCE = 0.3;

	const goodEvents = events.filter((event) => event.type === "good");
	const badEvents = events.filter((event) => event.type === "bad");
	const neutralEvents = events.filter((event) => event.type === "neutral");

	const generateGrid = () => {
		const types = ["empty", "building", "abandoned"];
		return Array.from({ length: gridSize * gridSize }, (_, i) => ({
			id: i,
			type: types[Math.floor(Math.random() * types.length)],
		}));
	};

	const [grid, setGrid] = useState(generateGrid);
	const [playerScore, setPlayerScore] = useState(0);
	const [megaCorpControl, setMegaCorpControl] = useState(100);
	const [stealthLevel, setStealthLevel] = useState(100);
	const [isVictory, setIsVictory] = useState(false);
	const [isDefeat, setIsDefeat] = useState(false);
	const [activeEvent, setActiveEvent] = useState(null);

	const handlePlant = (id) => {
		if (isVictory || isDefeat || activeEvent) return; // freeze controls if necessary

		setGrid((prevGrid) =>
			prevGrid.map((cell) => {
				if (
					cell.id === id &&
					(cell.type === "empty" || cell.type === "abandoned")
				) {
					const newPlayerScore = playerScore + 1;
					const newMegaCorpControl = Math.max(megaCorpControl - 2, 0);
					const newStealthLevel = Math.max(stealthLevel - 10, 0);

					setPlayerScore(newPlayerScore);
					setMegaCorpControl(newMegaCorpControl);
					setStealthLevel(newStealthLevel);

					if (newMegaCorpControl === 0) setIsVictory(true);
					if (newStealthLevel <= 0) setIsDefeat(true);

					triggerRandomEvent();
					return { ...cell, type: "garden" };
				}
				return cell;
			})
		);
	};

	const triggerRandomEvent = () => {
		const roll = Math.random();
		if (roll < GOOD_EVENT_CHANCE && goodEvents.length > 0) {
			applyEvent(
				goodEvents[Math.floor(Math.random() * goodEvents.length)]
			);
		} else if (
			roll < GOOD_EVENT_CHANCE + BAD_EVENT_CHANCE &&
			badEvents.length > 0
		) {
			applyEvent(badEvents[Math.floor(Math.random() * badEvents.length)]);
		} else if (
			roll <
				GOOD_EVENT_CHANCE + BAD_EVENT_CHANCE + NEUTRAL_EVENT_CHANCE &&
			neutralEvents.length > 0
		) {
			applyEvent(
				neutralEvents[Math.floor(Math.random() * neutralEvents.length)]
			);
		}
	};

	const applyEvent = (event) => {
		setActiveEvent(event);

		const newState = event.effect({
			playerScore,
			megaCorpControl,
			stealthLevel,
		});

		setPlayerScore(newState.playerScore);
		setMegaCorpControl(newState.megaCorpControl);
		setStealthLevel(newState.stealthLevel);

		if (newState.megaCorpControl === 0) setIsVictory(true);
		if (newState.stealthLevel <= 0) setIsDefeat(true);
	};

	const handleCloseEvent = () => {
		setActiveEvent(null);
	};

	const handleFullRestart = () => {
		setGrid(generateGrid());
		setPlayerScore(0);
		setMegaCorpControl(100);
		setStealthLevel(100);
		setIsVictory(false);
		setIsDefeat(false);
		setActiveEvent(null);
	};

	return (
		<div className="w-full flex flex-col items-center">
			<GameStateManager
				isVictory={isVictory}
				isDefeat={isDefeat}
				onRestart={handleFullRestart}
				onBackToMenu={onBackToMenu}
			/>

			{!isVictory && !isDefeat && (
				<EventManager
					activeEvent={activeEvent}
					onClose={handleCloseEvent}
				/>
			)}

			<GameLayout
				grid={grid}
				onCellClick={handlePlant}
				playerScore={playerScore}
				megaCorpControl={megaCorpControl}
				stealthLevel={stealthLevel}
				isFrozen={isVictory || isDefeat || activeEvent !== null}
			/>

			{/* 🔥 Always available under gameplay */}
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
