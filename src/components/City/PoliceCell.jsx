// components/cells/PoliceCell.jsx
// 🚓 Represents a police unit cell. Can be hidden or revealed based on visibility rules.

export default function PoliceCell({ shouldReveal, onClick }) {
	if (!shouldReveal) {
		// Hidden state: generic gray tile (⬜)
		return (
			<div
				className="aspect-square flex items-center justify-center rounded-lg 
					bg-gray-200 
					border border-black"
			>
				⬜
			</div>
		);
	}

	// Revealed state: red alert police tile
	return (
		<button
			onClick={onClick}
			className="aspect-square flex items-center justify-center rounded-lg 
				bg-red-500 hover:bg-red-400 
				border border-black 
				text-white font-bold text-xl sm:text-2xl 
				transition-all duration-300"
			aria-label="Police patrol"
			title="Police patrol"
		>
			🚓
		</button>
	);
}
