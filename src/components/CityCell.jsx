export default function CityCell({ cell, onClick }) {
	const getCellIcon = (terrain, unit) => {
		// Priority: Units over terrain
		if (unit === "police") return "🚓";
		if (unit === "police_caught") return "🚓";

		const icons = {
			empty: "⬜",
			building: "🏢",
			abandoned: "🪨",
			garden: "🌱",
		};
		return icons[terrain] || "❓";
	};

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
				text-xl sm:text-2xl
				transition-all duration-300 ease-out
				${getCellStyles(cell.terrain, cell.unit, isDisabled)}
			`}
		>
			{getCellIcon(cell.terrain, cell.unit)}
		</button>
	);
}
