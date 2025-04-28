module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			animation: {
				"fade-in": "fadeIn 0.5s ease-out forwards",
				shake: "shake 1s ease",
				pulseSlow: "pulse 2s infinite",
				glowGreen: "glowGreen 2s infinite",
				glowRed: "glowRed 2s infinite",
				bump: "bump 0.3s ease-in-out",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
				shake: {
					"0%, 100%": { transform: "translateX(0)" },
					"20%": { transform: "translateX(-5px)" },
					"40%": { transform: "translateX(5px)" },
					"60%": { transform: "translateX(-5px)" },
					"80%": { transform: "translateX(5px)" },
				},
				scale: {
					98: "0.98",
					102: "1.02",
					105: "1.05",
				},
				transitionProperty: {
					size: "width, height",
				},
				glowGreen: {
					"0%, 100%": { boxShadow: "0 0 10px #22c55e" }, // green-500
					"50%": { boxShadow: "0 0 20px #22c55e" },
				},
				glowRed: {
					"0%, 100%": { boxShadow: "0 0 10px #ef4444" }, // red-500
					"50%": { boxShadow: "0 0 20px #ef4444" },
				},
			},
		},
	},
};
