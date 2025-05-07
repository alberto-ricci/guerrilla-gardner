import React from "react";
import { StealthBar } from "@components/panels";
import GuerrillaPanelHeader from "./GuerrillaPanelHeader";
import GuerrillaResources from "./GuerrillaResources";
import GuerrillaMomentumBar from "./GuerrillaMomentumBar";
import GuerrillaActions from "./GuerrillaActions";

export default function GuerrillaPanel({
	stealthLevel,
	resources,
	momentum,
	onSkipTurn,
	onSabotage,
	surveillanceLevel,
}) {
	return (
		<div className="w-full h-full p-6 bg-green-200 rounded-xl shadow-md flex flex-col gap-4">
			<GuerrillaPanelHeader />
			<StealthBar value={stealthLevel} />
			<GuerrillaResources value={resources} />
			<GuerrillaMomentumBar value={momentum} />
			<GuerrillaActions
				stealthLevel={stealthLevel}
				surveillanceLevel={surveillanceLevel}
				onSkipTurn={onSkipTurn}
				onSabotage={onSabotage}
			/>
		</div>
	);
}
