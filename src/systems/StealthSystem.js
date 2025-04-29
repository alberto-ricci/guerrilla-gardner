// src/systems/StealthSystem.js

/**
 * Manage Stealth and Surveillance values
 */

// Default starting values
export const DEFAULT_STEALTH = 100;
export const DEFAULT_SURVEILLANCE = 0;

/**
 * Calculate updated stealth after player action
 * @param {number} currentStealth - current stealth level
 * @param {string} actionType - type of player action ("plant", "event", etc.)
 * @returns {number} updated stealth value
 */
export const updateStealth = (currentStealth, actionType) => {
	let stealthLoss = 0;

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

	const newStealth = Math.max(currentStealth - stealthLoss, 0); // Can't go below 0
	return newStealth;
};

/**
 * Calculate surveillance based on stealth
 * @param {number} stealthLevel
 * @returns {number} surveillance level (0-100)
 */
export const calculateSurveillance = (stealthLevel) => {
	return Math.max(0, Math.min(100, 100 - stealthLevel));
};
