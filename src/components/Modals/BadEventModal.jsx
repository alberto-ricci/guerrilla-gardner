import BaseEventModal from "./BaseEventModal";
import { eventStyles } from "./getEventStyles";

export default function BadEventModal({ event, onClose }) {
	const { title, button } = eventStyles.bad;

	const formattedMessage = (
		<>
			{event.message}
			<br />
			<span>
				Your stealth drops by{" "}
				<span className="text-red-600 font-bold">
					{event.stealthLoss}%
				</span>
				.
			</span>
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
