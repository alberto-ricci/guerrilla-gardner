// LegendScreen.jsx
// Displays basic game instructions, terrain descriptions, and unit descriptions before starting the game.

import { FadeWrapper } from "@components";

export default function LegendScreen({ onStart, onBack }) {
	// Terrain items (tiles)
	const terrainItems = [
		{
			icon: "⬜",
			label: "Empty Lot",
			description: "An open space, perfect for planting... maybe. 🌱",
		},
		{
			icon: "🏢",
			label: "MegaCorp's buildings",
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
	];

	// Unit items (entities)
	const unitItems = [
		{
			icon: "🚓",
			label: "Police Patrol",
			description: "Caught! Immediate game over! 🚔",
		},
		{
			icon: "🚁",
			label: "Drone",
			description:
				"Air surveillance — avoid their sight! 🚨 (Coming Soon)",
		},
		{
			icon: "✊",
			label: "Protest",
			description: "Crowd support — disrupts MegaCorp! ✊ (Coming Soon)",
		},
	];

	// Button styling
	const buttonStyle =
		"px-6 py-3 text-white text-lg font-bold rounded-xl shadow-lg transition-all duration-300";
	const backButtonStyle = `${buttonStyle} bg-green-400 hover:bg-green-300`;
	const continueButtonStyle = `${buttonStyle} bg-green-700 hover:bg-green-600`;

	return (
		<FadeWrapper>
			<div className="flex flex-col items-center justify-between min-h-screen w-full bg-gradient-to-b from-green-50 to-green-100 p-6 text-center">
				{/* Title Section */}
				<div className="flex flex-col items-center mt-10 mb-8">
					<h2 className="text-green-800 text-4xl font-bold mb-4 underline underline-offset-8 decoration-green-600">
						Know Your Ground 🌍
					</h2>
					<p className="text-green-700 text-md sm:text-lg mb-2 max-w-2xl">
						Before you rebel, know what each tile means. Every step
						could be your last!
					</p>
				</div>

				{/* Basic Game Rules */}
				<div className="flex flex-col items-start text-left w-full max-w-3xl mb-10 px-4">
					<h3 className="text-green-800 text-2xl font-bold mb-4 underline underline-offset-4 decoration-green-500">
						How to Play 📜
					</h3>
					<ul className="list-disc list-inside text-green-800 space-y-2 text-base sm:text-lg">
						<li>
							Move across the city grid, avoiding patrols and
							obstacles.
						</li>
						<li>
							Plant seeds on empty lots or abandoned grounds to
							create gardens. 🌱
						</li>
						<li>
							Stay hidden — getting caught by a patrol means
							instant game over! 🚓
						</li>
						<li>
							Every garden planted weakens MegaCorp's control. ✊
						</li>
						<li>
							Plan your route carefully — buildings and hazards
							block your movement. 🏢
						</li>
					</ul>
				</div>

				{/* Legend Sections */}
				<div className="flex flex-col w-full max-w-5xl gap-8 px-4 mb-10">
					{/* Terrain Types */}
					<div>
						<h3 className="text-green-800 text-2xl font-bold mb-4 underline underline-offset-4 decoration-green-500">
							Terrains 🌎
						</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
							{terrainItems.map((item, index) => (
								<div
									key={index}
									className="flex flex-row items-center gap-4 p-4 bg-green-200 rounded-lg shadow-md"
								>
									<div className="w-14 h-14 flex items-center justify-center text-4xl">
										{item.icon}
									</div>
									<div className="flex flex-col text-left">
										<div className="font-semibold text-xl text-green-800">
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

					{/* Unit Types */}
					<div>
						<h3 className="text-green-800 text-2xl font-bold mb-4 underline underline-offset-4 decoration-green-500">
							Units 🚓
						</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
							{unitItems.map((item, index) => (
								<div
									key={index}
									className="flex flex-row items-center gap-4 p-4 bg-green-200 rounded-lg shadow-md"
								>
									<div className="w-14 h-14 flex items-center justify-center text-4xl">
										{item.icon}
									</div>
									<div className="flex flex-col text-left">
										<div className="font-semibold text-xl text-green-800">
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
				</div>

				{/* Navigation Buttons */}
				<div className="flex flex-row items-center justify-center gap-6 mb-8 w-full max-w-md">
					<button
						onClick={onBack}
						className={`${backButtonStyle} w-40 h-14 transform hover:scale-105`}
					>
						⬅️ Back
					</button>

					<button
						onClick={onStart}
						className={`${continueButtonStyle} w-40 h-14 transform hover:scale-105`}
					>
						Continue ➡️
					</button>
				</div>
			</div>
		</FadeWrapper>
	);
}
