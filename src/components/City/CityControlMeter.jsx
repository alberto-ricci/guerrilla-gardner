import React, { useState, useEffect } from "react";
import { SupportBar, SupportLabels, SupportStatus } from "@components";

export default function CityControlMeter({ supportValue = 0 }) {
	// Clamp the support value between -1 and 1 to avoid invalid percentages
	const clampedSupport = Math.max(-1, Math.min(1, supportValue));

	const [animateBump, setAnimateBump] = useState(false);

	useEffect(() => {
		// Trigger a bump animation whenever supportValue changes
		setAnimateBump(true);
		const timer = setTimeout(() => setAnimateBump(false), 300);
		return () => clearTimeout(timer);
	}, [supportValue]);

	return (
		<div className="flex flex-col items-center w-full mb-6">
			{/* City Support Bar */}
			<SupportBar supportValue={clampedSupport} />

			{/* Optional bump effect element */}
		</div>
	);
}
