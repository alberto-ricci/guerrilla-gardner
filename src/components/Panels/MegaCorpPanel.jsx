import React from "react";

const MegaCorpPanel = ({ surveillanceLevel, droneActivity, securityLevel }) => {
	return (
		<div className="w-full h-full p-6 bg-gray-800 text-white rounded-xl shadow-md flex flex-col gap-4">
			<h2 className="text-2xl font-bold">🏢 MegaCorp, Inc.</h2>

			{/* Surveillance */}
			<div>
				<h3 className="text-lg font-semibold">
					📹 Surveillance Level ({surveillanceLevel}%)
				</h3>
				<div className="h-4 w-full bg-white border border-black rounded-full overflow-hidden">
					<div
						className="h-full transition-all duration-500"
						style={{
							width: `${surveillanceLevel}%`,
							backgroundColor: `rgb(${
								surveillanceLevel * 2.55
							}, ${255 - surveillanceLevel * 2.55}, 0)`, // Red ← Green
						}}
					/>
				</div>
			</div>

			{/* Drone Activity */}
			<div>
				<h3 className="text-lg font-semibold">🚁 Drone Activity</h3>
				<div className="h-3 w-full bg-gray-300 rounded-full overflow-hidden">
					<div
						className="h-full bg-blue-500 transition-all duration-500"
						style={{ width: `${droneActivity}%` }}
					/>
				</div>
			</div>

			{/* Security Level */}
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
