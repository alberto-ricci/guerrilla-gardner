// useEventManager.jsx
// Custom hook to manage random in-game events when planting in abandoned lots.

import { useState } from "react";
import events from "../data"; // Import the full event list

export default function useEventManager(onVictory, onDefeat) {
	// Probabilities for different event types
	const EVENT_PROBABILITIES = {
		good: 0.2,
		bad: 0.4,
		neutral: 0.3,
	};

	const [activeEvent, setActiveEvent] = useState(null);

	// Categorize events by type once
	const categorizedEvents = {
		good: events.filter((e) => e.type === "good"),
		bad: events.filter((e) => e.type === "bad"),
		neutral: events.filter((e) => e.type === "neutral"),
	};

	/**
	 * Get the appropriate list of events based on a random roll
	 * @param {number} roll - A random number between 0 and 1
	 * @returns {Array} - List of events matching the probability
	 */
	const getEventListByRoll = (roll) => {
		const { good, bad, neutral } = EVENT_PROBABILITIES;
		if (roll < good) return categorizedEvents.good;
		if (roll < good + bad) return categorizedEvents.bad;
		if (roll < good + bad + neutral) return categorizedEvents.neutral;
		return []; // fallback (should rarely happen)
	};

	/**
	 * Attempt to trigger a random event when planting in a cell
	 * @param {Object} currentState - Current player stats
	 * @param {Function} setStateCallbacks - Function to update stats
	 * @param {string} cellType - The type of the planted cell
	 */
	const triggerRandomEvent = (currentState, setStateCallbacks, cellType) => {
		if (cellType !== "abandoned") return; // Only trigger events on abandoned lots

		const roll = Math.random();
		const eventList = getEventListByRoll(roll);

		if (eventList.length === 0) return; // No valid events to trigger

		const randomEvent =
			eventList[Math.floor(Math.random() * eventList.length)];
		applyEvent(randomEvent, currentState, setStateCallbacks);
	};

	/**
	 * Apply an event's effects to the game state
	 * @param {Object} event - Event object selected
	 * @param {Object} currentState - Player stats
	 * @param {Function} setStateCallbacks - Function to apply new stats
	 */
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

		if (newState.stealthLevel <= 0) {
			onDefeat("megacorp");
		}
	};

	/**
	 * Close the currently active event modal
	 */
	const closeEvent = () => {
		setActiveEvent(null);
	};

	return { activeEvent, triggerRandomEvent, closeEvent };
}
