// useGridManager.jsx (New minimal version)

import { useState, useEffect } from "react";
import { getPoliceCount } from "../systems/PoliceSystem";

export const DEFAULT_GRID_SIZE = 10;

export default function useGridManager(
	gridSize = DEFAULT_GRID_SIZE,
	stealthLevel,
	onVictory
) {
	const [grid, setGrid] = useState([]);
	const [policePositions, setPolicePositions] = useState([]);

	// 🛠 Generate an empty grid
	const generateFullGrid = () => {
		const newGrid = Array.from({ length: gridSize * gridSize }, (_, i) => ({
			id: i,
			terrain: "empty",
			unit: null,
			isPlanted: false,
		}));
		setGrid(newGrid);
		spawnPolice(newGrid);
	};

	/**
	 * Plant a garden at a given cell
	 * @param {number} id - ID of the cell
	 */
	const plantAtCell = (id) => {
		setGrid((prevGrid) =>
			prevGrid.map((cell) =>
				cell.id === id && !cell.isPlanted
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

	/**
	 * Spawn initial police units randomly
	 */
	const spawnPolice = (gridState) => {
		const emptyCells = gridState.filter(
			(cell) => !cell.isPlanted && !cell.unit
		);
		const count = getPoliceCount(stealthLevel);

		const selected = emptyCells
			.sort(() => Math.random() - 0.5)
			.slice(0, count);
		const updatedGrid = gridState.map((cell) =>
			selected.some((sel) => sel.id === cell.id)
				? { ...cell, unit: "police" }
				: cell
		);

		setGrid(updatedGrid);
		setPolicePositions(selected.map((cell) => cell.id));
	};

	/**
	 * Move each police to a random adjacent empty cell
	 */
	const movePolice = () => {
		setGrid((prevGrid) => {
			let newGrid = [...prevGrid];
			let newPolicePositions = [];

			policePositions.forEach((id) => {
				const adjacentCells = getAdjacentEmptyCells(newGrid, id);
				if (adjacentCells.length > 0) {
					const target =
						adjacentCells[
							Math.floor(Math.random() * adjacentCells.length)
						];

					newGrid = newGrid.map((cell) => {
						if (cell.id === id) return { ...cell, unit: null };
						if (cell.id === target.id)
							return { ...cell, unit: "police" };
						return cell;
					});

					newPolicePositions.push(target.id);
				} else {
					newPolicePositions.push(id); // No move possible, stay
				}
			});

			setPolicePositions(newPolicePositions);
			return newGrid;
		});
	};

	/**
	 * Get adjacent empty cells around a position
	 */
	const getAdjacentEmptyCells = (grid, id) => {
		const row = Math.floor(id / gridSize);
		const col = id % gridSize;
		const directions = [
			[-1, 0],
			[1, 0],
			[0, -1],
			[0, 1], // UP, DOWN, LEFT, RIGHT
		];

		const neighbors = directions
			.map(([dx, dy]) => {
				const newRow = row + dx;
				const newCol = col + dy;
				if (
					newRow >= 0 &&
					newRow < gridSize &&
					newCol >= 0 &&
					newCol < gridSize
				) {
					const newIndex = newRow * gridSize + newCol;
					return grid[newIndex];
				}
				return null;
			})
			.filter((cell) => cell && !cell.isPlanted && !cell.unit);

		return neighbors;
	};

	/**
	 * Check for victory condition
	 */
	useEffect(() => {
		const totalCells = gridSize * gridSize;
		const plantedGardens = grid.filter(
			(cell) => cell.terrain === "garden"
		).length;

		if (plantedGardens === totalCells) {
			onVictory();
		}
	}, [grid]);

	// 🚀 Init grid on load
	useEffect(() => {
		generateFullGrid();
	}, []);

	return {
		grid,
		plantAtCell,
		movePolice,
		generateFullGrid,
	};
}
