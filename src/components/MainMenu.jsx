import { useState } from "react";
import WelcomeScreen from "./WelcomeScreen";
import LegendScreen from "./LegendScreen";

export default function MainMenu({ onStart }) {
	const [step, setStep] = useState(0);

	if (step === 0) {
		return <WelcomeScreen onNext={() => setStep(1)} />;
	} else if (step === 1) {
		return (
			<LegendScreen
				onStart={onStart}
				onBack={() => setStep(0)}
			/>
		);
	}
}
