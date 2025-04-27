import React from "react";

const INITIAL_SUPPORT = 70;

export default function CityControlMeter({
	megaCorpControl = INITIAL_SUPPORT,
}) {
	const totalBoxes = 21;
	const middleIndex = 10;
	const boxes = [];

	// Support difference from 50%
	const supportDifference = megaCorpControl - 50;

	const activeBoxes = Math.floor(Math.abs(supportDifference) / 10);

	for (let i = 0; i < totalBoxes; i++) {
		let boxColor = "bg-gray-300";
		let shouldFlash = false;

		if (i === middleIndex) {
			// Middle box always yellow
			boxColor = "bg-yellow-400";
		} else if (supportDifference > 0 && i > middleIndex) {
			// MegaCorp side
			if (i <= middleIndex + activeBoxes) {
				boxColor = "bg-red-500";
				if (supportDifference >= 90 && i >= middleIndex + 9) {
					shouldFlash = true;
				}
			}
		} else if (supportDifference < 0 && i < middleIndex) {
			// Guerrilla side
			if (i >= middleIndex - activeBoxes) {
				boxColor = "bg-green-500";
				if (supportDifference <= -90 && i <= middleIndex - 9) {
					shouldFlash = true;
				}
			}
		}

		boxes.push(
			<div
				key={i}
				className={`w-7 h-8 mx-0.5 rounded-sm transition-colors duration-300 ${
					shouldFlash ? "animate-pulse" : ""
				} ${boxColor}`}
			></div>
		);
	}

	return (
		<div className="flex flex-col items-center w-full">
			{/* Boxed Meter */}
			<div className="flex justify-center items-center">{boxes}</div>

			{/* Labels */}
			<div className="flex justify-between text-sm text-gray-700 mt-2 w-full px-4 max-w-3xl">
				<div>🌿 Guerrilla</div>
				<div>⚖️ Neutral</div>
				<div>🏢 MegaCorp</div>
			</div>
		</div>
	);
}
