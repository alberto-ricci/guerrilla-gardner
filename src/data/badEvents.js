const badEvents = [
	{
		title: "Police Patrol",
		message: "A patrol sees something suspicious.",
		stealthLoss: 7,
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore,
			megaCorpControl,
			stealthLevel: Math.max(stealthLevel - 7, 0),
		}),
	},
	{
		title: "Corporate Drones",
		message: "Surveillance drones spot unusual activity.",
		stealthLoss: 10,
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore,
			megaCorpControl,
			stealthLevel: Math.max(stealthLevel - 10, 0),
		}),
	},
	{
		title: "Corporate Crackdown",
		message: "MegaCorp launches a crackdown.",
		stealthLoss: 5,
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore,
			megaCorpControl: Math.min(megaCorpControl + 10, 100),
			stealthLevel: Math.max(stealthLevel - 5, 0),
		}),
	},
	{
		title: "Suspicious Activity Reported",
		message: "Someone reports suspicious gardening activity.",
		stealthLoss: 6,
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore,
			megaCorpControl: Math.min(megaCorpControl + 4, 100),
			stealthLevel: Math.max(stealthLevel - 6, 0),
		}),
	},
	{
		title: "Saboteur",
		message: "A saboteur tips off the authorities.",
		stealthLoss: 9,
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore,
			megaCorpControl,
			stealthLevel: Math.max(stealthLevel - 9, 0),
		}),
	},
	{
		title: "Corporate Bribes",
		message: "MegaCorp bribes locals to reveal your gardens.",
		stealthLoss: 3,
		effect: ({ playerScore, megaCorpControl, stealthLevel }) => ({
			playerScore,
			megaCorpControl: Math.min(megaCorpControl + 5, 100),
			stealthLevel: Math.max(stealthLevel - 3, 0),
		}),
	},
];

export default badEvents;
