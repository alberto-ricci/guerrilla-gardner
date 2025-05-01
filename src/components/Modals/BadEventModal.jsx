// components/Modals/modals/BadEventModal.jsx
import BaseEventModal from "./BaseEventModal";
import { eventStyles } from "./getEventStyles";

export default function BadEventModal({ event, onClose }) {
	const { title, button } = eventStyles.bad;

	return (
		<BaseEventModal
			event={event}
			onClose={onClose}
			titleClass={title}
			buttonClass={button}
		/>
	);
}
