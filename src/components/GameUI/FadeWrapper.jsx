// FadeWrapper.jsx
// A simple wrapper that fades in and out its children using Framer Motion.

import { motion } from "framer-motion";

export default function FadeWrapper({ children }) {
	// Define fade animation states
	const fadeVariants = {
		initial: { opacity: 0 }, // Start fully transparent
		animate: { opacity: 1 }, // Fade in
		exit: { opacity: 0 }, // Fade out
	};

	// Define the transition settings
	const fadeTransition = {
		duration: 0.5,
		ease: "easeInOut",
	};

	return (
		<motion.div
			variants={fadeVariants}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={fadeTransition}
			className="w-full min-h-screen flex flex-col"
		>
			{children}
		</motion.div>
	);
}
