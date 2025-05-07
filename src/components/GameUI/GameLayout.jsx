import GameTitle from "./GameTitle";
import GameHeaderStats from "./GameHeaderStats";
import { GamePanels } from "@components";

/**
 * Main layout for the in-game screen.
 */
export default function GameLayout({
	grid,
	onCellClick,
	playerScore,
	megaCorpControl,
	supportChange,
	stealthLevel,
	policeCount,
	isFrozen,
	momentum,
	resources,
	surveillanceLevel,
	droneActivity,
	securityLevel,
	protests,
	megaCorpCells,
	onSkipTurn,
	onSabotage,
	sabotageUses,
}) {
	return (
		<div className="w-full max-w-7xl mx-auto p-4 flex flex-col gap-6">
			<GameTitle />

			<GameHeaderStats
				gardensCount={playerScore}
				policeCount={policeCount}
				megaCorpCells={megaCorpCells}
				protests={protests}
				supportValue={megaCorpControl}
				supportChange={supportChange}
			/>

			<GamePanels
				grid={grid}
				onCellClick={onCellClick}
				playerScore={playerScore}
				megaCorpControl={megaCorpControl}
				policeCount={policeCount}
				isFrozen={isFrozen}
				momentum={momentum}
				resources={resources}
				surveillanceLevel={surveillanceLevel}
				stealthLevel={stealthLevel}
				droneActivity={droneActivity}
				securityLevel={securityLevel}
				onSkipTurn={onSkipTurn}
				onSabotage={onSabotage}
				sabotageCount={sabotageUses}
			/>
		</div>
	);
}
