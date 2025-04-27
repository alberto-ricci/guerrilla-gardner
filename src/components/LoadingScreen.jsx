export default function LoadingScreen({ tip }) {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-green-50">
			{/* Spinner */}
			<div className="w-16 h-16 border-8 border-green-300 border-t-green-600 rounded-full animate-spin mb-8"></div>

			{/* Loading Text */}
			<p className="text-xl sm:text-2xl text-green-700 font-bold mb-4 animate-pulse">
				Loading Gardens...
			</p>

			{/* Random Tip */}
			<p className="text-green-700 text-sm sm:text-base italic max-w-md leading-relaxed">
				{tip}
			</p>
		</div>
	);
}
