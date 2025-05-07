import BaseEventModal from "./BaseEventModal";
import { eventStyles } from "./getEventStyles";

export default function GoodEventModal({ event, onClose }) {
	const { title, button } = eventStyles.good;

	const formattedMessage = (
		<>
			{event.message}
			{event.stealthGain > 0 && (
				<>
					<br />
					<span>
						Your stealth recovers by{" "}
						<span className="text-green-600 font-bold">
							{event.stealthGain}%
						</span>
						.
					</span>
				</>
			)}
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
