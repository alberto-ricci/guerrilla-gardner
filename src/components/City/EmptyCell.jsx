// components/cells/EmptyCell.jsx
// 🌱 Represents an empty, plantable cell in the city grid
// Shows the stealth penalty (stealthHit) and is clickable

export default function EmptyCell({ onClick, stealthHit }) {
	return (
		<button
			onClick={onClick}
			className="relative aspect-square flex items-center justify-center rounded-lg 
				bg-gray-100 hover:bg-green-100 
				border border-black shadow-sm 
				font-bold text-xl sm:text-2xl 
				transition-all duration-300"
		>
			⬜{/* Stealth penalty indicator */}
			<span className="absolute bottom-1 right-1 text-xs text-red-600 font-bold">
				-{stealthHit}
			</span>
		</button>
	);
}
