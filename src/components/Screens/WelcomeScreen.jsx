import { motion } from "framer-motion";
import { QuoteBox, FadeWrapper } from "@components";

export default function WelcomeScreen({ onNext }) {
	const startButtonStyle =
		"w-48 h-16 bg-green-700 hover:bg-green-600 active:scale-95 hover:scale-105 text-white text-2xl font-bold rounded-2xl shadow-lg transition-all duration-300 animate-pulse-slow";

	return (
		<FadeWrapper>
			<div className="flex flex-col items-center justify-between h-screen w-full bg-gradient-to-b from-green-50 to-green-100 p-6 text-center overflow-hidden">
				{/* Title Section */}
				<motion.div
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="mt-8 flex flex-col items-center"
				>
					<h1 className="text-5xl sm:text-7xl font-extrabold text-green-800 mb-2 drop-shadow-lg">
						Guerrilla Gardener 🌱
					</h1>
					<span className="text-sm sm:text-lg text-green-600 font-medium tracking-wide">
						A stealth game where your only weapon is a seed.
					</span>
				</motion.div>

				{/* Start Button */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, duration: 0.6 }}
					className="my-12"
				>
					<button
						onClick={onNext}
						className={startButtonStyle}
					>
						Start 🌱
					</button>
				</motion.div>

				{/* Quote and Jam Info */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6, duration: 0.8 }}
					className="w-full max-w-2xl mb-6 px-4 text-green-800 text-sm sm:text-base"
				>
					<QuoteBox />

					<div className="flex flex-col items-center mt-6 text-center">
						<h3 className="text-green-700 text-xl font-bold mb-2 underline underline-offset-4">
							About the Jam 🌱
						</h3>
						<p className="mb-2">
							This project is an act of rebellion and hope.
							Planting seeds in hostile ground mirrors the power
							of small acts of resistance. Made with passion for
							the Fuck Capitalism Game Jam 2025.
						</p>
						<p className="text-xs sm:text-sm text-green-600 italic">
							Created by mblede ✊
						</p>
					</div>
				</motion.div>
			</div>
		</FadeWrapper>
	);
}
