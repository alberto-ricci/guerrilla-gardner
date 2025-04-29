// CityControlMeter.jsx
// Displays the overall city support as a progress bar with animated feedback when support changes.

import React, { useEffect, useState } from "react";
import { SupportBar, SupportLabels } from "@components";

export default function CityControlMeter({ supportValue = 0 }) {
	// Clamp the support value between -1 and 1 to avoid invalid percentages
	const clampedSupport = Math.max(-1, Math.min(1, supportValue));
	const displaySupportPercentage = Math.round(clampedSupport * 100); // (Currently unused)

	const [animateBump, setAnimateBump] = useState(false);

	useEffect(() => {
		// Trigger a bump animation whenever supportValue changes
		setAnimateBump(true);
		const timer = setTimeout(() => setAnimateBump(false), 300);
		return () => clearTimeout(timer);
	}, [supportValue]);

	return (
		<div className="flex flex-col items-center w-full mb-6">
			<h2 className="text-2xl font-bold text-green-800 mb-4">
				City Support 🌆
			</h2>

			<div className="relative w-full max-w-3xl flex flex-col items-center">
				<SupportBar supportValue={clampedSupport} />
				<SupportLabels />
				{/* Optional bump effect element */}
				<div className="mt-3 text-sm font-bold text-gray-800">
					{displaySupportPercentage}%
				</div>
			</div>
		</div>
	);
}
