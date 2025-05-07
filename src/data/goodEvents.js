const goodEvents = [
	{
		title: "Community Support",
		message: "Locals love your garden! MegaCorp's control weakens.",
		stealthGain: 2,
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore,
			megaCorpControl: Math.max(megaCorpControl - 6, 0),
			stealthLevel,
		}),
	},
	{
		title: "Underground Gardeners",
		message: "An underground network helps you spread faster!",
		stealthGain: 5,
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore: playerScore + 5,
			megaCorpControl: Math.max(megaCorpControl - 8, 0),
			stealthLevel,
		}),
	},
	{
		title: "Hidden Garden",
		message: "You find a perfect hidden spot.",
		stealthGain: 7,
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore,
			megaCorpControl,
			stealthLevel: Math.min(stealthLevel + 7, 100),
		}),
	},
	{
		title: "Eco-Market Boom",
		message: "Eco-friendly gardens gain massive popularity!",
		stealthGain: 0,
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore: playerScore + 10,
			megaCorpControl: Math.max(megaCorpControl - 10, 0),
			stealthLevel,
		}),
	},
	{
		title: "Garden Festival",
		message: "A spontaneous festival boosts your cause!",
		stealthGain: 5,
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore: playerScore + 15,
			megaCorpControl: Math.max(megaCorpControl - 10, 0),
			stealthLevel: Math.min(stealthLevel + 5, 100),
		}),
	},
	{
		title: "Friendly Insider",
		message: "A city official turns a blind eye.",
		stealthGain: 4,
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore,
			megaCorpControl: Math.max(megaCorpControl - 3, 0),
			stealthLevel: Math.min(stealthLevel + 4, 100),
		}),
	},
];

export default goodEvents;
