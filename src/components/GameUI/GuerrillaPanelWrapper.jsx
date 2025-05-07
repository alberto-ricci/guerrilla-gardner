// components/layout/GuerrillaPanelWrapper.jsx
import { GuerrillaPanel } from "@components";

export default function GuerrillaPanelWrapper({
	stealthLevel,
	momentum,
	resources,
	onSkipTurn,
	onSabotage,
	sabotageCount,
	surveillanceLevel,
}) {
	return (
		<div className="w-1/4">
			<GuerrillaPanel
				stealthLevel={stealthLevel}
				momentum={momentum}
				resources={resources}
				onSkipTurn={onSkipTurn}
				onSabotage={onSabotage}
				sabotageCount={sabotageCount}
				surveillanceLevel={surveillanceLevel}
			/>
		</div>
	);
}
