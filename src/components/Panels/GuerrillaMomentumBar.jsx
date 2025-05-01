export default function GuerrillaMomentumBar({ value }) {
	return (
		<div>
			<h3 className="text-lg font-semibold text-black">⚡ Momentum</h3>
			<div className="h-3 w-full bg-gray-300 rounded-full overflow-hidden">
				<div
					className="h-full bg-green-600 transition-all duration-500"
					style={{ width: `${value}%` }}
				></div>
			</div>
		</div>
	);
}
