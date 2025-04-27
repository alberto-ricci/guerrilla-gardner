export default function MainMenu({ onStart }) {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-green-100">
			<h1 className="text-5xl sm:text-6xl font-extrabold text-green-800 mb-8 drop-shadow-md animate-fade-in">
				Guerrilla Gardener 🌱
			</h1>

			<p className="text-base sm:text-lg text-green-700 mb-10 max-w-2xl leading-relaxed">
				Plant secret gardens across the corporate city, weaken MegaCorp
				Inc, and inspire a green revolution. But beware – too much
				attention will get you caught! 🌱🏢🚨
			</p>

			{/* Emoji Legend */}
			<div className="flex flex-col items-center mb-10 w-full max-w-md">
				<h2 className="text-green-800 text-2xl font-bold mb-4 underline underline-offset-4">
					Legend
				</h2>
				<div className="grid grid-cols-2 gap-4 text-green-700 text-base text-left">
					<div>
						⬜ <span className="font-semibold">Empty Lot</span> —
						Safe to plant 🌱
					</div>
					<div>
						🏢 <span className="font-semibold">Building</span> —
						High risk 🚨
					</div>
					<div>
						🪨 <span className="font-semibold">Abandoned Lot</span>{" "}
						— Lower risk 🌿
					</div>
					<div>
						🌱 <span className="font-semibold">Garden</span> — Your
						planted area 🌳
					</div>
				</div>
			</div>

			{/* Start Button */}
			<button
				onClick={onStart}
				className="px-10 py-4 bg-green-600 hover:bg-green-500 text-white text-2xl font-bold rounded-xl shadow-lg transition-all duration-300 mb-8 animate-pulse-slow"
			>
				🚀 Start Game
			</button>

			{/* Credits */}
			<p className="text-xs sm:text-sm text-green-600 italic">
				Made by mblede for the Fuck Capitalism Game Jam 2025
			</p>
		</div>
	);
}
