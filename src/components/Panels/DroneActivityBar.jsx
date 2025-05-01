export default function DroneActivityBar({ value }) {
	return (
		<div>
			<h3 className="text-lg font-semibold">🚁 Drone Activity</h3>
			<div className="h-3 w-full bg-gray-300 rounded-full overflow-hidden">
				<div
					className="h-full bg-blue-500 transition-all duration-500"
					style={{ width: `${value}%` }}
				/>
			</div>
		</div>
	);
}
