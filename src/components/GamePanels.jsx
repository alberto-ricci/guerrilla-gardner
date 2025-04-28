import GuerrillaPanel from "./GuerrillaPanel";
import MegaCorpPanel from "./MegaCorpPanel";
import CityGrid from "./CityGrid";

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
			<div className="w-1/4">
				<GuerrillaPanel
					stealthLevel={policeCount}
					momentum={momentum}
					resources={resources}
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
	);
}
