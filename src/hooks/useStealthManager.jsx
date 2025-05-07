// hooks/useStealthManager.js
import { useState } from "react";
import { updateStealth, calculateSurveillance } from "../systems/StealthSystem";

export const useStealthManager = () => {
	const [stealth, setStealth] = useState(100);
	const [surveillance, setSurveillance] = useState(0);

	const applyStealthHit = (actionType = null, directHit = null) => {
		const newStealth = updateStealth(stealth, actionType, directHit);
		setStealth(newStealth);
		setSurveillance(calculateSurveillance(newStealth));
	};

	const resetStealth = () => {
		setStealth(100);
		setSurveillance(0);
	};

	return {
		stealth,
		surveillance,
		applyStealthHit,
		resetStealth,
		setSurveillance,
	};
};
