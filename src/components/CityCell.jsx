export default function CityCell({ cell, onClick }) {
	const getCellIcon = (type) => {
		const icons = {
			empty: "⬜",
			building: "🏢",
			abandoned: "🪨",
			garden: "🌱",
			police: "",
			police_caught: "🚓",
		};
		return icons[type] || "❓";
	};

	const getCellStyles = (type, isDisabled) => {
		if (type === "police_caught") return "bg-red-600 text-white";
		if (isDisabled) return "bg-gray-300 text-gray-500 cursor-not-allowed";
		return "bg-white hover:bg-green-200 shadow";
	};

	const isDisabled = cell.type === "building" || cell.type === "garden";

	return (
		<button
			onClick={() => onClick(cell.id)}
			disabled={isDisabled}
			className={`aspect-square flex items-center justify-center rounded-lg font-bold
				text-xl sm:text-2xl
				transition-all duration-300 ease-out
				${getCellStyles(cell.type, isDisabled)}
			`}
		>
			{getCellIcon(cell.type)}
		</button>
	);
}
