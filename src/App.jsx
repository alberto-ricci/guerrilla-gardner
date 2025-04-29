// App.jsx
// Entry point of the game. Manages menu, loading, and gameplay screens.

import { useState } from "react";
import { MainMenu, LoadingScreen, GameScreen, FadeWrapper } from "@components";

export default function App() {
	const [gameStarted, setGameStarted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [randomTip, setRandomTip] = useState("");

	const tips = [
		"Tip: Plant on abandoned lots for less stealth risk! 🌿",
		"Tip: Watch your stealth meter carefully! 🕵️‍♂️",
		"Tip: Empty lots are safer than corporate buildings! ⬜🏢",
		"Tip: Some events can help you recover stealth! ✨",
		"Tip: Victory requires patience and planning! 🌱",
		"Tip: Sometimes waiting a turn is smarter than rushing! ⏳",
		"Tip: Spread gardens wide to defeat MegaCorp faster! 🌍",
	];

	/**
	 * Pick a random tip to display during the loading screen.
	 */
	const pickRandomTip = () => {
		return tips[Math.floor(Math.random() * tips.length)];
	};

	/**
	 * Handle starting the game, show loading screen first.
	 */
	const handleStartGame = () => {
		setRandomTip(pickRandomTip());
		setIsLoading(true);

		setTimeout(() => {
			setIsLoading(false);
			setGameStarted(true);
		}, 1000); // Simulate loading time
	};

	/**
	 * Handle returning back to the main menu.
	 */
	const handleBackToMenu = () => {
		setGameStarted(false);
	};

	/**
	 * Render the appropriate screen based on current game state.
	 */
	const renderContent = () => {
		if (!gameStarted) {
			return isLoading ? (
				<FadeWrapper>
					<LoadingScreen tip={randomTip} />
				</FadeWrapper>
			) : (
				<FadeWrapper>
					<MainMenu onStart={handleStartGame} />
				</FadeWrapper>
			);
		}

		return (
			<FadeWrapper>
				<GameScreen
					onRestartGame={handleBackToMenu}
					onBackToMenu={handleBackToMenu}
				/>
			</FadeWrapper>
		);
	};

	return (
		<div className="min-h-screen bg-green-100 flex flex-col items-center justify-center p-4">
			{renderContent()}
		</div>
	);
}
