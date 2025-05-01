// components/ui/SurveillanceBar.jsx
import React from "react";
import ProgressBar from "./ProgressBar";

const SurveillanceBar = ({ value }) => {
	// Green (low surveillance) → Red (high surveillance)
	const red = value * 2.55;
	const green = 255 - value * 2.55;

	return (
		<ProgressBar
			value={value}
			color={`rgb(${red}, ${green}, 0)`}
			label="📹 Surveillance Level"
		/>
	);
};

export default SurveillanceBar;
