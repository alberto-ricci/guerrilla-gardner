import React from "react";

const Header = ({ gardensCount, policeCount, megaCorpControl }) => {
	// Dynamically calculate the City Control Meter value from -1 to 1
	const cityControlValue = (megaCorpControl - 50) / 50; // Normalize to -1, 0, 1 scale

	// Style for the control meter
	const controlBarStyle = {
		width: "100%",
		height: "30px",
		background: "lightgray",
		borderRadius: "20px",
		overflow: "hidden",
		position: "relative",
	};
	const activeBarStyle = {
		position: "absolute",
		top: 0,
		left: `${(cityControlValue + 1) * 50}%`,
		width: "100%",
		height: "100%",
		background:
			cityControlValue < 0
				? "green"
				: cityControlValue > 0
				? "red"
				: "yellow",
	};

	return (
		<div className="w-full p-4 bg-green-200 text-black">
			<div className="flex justify-between items-center">
				<div className="text-xl font-bold">
					🌱 Gardens: {gardensCount} | 🚓 Police: {policeCount}
				</div>
				<div className="text-xl font-bold">Guerrilla Gardener</div>
			</div>

			{/* City Control Meter */}
			<div className="mt-4">
				<div style={controlBarStyle}>
					<div style={activeBarStyle}></div>
				</div>
				<div className="flex justify-between mt-2">
					<div>Guerrilla</div>
					<div>Neutral</div>
					<div>MegaCorp, Inc.</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
