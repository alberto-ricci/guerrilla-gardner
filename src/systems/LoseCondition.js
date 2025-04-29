// src/systems/LoseConditions.js

export const loseConditions = [
	// Stealth Collapse (you lose when stealth is 0)
	({ stealthLevel }) => {
		if (stealthLevel <= 0) return { defeat: true, reason: "megacorp" };
		return { defeat: false };
	},

	// Police Caught (you clicked a police tile)
	({ lastClickedCell }) => {
		if (lastClickedCell?.unit === "police")
			return { defeat: true, reason: "police" };
		return { defeat: false };
	},

	// Future lose styles can be added easily here!
];

export function checkDefeat(state) {
	for (const condition of loseConditions) {
		const result = condition(state);
		if (result.defeat) return result;
	}
	return { defeat: false };
}
