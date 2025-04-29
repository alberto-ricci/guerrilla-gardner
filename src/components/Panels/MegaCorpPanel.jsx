// MegaCorpPanel.jsx
// Displays MegaCorp's surveillance, drone activity, and security levels.

import React from "react";

const MegaCorpPanel = ({ surveillanceLevel, droneActivity, securityLevel }) => {
	return (
		<div className="w-full h-full p-6 bg-gray-800 text-white rounded-xl shadow-md flex flex-col gap-4">
			{/* Panel Title */}
			<h2 className="text-2xl font-bold">🏢 MegaCorp, Inc.</h2>

			{/* Surveillance Level Meter */}
			<div>
				<h3 className="text-lg font-semibold">📹 Surveillance Level</h3>
				<div className="h-3 w-full bg-gray-300 rounded-full overflow-hidden">
					<div
						className="h-full bg-red-500 transition-all duration-500"
						style={{ width: `${surveillanceLevel}%` }}
					/>
				</div>
			</div>

			{/* Drone Activity Meter */}
			<div>
				<h3 className="text-lg font-semibold">🚁 Drone Activity</h3>
				<div className="h-3 w-full bg-gray-300 rounded-full overflow-hidden">
					<div
						className="h-full bg-blue-500 transition-all duration-500"
						style={{ width: `${droneActivity}%` }}
					/>
				</div>
			</div>

			{/* Security Level Meter */}
			<div>
				<h3 className="text-lg font-semibold">🔒 Security Level</h3>
				<div className="h-3 w-full bg-gray-300 rounded-full overflow-hidden">
					<div
						className="h-full bg-yellow-500 transition-all duration-500"
						style={{ width: `${securityLevel}%` }}
					/>
				</div>
			</div>
		</div>
	);
};

export default MegaCorpPanel;
