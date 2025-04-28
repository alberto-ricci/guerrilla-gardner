import {
	countGardens,
	countPoliceUnits,
	countProtests,
	countMegaCorpCells,
	calculateCitySupport,
} from "../systems/GameScoreSystem";

export default function useGameStats(grid) {
	const gardensCount = countGardens(grid);
	const policeUnits = countPoliceUnits(grid);
	const protests = countProtests(grid);
	const megaCorpCells = countMegaCorpCells(grid);
	const rawSupport = calculateCitySupport(grid);

	return {
		gardensCount,
		policeUnits,
		protests,
		megaCorpCells,
		rawSupport,
	};
}
