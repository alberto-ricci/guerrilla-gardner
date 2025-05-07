import { useState } from "react";

export default function useMomentumManager(grid, setGrid) {
	const [momentum, setMomentum] = useState(0);
	const [protestCount, setProtestCount] = useState(0);
	const [gardensPlanted, setGardensPlanted] = useState(0);

	const GARDENS_PER_MOMENTUM = 3;
	const MOMENTUM_PER_PROTEST = 5;
	const MAX_PROTESTS = 5;

	const handleGardenPlanted = () => {
		const newGardenCount = gardensPlanted + 1;
		setGardensPlanted(newGardenCount);

		if (newGardenCount % GARDENS_PER_MOMENTUM === 0) {
			const newMomentum = momentum + 1;
			setMomentum(newMomentum);

			const protestsShouldExist = Math.floor(
				newMomentum / MOMENTUM_PER_PROTEST
			);
			const protestsToAdd = protestsShouldExist - protestCount;

			for (
				let i = 0;
				i < protestsToAdd && protestCount + i < MAX_PROTESTS;
				i++
			) {
				spawnProtestTile();
			}
		}
	};

	const spawnProtestTile = () => {
		const MAX_PROTESTS = 5;
		if (protestCount >= MAX_PROTESTS) return;

		const gridSize = 10; // Or pass this as a parameter
		const validTargets = grid.filter(
			(cell) =>
				cell?.id !== undefined && cell.type === "empty" && !cell.unit
		);

		if (validTargets.length === 0) return;

		const selected =
			validTargets[Math.floor(Math.random() * validTargets.length)];

		const getAdjacentCardinals = (cellId) => {
			const row = Math.floor(cellId / gridSize);
			const col = cellId % gridSize;
			const deltas = [
				[-1, 0], // up
				[1, 0], // down
				[0, -1], // left
				[0, 1], // right
			];

			return deltas
				.map(([dx, dy]) => {
					const newRow = row + dx;
					const newCol = col + dy;
					if (
						newRow >= 0 &&
						newRow < gridSize &&
						newCol >= 0 &&
						newCol < gridSize
					) {
						return newRow * gridSize + newCol;
					}
					return null;
				})
				.filter((id) => id !== null);
		};

		const adjacentIds = getAdjacentCardinals(selected.id);

		const updatedGrid = grid.map((cell) => {
			if (!cell || typeof cell !== "object") return cell;

			if (cell.id === selected.id) {
				// Main protest cell
				return {
					...cell,
					type: "protest",
					terrain: "protest",
				};
			}

			if (adjacentIds.includes(cell.id)) {
				// Adjacent boosted cells
				return {
					...cell,
					policeBlocked: true,
					protestSupport: true,
					stealthHit: 0, // Free to plant
				};
			}

			return cell;
		});

		setGrid(updatedGrid);
		setProtestCount((prev) => prev + 1);
	};

	const resetMomentum = () => {
		setMomentum(0);
		setProtestCount(0);
	};

	return {
		momentum,
		protestCount,
		handleGardenPlanted,
		resetMomentum,
	};
}
