import { useState, useEffect } from "react";

const quoteList = [
	{
		text: " [...] As long as hierarchy persists, as long as domination organises humanity around a system of elites, the project of dominating nature will continue to exist and inevitably lead our planet to ecological extinction",
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

const quoteStyles = {
	container:
		"mt-6 px-6 py-4 bg-green-50 rounded-lg shadow text-center max-w-xl",
	text: "text-green-800 italic text-base sm:text-lg leading-relaxed mb-2",
	author: "text-green-600 font-semibold text-sm sm:text-base",
};

export default function QuoteBox() {
	const [quote, setQuote] = useState(quoteList[0]);

	useEffect(() => {
		const randomQuote =
			quoteList[Math.floor(Math.random() * quoteList.length)];
		setQuote(randomQuote);
	}, []); // Run once on mount

	return (
		<div className={quoteStyles.container}>
			<p className={quoteStyles.text}>“{quote.text}”</p>
			<p className={quoteStyles.author}>— {quote.author}</p>
		</div>
	);
}
