// components/layout/GameGridPanel.jsx
import { CityGrid } from "@components";

export default function GameGridPanel({
	grid,
	onCellClick,
	playerScore,
	megaCorpControl,
	policeCount,
	isFrozen,
}) {
	return (
		<div className="w-1/2">
			<CityGrid
				grid={grid}
				onCellClick={onCellClick}
				playerScore={playerScore}
				megaCorpControl={megaCorpControl}
				policeCount={policeCount}
				isFrozen={isFrozen}
			/>
		</div>
	);
}
