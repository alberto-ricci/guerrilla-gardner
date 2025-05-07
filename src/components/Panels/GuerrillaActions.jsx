// components/panels/GuerrillaActions.jsx
import baseButtonStyle from "./baseButtonStyle";

export default function GuerrillaActions({
	stealthLevel,
	surveillanceLevel,
	onSkipTurn,
	onSabotage,
	onSkipNeutralTurn, // <- ADD THIS
}) {
	const canRest = stealthLevel < 50;
	const canSabotage = surveillanceLevel < 50;

	return (
		<div className="flex flex-col gap-4 border-t border-green-400 pt-4">
			<h4 className="text-green-900 font-bold text-lg">Actions</h4>

			{/* 🌙 Lay Low */}
			<button
				onClick={onSkipTurn}
				disabled={!canRest}
				className={`${baseButtonStyle} ${
					canRest ? "bg-green-700 hover:bg-green-600" : "bg-green-700"
				}`}
			>
				🌙 Lay Low
			</button>

			{/* ⚠️ Sabotage */}
			<button
				onClick={onSabotage}
				disabled={!canSabotage}
				className={`${baseButtonStyle} ${
					canSabotage ? "bg-red-600 hover:bg-red-500" : "bg-red-600"
				}`}
			>
				⚠️ Sabotage
			</button>

			{/* 🐾 Stay Hidden */}
			<button
				onClick={onSkipNeutralTurn}
				className={`${baseButtonStyle} bg-yellow-500 hover:bg-yellow-400 text-black`}
			>
				🐾 Stay Hidden
			</button>
		</div>
	);
}
