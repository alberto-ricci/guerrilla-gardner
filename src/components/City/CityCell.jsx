export default function CityCell({ cell, onClick }) {
	const getCellIcon = (terrain, unit) => {
		// Always show police for testing
		if (unit === "police") return "🚓";

		const icons = {
			empty: "⬜",
			garden: "🌱",
		};

		return icons[terrain] || "❓";
	};

	const getCellStyles = (terrain, unit) => {
		if (unit === "police") return "bg-red-500 text-white"; // Red background for police
		if (terrain === "garden") return "bg-green-400 text-green-900"; // Green background for gardens
		return "bg-white hover:bg-green-100"; // Default empty
	};

	return (
		<button
			onClick={() => onClick(cell.id)}
			disabled={cell.terrain === "garden"}
			className={`aspect-square flex items-center justify-center rounded-lg font-bold
		  text-xl sm:text-2xl transition-all duration-300 ease-out
		  ${getCellStyles(cell.terrain, cell.unit)}
		`}
		>
			{getCellIcon(cell.terrain, cell.unit)}
		</button>
	);
}
