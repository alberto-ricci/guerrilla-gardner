export default function VictoryScreen({ onRestart, onBackToMenu }) {
	return (
		<div className="fixed inset-0 bg-green-900 bg-opacity-90 flex flex-col items-center justify-center text-center p-6 z-50">
			<h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-md">
				🌱 You Liberated the City! 🌱
			</h2>

			<p className="text-lg sm:text-xl text-green-100 mb-10 max-w-xl leading-relaxed">
				MegaCorp, Inc has fallen thanks to your gardens of hope!
			</p>

			<div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-md">
				<button
					onClick={onRestart}
					className="w-full px-6 py-3 bg-green-500 hover:bg-green-400 rounded-lg text-lg font-semibold transition-all duration-300"
				>
					🔄 Restart Game
				</button>
				<button
					onClick={onBackToMenu}
					className="w-full px-6 py-3 bg-green-700 hover:bg-green-600 rounded-lg text-lg font-semibold transition-all duration-300"
				>
					🏠 Main Menu
				</button>
			</div>
		</div>
	);
}
