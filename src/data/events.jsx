const events = [
	// Bad Events
	{
		title: "Police Patrol",
		type: "bad",
		message: "A patrol sees something suspicious. Your stealth drops!",
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore,
			megaCorpControl,
			stealthLevel: Math.max(stealthLevel - 20, 0),
		}),
	},
	{
		title: "Corporate Drones",
		type: "bad",
		message: "Surveillance drones spot unusual activity. Stealth plummets!",
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore,
			megaCorpControl,
			stealthLevel: Math.max(stealthLevel - 30, 0),
		}),
	},
	{
		title: "Corporate Crackdown",
		type: "bad",
		message: "MegaCorp launches a crackdown. Their control strengthens!",
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore,
			megaCorpControl: Math.min(megaCorpControl + 15, 100),
			stealthLevel: Math.max(stealthLevel - 10, 0),
		}),
	},
	{
		title: "Suspicious Activity Reported",
		type: "bad",
		message: "Someone reports suspicious gardening activity. Watch out!",
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore,
			megaCorpControl: Math.min(megaCorpControl + 5, 100),
			stealthLevel: Math.max(stealthLevel - 15, 0),
		}),
	},
	{
		title: "Saboteur",
		type: "bad",
		message: "A saboteur tips off the authorities. Your stealth crumbles!",
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore,
			megaCorpControl,
			stealthLevel: Math.max(stealthLevel - 25, 0),
		}),
	},

	// Good Events
	{
		title: "Community Support",
		type: "good",
		message: "Locals love your garden! MegaCorp's control weakens!",
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore,
			megaCorpControl: Math.max(megaCorpControl - 10, 0),
			stealthLevel,
		}),
	},
	{
		title: "Underground Gardeners",
		type: "good",
		message: "An underground network helps you spread faster!",
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore: playerScore + 5,
			megaCorpControl: Math.max(megaCorpControl - 15, 0),
			stealthLevel,
		}),
	},
	{
		title: "Hidden Garden",
		type: "good",
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
		type: "good",
		message: "Eco-friendly gardens gain massive popularity!",
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore: playerScore + 10,
			megaCorpControl: Math.max(megaCorpControl - 20, 0),
			stealthLevel,
		}),
	},
	{
		title: "Garden Festival",
		type: "good",
		message: "A spontaneous festival boosts your cause!",
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore: playerScore + 15,
			megaCorpControl: Math.max(megaCorpControl - 25, 0),
			stealthLevel: Math.min(stealthLevel + 10, 100),
		}),
	},

	// Neutral Events
	{
		title: "City Parade",
		type: "neutral",
		message: "A massive parade clogs the streets. Everyone is distracted.",
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore,
			megaCorpControl,
			stealthLevel,
		}),
	},
	{
		title: "Heavy Rainfall",
		type: "neutral",
		message: "Torrential rain keeps people indoors. It's oddly quiet.",
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore,
			megaCorpControl,
			stealthLevel,
		}),
	},
	{
		title: "Political Debate",
		type: "neutral",
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
		type: "neutral",
		message:
			"A city-wide blackout happens. Everything feels tense but unclear.",
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore,
			megaCorpControl,
			stealthLevel,
		}),
	},
];

export default events;
