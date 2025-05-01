// components/Modals/modals/NeutralEventModal.jsx
import BaseEventModal from "./BaseEventModal";
import { eventStyles } from "./getEventStyles";

export default function NeutralEventModal({ event, onClose }) {
	const { title, button } = eventStyles.neutral;

	return (
		<BaseEventModal
			event={event}
			onClose={onClose}
			titleClass={title}
			buttonClass={button}
		/>
	);
}
