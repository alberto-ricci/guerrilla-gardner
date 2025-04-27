import React from "react";
import StealthBar from "./StealthBar";

const GuerrillaPanel = ({ stealthLevel, resources, momentum }) => {
	return (
		<div className="w-full h-full p-6 bg-green-200 rounded-xl shadow-md flex flex-col gap-4">
			<h2 className="text-2xl font-bold text-green-900">
				✊🏻 Guerrilla Gardener
			</h2>

			<div>
				<StealthBar stealthLevel={stealthLevel} />
			</div>

			<div>
				<h3 className="text-lg font-semibold text-green-800">
					🛠️ Resources
				</h3>
				<p className="text-green-700">{resources} Seeds/Tools</p>
			</div>

			<div>
				<h3 className="text-lg font-semibold text-green-800">
					⚡ Momentum
				</h3>
				<div className="h-3 w-full bg-gray-300 rounded-full overflow-hidden">
					<div
						className="h-full bg-green-600"
						style={{ width: `${momentum}%` }}
					/>
				</div>
			</div>
		</div>
	);
};

export default GuerrillaPanel;
