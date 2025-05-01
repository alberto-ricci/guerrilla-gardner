// components/ui/FadeWrapper.jsx
// 🎞️ A wrapper that animates its children with a fade-in/fade-out effect using Framer Motion

import { motion } from "framer-motion";

/**
 * Wraps children with a fade animation using Framer Motion.
 * Useful for screen transitions, modals, or overlays.
 */
export default function FadeWrapper({ children }) {
	const fadeVariants = {
		initial: { opacity: 0 }, // Fully transparent on mount
		animate: { opacity: 1 }, // Fade in to fully visible
		exit: { opacity: 0 }, // Fade out on unmount
	};

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
