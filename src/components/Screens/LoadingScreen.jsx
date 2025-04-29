// LoadingScreen.jsx
// Displays a loading spinner with a helpful tip while the game loads.

export default function LoadingScreen({ tip }) {
	// TailwindCSS style classes
	const spinnerStyle =
		"w-16 h-16 border-8 border-green-300 border-t-green-600 rounded-full animate-spin mb-8";
	const loadingTextStyle =
		"text-xl sm:text-2xl text-green-700 font-bold mb-4 animate-pulse";
	const tipTextStyle =
		"text-green-700 text-sm sm:text-base italic max-w-md leading-relaxed";

	return (
		<div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-green-50">
			{/* Spinner */}
			<div className={spinnerStyle} />

			{/* Loading Message */}
			<p className={loadingTextStyle}>Loading Gardens...</p>

			{/* Random Tip */}
			<p className={tipTextStyle}>{tip}</p>
		</div>
	);
}
