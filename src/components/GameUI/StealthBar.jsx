// StealthBar.jsx
// Displays a visual stealth meter — changes color based on stealth percentage and pulses at critical levels.

export default function StealthBar({ stealthLevel }) {
	// Determine the bar color based on the stealth level
	const getStealthColor = (level) => {
		if (level > 70) return "bg-green-500"; // Safe
		if (level > 40) return "bg-yellow-400"; // Warning
		return "bg-red-500"; // Critical danger
	};

	// Tailwind CSS classnames
	const stealthTextStyle = "text-black font-semibold text-large";
	const barContainerStyle =
		"w-full bg-gray-300 rounded-lg h-4 overflow-hidden";

	const isCritical = stealthLevel <= 30;

	const barStyle = `h-4 ${getStealthColor(stealthLevel)} ${
		isCritical ? "animate-fast-pulse" : ""
	} transition-all duration-500 ease-out`;

	return (
		<div className="w-full">
			{/* Label Row: Stealth title + numeric value */}
			<div className="flex justify-between items-center mb-1">
				<span className={stealthTextStyle}>🕵️‍♂️ Stealth</span>
				<span className={stealthTextStyle}>{stealthLevel}%</span>
			</div>

			{/* Stealth Meter */}
			<div className={barContainerStyle}>
				<div
					className={barStyle}
					style={{
						width: `${stealthLevel}%`,
						transitionProperty: "width, background-color",
					}}
				/>
			</div>
		</div>
	);
}
