// CityGrid.jsx
// Displays the entire city grid — each cell shows terrain, units, and click interaction.

export default function CityGrid({ grid, onCellClick }) {
	const DEBUG_ALWAYS_REVEAL_POLICE = true;

	// Returns Tailwind classes based on the cell's terrain, unit, and visibility
	const getCellStyle = (terrain, unit, revealed, justSpawned) => {
		const shouldReveal =
			revealed || (DEBUG_ALWAYS_REVEAL_POLICE && unit === "police");

		if (unit === "police") {
			if (!shouldReveal && justSpawned)
				return "bg-red-300 text-red-800 border-4 border-red-600 animate-shake";
			if (!shouldReveal) return "bg-gray-100 text-gray-700";
			return "bg-red-500 text-white"; // Visible police
		}

		const styles = {
			empty: "bg-gray-100 text-gray-700",
			building: "bg-gray-700 text-white",
			abandoned: "bg-yellow-300 text-yellow-800",
			garden: "bg-green-500 text-green-900",
		};

		return styles[terrain] || "bg-gray-200"; // Fallback
	};

	// Returns emoji/icon based on the terrain and unit
	const getCellEmoji = (terrain, unit, revealed) => {
		const shouldReveal =
			revealed || (DEBUG_ALWAYS_REVEAL_POLICE && unit === "police");

		if (unit === "police" && !shouldReveal) return "⬜"; // Hide police if not revealed

		const icons = {
			empty: "⬜",
			building: "🏢",
			abandoned: "🪨",
			garden: "🌱",
			police: "🚓",
		};

		return unit ? icons[unit] : icons[terrain] || "❓";
	};

	return (
		<div className="grid grid-cols-5 sm:grid-cols-10 gap-2 sm:gap-1 w-full max-w-2xl p-2">
			{grid.map((cell) => (
				<div
					key={cell.id}
					onClick={() => onCellClick(cell.id)}
					className={`flex items-center justify-center aspect-square rounded border-2 
			  ${getCellStyle(cell.terrain, cell.unit, cell.revealed, cell.justSpawned)}
			  text-xl sm:text-2xl font-bold transition-transform duration-300 ease-out
			  cursor-pointer hover:scale-105 hover:brightness-110`}
				>
					{getCellEmoji(cell.terrain, cell.unit, cell.revealed)}
				</div>
			))}
		</div>
	);
}
