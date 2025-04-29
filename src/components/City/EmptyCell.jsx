export default function EmptyCell({ onClick }) {
	return (
		<button
			onClick={onClick}
			className="aspect-square flex items-center justify-center rounded-lg 
        bg-gray-100 hover:bg-green-100 
        border border-black shadow-sm 
        font-bold text-xl sm:text-2xl transition-all duration-300"
		>
			⬜
		</button>
	);
}
