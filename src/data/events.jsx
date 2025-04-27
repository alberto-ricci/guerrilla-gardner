const badEvents = [
	{
		title: "Police Patrol",
		message: "A patrol sees something suspicious. Your stealth drops!",
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore,
			megaCorpControl,
			stealthLevel: Math.max(stealthLevel - 20, 0),
		}),
	},
	{
		title: "Corporate Drones",
		message: "Surveillance drones spot unusual activity. Stealth plummets!",
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore,
			megaCorpControl,
			stealthLevel: Math.max(stealthLevel - 30, 0),
		}),
	},
	{
		title: "Corporate Crackdown",
		message: "MegaCorp launches a crackdown. Their control strengthens!",
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore,
			megaCorpControl: Math.min(megaCorpControl + 15, 100),
			stealthLevel: Math.max(stealthLevel - 10, 0),
		}),
	},
	{
		title: "Suspicious Activity Reported",
		message: "Someone reports suspicious gardening activity. Watch out!",
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore,
			megaCorpControl: Math.min(megaCorpControl + 5, 100),
			stealthLevel: Math.max(stealthLevel - 15, 0),
		}),
	},
	{
		title: "Saboteur",
		message: "A saboteur tips off the authorities. Your stealth crumbles!",
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore,
			megaCorpControl,
			stealthLevel: Math.max(stealthLevel - 25, 0),
		}),
	},
	{
		title: "Corporate Bribes",
		message: "MegaCorp bribes locals to reveal your gardens!",
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore,
			megaCorpControl: Math.min(megaCorpControl + 10, 100),
			stealthLevel: Math.max(stealthLevel - 5, 0),
		}),
	},
];

const goodEvents = [
	{
		title: "Community Support",
		message: "Locals love your garden! MegaCorp's control weakens!",
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore,
			megaCorpControl: Math.max(megaCorpControl - 10, 0),
			stealthLevel,
		}),
	},
	{
		title: "Underground Gardeners",
		message: "An underground network helps you spread faster!",
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore: playerScore + 5,
			megaCorpControl: Math.max(megaCorpControl - 15, 0),
			stealthLevel,
		}),
	},
	{
		title: "Hidden Garden",
		message:
			"You find a perfect hidden spot. Your stealth recovers slightly!",
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore,
			megaCorpControl,
			stealthLevel: Math.min(stealthLevel + 15, 100),
		}),
	},
	{
		title: "Eco-Market Boom",
		message: "Eco-friendly gardens gain massive popularity!",
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore: playerScore + 10,
			megaCorpControl: Math.max(megaCorpControl - 20, 0),
			stealthLevel,
		}),
	},
	{
		title: "Garden Festival",
		message: "A spontaneous festival boosts your cause!",
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore: playerScore + 15,
			megaCorpControl: Math.max(megaCorpControl - 25, 0),
			stealthLevel: Math.min(stealthLevel + 10, 100),
		}),
	},
	{
		title: "Friendly Insider",
		message: "A city official turns a blind eye to your gardens!",
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore,
			megaCorpControl: Math.max(megaCorpControl - 5, 0),
			stealthLevel: Math.min(stealthLevel + 10, 100),
		}),
	},
];

const neutralEvents = [
	{
		title: "City Parade",
		message: "A massive parade clogs the streets. Everyone is distracted.",
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore,
			megaCorpControl,
			stealthLevel,
		}),
	},
	{
		title: "Heavy Rainfall",
		message: "Torrential rain keeps people indoors. It's oddly quiet.",
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore,
			megaCorpControl,
			stealthLevel,
		}),
	},
	{
		title: "Political Debate",
		message:
			"All eyes are glued to a heated political debate. No one notices you.",
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore,
			megaCorpControl,
			stealthLevel,
		}),
	},
	{
		title: "Power Outage",
		message:
			"A city-wide blackout happens. Everything feels tense but unclear.",
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore,
			megaCorpControl,
			stealthLevel,
		}),
	},
	{
		title: "Maintenance Strike",
		message: "City workers strike. Surveillance is temporarily lower.",
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore,
			megaCorpControl,
			stealthLevel,
		}),
	},
];

const events = [
	...badEvents.map((event) => ({ ...event, type: "bad" })),
	...goodEvents.map((event) => ({ ...event, type: "good" })),
	...neutralEvents.map((event) => ({ ...event, type: "neutral" })),
];

export default events;
