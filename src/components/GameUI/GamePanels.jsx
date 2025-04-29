// GamePanels.jsx
// Main gameplay section displaying the Guerrilla Panel, City Grid, and MegaCorp Panel side by side.

import { GuerrillaPanel, MegaCorpPanel, CityGrid } from "@components"; // Updated to use the @components alias

export default function GamePanels({
	grid,
	onCellClick,
	playerScore,
	megaCorpControl,
	policeCount,
	isFrozen,
	momentum,
	resources,
	surveillanceLevel,
	droneActivity,
	securityLevel,
}) {
	return (
		<div className="flex gap-4 items-stretch">
			{/* Left Panel: Guerrilla faction controls */}
			<div className="w-1/4">
				<GuerrillaPanel
					stealthLevel={policeCount}
					momentum={momentum}
					resources={resources}
				/>
			</div>

			{/* Center: City Grid gameplay area */}
			<div className="w-1/2">
				<CityGrid
					grid={grid}
					onCellClick={onCellClick}
					playerScore={playerScore}
					megaCorpControl={megaCorpControl}
					policeCount={policeCount}
					isFrozen={isFrozen}
				/>
			</div>

			{/* Right Panel: MegaCorp faction controls */}
			<div className="w-1/4">
				<MegaCorpPanel
					surveillanceLevel={surveillanceLevel}
					droneActivity={droneActivity}
					securityLevel={securityLevel}
				/>
			</div>
		</div>
	);
}
