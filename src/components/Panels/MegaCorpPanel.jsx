import React from "react";
import { SurveillanceBar } from "@components/panels";
import MegaCorpPanelHeader from "./MegaCorpPanelHeader";
import DroneActivityBar from "./DroneActivityBar";
import SecurityLevelBar from "./SecurityLevelBar";

export default function MegaCorpPanel({
	surveillanceLevel,
	droneActivity,
	securityLevel,
}) {
	return (
		<div className="w-full h-full p-6 bg-gray-800 text-white rounded-xl shadow-md flex flex-col gap-4">
			<MegaCorpPanelHeader />
			<SurveillanceBar value={surveillanceLevel} />
			<DroneActivityBar value={droneActivity} />
			<SecurityLevelBar value={securityLevel} />
		</div>
	);
}
