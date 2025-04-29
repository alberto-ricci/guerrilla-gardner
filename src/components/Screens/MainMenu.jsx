// MainMenu.jsx
// Manages the initial screens (Welcome → Legend) before the player starts the game.

import { useState } from "react";
import WelcomeScreen from "./WelcomeScreen";
import LegendScreen from "./LegendScreen";

export default function MainMenu({ onStart }) {
	const [step, setStep] = useState(0);

	// Render different screens based on current step
	if (step === 0) {
		return <WelcomeScreen onNext={() => setStep(1)} />;
	}

	if (step === 1) {
		return (
			<LegendScreen
				onStart={onStart}
				onBack={() => setStep(0)}
			/>
		);
	}

	// Fallback if step becomes invalid (extra safety)
	return null;
}
