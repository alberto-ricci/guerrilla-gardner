// Count how many gardens are planted
export function countGardens(grid) {
	return grid.filter((cell) => cell.terrain === "garden").length;
}

// Count how many police units are on the board
export function countPoliceUnits(grid) {
	return grid.filter((cell) => cell.unit === "police").length;
}

// Count how many protests are happening
export function countProtests(grid) {
	return grid.filter((cell) => cell.unit === "protest").length;
}

// Count how many cells are still under MegaCorp control
export function countMegaCorpCells(grid) {
	const totalCells = grid.length;
	const gardens = countGardens(grid);
	const protests = countProtests(grid);
	return totalCells - gardens - protests;
}

// Calculate the city support score (-1 = full MegaCorp, 0 = neutral, +1 = full Guerrilla)
export function calculateCitySupport(grid) {
	const gardens = countGardens(grid);
	const megaCorpCells = countMegaCorpCells(grid);

	const totalCells = grid.length;
	if (totalCells === 0) return 0;

	return (gardens - megaCorpCells) / totalCells;
}
