module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			animation: {
				"fade-in": "fadeIn 0.5s ease-out forwards",
				shake: "shake 1s ease",
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
			},
		},
	},
};
