// LoseScreen.jsx
export default function LoseScreen({
	onRestart,
	onBackToMenu,
	cause = "megacorp",
}) {
	const isPolice = cause === "police";

	const loseTitle = isPolice
		? "🚓 Busted by the Police! 🚓"
		: "🏢 MegaCorp Wins... 🏢";

	const loseMessage = isPolice
		? "The authorities caught you planting a secret garden! The city remains under MegaCorp's iron grip..."
		: "MegaCorp, Inc has tightened its control. Without enough gardens, hope withers away...";

	const buttonStyles = {
		restart:
			"w-full px-6 py-3 bg-red-500 hover:bg-red-400 rounded-lg text-lg font-semibold text-white transition-all duration-300",
		menu: "w-full px-6 py-3 bg-red-700 hover:bg-red-600 rounded-lg text-lg font-semibold text-white transition-all duration-300",
	};

	return (
		<div className="fixed inset-0 bg-red-900 bg-opacity-90 flex flex-col items-center justify-center text-center p-6 z-50">
			<h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-md">
				{loseTitle}
			</h2>
			<p className="text-lg sm:text-xl text-red-100 mb-10 max-w-xl leading-relaxed">
				{loseMessage}
			</p>
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
