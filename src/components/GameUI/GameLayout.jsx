// GameLayout.jsx
// Main layout for the active gameplay screen, organizing the title, header stats, and control panels.

import React from "react";
import { Header, GamePanels } from "@components"; // Updated import (assumes you're using @components alias)

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

			{/* Header Section: Overall game stats */}
			<Header
				gardensCount={playerScore}
				policeCount={policeCount}
				megaCorpCells={megaCorpCells}
				protests={protests}
				supportValue={megaCorpControl}
			/>

			{/* Panels Section: Grid and gameplay controls */}
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
