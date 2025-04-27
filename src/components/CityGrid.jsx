export default function CityGrid({ grid, onCellClick }) {
	const DEBUG_ALWAYS_REVEAL_POLICE = true; // 👈 Add this for testing!

	const getCellStyle = (type, revealed, justSpawned) => {
		// 🔥 Override visibility if debugging
		const shouldReveal =
			revealed || (DEBUG_ALWAYS_REVEAL_POLICE && type === "police");

		if (type === "police") {
			if (!shouldReveal && justSpawned)
				return "bg-red-300 text-red-800 border-4 border-red-600 animate-shake";
			if (!shouldReveal) return "bg-gray-100 text-gray-700";
			return "bg-red-500 text-white"; // police visible
		}

		const styles = {
			empty: "bg-gray-100 text-gray-700",
			building: "bg-gray-700 text-white",
			abandoned: "bg-yellow-300 text-yellow-800",
			garden: "bg-green-500 text-green-900",
		};

		return styles[type] || "bg-gray-200";
	};

	const getCellEmoji = (type, revealed) => {
		const shouldReveal =
			revealed || (DEBUG_ALWAYS_REVEAL_POLICE && type === "police");

		if (type === "police" && !shouldReveal) return "⬜";

		const icons = {
			empty: "⬜",
			building: "🏢",
			abandoned: "🪨",
			garden: "🌱",
			police: "🚓",
		};

		return icons[type] || "❓";
	};

	return (
		<div className="grid grid-cols-5 sm:grid-cols-10 gap-2 sm:gap-1 w-full max-w-2xl p-2">
			{grid.map((cell) => (
				<div
					key={cell.id}
					onClick={() => onCellClick(cell.id)}
					className={`flex items-center justify-center aspect-square rounded border-2 
			  ${getCellStyle(cell.type, cell.revealed, cell.justSpawned)}
			  text-xl sm:text-2xl font-bold transition-transform duration-300 ease-out
			  cursor-pointer hover:scale-105 hover:brightness-110`}
				>
					{getCellEmoji(cell.type, cell.revealed)}
				</div>
			))}
		</div>
	);
}
