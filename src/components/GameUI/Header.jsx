import { CityControlMeter, SupportStatus } from "@components"; // Import necessary components

export default function Header({
	gardensCount,
	policeCount,
	megaCorpCells,
	protests,
	supportValue,
}) {
	return (
		<div className="w-full p-6 bg-green-200 text-black rounded-lg shadow-md">
			{/* Dynamic City Status */}
			<SupportStatus supportValue={supportValue} />
			{/* City Support Mood Bar */}
			<CityControlMeter supportValue={supportValue} />

			{/* 📊 Key Game Stats */}
			<div className="flex justify-center flex-wrap gap-6 text-lg sm:text-xl font-semibold mt-6 text-green-900">
				<div className="flex flex-col items-center">
					<span className="text-3xl mb-1">🌱</span>
					<span>Gardens: {gardensCount}</span>
				</div>

				<div className="flex flex-col items-center">
					<span className="text-3xl mb-1">✊</span>
					<span>Protests: {protests}</span>
				</div>

				<div className="flex flex-col items-center">
					<span className="text-3xl mb-1">🚓</span>
					<span>Police: {policeCount}</span>
				</div>

				<div className="flex flex-col items-center">
					<span className="text-3xl mb-1">🏢</span>
					<span>MegaCorp Cells: {megaCorpCells}</span>
				</div>
			</div>
		</div>
	);
}
