// components/layout/GamePanels.jsx
// 🧩 Three-column layout: Guerrilla Panel | Game Grid | MegaCorp Panel

import GuerrillaPanelWrapper from "./GuerrillaPanelWrapper";
import GameGridPanel from "./GameGridPanel";
import MegaCorpPanelWrapper from "./MegaCorpPanelWrapper";

export default function GamePanels(props) {
	return (
		<div className="flex gap-4 items-stretch">
			<GuerrillaPanelWrapper
				stealthLevel={props.stealthLevel}
				momentum={props.momentum}
				resources={props.resources}
			/>

			<GameGridPanel
				grid={props.grid}
				onCellClick={props.onCellClick}
				playerScore={props.playerScore}
				megaCorpControl={props.megaCorpControl}
				policeCount={props.policeCount}
				isFrozen={props.isFrozen}
			/>

			<MegaCorpPanelWrapper
				surveillanceLevel={props.surveillanceLevel}
				droneActivity={props.droneActivity}
				securityLevel={props.securityLevel}
			/>
		</div>
	);
}
