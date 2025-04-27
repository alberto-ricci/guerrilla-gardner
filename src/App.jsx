import { useState } from "react";
import MainMenu from "./components/MainMenu";
import LoadingScreen from "./components/LoadingScreen";
import GameScreen from "./components/GameScreen";
import FadeWrapper from "./components/FadeWrapper";

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

	const pickRandomTip = () => {
		return tips[Math.floor(Math.random() * tips.length)];
	};

	const handleStartGame = () => {
		setRandomTip(pickRandomTip());
		setIsLoading(true);

		setTimeout(() => {
			setIsLoading(false);
			setGameStarted(true);
		}, 1000); // Simulate loading
	};

	const handleBackToMenu = () => {
		setGameStarted(false);
	};

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
