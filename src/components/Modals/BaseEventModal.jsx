// BaseEventModal.jsx
// 📦 Shared layout for all event modals

export default function BaseEventModal({
	event,
	onClose,
	titleClass,
	buttonClass,
}) {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-6 z-50">
			<div className="bg-white rounded-xl p-8 max-w-md w-full text-center shadow-xl animate-fade-in">
				<h2
					className={`text-2xl sm:text-3xl font-bold mb-6 ${titleClass}`}
				>
					{event.title}
				</h2>
				<p className="text-gray-700 mb-8 text-base sm:text-lg leading-relaxed">
					{event.message}
				</p>
				<button
					onClick={onClose}
					className={`px-8 py-3 ${buttonClass} rounded-xl text-lg font-bold transition-all duration-300`}
				>
					OK
				</button>
			</div>
		</div>
	);
}
