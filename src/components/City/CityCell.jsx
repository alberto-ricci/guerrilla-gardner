// CityCell.jsx
// A single cell inside the city grid — handles display and click interaction.

export default function CityCell({ cell, onClick }) {
	// Returns the emoji/icon based on cell's terrain or unit
	const getCellIcon = (terrain, unit) => {
		if (unit === "police" || unit === "police_caught") return "🚓";

		const icons = {
			empty: "⬜",
			building: "🏢",
			abandoned: "🪨",
			garden: "🌱",
		};

		return icons[terrain] || "❓"; // Fallback for unknown terrain
	};

	// Returns Tailwind CSS classes based on cell state
	const getCellStyles = (terrain, unit, isDisabled) => {
		if (unit === "police_caught") return "bg-red-600 text-white";
		if (isDisabled) return "bg-gray-300 text-gray-500 cursor-not-allowed";
		return "bg-white hover:bg-green-200 shadow";
	};

	const isDisabled = cell.terrain === "building" || cell.terrain === "garden";

	return (
		<button
			onClick={() => onClick(cell.id)}
			disabled={isDisabled}
			className={`aspect-square flex items-center justify-center rounded-lg font-bold
		  text-xl sm:text-2xl transition-all duration-300 ease-out
		  ${getCellStyles(cell.terrain, cell.unit, isDisabled)}
		`}
		>
			{getCellIcon(cell.terrain, cell.unit)}
		</button>
	);
}
