// components/ui/StealthBar.jsx
import React from "react";
import ProgressBar from "./ProgressBar";

const StealthBar = ({ value }) => {
	// Green (safe) → Red (exposed)
	const red = 255 - value * 2.55;
	const green = value * 2.55;

	return (
		<ProgressBar
			value={value}
			color={`rgb(${red}, ${green}, 0)`}
			label="🕶️ Stealth Level"
		/>
	);
};

export default StealthBar;
