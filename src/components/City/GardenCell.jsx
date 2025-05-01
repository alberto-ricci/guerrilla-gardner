// components/cells/GardenCell.jsx
// 🌿 Represents a planted garden cell in the city grid

export default function GardenCell() {
	return (
		<div
			className="aspect-square flex items-center justify-center rounded-lg 
				bg-green-600
				border border-black 
				text-green-900 font-bold text-xl sm:text-2xl 
				transition-all duration-300"
		>
			🌱
		</div>
	);
}
