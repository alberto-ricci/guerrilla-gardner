// src/components/SupportBar.jsx
import React from "react";

export default function SupportBar({ supportValue }) {
	const clampedSupport = Math.max(-1, Math.min(1, supportValue));
	const centerIndex = 10; // Neutral box

	const greenShades = [
		"bg-green-100",
		"bg-green-200",
		"bg-green-300",
		"bg-green-400",
		"bg-green-500",
		"bg-green-600",
		"bg-green-700",
		"bg-green-800",
		"bg-green-900",
	];
	const redShades = [
		"bg-red-100",
		"bg-red-200",
		"bg-red-300",
		"bg-red-400",
		"bg-red-500",
		"bg-red-600",
		"bg-red-700",
		"bg-red-800",
		"bg-red-900",
	];

	const filledBoxes = Math.round(Math.abs(clampedSupport) * 10);

	const getBoxColor = (index) => {
		if (index === centerIndex) return "bg-yellow-400"; // Neutral center

		if (clampedSupport < 0) {
			// Guerrilla support (left side)
			if (index >= centerIndex - filledBoxes && index < centerIndex)
				return greenShades[
					Math.min(centerIndex - index - 1, greenShades.length - 1)
				];
		} else if (clampedSupport > 0) {
			// MegaCorp support (right side)
			if (index > centerIndex && index <= centerIndex + filledBoxes)
				return redShades[
					Math.min(index - centerIndex - 1, redShades.length - 1)
				];
		}
		return "bg-gray-300"; // Unoccupied
	};

	return (
		<div className="flex flex-row gap-1 w-full justify-center mb-2">
			{Array.from({ length: 21 }, (_, index) => (
				<div
					key={index}
					className={`w-7 h-6 rounded-sm border border-black transition-all duration-500 ${getBoxColor(
						index
					)}`}
				></div>
			))}
		</div>
	);
}
