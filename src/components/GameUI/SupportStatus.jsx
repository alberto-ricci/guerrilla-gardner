import { useState, useEffect } from "react";

export default function SupportStatus({ supportValue, supportChange }) {
	const [currentMessage, setCurrentMessage] = useState({
		label: "",
		emoji: "",
	});
	const [fade, setFade] = useState(false);

	// Ordered by severity (light ➝ intense)
	const megacorpGood = [
		{ label: "MegaCorp, Inc Maintains Order", emoji: "🛡️" }, // 0.2
		{ label: "Corporate Messaging Gains Traction", emoji: "📣" }, // 0.4
		{ label: "Corporate Supremacy Rises", emoji: "📈" }, // 0.6
		{ label: "MegaCorp, Inc's Control Feels Absolute", emoji: "🏢" }, // 0.8
	];

	const megacorpBad = [
		{ label: "MegaCorp's PR Rings Hollow", emoji: "📉" }, // 0.2
		{ label: "Faith in MegaCorp Wavers", emoji: "🧱" }, // 0.4
		{ label: "Cracks in the Corporate Machine", emoji: "🚨" }, // 0.6
		{ label: "Public Revolt Threatens Order", emoji: "📢" }, // 0.8
	];

	const guerrillaGood = [
		{ label: "Seeds of Resistance Take Root", emoji: "🌱" }, // -0.2
		{ label: "The Green Movement Spreads", emoji: "🌿" }, // -0.4
		{ label: "Gardens Blossom Across the City", emoji: "🌸" }, // -0.6
		{ label: "Citizens Rise with Rebellion", emoji: "✊" }, // -0.8
	];

	const guerrillaBad = [
		{ label: "Green Shoots Face Resistance", emoji: "🌧️" }, // -0.2
		{ label: "Support for Change Slips", emoji: "🥀" }, // -0.4
		{ label: "Rebellion Loses Momentum", emoji: "🌫️" }, // -0.6
		{ label: "Oppression Crushes the Roots", emoji: "🪓" }, // -0.8
	];

	const neutralSituations = [
		{ label: "City Caught Between Two Futures", emoji: "⚖️" },
		{ label: "Tensions Ripple Beneath the Surface", emoji: "🌆" },
		{ label: "No Clear Path Ahead", emoji: "🌫️" },
		{ label: "The Balance Teeters Unsteadily", emoji: "🧭" },
	];

	function getThresholdIndex(value) {
		if (Math.abs(value) >= 0.8) return 3;
		if (Math.abs(value) >= 0.6) return 2;
		if (Math.abs(value) >= 0.4) return 1;
		return 0; // 0.2 or lower still counts
	}

	useEffect(() => {
		setFade(false);

		const timeout = setTimeout(() => {
			const isMegaCorp = supportValue > 0.2;
			const isGuerrilla = supportValue < -0.2;
			const isNeutral = !isMegaCorp && !isGuerrilla;
			const isGrowing = supportChange >= 0;

			let selected;

			if (isMegaCorp) {
				const index = getThresholdIndex(supportValue);
				selected = isGrowing ? megacorpGood[index] : megacorpBad[index];
			} else if (isGuerrilla) {
				const index = getThresholdIndex(Math.abs(supportValue)); // ✅ needed
				selected = isGrowing
					? guerrillaGood[index]
					: guerrillaBad[index];
			} else {
				const random = Math.floor(
					Math.random() * neutralSituations.length
				);
				selected = neutralSituations[random];
			}

			setCurrentMessage(selected);
			setFade(true);
		}, 150);

		return () => clearTimeout(timeout);
	}, [supportValue, supportChange]);

	return (
		<div
			className="flex flex-col items-center justify-center mt-2 text-green-900 font-bold text-xl transition-opacity duration-500"
			style={{ opacity: fade ? 1 : 0 }}
		>
			<span className="text-3xl mb-1">{currentMessage?.emoji}</span>
			<span>{currentMessage?.label}</span>
		</div>
	);
}
