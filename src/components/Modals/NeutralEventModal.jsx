import BaseEventModal from "./BaseEventModal";
import { eventStyles } from "./getEventStyles";

export default function NeutralEventModal({ event, onClose }) {
	const { title, button } = eventStyles.neutral;

	const formattedMessage = (
		<>
			{event.message}
			<br />
			<span className="text-gray-500 italic">Nothing changes.</span>
		</>
	);

	return (
		<BaseEventModal
			event={{ ...event, message: formattedMessage }}
			onClose={onClose}
			titleClass={title}
			buttonClass={button}
		/>
	);
}
