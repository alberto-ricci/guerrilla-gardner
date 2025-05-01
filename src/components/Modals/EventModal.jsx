// EventModal.jsx
// 🎯 Renders the correct modal type for the event

import GoodEventModal from "./GoodEventModal";
import BadEventModal from "./BadEventModal";
import NeutralEventModal from "./NeutralEventModal";

export default function EventModal({ event, onClose }) {
	if (!event) return null;

	switch (event.type) {
		case "good":
			return (
				<GoodEventModal
					event={event}
					onClose={onClose}
				/>
			);
		case "bad":
			return (
				<BadEventModal
					event={event}
					onClose={onClose}
				/>
			);
		case "neutral":
			return (
				<NeutralEventModal
					event={event}
					onClose={onClose}
				/>
			);
		default:
			return (
				<NeutralEventModal
					event={event}
					onClose={onClose}
				/>
			); // fallback
	}
}
