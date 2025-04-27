export default function StealthBar({ stealthLevel }) {
	const getStealthColor = (level) => {
		if (level > 70) return "bg-green-500"; // Safe
		if (level > 40) return "bg-yellow-400"; // Warning
		return "bg-red-500"; // Danger
	};

	const isCritical = stealthLevel <= 30;

	return (
		<div className="w-full">
			<div className="flex justify-between items-center mb-1">
				<span className="text-yellow-700 font-semibold text-xs sm:text-sm">
					🕵️‍♂️ Stealth
				</span>
				<span className="text-yellow-700 font-semibold text-xs sm:text-sm">
					{stealthLevel}%
				</span>
			</div>

			<div className="w-full bg-gray-300 rounded-lg h-4 overflow-hidden">
				<div
					className={`h-4 ${getStealthColor(stealthLevel)} ${
						isCritical ? "animate-fast-pulse" : ""
					} transition-all duration-500 ease-out`}
					style={{
						width: `${stealthLevel}%`,
						transitionProperty: "width, background-color",
					}}
				></div>
			</div>
		</div>
	);
}
