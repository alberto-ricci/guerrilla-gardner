import VictoryScreen from "./VictoryScreen";
import LoseScreen from "./LoseScreen";

export default function GameStateManager({
	isVictory,
	isDefeat,
	defeatCause,
	onRestart,
	onBackToMenu,
}) {
	const renderGameState = () => {
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
					cause={defeatCause}
					onRestart={onRestart}
					onBackToMenu={onBackToMenu}
				/>
			);
		}

		return null;
	};

	return renderGameState();
}
