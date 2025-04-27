export default function EventModal({ event, onClose }) {
	if (!event) return null;

	// 🎨 Predefined full Tailwind classes based on event type
	const typeStyles = {
		good: {
			title: "text-green-700",
			button: "bg-green-500 hover:bg-green-400",
		},
		bad: {
			title: "text-red-700",
			button: "bg-red-500 hover:bg-red-400",
		},
		neutral: {
			title: "text-yellow-700",
			button: "bg-yellow-500 hover:bg-yellow-400",
		},
	};

	const { title, button } = typeStyles[event.type] || {
		title: "text-gray-700",
		button: "bg-gray-500 hover:bg-gray-400",
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-6 z-50">
			<div className="bg-white rounded-xl p-8 max-w-md w-full text-center shadow-xl animate-fade-in">
				<h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${title}`}>
					{event.title}
				</h2>
				<p className="text-gray-700 mb-8 text-base sm:text-lg leading-relaxed">
					{event.message}
				</p>
				<button
					onClick={onClose}
					className={`px-8 py-3 ${button} rounded-xl text-lg font-bold transition-all duration-300`}
				>
					OK
				</button>
			</div>
		</div>
	);
}
