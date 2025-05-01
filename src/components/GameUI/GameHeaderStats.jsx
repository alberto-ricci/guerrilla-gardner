// components/layout/GameHeaderStats.jsx

import { Header } from "@components";

// 🧠 Proxy component to pass header props more cleanly
export default function GameHeaderStats({
	gardensCount,
	policeCount,
	megaCorpCells,
	protests,
	supportValue,
	supportChange,
}) {
	return (
		<Header
			gardensCount={gardensCount}
			policeCount={policeCount}
			megaCorpCells={megaCorpCells}
			protests={protests}
			supportValue={supportValue}
			supportChange={supportChange}
		/>
	);
}
