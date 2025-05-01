// components/layout/HeaderStatsSection.jsx
// 📊 Displays core game stats: gardens, protests, police, MegaCorp cells

export default function HeaderStatsSection({
	gardensCount,
	protests,
	policeCount,
	megaCorpCells,
}) {
	return (
		<div className="flex justify-center flex-wrap gap-6 text-lg sm:text-xl font-semibold mt-6 text-green-900">
			<StatBlock
				icon="🌱"
				label="Gardens"
				value={gardensCount}
			/>
			<StatBlock
				icon="✊"
				label="Protests"
				value={protests}
			/>
			<StatBlock
				icon="🚓"
				label="Police"
				value={policeCount}
			/>
			<StatBlock
				icon="🏢"
				label="MegaCorp, Inc Cells"
				value={megaCorpCells}
			/>
		</div>
	);
}

function StatBlock({ icon, label, value }) {
	return (
		<div className="flex flex-col items-center">
			<span className="text-3xl mb-1">{icon}</span>
			<span>
				{label}: {value}
			</span>
		</div>
	);
}
