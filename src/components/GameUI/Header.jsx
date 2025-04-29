// Header.jsx
// Displays the City Support meter and key game statistics during gameplay.

import { CityControlMeter } from "@components"; // Updated import to use @components alias

export default function Header({
	gardensCount,
	policeCount,
	megaCorpCells,
	protests,
	supportValue,
}) {
	return (
		<div className="w-full p-6 bg-green-200 text-black rounded-lg shadow-md">
			{/* City Support Progress Bar */}
			<CityControlMeter supportValue={supportValue} />

			{/* Game Statistics */}
			<div className="flex justify-center flex-wrap gap-8 text-xl font-semibold mt-6">
				<div>🌱 Gardens: {gardensCount}</div>
				<div>✊ Protests: {protests}</div>
				<div>🚓 Police Cars: {policeCount}</div>
				<div>🏢 Cells Controlled: {megaCorpCells}</div>
			</div>
		</div>
	);
}
