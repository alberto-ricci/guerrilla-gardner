export default function PoliceCell({ shouldReveal, onClick }) {
	if (!shouldReveal) {
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

	return (
		<button
			onClick={onClick}
			className="aspect-square flex items-center justify-center rounded-lg 
        bg-red-500 hover:bg-red-400 
        border border-black 
        text-white font-bold text-xl sm:text-2xl 
        transition-all duration-300"
		>
			🚓
		</button>
	);
}
