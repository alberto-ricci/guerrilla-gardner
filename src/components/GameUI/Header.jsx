// components/layout/Header.jsx
// 🧠 Top HUD for displaying support mood and key game stats

import HeaderMoodSection from "./HeaderMoodSection";
import HeaderStatsSection from "./HeaderStatsSection";

export default function Header({
	gardensCount,
	policeCount,
	megaCorpCells,
	protests,
	supportValue,
	supportChange,
}) {
	return (
		<div className="w-full p-6 bg-green-200 text-black rounded-lg shadow-md">
			<HeaderMoodSection
				supportValue={supportValue}
				supportChange={supportChange}
			/>

			<HeaderStatsSection
				gardensCount={gardensCount}
				protests={protests}
				policeCount={policeCount}
				megaCorpCells={megaCorpCells}
			/>
		</div>
	);
}
