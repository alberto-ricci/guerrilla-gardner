import React from "react";
import GuerrillaPanel from "./GuerrillaPanel";
import MegaCorpPanel from "./MegaCorpPanel";
import CityGrid from "./CityGrid";
import Header from "./Header";

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
}) => {
	return (
		<div className="w-full max-w-7xl mx-auto p-4 flex flex-col gap-4">
			<Header
				gardensCount={playerScore}
				policeCount={policeCount}
				megaCorpControl={megaCorpControl}
			/>

			<div className="flex gap-4 items-stretch">
				<div className="w-1/4">
					<GuerrillaPanel
						stealthLevel={stealthLevel}
						resources={resources}
						momentum={momentum}
					/>
				</div>

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

				<div className="w-1/4">
					<MegaCorpPanel
						surveillanceLevel={surveillanceLevel}
						droneActivity={droneActivity}
						securityLevel={securityLevel}
					/>
				</div>
			</div>
		</div>
	);
};

export default GameLayout;
