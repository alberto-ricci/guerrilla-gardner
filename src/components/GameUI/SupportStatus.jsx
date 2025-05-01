// components/ui/SupportStatus.jsx
// 🌡️ Displays a mood/status message with fade based on support dynamics

import { useEffect, useState } from "react";
import { useSupportMessage } from "@hooks";

export default function SupportStatus({ supportValue, supportChange }) {
	const [fade, setFade] = useState(false);
	const message = useSupportMessage(supportValue, supportChange);

	useEffect(() => {
		setFade(false);
		const timer = setTimeout(() => setFade(true), 150);
		return () => clearTimeout(timer);
	}, [supportValue, supportChange]);

	return (
		<div
			className="flex flex-col items-center justify-center mt-2 text-green-900 font-bold text-xl transition-opacity duration-500"
			style={{ opacity: fade ? 1 : 0 }}
		>
			<span className="text-3xl mb-1">{message?.emoji}</span>
			<span>{message?.label}</span>
		</div>
	);
}
