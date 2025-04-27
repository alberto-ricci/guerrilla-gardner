import { useState } from "react";
import events from "../data/events";

export default function useEventManager(onVictory, onDefeat) {
	const GOOD_EVENT_CHANCE = 0.2;
	const BAD_EVENT_CHANCE = 0.4;
	const NEUTRAL_EVENT_CHANCE = 0.3;

	const [activeEvent, setActiveEvent] = useState(null);

	const categorizedEvents = {
		good: events.filter((e) => e.type === "good"),
		bad: events.filter((e) => e.type === "bad"),
		neutral: events.filter((e) => e.type === "neutral"),
	};

	const getEventListByRoll = (roll) => {
		if (roll < GOOD_EVENT_CHANCE) return categorizedEvents.good;
		if (roll < GOOD_EVENT_CHANCE + BAD_EVENT_CHANCE)
			return categorizedEvents.bad;
		if (roll < GOOD_EVENT_CHANCE + BAD_EVENT_CHANCE + NEUTRAL_EVENT_CHANCE)
			return categorizedEvents.neutral;
		return [];
	};

	// ✨ Accepts cellType too!
	const triggerRandomEvent = (currentState, setStateCallbacks, cellType) => {
		// 💡 Only trigger events if cellType is "abandoned"
		if (cellType !== "abandoned") return;

		const roll = Math.random();
		const eventList = getEventListByRoll(roll);

		if (eventList.length === 0) return;

		const randomEvent =
			eventList[Math.floor(Math.random() * eventList.length)];
		applyEvent(randomEvent, currentState, setStateCallbacks);
	};

	const applyEvent = (
		event,
		{ playerScore, megaCorpControl, stealthLevel },
		setStateCallbacks
	) => {
		setActiveEvent(event);

		const newState = event.effect({
			playerScore,
			megaCorpControl,
			stealthLevel,
		});
		setStateCallbacks(newState);

		if (newState.megaCorpControl === 0) onVictory();
		if (newState.stealthLevel <= 0) onDefeat("megacorp");
	};

	const closeEvent = () => {
		setActiveEvent(null);
	};

	return { activeEvent, triggerRandomEvent, closeEvent };
}
