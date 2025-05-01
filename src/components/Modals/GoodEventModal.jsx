// components/Modals/modals/GoodEventModal.jsx
import BaseEventModal from "./BaseEventModal";
import { eventStyles } from "./getEventStyles";

export default function GoodEventModal({ event, onClose }) {
	const { title, button } = eventStyles.good;

	return (
		<BaseEventModal
			event={event}
			onClose={onClose}
			titleClass={title}
			buttonClass={button}
		/>
	);
}
