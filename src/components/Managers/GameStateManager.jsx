// GameStateManager.jsx
// Manages the endgame state, displaying either the Victory or Defeat screen.

import { VictoryScreen, LoseScreen } from "@components";

export default function GameStateManager({
	isVictory,
	isDefeat,
	defeatCause,
	onRestart,
	onBackToMenu,
}) {
	// Decides which endgame screen to render
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

		return null; // No end state to display
	};

	return renderGameState();
}
