import { motion } from "motion/react";

const box = {
	width: 100,
	height: 100,
	backgroundColor: "#9911ff",
	borderRadius: 5,
};

export default function HoverAndTapAnimation() {
	return (
		<motion.div
			style={box}
			whileHover={{ scale: 1.2 }}
			whileTap={{ scale: 0.8 }}
		/>
	);
}
