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

	// 🛠 Generate a new grid with random events
	const generateFullGrid = () => {
		let newGrid = Array.from({ length: gridSize * gridSize }, (_, i) => ({
			id: i,
			type: "empty",
			terrain: "empty",
			unit: null,
			isPlanted: false,
		}));

		// 🏢 1. Place MegaCorp buildings first
		newGrid = seedBuildings(newGrid);

		// 🌟 2. Then place random event tiles
		const seededGrid = seedRandomEvents(newGrid);

		setGrid(seededGrid);

		// 🚓 3. Then spawn police (avoiding buildings & events)
		spawnPolice(seededGrid);
	};

	/**
	 * Randomly seed event cells on the grid
	 */
	const seedRandomEvents = (gridState) => {
		const chancePerCell = 0.08; // 8% chance each empty tile
		const eventTypes = ["good", "bad", "neutral"];

		return gridState.map((cell) => {
			if (Math.random() < chancePerCell) {
				const randomEvent =
					eventTypes[Math.floor(Math.random() * eventTypes.length)];
				return {
					...cell,
					type: "event",
					randomEventCategory: randomEvent,
				};
			}
			return cell;
		});
	};

	const seedBuildings = (gridState) => {
		const chancePerCell = 0.07; // Around 7% of the grid are buildings (adjustable)

		return gridState.map((cell) => {
			if (Math.random() < chancePerCell) {
				return {
					...cell,
					type: "building",
					terrain: "building",
					unit: null,
				};
			}
			return cell;
		});
	};

	const plantAtCell = (id) => {
		setGrid((prevGrid) =>
			prevGrid.map((cell) =>
				cell.id === id && !cell.isPlanted
					? {
							...cell,
							type: "garden",
							terrain: "garden",
							isPlanted: true,
							unit: null,
					  }
					: cell
			)
		);
	};

	const spawnPolice = (gridState) => {
		const emptyCells = gridState.filter(
			(cell) => !cell.isPlanted && !cell.unit && cell.type !== "building"
		);
		const count = getPoliceCount(stealthLevel);

		const selected = emptyCells
			.sort(() => Math.random() - 0.5)
			.slice(0, count);
		const updatedGrid = gridState.map((cell) =>
			selected.some((sel) => sel.id === cell.id)
				? {
						...cell,
						unit: "police",
						type: "police",
				  }
				: cell
		);

		setGrid(updatedGrid);
		setPolicePositions(selected.map((cell) => cell.id));
	};

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
						if (cell.id === id) {
							return { ...cell, unit: null, type: "empty" };
						}
						if (cell.id === target.id) {
							return { ...cell, unit: "police", type: "police" };
						}
						return cell;
					});

					newPolicePositions.push(target.id);
				} else {
					newPolicePositions.push(id);
				}
			});

			setPolicePositions(newPolicePositions);
			return newGrid;
		});
	};

	const getAdjacentEmptyCells = (grid, id) => {
		const row = Math.floor(id / gridSize);
		const col = id % gridSize;
		const directions = [
			[-1, 0],
			[1, 0],
			[0, -1],
			[0, 1],
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
			.filter(
				(cell) =>
					cell &&
					!cell.isPlanted &&
					!cell.unit &&
					cell.type !== "building"
			);

		return neighbors;
	};

	useEffect(() => {
		const totalCells = gridSize * gridSize;
		const plantedGardens = grid.filter(
			(cell) => cell.terrain === "garden"
		).length;

		if (plantedGardens === totalCells) {
			onVictory();
		}
	}, [grid]);

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
