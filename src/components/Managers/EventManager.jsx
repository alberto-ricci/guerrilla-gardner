// EventManager.jsx
// Conditionally renders the EventModal when an active event exists.

import { EventModal } from "@components"; // Updated to use @components alias

export default function EventManager({ activeEvent, onClose }) {
	if (!activeEvent) return null; // No event to display

	return (
		<EventModal
			event={activeEvent}
			onClose={onClose}
		/>
	);
}
