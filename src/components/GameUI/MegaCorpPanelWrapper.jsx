// components/layout/MegaCorpPanelWrapper.jsx
import { MegaCorpPanel } from "@components";

export default function MegaCorpPanelWrapper({
	surveillanceLevel,
	droneActivity,
	securityLevel,
}) {
	return (
		<div className="w-1/4">
			<MegaCorpPanel
				surveillanceLevel={surveillanceLevel}
				droneActivity={droneActivity}
				securityLevel={securityLevel}
			/>
		</div>
	);
}
