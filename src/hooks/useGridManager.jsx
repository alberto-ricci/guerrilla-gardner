// useGridManager.jsx
// Custom hook to manage the city grid, police units, and planting actions.

import { useState, useEffect } from "react";
import {
	getPoliceAlertLevel,
	isPoliceCaught,
	getPoliceCount,
} from "../systems/PoliceSystem";

export const DEFAULT_GRID_SIZE = 10;

// Weighted lists for terrain and unit generation
export const TERRAIN_TYPES = [
	{ type: "empty", weight: 5 },
	{ type: "building", weight: 3 },
	{ type: "abandoned", weight: 2 },
];

export const UNIT_TYPES = [{ type: "police", weight: 1 }];

/**
 * Utility to generate a list where elements appear multiple times based on weight
 * @param {Array} types - Array of {type, weight}
 * @returns {Array} - Flattened weighted list
 */
function generateWeightedList(types) {
	return types.flatMap(({ type, weight }) =>
		Array.from({ length: weight }, () => type)
	);
}

/**
 * Generate a fresh terrain-only grid
 * @param {number} gridSize - Size of the city grid
 * @returns {Array} - Terrain grid
 */
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

/**
 * Populate a grid with units like police
 * @param {Array} grid - Current terrain grid
 * @param {number} policeCount - How many police units to spawn
 * @returns {Array} - Updated grid
 */
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

	/**
	 * Generate a full new terrain + units grid
	 */
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

	/**
	 * Plant action on a cell, handles police detection and garden planting
	 * @param {number} id - ID of the targeted cell
	 * @param {Object} callbacks - Optional event handlers (ex: onPoliceCatch)
	 */
	const plantAtCell = (id, callbacks) => {
		if (!grid) return;

		const targetCell = grid.find((cell) => cell.id === id);
		if (!targetCell) return;

		if (
			targetCell.terrain === "building" ||
			targetCell.terrain === "garden"
		)
			return;

		const alertLevel = getPoliceAlertLevel(grid, id, gridSize);

		if (isPoliceCaught(alertLevel)) {
			markCellAsCaught(id);
			setTimeout(() => callbacks?.onPoliceCatch?.(), 500);
			return;
		}

		markCellAsGarden(id);
	};

	/**
	 * Mark a cell as police caught (caught trying to plant)
	 * @param {number} id - ID of the cell
	 */
	const markCellAsCaught = (id) => {
		setGrid((prev) =>
			prev.map((cell) =>
				cell.id === id ? { ...cell, unit: "police_caught" } : cell
			)
		);
	};

	/**
	 * Mark a cell as successfully planted (garden created)
	 * @param {number} id - ID of the cell
	 */
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

	// 🚀 Generate grid on first mount
	useEffect(() => {
		generateFullGrid();
	}, []);

	// 🚀 Recalculate police when stealth level changes
	useEffect(() => {
		const currentPoliceCount = getPoliceCount(stealthLevel);
		setPoliceCount(currentPoliceCount);
		setGrid((prev) => populateUnits(prev, currentPoliceCount));
	}, [stealthLevel]);

	return {
		grid,
		setGrid,
		policeCount,
		setPoliceCount,
		plantAtCell,
		generateFullGrid,
	};
}
