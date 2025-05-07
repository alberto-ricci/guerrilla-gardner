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
		message:
			"City workers strike. Surveillance is temporarily lower. But not enough to matter.",
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore,
			megaCorpControl,
			stealthLevel,
		}),
	},
];

export default neutralEvents;
