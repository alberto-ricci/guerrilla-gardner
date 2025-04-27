import EventModal from "./EventModal";

export default function EventManager({ activeEvent, onClose }) {
	if (!activeEvent) return null;

	return (
		<EventModal
			event={activeEvent}
			onClose={onClose}
		/>
	);
}
