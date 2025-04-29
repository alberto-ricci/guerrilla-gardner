// VictoryScreen.jsx
// Displays a victory screen when the player successfully defeats MegaCorp.

export default function VictoryScreen({ onRestart, onBackToMenu }) {
	// Victory title and description
	const titleText = "🌱 You Liberated the City! 🌱";
	const descriptionText =
		"MegaCorp, Inc has fallen thanks to your gardens of hope!";

	// TailwindCSS button styles
	const buttonStyles = {
		restart:
			"w-full px-6 py-3 bg-green-500 hover:bg-green-400 rounded-lg text-lg text-white font-semibold transition-all duration-300",
		menu: "w-full px-6 py-3 bg-green-700 hover:bg-green-600 rounded-lg text-lg text-white font-semibold transition-all duration-300",
	};

	return (
		<div className="fixed inset-0 bg-green-900 bg-opacity-90 flex flex-col items-center justify-center text-center p-6 z-50">
			{/* Victory Title */}
			<h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-md">
				{titleText}
			</h2>

			{/* Victory Description */}
			<p className="text-lg sm:text-xl text-green-100 mb-10 max-w-xl leading-relaxed">
				{descriptionText}
			</p>

			{/* Action Buttons */}
			<div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-md">
				<button
					onClick={onRestart}
					className={buttonStyles.restart}
				>
					🔄 Restart Game
				</button>
				<button
					onClick={onBackToMenu}
					className={buttonStyles.menu}
				>
					🏠 Main Menu
				</button>
			</div>
		</div>
	);
}
