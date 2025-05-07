import { FadeWrapper } from "@components";

export default function LegendScreen({ onStart, onBack }) {
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
			description:
				"Rises with momentum. Blocks police and boosts nearby planting.",
		},
	];

	const actionItems = [
		{
			icon: "🌙",
			label: "Lay Low",
			description:
				"Recover +5% stealth (available only above 50% stealth).",
		},
		{
			icon: "⚠️",
			label: "Sabotage",
			description:
				"Reduce surveillance by 5% (available only below 50% surveillance).",
		},
		{
			icon: "🐾",
			label: "Stay Hidden",
			description: "Skip turn without effects (no limit).",
		},
	];

	const buttonStyle =
		"px-6 py-3 text-white text-lg font-bold rounded-xl shadow-lg transition-all duration-300";
	const backButtonStyle = `${buttonStyle} bg-green-400 hover:bg-green-300`;
	const continueButtonStyle = `${buttonStyle} bg-green-700 hover:bg-green-600`;

	return (
		<FadeWrapper>
			<div className="flex flex-col items-center min-h-screen w-full bg-gradient-to-b from-green-50 to-green-100 p-6 text-center">
				{/* Title */}
				<div className="flex flex-col items-center mt-5 mb-8">
					<h2 className="text-green-800 text-4xl font-bold mb-4 underline underline-offset-8 decoration-green-600">
						Know Your Ground 🌍
					</h2>
					<p className="text-green-700 text-md sm:text-lg max-w-2xl">
						Before you rebel, know what each tile means. Every step
						could be your last!
					</p>
				</div>

				{/* How to Play */}
				<div className="flex flex-col items-start text-left w-full max-w-6xl mb-10 px-4">
					<h3 className="text-green-800 text-2xl font-bold mb-4 underline underline-offset-4 decoration-green-500 flex items-center gap-2">
						📜 How to Play
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
							Random event tiles may trigger good, bad, or neutral
							effects — they can impact your stealth or the city's
							surveillance level. 🎲
						</li>
						<li>
							Every garden planted increases your momentum. Reach
							milestones to trigger protests! 🔥
						</li>
						<li>
							Each garden costs stealth: -5% normally, -10% near
							MegaCorp. Protests keep you safe — plant free
							nearby. 🕶️
						</li>
						<li>
							Getting caught by a patrol means instant game over!
							🚓
						</li>
						<li>Protests block police movement nearby. ✊</li>
						<li>
							You can take a break from planting by using one of
							the actions below — each has a different effect, so
							choose wisely. 🌿
						</li>
						<li>
							Plan your route carefully — buildings and hazards
							block your movement. 🏢
						</li>
					</ul>
				</div>

				<hr className="my-8 border-t border-green-300 w-full max-w-6xl" />

				{/* Core Game Elements */}
				<div className="w-full max-w-6xl px-4 mb-8">
					<h3 className="text-green-800 text-2xl font-bold mb-6 underline underline-offset-4 decoration-green-500 flex items-center gap-2">
						🎮 What You'll Encounter
					</h3>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 place-items-stretch">
						{/* Terrains */}
						<div className="flex flex-col gap-4  ">
							<h4 className="text-green-800 font-bold text-lg flex items-center gap-2">
								🌿 Terrains
							</h4>
							{terrainItems.map((item, index) => (
								<div
									key={index}
									className="flex items-center gap-4 bg-green-200 rounded-md p-3 shadow-sm min-h-[72px]"
								>
									<div className="w-10 h-10 flex items-center justify-center text-2xl">
										{item.icon}
									</div>
									<div className="flex flex-col text-left">
										<div className="font-semibold text-green-800">
											{item.label}
										</div>
										<div className="text-sm text-green-700">
											{item.description}
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Units */}
						<div className="flex flex-col gap-4">
							<h4 className="text-green-800 font-bold text-lg flex items-center gap-2">
								🚓 Units
							</h4>
							{unitItems.map((item, index) => (
								<div
									key={index}
									className="flex items-center gap-4 bg-green-200 rounded-md p-3 shadow-sm min-h-[72px]"
								>
									<div className="w-10 h-10 flex items-center justify-center text-2xl">
										{item.icon}
									</div>
									<div className="flex flex-col text-left">
										<div className="font-semibold text-green-800">
											{item.label}
										</div>
										<div className="text-sm text-green-700">
											{item.description}
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Actions */}
						<div className="flex flex-col gap-4">
							<h4 className="text-green-800 font-bold text-lg flex items-center gap-2">
								🛠 Actions
							</h4>
							{actionItems.map((item, index) => (
								<div
									key={index}
									className="flex items-center gap-4 bg-green-200 rounded-md p-3 shadow-sm min-h-[72px]"
								>
									<div className="w-10 h-10 flex items-center justify-center text-2xl">
										{item.icon}
									</div>
									<div className="flex flex-col text-left">
										<div className="font-semibold text-green-800">
											{item.label}
										</div>
										<div className="text-sm text-green-700">
											{item.description}
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Placeholder */}
						<div className="flex flex-col gap-4 opacity-60">
							<h4 className="text-green-700 font-bold text-lg italic flex items-center gap-2">
								🧩 Coming Soon
							</h4>
							<div className="flex items-center gap-4 bg-green-200 rounded-md p-3 shadow-sm min-h-[72px]">
								<div className="w-10 h-10 flex items-center justify-center text-2xl">
									🚧
								</div>
								<div className="flex flex-col text-left">
									<div className="font-semibold text-green-700 italic">
										Future Feature
									</div>
									<div className="text-sm text-green-600 italic">
										Another guerrilla action is under
										development.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Navigation Buttons */}
				<div className="flex justify-center gap-6 mt-6 mb-10 w-full max-w-md">
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
