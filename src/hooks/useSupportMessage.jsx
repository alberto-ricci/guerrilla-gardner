// components/ui/useSupportMessage.js
import {
	megacorpGood,
	megacorpBad,
	guerrillaGood,
	guerrillaBad,
	neutralSituations,
} from "@data/supportMessages";

export default function useSupportMessage(supportValue, supportChange) {
	const getThresholdIndex = (value) => {
		const abs = Math.abs(value);
		if (abs >= 0.8) return 3;
		if (abs >= 0.6) return 2;
		if (abs >= 0.4) return 1;
		return 0;
	};

	const isMegaCorp = supportValue > 0.2;
	const isGuerrilla = supportValue < -0.2;
	const isNeutral = !isMegaCorp && !isGuerrilla;
	const isGrowing = supportChange >= 0;

	if (isMegaCorp) {
		const index = getThresholdIndex(supportValue);
		return isGrowing ? megacorpGood[index] : megacorpBad[index];
	}

	if (isGuerrilla) {
		const index = getThresholdIndex(supportValue);
		return isGrowing ? guerrillaGood[index] : guerrillaBad[index];
	}

	const random = Math.floor(Math.random() * neutralSituations.length);
	return neutralSituations[random];
}
