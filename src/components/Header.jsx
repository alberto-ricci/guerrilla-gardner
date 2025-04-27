import React from "react";
import CityControlMeter from "./CityControlMeter";

export default function Header({
	gardensCount,
	policeCount,
	megaCorpControl,
	megaCorpCells,
	protests,
}) {
	return (
		<div className="w-full p-6 bg-green-200 text-black rounded-lg shadow-md ">
			{/* City Statistics */}
			<div className="flex justify-center flex-wrap gap-8 text-xl font-semibold mb-4">
				<div>🌱 Gardens: {gardensCount}</div>
				<div>✊ Protests: {protests}</div>
				<div>🚓 Police Cars: {policeCount}</div>
				<div>🏢 Cells Controlled: {megaCorpCells}</div>
			</div>

			{/* City Control Meter */}
			<CityControlMeter megaCorpControl={megaCorpControl} />
		</div>
	);
}
