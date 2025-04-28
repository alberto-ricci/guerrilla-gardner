import React from "react";
import CityControlMeter from "./CityControlMeter";

export default function Header({
	gardensCount,
	policeCount,
	megaCorpCells,
	protests,
	supportValue,
}) {
	return (
		<div className="w-full p-6 bg-green-200 text-black rounded-lg shadow-md">
			{/* City Support Bar */}
			<CityControlMeter supportValue={supportValue} />{" "}
			{/* City Statistics */}
			<div className="flex justify-center flex-wrap gap-8 text-xl font-semibold mt-6">
				<div>🌱 Gardens: {gardensCount}</div>
				<div>✊ Protests: {protests}</div>
				<div>🚓 Police Cars: {policeCount}</div>
				<div>🏢 Cells Controlled: {megaCorpCells}</div>
			</div>
		</div>
	);
}
