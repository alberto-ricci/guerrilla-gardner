// components/ui/QuoteDisplay.jsx
// ✍️ Renders a single quote with styles

const quoteStyles = {
	container:
		"mt-8 px-8 py-6 bg-white rounded-xl text-center w-full max-w-4xl",
	text: "text-green-800 italic text-lg sm:text-xl leading-relaxed mb-4",
	author: "text-green-700 font-semibold text-base sm:text-lg",
};

export default function QuoteDisplay({ text, author }) {
	return (
		<div className={quoteStyles.container}>
			<p className={quoteStyles.text}>“{text}”</p>
			<p className={quoteStyles.author}>— {author}</p>
		</div>
	);
}
