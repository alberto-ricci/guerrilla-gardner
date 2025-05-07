// momentumSystem.js

export default class MomentumSystem {
	constructor() {
		this.gardensPlanted = 0;
		this.momentum = 0;
		this.protests = 0;
		this.maxProtests = 5; // Optional cap
	}

	// Call this when a garden is successfully planted
	plantGarden() {
		this.gardensPlanted++;
		const newMomentum = Math.floor(this.gardensPlanted / 3);

		if (newMomentum > this.momentum) {
			this.momentum = newMomentum;
			this.updateProtests();
		}
	}

	// Recalculate protests based on current momentum
	updateProtests() {
		const newProtests = Math.floor(this.momentum / 5);
		const cappedProtests = Math.min(newProtests, this.maxProtests);
		if (cappedProtests > this.protests) {
			this.protests = cappedProtests;
			// Trigger new protest spawns here
		}
	}

	getStatus() {
		return {
			gardensPlanted: this.gardensPlanted,
			momentum: this.momentum,
			protests: this.protests,
		};
	}
}
