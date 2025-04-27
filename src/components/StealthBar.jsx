export default function StealthBar({ stealthLevel }) {
	const getStealthColor = (level) => {
		if (level > 70) return "bg-green-500"; // Safe
		if (level > 40) return "bg-yellow-400"; // Warning
		return "bg-red-500"; // Danger
	};

	const stealthTextStyle = "text-black font-semibold text-large";
	const barContainerStyle =
		"w-full bg-gray-300 rounded-lg h-4 overflow-hidden";
	const isCritical = stealthLevel <= 30;

	const barStyle = `h-4 ${getStealthColor(stealthLevel)} ${
		isCritical ? "animate-fast-pulse" : ""
	} transition-all duration-500 ease-out`;

	return (
		<div className="w-full">
			<div className="flex justify-between items-center mb-1">
				<span className={stealthTextStyle}>🕵️‍♂️ Stealth</span>
				<span className={stealthTextStyle}>{stealthLevel}%</span>
			</div>

			<div className={barContainerStyle}>
				<div
					className={barStyle}
					style={{
						width: `${stealthLevel}%`,
						transitionProperty: "width, background-color",
					}}
				></div>
			</div>
		</div>
	);
}
