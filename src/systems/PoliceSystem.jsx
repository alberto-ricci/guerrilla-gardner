// Systems/PoliceSystem.js

const BASE_ALERT_CHANCE = 0.02;
const EXTRA_ALERT_PER_BUILDING = 0.05;

const DIRECTIONS = [
	[-1, 0], // UP
	[1, 0], // DOWN
	[0, -1], // LEFT
	[0, 1], // RIGHT
];

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
			newCol < gridSize &&
			grid[index]?.type === "building"
		) {
			nearbyBuildings++;
		}
	});

	return BASE_ALERT_CHANCE + nearbyBuildings * EXTRA_ALERT_PER_BUILDING;
};

export const isPoliceCaught = (alertLevel) => {
	return Math.random() < alertLevel;
};

export const getPoliceCount = (stealthLevel) => {
	if (stealthLevel > 70) return 1;
	if (stealthLevel > 40) return 2;
	if (stealthLevel > 20) return 3;
	return 4;
};

export const spawnPoliceOnGrid = (grid, policeCount) => {
	const clearedGrid = clearExistingPolice(grid);
	const emptyCells = clearedGrid.filter((cell) => cell.type === "empty");

	for (let i = 0; i < policeCount && emptyCells.length > 0; i++) {
		const randomIndex = Math.floor(Math.random() * emptyCells.length);
		const randomCell = emptyCells[randomIndex];

		const gridIndex = clearedGrid.findIndex(
			(cell) => cell.id === randomCell.id
		);
		clearedGrid[gridIndex] = {
			...randomCell,
			type: "police",
			revealed: false,
			justSpawned: true,
		};

		emptyCells.splice(randomIndex, 1);
	}

	return clearedGrid;
};

const clearExistingPolice = (grid) => {
	return grid.map((cell) =>
		cell.type === "police" ? { ...cell, type: "empty" } : cell
	);
};
