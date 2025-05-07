// components/ui/GuerrillaMomentumBar.jsx
import React from "react";
import ProgressBar from "./ProgressBar";

const GuerrillaMomentumBar = ({ value }) => {
	const MAX_MOMENTUM = 15;
	const percent = Math.min((value / MAX_MOMENTUM) * 100, 100).toFixed(0);

	const protestPurple = "#7e22ce";

	return (
		<ProgressBar
			value={percent}
			color={protestPurple}
			label={`🔥 Momentum `}
		/>
	);
};

export default GuerrillaMomentumBar;
