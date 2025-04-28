import { useState, useEffect } from "react";
import {
	getPoliceAlertLevel,
	isPoliceCaught,
	getPoliceCount,
	spawnPoliceOnGrid,
} from "../systems/PoliceSystem";

export const DEFAULT_GRID_SIZE = 10;

export const TERRAIN_TYPES = [
	{ type: "empty", weight: 5 },
	{ type: "building", weight: 3 },
	{ type: "abandoned", weight: 2 },
];

export const UNIT_TYPES = [
	{ type: "police", weight: 1 }, // more unit types can be added later
];

function generateWeightedList(types) {
	return types.flatMap(({ type, weight }) =>
		Array.from({ length: weight }, () => type)
	);
}

// 🛠 Generate a fresh terrain-only grid
function generateTerrainGrid(gridSize) {
	const terrainList = generateWeightedList(TERRAIN_TYPES);

	return Array.from({ length: gridSize * gridSize }, (_, i) => ({
		id: i,
		terrain: terrainList[Math.floor(Math.random() * terrainList.length)],
		unit: null,
		revealed: false,
		justSpawned: false,
		isPlanted: false,
	}));
}

// 🛠 Add units (e.g., police) onto an existing terrain grid
function populateUnits(grid, policeCount) {
	const availableCells = grid.filter(
		(cell) => cell.terrain === "empty" || cell.terrain === "abandoned"
	);

	const shuffled = availableCells.sort(() => Math.random() - 0.5);
	const selected = shuffled.slice(0, policeCount);

	return grid.map((cell) => ({
		...cell,
		unit: selected.some((sel) => sel.id === cell.id) ? "police" : null,
		justSpawned: selected.some((sel) => sel.id === cell.id),
	}));
}

export default function useGridManager(
	gridSize = DEFAULT_GRID_SIZE,
	stealthLevel,
	onVictory,
	onDefeat
) {
	const [grid, setGrid] = useState([]);
	const [policeCount, setPoliceCount] = useState(1);

	// 🛠 Full new grid generator
	const generateFullGrid = () => {
		const baseTerrainGrid = generateTerrainGrid(gridSize);
		const currentPoliceCount = getPoliceCount(stealthLevel);
		const populatedGrid = populateUnits(
			baseTerrainGrid,
			currentPoliceCount
		);

		setPoliceCount(currentPoliceCount);
		setGrid(populatedGrid);
	};

	// 🚀 Init on load
	useEffect(() => {
		generateFullGrid();
	}, []);

	// 🚀 Update police based on stealth level
	useEffect(() => {
		const currentPoliceCount = getPoliceCount(stealthLevel);
		setPoliceCount(currentPoliceCount);
		setGrid((prev) => populateUnits(prev, currentPoliceCount));
	}, [stealthLevel]);

	const plantAtCell = (id, callbacks) => {
		if (!grid) return;

		const targetCell = grid.find((cell) => cell.id === id);
		if (!targetCell) return;

		// Cannot plant if not allowed
		if (
			targetCell.terrain === "building" ||
			targetCell.terrain === "garden"
		)
			return;

		// Check police alert
		const alertLevel = getPoliceAlertLevel(grid, id, gridSize);

		if (isPoliceCaught(alertLevel)) {
			markCellAsCaught(id);
			setTimeout(() => callbacks?.onPoliceCatch?.(), 500);
			return;
		}

		markCellAsGarden(id);
	};

	const markCellAsCaught = (id) => {
		setGrid((prev) =>
			prev.map((cell) =>
				cell.id === id ? { ...cell, unit: "police_caught" } : cell
			)
		);
	};

	const markCellAsGarden = (id) => {
		setGrid((prev) =>
			prev.map((cell) =>
				cell.id === id
					? {
							...cell,
							terrain: "garden",
							isPlanted: true,
							unit: null,
					  }
					: cell
			)
		);
	};

	return {
		grid,
		setGrid,
		policeCount,
		setPoliceCount,
		plantAtCell,
		generateFullGrid,
	};
}
