import { motion } from "framer-motion";

export default function FadeWrapper({ children }) {
	const fadeVariants = {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
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
