import QuoteBox from "./QuoteBox";

export default function MainMenu({ onStart }) {
	const legendItems = [
		{ icon: "⬜", label: "Empty Lot", description: "Safe to plant 🌱" },
		{ icon: "🏢", label: "Building", description: "High risk 🚨" },
		{ icon: "🪨", label: "Abandoned Lot", description: "Lower risk 🌿" },
		{ icon: "🌱", label: "Garden", description: "Your planted area 🌳" },
		{
			icon: "🚓",
			label: "Police Patrol",
			description: "Instant Game Over!",
		},
	];

	const startButtonStyle =
		"px-10 py-4 bg-green-600 hover:bg-green-500 text-white text-2xl font-bold rounded-xl shadow-lg transition-all duration-300 mb-10 animate-pulse-slow";

	return (
		<div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-green-100">
			<h1 className="text-5xl sm:text-6xl font-extrabold text-green-800 mb-8 drop-shadow-md animate-fade-in">
				Guerrilla Gardener 🌱
			</h1>

			<p className="text-base sm:text-lg text-green-700 mb-10 max-w-2xl leading-relaxed">
				Plant secret gardens across the corporate city, weaken MegaCorp
				Inc, and inspire a green revolution. But beware — corporate
				patrols and police surveillance are everywhere. Get spotted, and
				your green dreams will be crushed! 🌱🏢🚓
			</p>

			{/* Emoji Legend */}
			<div className="flex flex-col items-center mb-10 w-full max-w-md">
				<h2 className="text-green-800 text-2xl font-bold mb-4 underline underline-offset-4">
					Legend
				</h2>
				<div className="grid grid-cols-2 gap-4 text-green-700 text-base text-left">
					{legendItems.map((item, index) => (
						<div key={index}>
							{item.icon}{" "}
							<span className="font-semibold">{item.label}</span>{" "}
							— {item.description}
						</div>
					))}
				</div>
			</div>

			{/* Start Button */}
			<button
				onClick={onStart}
				className={startButtonStyle}
			>
				Start Game 🌱
			</button>

			{/* Inspirational Quote */}
			<QuoteBox />

			{/* Credits */}
			<p className="text-xs sm:text-sm text-green-600 italic mt-8">
				Made by mblede for the Fuck Capitalism Game Jam 2025
			</p>
		</div>
	);
}
