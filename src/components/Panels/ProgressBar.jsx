// components/ui/ProgressBar.jsx
import React from "react";

const ProgressBar = ({ value, color, label }) => {
	const clamped = Math.max(0, Math.min(100, value));

	return (
		<div className="w-full">
			<h3 className="text-lg font-semibold">
				{label}{" "}
				<span className="inline-block min-w-[3ch]">{clamped}%</span>
			</h3>
			<div className="h-4 w-full bg-white border border-black rounded-full overflow-hidden">
				<div
					className="h-full transition-all duration-500"
					style={{
						width: `${clamped}%`,
						backgroundColor: color,
					}}
				/>
			</div>
		</div>
	);
};

export default ProgressBar;
