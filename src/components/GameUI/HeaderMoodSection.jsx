// components/layout/HeaderMoodSection.jsx
// 🎭 Displays the city's support mood, bar, and political labels

import { CityControlMeter, SupportStatus, SupportLabels } from "@components";

export default function HeaderMoodSection({ supportValue, supportChange }) {
	return (
		<>
			{/* City Support Status Indicator */}
			<div className="mb-4">
				<SupportStatus
					supportValue={supportValue}
					supportChange={supportChange}
				/>
			</div>

			{/* City Mood Bar */}
			<div className="mb-4">
				<CityControlMeter supportValue={supportValue} />
			</div>

			{/* Support Spectrum Labels */}
			<div className="mb-4">
				<SupportLabels />
			</div>
		</>
	);
}
