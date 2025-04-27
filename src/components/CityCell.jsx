export default function CityCell({ cell, onClick }) {
	const icons = {
		empty: "⬜",
		building: "🏢",
		abandoned: "🪨", // Fixed from 🛞 to 🪨 (abandoned lot stone emoji)
		garden: "🌳",
	};

	const isDisabled = cell.type === "building" || cell.type === "garden";

	return (
		<button
			onClick={() => onClick(cell.id)}
			disabled={isDisabled}
			className={`aspect-square flex items-center justify-center rounded-lg font-bold 
		  text-xl sm:text-2xl 
		  transition-all duration-300 ease-out 
		  ${
				isDisabled
					? "bg-gray-300 text-gray-500 cursor-not-allowed"
					: "bg-white hover:bg-green-200 shadow"
			}
		`}
		>
			{icons[cell.type] || "❓"}
		</button>
	);
}
