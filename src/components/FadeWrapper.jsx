import { motion } from "framer-motion";

export default function FadeWrapper({ children }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5, ease: "easeInOut" }}
			className="w-full min-h-screen flex flex-col"
		>
			{children}
		</motion.div>
	);
}
