import React from "react";

export default function SupportLabels() {
	return (
		<div className="flex w-full justify-between text-xs sm:text-sm font-semibold text-gray-700 px-2 mt-2">
			{/* Guerrilla Label */}
			<div className="flex flex-col items-center">
				<span>🌱</span>
				<span>Guerrilla</span>
			</div>

			{/* Neutral Label */}
			<div className="flex flex-col items-center">
				<span>⚖️</span>
				<span>Neutral</span>
			</div>

			{/* MegaCorp Label */}
			<div className="flex flex-col items-center">
				<span>🏢</span>
				<span>MegaCorp, Inc</span>
			</div>
		</div>
	);
}
