// src/components/GameUI/SupportStatus.jsx

export default function SupportStatus({ supportValue }) {
	let label = "";
	let emoji = "";

	// Logic to determine status based on supportValue
	if (supportValue >= 0.8) {
		label = "Total Corporate Domination";
		emoji = "🏢";
	} else if (supportValue >= 0.6) {
		label = "Corporate Supremacy Unchallenged";
		emoji = "💼";
	} else if (supportValue >= 0.4) {
		label = "MegaCorp Economic Golden Age";
		emoji = "📈";
	} else if (supportValue >= 0.2) {
		label = "MegaCorp Maintains Order";
		emoji = "🛡️";
	} else if (supportValue > 0) {
		label = "City at Crossroads";
		emoji = "⚖️";
	} else if (supportValue > -0.2) {
		label = "Seeds of Rebellion Sprout";
		emoji = "🌱";
	} else if (supportValue > -0.4) {
		label = "The Green Tide Rises";
		emoji = "🌿";
	} else if (supportValue > -0.6) {
		label = "People Challenge the Regime";
		emoji = "✊";
	} else if (supportValue > -0.8) {
		label = "Revolution Engulfs the City";
		emoji = "🔥";
	}

	return (
		<div className="flex flex-col items-center justify-center mt-2 text-green-900 font-bold text-xl">
			<span className="text-3xl mb-1">{emoji}</span>
			<span>{label}</span>
		</div>
	);
}
