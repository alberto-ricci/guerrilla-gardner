// GameScoreSystem.js
// Utility functions to calculate city control, protests, and garden stats from the grid.

/**
 * Count how many gardens are planted on the grid
 * @param {Array} grid - The city grid
 * @returns {number} - Total number of garden tiles
 */
export function countGardens(grid) {
	return grid.filter((cell) => cell.terrain === "garden").length;
}

/**
 * Count how many police units are present on the grid
 * @param {Array} grid - The city grid
 * @returns {number} - Number of police units
 */
export function countPoliceUnits(grid) {
	return grid.filter((cell) => cell.unit === "police").length;
}

/**
 * Count how many protests are active on the grid
 * @param {Array} grid - The city grid
 * @returns {number} - Number of protest units
 */
export function countProtests(grid) {
	return grid.filter((cell) => cell.unit === "protest").length;
}

/**
 * Count how many cells are still controlled by MegaCorp
 * (not gardens, not protests)
 * @param {Array} grid - The city grid
 * @returns {number} - Number of MegaCorp controlled cells
 */
export function countMegaCorpCells(grid) {
	const totalCells = grid.length;
	const gardens = countGardens(grid);
	const protests = countProtests(grid);

	return totalCells - gardens - protests;
}

/**
 * Calculate the city support score
 * -1 = full MegaCorp control
 *  0 = neutral
 * +1 = full Guerrilla control
 *
 * @param {Array} grid - The city grid
 * @returns {number} - Normalized city support score
 */
export function calculateCitySupport(grid) {
	const gardens = countGardens(grid);
	const megaCorpCells = countMegaCorpCells(grid);
	const totalCells = grid.length;

	if (totalCells === 0) return 0; // If no grid exists at all

	// New logic:
	if (gardens === 0) return 1; // If no gardens planted yet, full MegaCorp

	return (megaCorpCells - gardens) / totalCells;
}
