export default function SecurityLevelBar({ value }) {
	return (
		<div>
			<h3 className="text-lg font-semibold">🔒 Security Level</h3>
			<div className="h-3 w-full bg-gray-300 rounded-full overflow-hidden">
				<div
					className="h-full bg-yellow-500 transition-all duration-500"
					style={{ width: `${value}%` }}
				/>
			</div>
		</div>
	);
}
