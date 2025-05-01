// components/ui/CityControlMeter.jsx
// 📊 Displays the city support bar (clamped between -1 and 1)

import React from "react";
import { SupportBar } from "@components";

/**
 * Renders a UI bar showing public support for the player.
 * Accepts a supportValue ranging from -1 (full MegaCorp support)
 * to +1 (full Guerrilla support).
 */
export default function CityControlMeter({ supportValue = 0 }) {
	// Clamp to safe range [-1, 1] to avoid visual glitches
	const clampedSupport = Math.max(-1, Math.min(1, supportValue));

	return (
		<div className="flex flex-col items-center w-full mb-6">
			<SupportBar supportValue={clampedSupport} />
		</div>
	);
}
