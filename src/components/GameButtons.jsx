export default function GameButtons({ onRestart, onBackToMenu }) {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-6 mt-8 w-full max-w-md">
			<button
				onClick={onRestart}
				className="w-40 h-14 bg-green-400 hover:bg-green-300 active:scale-95 hover:scale-105 text-white text-xl font-bold rounded-2xl shadow-lg transition-all duration-300"
			>
				🔄 Restart
			</button>

			<button
				onClick={onBackToMenu}
				className="w-40 h-14 bg-green-700 hover:bg-green-600 active:scale-95 hover:scale-105 text-white text-xl font-bold rounded-2xl shadow-lg transition-all duration-300"
			>
				🏠 Main Menu
			</button>
		</div>
	);
}
