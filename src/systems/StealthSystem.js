// src/systems/StealthSystem.js

export const DEFAULT_STEALTH = 100;
export const DEFAULT_SURVEILLANCE = 0;

export const updateStealth = (
	currentStealth,
	actionType = null,
	directHit = null
) => {
	let stealthLoss = directHit ?? 0;

	if (directHit === null) {
		switch (actionType) {
			case "plant":
				stealthLoss = 5;
				break;
			case "badEvent":
				stealthLoss = 10;
				break;
			case "neutralEvent":
				stealthLoss = 3;
				break;
			case "goodEvent":
				stealthLoss = 1;
				break;
			default:
				stealthLoss = 0;
		}
	}

	const newStealth = Math.max(currentStealth - stealthLoss, 0);
	return newStealth;
};

export const calculateSurveillance = (stealthLevel) => {
	return Math.max(0, Math.min(100, 100 - stealthLevel));
};
