export default function EventCell({ onClick }) {
	return (
		<button
			onClick={onClick}
			className="aspect-square flex items-center justify-center rounded-lg 
        bg-yellow-400
        border border-black 
        text-yellow-800 font-bold text-xl sm:text-2xl 
        transition-all duration-300 ease-out"
		>
			🪨
		</button>
	);
}
