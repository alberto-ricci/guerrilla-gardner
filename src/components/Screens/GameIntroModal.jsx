import { useEffect, useState } from "react";

export default function GameIntroModal() {
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		// Show modal on GameScreen load
		setShowModal(true);

		// Escape key closes modal
		const handleKeyDown = (e) => {
			if (e.key === "Escape") {
				setShowModal(false);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);

	if (!showModal) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fade-in">
			<div className="bg-white rounded-2xl shadow-lg max-w-4xl p-6 sm:p-10 text-green-900 text-center transform transition-all scale-100">
				<h2 className="text-2xl font-bold text-green-800 mb-4">
					Plant Rebellion, Grow Resistance 🌿
				</h2>
				<p className="text-base sm:text-lg font-medium leading-relaxed tracking-wide">
					The city is a prison of steel and surveillance — MegaCorp,
					Inc. owns it all. But you? You're a shadow, a saboteur,
					turning sterile streets into battlegrounds of life and
					defiance.
					<br />
					<br />
					Every seed you plant is a blow against the system. Every
					garden cracks the concrete with rebellion. But beware —
					MegaCorp’s enforcers hunt down every leaf of freedom. 🚓🏢
					<br />
					<br />
					<span className="italic text-green-700">
						This isn’t gardening. This is Revolution.
					</span>{" "}
					✊🔥
				</p>
				<button
					onClick={() => setShowModal(false)}
					className="mt-6 px-6 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700 transition"
				>
					Start Game ✊
				</button>
			</div>
		</div>
	);
}
