import { useState, useEffect } from "react";
import { getPoliceCount } from "../systems/PoliceSystem";

export const DEFAULT_GRID_SIZE = 10;

export default function useGridManager(
	gridSize = DEFAULT_GRID_SIZE,
	onVictory
) {
	const [grid, setGrid] = useState([]);
	const [policePositions, setPolicePositions] = useState([]);

	// Initialize game grid
	useEffect(() => {
		generateFullGrid();
	}, []);

	// Check win condition
	useEffect(() => {
		const totalCells = gridSize * gridSize;
		const plantedGardens = grid.filter(
			(cell) => cell.terrain === "garden"
		).length;
		if (plantedGardens === totalCells) {
			onVictory();
		}
	}, [grid]);

	// Generate new grid
	const generateFullGrid = (stealthLevel = 100) => {
		let newGrid = Array.from({ length: gridSize * gridSize }, (_, i) => ({
			id: i,
			type: "empty",
			terrain: "empty",
			unit: null,
			isPlanted: false,
			stealthHit: 5,
		}));

		newGrid = seedBuildings(newGrid);
		newGrid = seedRandomEvents(newGrid);
		newGrid = assignStealthHits(newGrid);

		setGrid(newGrid);
		spawnPolice(newGrid, stealthLevel);
	};

	// Add buildings
	const seedBuildings = (gridState) => {
		const chancePerCell = 0.07;
		return gridState.map((cell) =>
			Math.random() < chancePerCell
				? { ...cell, type: "building", terrain: "building", unit: null }
				: cell
		);
	};

	// Add random events
	const seedRandomEvents = (gridState) => {
		const chancePerCell = 0.08;
		const eventTypes = ["good", "bad", "neutral"];

		return gridState.map((cell) =>
			Math.random() < chancePerCell
				? {
						...cell,
						type: "event",
						randomEventCategory:
							eventTypes[
								Math.floor(Math.random() * eventTypes.length)
							],
				  }
				: cell
		);
	};

	// Assign stealth penalties based on proximity to buildings
	const assignStealthHits = (gridState) => {
		return gridState.map((cell, i) => {
			if (cell.type !== "empty") return cell;

			const row = Math.floor(i / gridSize);
			const col = i % gridSize;
			const directions = [
				[-1, 0],
				[1, 0],
				[0, -1],
				[0, 1],
			];

			const nearBuilding = directions.some(([dx, dy]) => {
				const newRow = row + dx;
				const newCol = col + dy;
				if (
					newRow >= 0 &&
					newRow < gridSize &&
					newCol >= 0 &&
					newCol < gridSize
				) {
					const neighborId = newRow * gridSize + newCol;
					return gridState[neighborId]?.type === "building";
				}
				return false;
			});

			return { ...cell, stealthHit: nearBuilding ? 10 : 5 };
		});
	};

	// Spawn police units on valid tiles
	const spawnPolice = (gridState, stealthLevel = 100) => {
		const validSpawnCells = gridState.filter(
			(cell) =>
				!cell.isPlanted &&
				!cell.unit &&
				cell.type !== "building" &&
				cell.type !== "event"
		);
		const count = getPoliceCount(stealthLevel);

		const selected = validSpawnCells
			.sort(() => Math.random() - 0.5)
			.slice(0, count);

		const updatedGrid = gridState.map((cell) =>
			selected.some((sel) => sel.id === cell.id)
				? { ...cell, unit: "police", type: "police" }
				: cell
		);

		setGrid(updatedGrid);
		setPolicePositions(selected.map((cell) => cell.id));
	};

	// Plant garden at specified cell
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

	// Move police randomly to adjacent valid cells
	const movePolice = () => {
		setGrid((prevGrid) => {
			let newGrid = [...prevGrid];
			let newPositions = [];

			policePositions.forEach((id) => {
				const targets = getValidPoliceMoves(newGrid, id);
				if (targets.length > 0) {
					const target =
						targets[Math.floor(Math.random() * targets.length)];

					newGrid = newGrid.map((cell) => {
						if (cell.id === id) {
							return { ...cell, unit: null, type: "empty" };
						}
						if (cell.id === target.id) {
							return { ...cell, unit: "police", type: "police" };
						}
						return cell;
					});

					newPositions.push(target.id);
				} else {
					newPositions.push(id); // stay in place
				}
			});

			setPolicePositions(newPositions);
			return newGrid;
		});
	};

	// Return valid cells for police to move into
	const getValidPoliceMoves = (grid, id) => {
		const row = Math.floor(id / gridSize);
		const col = id % gridSize;
		const directions = [
			[-1, 0],
			[1, 0],
			[0, -1],
			[0, 1],
		];

		return directions
			.map(([dx, dy]) => {
				const newRow = row + dx;
				const newCol = col + dy;
				if (
					newRow >= 0 &&
					newRow < gridSize &&
					newCol >= 0 &&
					newCol < gridSize
				) {
					return grid[newRow * gridSize + newCol];
				}
				return null;
			})
			.filter((cell) => cell && !isBlockedForPolice(cell));
	};

	// Helper: check if cell blocks police movement
	const isBlockedForPolice = (cell) =>
		cell.isPlanted ||
		cell.unit ||
		cell.type === "building" ||
		cell.type === "event";

	return {
		grid,
		plantAtCell,
		movePolice,
		generateFullGrid,
	};
}
