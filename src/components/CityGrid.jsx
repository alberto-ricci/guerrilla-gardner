export default function CityGrid({ grid, onCellClick }) {
	const getCellStyle = (type) => {
		switch (type) {
			case "empty":
				return "bg-gray-100 text-gray-700";
			case "building":
				return "bg-gray-700 text-white";
			case "abandoned":
				return "bg-yellow-300 text-yellow-800";
			case "garden":
				return "bg-green-500 text-green-900";
			default:
				return "bg-gray-200";
		}
	};

	const getCellEmoji = (type) => {
		switch (type) {
			case "empty":
				return "⬜";
			case "building":
				return "🏢";
			case "abandoned":
				return "🪨";
			case "garden":
				return "🌱";
			default:
				return "❓";
		}
	};

	return (
		<div className="grid grid-cols-5 sm:grid-cols-10 gap-2 sm:gap-1 w-full max-w-2xl p-2">
			{grid.map((cell) => (
				<div
					key={cell.id}
					onClick={() => onCellClick(cell.id)}
					className={`flex items-center justify-center aspect-square rounded border-2 
			  ${getCellStyle(cell.type)}
			  text-xl sm:text-2xl font-bold transition-transform duration-300 ease-out
			  cursor-pointer hover:scale-105 hover:brightness-110`}
				>
					{getCellEmoji(cell.type)}
				</div>
			))}
		</div>
	);
}
