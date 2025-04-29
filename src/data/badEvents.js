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

export default badEvents;
