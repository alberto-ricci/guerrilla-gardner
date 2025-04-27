import QuoteBox from "./QuoteBox";

export default function MainMenu({ onStart }) {
	const legendItems = [
		{
			icon: "⬜",
			label: "Empty Lot",
			description: "An open space, perfect for planting... maybe. 🌱",
		},
		{
			icon: "🏢",
			label: "Building",
			description: "Crowded and risky — tread carefully! 🚨",
		},
		{
			icon: "🪨",
			label: "Abandoned Lot",
			description: "Forgotten ground, hiding danger or opportunity. ✨",
		},
		{
			icon: "🌱",
			label: "Garden",
			description: "A thriving green patch of hope. 🌳",
		},
		{
			icon: "🚓",
			label: "Police Patrol",
			description: "Caught! Immediate game over! 🚔",
		},
	];

	const startButtonStyle =
		"px-8 py-3 bg-green-600 hover:bg-green-500 text-white text-xl font-bold rounded-lg shadow-md transition-all duration-300 animate-pulse-slow";

	return (
		<div className="h-screen w-full bg-green-100 flex flex-col items-center justify-between p-6 text-center">
			{/* Title and Start Button */}
			<div className="flex flex-col items-center mb-4">
				<h1 className="text-5xl sm:text-6xl font-extrabold text-green-800 mb-2 drop-shadow-md">
					Guerrilla Gardener 🌱
				</h1>
				<span className="text-sm sm:text-base text-green-600 mb-4">
					A stealth game where your only weapon is a seed.
				</span>

				<button
					onClick={onStart}
					className={startButtonStyle}
				>
					Start Game 🌱
				</button>
			</div>

			{/* Game Overview */}
			<div className="flex flex-col items-center mb-8 w-full max-w-4xl text-green-900">
				<h2 className="text-green-800 text-3xl font-bold mb-4 underline underline-offset-4">
					Game Overview
				</h2>
				<p className="text-base sm:text-lg font-medium leading-relaxed tracking-wide text-center px-4">
					<span className="text-green-800 font-bold text-2xl block mb-4">
						Defy the Concrete Jungle! 🌱
					</span>
					The city is a prison of steel and surveillance — MegaCorp
					Inc. owns it all. But you? You're a shadow, a saboteur,
					turning sterile streets into battlegrounds of life and
					rebellion.
					<br />
					<br />
					Every seed you plant is a middle finger to the system. Every
					bloom cracks the pavement with defiance. Beware — their
					enforcers hunt down green like it’s a crime. 🚓🏢
					<br />
					<br />
					<span className="italic text-green-700">
						This isn’t gardening. This is Revolution. ✊🔥
					</span>
				</p>
			</div>

			{/* Legend */}
			<div className="flex flex-col items-center mb-6 w-full max-w-5xl">
				<h2 className="text-green-800 text-3xl font-bold mb-6 underline underline-offset-4">
					Legend
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full px-4">
					{legendItems.map((item, index) => (
						<div
							key={index}
							className="flex flex-row items-center gap-4 text-green-800 justify-center"
						>
							<div className="text-4xl">{item.icon}</div>
							<div className="flex flex-col text-left">
								<div className="font-semibold text-lg">
									{item.label}
								</div>
								<div className="text-sm text-green-700">
									{item.description}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Quote Section */}
			<div className="flex flex-col items-center">
				<QuoteBox />
				<p className="text-xs sm:text-sm text-green-600 italic mt-4">
					Made by mblede for the Fuck Capitalism Game Jam 2025
				</p>
			</div>
		</div>
	);
}
