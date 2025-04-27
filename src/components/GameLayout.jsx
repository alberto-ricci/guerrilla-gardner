import Header from "./Header";
import Title from "./Title";
import CityGrid from "./CityGrid";

export default function GameLayout({
	grid,
	onCellClick,
	playerScore,
	megaCorpControl,
	stealthLevel,
	policeCount,
	isFrozen,
}) {
	const handleCellClick = isFrozen ? () => {} : onCellClick;

	return (
		<div className="w-full flex flex-col items-center max-w-7xl mx-auto px-4 py-8">
			{/* Header Section */}
			<div className="w-full flex flex-col items-center gap-8 mb-10">
				<Header
					playerScore={playerScore}
					megaCorpControl={megaCorpControl}
					stealthLevel={stealthLevel}
					policeCount={policeCount}
				/>
				<Title />
			</div>

			{/* Grid Section */}
			<div className="flex justify-center w-full">
				<CityGrid
					grid={grid}
					onCellClick={handleCellClick}
				/>
			</div>
		</div>
	);
}
