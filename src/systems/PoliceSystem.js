// PoliceSystem.js
// Systems to manage police alertness, capture mechanics, and police unit spawning.

const BASE_ALERT_CHANCE = 0.02;
const EXTRA_ALERT_PER_BUILDING = 0.05;

const DIRECTIONS = [
	[-1, 0], // UP
	[1, 0], // DOWN
	[0, -1], // LEFT
	[0, 1], // RIGHT
];

/**
 * Calculate the alert level when planting at a specific cell.
 * Nearby buildings increase the chance of being caught.
 *
 * @param {Array} grid - The city grid
 * @param {number} cellId - ID of the target cell
 * @param {number} gridSize - Width/height of the square grid
 * @returns {number} - Final alert level (chance from 0 to 1)
 */
export const getPoliceAlertLevel = (grid, cellId, gridSize) => {
	const row = Math.floor(cellId / gridSize);
	const col = cellId % gridSize;
	let nearbyBuildings = 0;

	DIRECTIONS.forEach(([dx, dy]) => {
		const newRow = row + dx;
		const newCol = col + dy;
		const index = newRow * gridSize + newCol;

		if (
			newRow >= 0 &&
			newRow < gridSize &&
			newCol >= 0 &&
			newCol < gridSize
		) {
			const neighborCell = grid[index];
			if (neighborCell?.terrain === "building") {
				nearbyBuildings++;
			}
		}
	});

	return BASE_ALERT_CHANCE + nearbyBuildings * EXTRA_ALERT_PER_BUILDING;
};

/**
 * Determine if the police catch the player based on alert level.
 *
 * @param {number} alertLevel - Chance between 0 and 1
 * @returns {boolean} - Whether the player was caught
 */
export const isPoliceCaught = (alertLevel) => {
	return Math.random() < alertLevel;
};

/**
 * Calculate how many police units to spawn based on stealth level.
 *
 * @param {number} stealthLevel - Current player stealth level (0-100)
 * @returns {number} - Number of police units to place
 */
export const getPoliceCount = (stealthLevel) => {
	if (stealthLevel > 70) return 1;
	if (stealthLevel > 40) return 2;
	if (stealthLevel > 20) return 3;
	return 4;
};

/**
 * Spawn police units randomly on the grid.
 *
 * @param {Array} grid - City grid
 * @param {number} policeCount - Number of police to spawn
 * @returns {Array} - Updated grid
 */
export const spawnPoliceOnGrid = (grid, policeCount) => {
	const clearedGrid = clearExistingPolice(grid);
	const emptyCells = clearedGrid.filter(
		(cell) => cell.terrain === "empty" || cell.terrain === "abandoned"
	);

	for (let i = 0; i < policeCount && emptyCells.length > 0; i++) {
		const randomIndex = Math.floor(Math.random() * emptyCells.length);
		const randomCell = emptyCells[randomIndex];

		const gridIndex = clearedGrid.findIndex(
			(cell) => cell.id === randomCell.id
		);
		clearedGrid[gridIndex] = {
			...randomCell,
			unit: "police",
			revealed: false,
			justSpawned: true,
		};

		emptyCells.splice(randomIndex, 1); // remove the cell from available list
	}

	return clearedGrid;
};

/**
 * Clear all police units from the grid.
 * (Used before re-spawning police.)
 *
 * @param {Array} grid - City grid
 * @returns {Array} - Cleared grid
 */
const clearExistingPolice = (grid) => {
	return grid.map((cell) =>
		cell.unit === "police" || cell.unit === "police_caught"
			? { ...cell, unit: null }
			: cell
	);
};
