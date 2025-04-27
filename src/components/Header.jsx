import StealthBar from "./StealthBar";

export default function Header({
	playerScore,
	megaCorpControl,
	stealthLevel,
	policeCount,
}) {
	const stats = [
		{ label: "🌱 Gardens", value: playerScore, color: "text-green-800" },
		{
			label: "🏢 MegaCorp Control",
			value: `${megaCorpControl}%`,
			color: "text-red-700",
		},
		{ label: "🚓 Police Cars", value: policeCount, color: "text-blue-700" },
	];

	return (
		<div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md mb-8 flex flex-col gap-6 animate-fade-in">
			{/* Score Section */}
			<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
				{stats.map((stat, index) => (
					<div
						key={index}
						className={`${stat.color} text-lg sm:text-xl font-extrabold`}
					>
						{stat.label}: {stat.value}
					</div>
				))}
			</div>

			{/* Stealth Meter */}
			<StealthBar stealthLevel={stealthLevel} />
		</div>
	);
}
