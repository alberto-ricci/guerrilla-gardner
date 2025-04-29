// WelcomeScreen.jsx
// Displays the introduction, story, and start button for Guerrilla Gardener.

import { motion } from "framer-motion";
import { QuoteBox, FadeWrapper } from "@components";

export default function WelcomeScreen({ onNext }) {
	const startButtonStyle =
		"w-48 h-16 bg-green-700 hover:bg-green-600 active:scale-95 hover:scale-105 text-white text-2xl font-bold rounded-2xl shadow-lg transition-all duration-300 animate-pulse-slow";

	return (
		<FadeWrapper>
			<div className="flex flex-col items-center justify-center h-screen w-full bg-gradient-to-b from-green-50 to-green-100 p-6 text-center overflow-hidden">
				{/* Title Section */}
				<div className="flex flex-col items-center mb-6">
					<h1 className="text-5xl sm:text-7xl font-extrabold text-green-800 mb-2 drop-shadow-lg">
						Guerrilla Gardener 🌱
					</h1>
					<span className="text-sm sm:text-lg text-green-600 font-medium">
						A stealth game where your only weapon is a seed.
					</span>
				</div>

				{/* Story / Game Description */}
				<div className="flex flex-col items-center w-full max-w-4xl text-green-900 px-4 mb-8">
					<p className="text-base sm:text-lg font-medium leading-relaxed tracking-wide text-center">
						<span className="text-green-800 font-bold text-2xl block mb-4">
							Plant Rebellion, Grow Resistance 🌿
						</span>
						The city is a prison of steel and surveillance —
						MegaCorp, Inc. owns it all. But you? You're a shadow, a
						saboteur, turning sterile streets into battlegrounds of
						life and defiance.
						<br />
						<br />
						Every seed you plant is a blow against the system. Every
						garden cracks the concrete with rebellion. But beware —
						MegaCorp’s enforcers hunt down every leaf of freedom.
						🚓🏢
						<br />
						<br />
						<span className="italic text-green-700">
							This isn’t gardening. This is Revolution.
						</span>{" "}
						✊🔥
					</p>
				</div>

				{/* Start Button */}
				<motion.button
					onClick={onNext}
					className={startButtonStyle}
				>
					Start 🌱
				</motion.button>

				{/* QuoteBox and Jam Description */}
				<div className="flex flex-col items-center mt-8 max-w-2xl text-green-800 text-sm sm:text-base px-4">
					<QuoteBox />

					<div className="flex flex-col items-center mt-6">
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
				</div>
			</div>
		</FadeWrapper>
	);
}
