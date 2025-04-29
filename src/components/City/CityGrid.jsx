import { CityCell } from "@components/city";

export default function CityGrid({ grid, onCellClick }) {
	const DEBUG_ALWAYS_REVEAL_POLICE = true; // or false later

	return (
		<div className="grid grid-cols-5 sm:grid-cols-10 gap-2 sm:gap-1 w-full max-w-2xl p-2">
			{grid.map((cell) => {
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
