import VictoryScreen from "./VictoryScreen";
import LoseScreen from "./LoseScreen";

export default function GameStateManager({
	isVictory,
	isDefeat,
	onRestart,
	onBackToMenu,
}) {
	if (isVictory) {
		return (
			<VictoryScreen
				onRestart={onRestart}
				onBackToMenu={onBackToMenu}
			/>
		);
	}

	if (isDefeat) {
		return (
			<LoseScreen
				onRestart={onRestart}
				onBackToMenu={onBackToMenu}
			/>
		);
	}

	return null;
}
