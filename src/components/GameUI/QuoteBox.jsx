// components/ui/QuoteBox.jsx
// 📜 Displays a randomly selected quote when mounted

import { useState, useEffect } from "react";
import { quoteList } from "../../data/quotes";
import QuoteDisplay from "./QuoteDisplay";

export default function QuoteBox() {
	const [quote, setQuote] = useState(quoteList[0]);

	useEffect(() => {
		const randomQuote =
			quoteList[Math.floor(Math.random() * quoteList.length)];
		setQuote(randomQuote);
	}, []);

	return (
		<QuoteDisplay
			text={quote.text}
			author={quote.author}
		/>
	);
}
