import { useState, useEffect } from "react";
import {
	getPoliceAlertLevel,
	isPoliceCaught,
	getPoliceCount,
	spawnPoliceOnGrid,
} from "../systems/PoliceSystem";

// Overall grid size (10 = 10x10 grid = 100 cells)
export const DEFAULT_GRID_SIZE = 10;

// Types of terrain and their spawn weight (higher = more common)
export const TERRAIN_TYPES = [
	{ type: "empty", weight: 5 },
	{ type: "building", weight: 3 },
	{ type: "abandoned", weight: 2 },
];

export default function useGridManager(
	gridSize = DEFAULT_GRID_SIZE,
	stealthLevel,
	onVictory,
	onDefeat
) {
	const generateWeightedTerrainList = () => {
		// Flatten the terrain types based on weight
		return TERRAIN_TYPES.flatMap(({ type, weight }) =>
			Array.from({ length: weight }, () => type)
		);
	};

	const generateGrid = () => {
		const terrainList = generateWeightedTerrainList();

		return Array.from({ length: gridSize * gridSize }, (_, i) => ({
			id: i,
			type: terrainList[Math.floor(Math.random() * terrainList.length)],
		}));
	};

	const [grid, setGrid] = useState(generateGrid);
	const [policeCount, setPoliceCount] = useState(1);

	useEffect(() => {
		const newPoliceCount = getPoliceCount(stealthLevel);
		setPoliceCount(newPoliceCount);

		const newGrid = spawnPoliceOnGrid(grid, newPoliceCount);
		setGrid(newGrid);
	}, [stealthLevel]);

	const plantAtCell = (id, callbacks) => {
		if (!grid) return;

		const alertLevel = getPoliceAlertLevel(grid, id, gridSize);

		if (isPoliceCaught(alertLevel)) {
			markCellAsCaught(id);
			setTimeout(() => callbacks.onPoliceCatch(), 500);
			return;
		}

		markCellAsGarden(id);
	};

	const markCellAsCaught = (id) => {
		setGrid((prevGrid) =>
			prevGrid.map((cell) =>
				cell.id === id ? { ...cell, type: "police_caught" } : cell
			)
		);
	};

	const markCellAsGarden = (id) => {
		setGrid((prevGrid) =>
			prevGrid.map((cell) =>
				cell.id === id &&
				(cell.type === "empty" || cell.type === "abandoned")
					? { ...cell, type: "garden" }
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
		generateGrid,
	};
}
