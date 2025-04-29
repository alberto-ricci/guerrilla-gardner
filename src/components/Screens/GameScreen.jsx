// GameScreen.jsx
import { useState, useEffect } from "react";
import { GameLayout, GameButtons, GameStateManager } from "@components";
import { useGridManager } from "@hooks";
import {
	calculateCitySupport,
	countGardens,
	countMegaCorpCells,
	countPoliceUnits,
} from "@systems/GameScoreSystem";

export default function GameScreen({ onRestartGame, onBackToMenu }) {
	const gridSize = 10;

	const [isVictory, setIsVictory] = useState(false);
	const [isDefeat, setIsDefeat] = useState(false);
	const [support, setSupport] = useState(1); // ⚡ Start with full MegaCorp support
	const [defeatCause, setDefeatCause] = useState(null);

	const { grid, plantAtCell, movePolice, generateFullGrid } = useGridManager(
		gridSize,
		100,
		handleVictory
	);

	function handleVictory() {
		setIsVictory(true);
	}

	function handleDefeat(cause) {
		setIsDefeat(true);
		setDefeatCause(cause);
	}

	function handlePlant(id) {
		if (isVictory || isDefeat) return;

		const clickedCell = grid.find((cell) => cell.id === id);
		if (!clickedCell) return;

		if (clickedCell.unit === "police") {
			// 💥 Player clicked a police = defeat
			handleDefeat("police");
			return;
		}

		plantAtCell(id);
		movePolice();

		// Update support immediately after planting
		const updatedSupport = calculateCitySupport(grid);
		setSupport(updatedSupport);
	}

	function handleFullRestart() {
		// Reset all game state
		setIsVictory(false);
		setIsDefeat(false);
		setDefeatCause(null);
		generateFullGrid();
		setSupport(1); // Reset to full MegaCorp control
	}

	// 🛠 Update support automatically if grid changes
	useEffect(() => {
		if (grid.length > 0) {
			const updatedSupport = calculateCitySupport(grid);
			setSupport(updatedSupport);
		}
	}, [grid]);

	return (
		<div className="w-full flex flex-col items-center">
			<GameStateManager
				isVictory={isVictory}
				isDefeat={isDefeat}
				defeatCause={defeatCause}
				onRestart={handleFullRestart}
				onBackToMenu={onBackToMenu}
			/>

			{/* Render gameplay only if not ended */}
			{!isVictory && !isDefeat && (
				<>
					<GameLayout
						grid={grid}
						onCellClick={handlePlant}
						playerScore={countGardens(grid)}
						megaCorpControl={support}
						stealthLevel={100} // constant for now
						policeCount={countPoliceUnits(grid)}
						isFrozen={isVictory || isDefeat}
						momentum={0}
						resources={0}
						surveillanceLevel={0}
						droneActivity={0}
						securityLevel={0}
						protests={0}
						megaCorpCells={countMegaCorpCells(grid)}
					/>

					<GameButtons
						onRestart={handleFullRestart}
						onBackToMenu={onBackToMenu}
					/>
				</>
			)}
		</div>
	);
}
