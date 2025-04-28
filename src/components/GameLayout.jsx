import React from "react";
import Header from "./Header";
import GamePanels from "./GamePanels";

const GameLayout = ({
	grid,
	onCellClick,
	playerScore,
	megaCorpControl,
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
}) => {
	return (
		<div className="w-full max-w-7xl mx-auto p-4 flex flex-col gap-6">
			{/* Game Title */}
			<h1 className="text-4xl font-bold text-center text-green-800 drop-shadow-sm">
				Guerrilla Gardener 🌱
			</h1>

			{/* Header */}
			<Header
				gardensCount={playerScore}
				policeCount={policeCount}
				megaCorpCells={megaCorpCells}
				protests={protests}
				supportValue={megaCorpControl} // this is rawSupport now
			/>

			{/* Panels */}
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
				droneActivity={droneActivity}
				securityLevel={securityLevel}
			/>
		</div>
	);
};

export default GameLayout;
