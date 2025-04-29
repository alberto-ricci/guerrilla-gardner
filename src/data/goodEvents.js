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

export default goodEvents;
