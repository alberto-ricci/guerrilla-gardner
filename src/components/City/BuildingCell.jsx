// components/cells/BuildingCell.jsx
// 📦 Represents a static MegaCorp building tile in the city grid

export default function BuildingCell() {
	return (
		<div
			className="aspect-square flex items-center justify-center rounded-lg
        bg-gray-700 border border-black 
        text-white font-bold text-xl sm:text-2xl 
        transition-all duration-300"
		>
			🏢
		</div>
	);
}
