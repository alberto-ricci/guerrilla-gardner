import React, { useEffect, useState } from "react";
import SupportBar from "./SupportBar";
import SupportLabels from "./SupportLabels";

export default function CityControlMeter({ supportValue = 0 }) {
	const clampedSupport = Math.max(-1, Math.min(1, supportValue));
	const displaySupportPercentage = Math.round(clampedSupport * 100);

	const [animateBump, setAnimateBump] = useState(false);

	useEffect(() => {
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

				<div
					className={`mt-3 text-sm font-bold text-gray-800 ${
						animateBump ? "animate-bump" : ""
					}`}
				></div>
			</div>
		</div>
	);
}
