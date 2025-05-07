// components/ui/CityGrid.jsx
// 🗺️ Renders the full grid of city cells, with optional debug police reveal

import { CityCell } from "@components/city";

/**
 * Renders the main grid of the city map.
 * Each cell is rendered dynamically via CityCell, based on its type.
 *
 * @param {Array} grid - Array of cell objects from the game state
 * @param {Function} onCellClick - Handler for when a cell is clicked
 */
export default function CityGrid({ grid, onCellClick }) {
	const DEBUG_ALWAYS_REVEAL_POLICE = true; // Set false in production

	return (
		<div className="grid grid-cols-5 sm:grid-cols-10 gap-2 sm:gap-1 w-full max-w-2xl p-2">
			{grid.map((cell, index) => {
				if (!cell || typeof cell !== "object" || !("type" in cell)) {
					console.warn("⚠️ Skipping invalid cell in grid:", cell);
					return (
						<div
							key={`invalid-${index}`}
							className="aspect-square bg-red-300 text-white text-xl flex items-center justify-center rounded-lg border border-black"
						>
							❌
						</div>
					);
				}

				const { unit, revealed } = cell;
				const shouldReveal =
					revealed ||
					(DEBUG_ALWAYS_REVEAL_POLICE && unit === "police");

				return (
					<CityCell
						key={cell.id}
						cell={cell}
						onClick={onCellClick}
						shouldReveal={shouldReveal}
					/>
				);
			})}
		</div>
	);
}
