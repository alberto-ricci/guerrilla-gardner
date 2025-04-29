// EventSystem.js

const goodEvents = [
	{
		type: "good",
		label: "Locals Join the Movement",
		icon: "📣",
		effect: "increaseSupport",
	},
	{
		type: "good",
		label: "Hidden Gardeners Appear",
		icon: "🧑‍🌾",
		effect: "autoPlant",
	},
	{
		type: "good",
		label: "Fertile Soil Found",
		icon: "🌿",
		effect: "bonusGrowth",
	},
];

const badEvents = [
	{
		type: "bad",
		label: "Surveillance Drone Overhead",
		icon: "🚨",
		effect: "loseStealth",
	},
	{
		type: "bad",
		label: "Toxic Soil Discovered",
		icon: "💀",
		effect: "plantBlocked",
	},
	{
		type: "bad",
		label: "MegaCorp Propaganda Surge",
		icon: "📺",
		effect: "decreaseSupport",
	},
];

const neutralEvents = [
	{
		type: "neutral",
		label: "Dust Storm Rolls In",
		icon: "🌀",
		effect: "freezeTurn",
	},
	{
		type: "neutral",
		label: "Public Festival",
		icon: "🎭",
		effect: "pauseBothSides",
	},
	{
		type: "neutral",
		label: "Mysterious Silence",
		icon: "❔",
		effect: "noEffect",
	},
];

export function triggerRandomEvent(category = "neutral") {
	const pool =
		category === "good"
			? goodEvents
			: category === "bad"
			? badEvents
			: neutralEvents;

	const event = pool[Math.floor(Math.random() * pool.length)];
	return event;
}
