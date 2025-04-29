import React from "react";

const GuerrillaPanel = ({ stealthLevel, resources, momentum }) => {
	return (
		<div className="w-full h-full p-6 bg-green-200 rounded-xl shadow-md flex flex-col gap-4">
			<h2 className="text-2xl font-bold text-green-900">
				✊🏻 Guerrilla Gardener
			</h2>

			{/* Stealth Meter */}
			<div>
				<h3 className="text-lg font-semibold text-black">
					🕶️ Stealth Level ({stealthLevel}%)
				</h3>
				<div className="h-4 w-full bg-white border border-black rounded-full overflow-hidden">
					<div
						className="h-full transition-all duration-500"
						style={{
							width: `${stealthLevel}%`,
							backgroundColor: `rgb(${
								255 - stealthLevel * 2.55
							}, ${stealthLevel * 2.55}, 0)`, // Green ➝ Red
						}}
					/>
				</div>
			</div>

			{/* Resources */}
			<div>
				<h3 className="text-lg font-semibold text-black">
					🛠️ Resources
				</h3>
				<p className="text-black">{resources} Seeds/Tools</p>
			</div>

			{/* Momentum */}
			<div>
				<h3 className="text-lg font-semibold text-black">
					⚡ Momentum
				</h3>
				<div className="h-3 w-full bg-gray-300 rounded-full overflow-hidden">
					<div
						className="h-full bg-green-600 transition-all duration-500"
						style={{ width: `${momentum}%` }}
					/>
				</div>
			</div>
		</div>
	);
};

export default GuerrillaPanel;
