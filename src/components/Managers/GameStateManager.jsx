// GameStateManager.jsx
import { VictoryScreen, LoseScreen } from "@components";

export default function GameStateManager({
	isVictory,
	isDefeat,
	defeatCause,
	victoryReason,
	onRestart,
	onBackToMenu,
}) {
	const renderGameState = () => {
		if (isVictory) {
			return (
				<VictoryScreen
					reason={victoryReason}
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
