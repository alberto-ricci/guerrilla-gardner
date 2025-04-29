// QuoteBox.jsx
// Displays a randomly selected environmental or activist quote when the component mounts.

import { useState, useEffect } from "react";

// List of available quotes
const quoteList = [
	{
		text: " [...] As long as hierarchy persists, as long as domination organises humanity around a system of elites, the project of dominating nature will continue to exist and inevitably lead our planet to ecological extinction.",
		author: "Murray Bookchin",
	},
	{
		text: "Whenever we engage in consumption or production patterns which take more than we need, we are engaging in violence.",
		author: "Vandana Shiva",
	},
	{
		text: "The greatest threat to our planet is the belief that someone else will save it.",
		author: "Robert Swan",
	},
];

// Tailwind CSS styles for the quote box
const quoteStyles = {
	container:
		"mt-8 px-8 py-6 bg-white rounded-xl text-center w-full max-w-4xl",
	text: "text-green-800 italic text-lg sm:text-xl leading-relaxed mb-4",
	author: "text-green-700 font-semibold text-base sm:text-lg",
};

export default function QuoteBox() {
	const [quote, setQuote] = useState(quoteList[0]); // Default to first quote initially

	useEffect(() => {
		// Select a random quote when component mounts
		const randomQuote =
			quoteList[Math.floor(Math.random() * quoteList.length)];
		setQuote(randomQuote);
	}, []); // Empty dependency array = run only once on mount

	return (
		<div className={quoteStyles.container}>
			<p className={quoteStyles.text}>“{quote.text}”</p>
			<p className={quoteStyles.author}>— {quote.author}</p>
		</div>
	);
}
