// src/systems/WinConditions.js

export const winConditions = [
	// Full Guerrilla Support Victory
	({ supportValue }) => {
		if (supportValue <= -0.95)
			return { victory: true, reason: "Guerrilla Revolution!" };
		return { victory: false };
	},

	// MegaCorp Expelled
	({ megaCorpControl }) => {
		if (megaCorpControl <= 0)
			return { victory: true, reason: "MegaCorp Driven Out!" };
		return { victory: false };
	},

	// Master Gardener
	({ playerScore }) => {
		if (playerScore >= 100)
			return { victory: true, reason: "Garden Master!" };
		return { victory: false };
	},
];

export function checkVictory(state) {
	for (const condition of winConditions) {
		const result = condition(state);
		if (result.victory) return result;
	}
	return { victory: false };
}
