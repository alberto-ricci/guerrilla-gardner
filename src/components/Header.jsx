import StealthBar from "./StealthBar";

export default function Header({ playerScore, megaCorpControl, stealthLevel }) {
	return (
		<div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md mb-8 flex flex-col gap-6 animate-fade-in">
			{/* Score Section */}
			<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
				<div className="text-green-800 text-lg sm:text-xl font-extrabold">
					🌱 Gardens: {playerScore}
				</div>
				<div className="text-red-700 text-lg sm:text-xl font-extrabold">
					🏢 MegaCorp Control: {megaCorpControl}%
				</div>
			</div>

			{/* Stealth Meter */}
			<StealthBar stealthLevel={stealthLevel} />
		</div>
	);
}
