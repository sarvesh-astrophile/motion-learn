import { motion, stagger, useAnimate } from "motion/react";
import { useEffect } from "react";

export default function AnimatedSequences1() {
	const [scope, animate] = useAnimate();
	useEffect(() => {
		const startAnimating = () => {
			animate(
				"span",
				{ opacity: 1, filter: "blur(0px)", y: 0 },
				{ duration: 0.5, ease: "easeInOut", delay: stagger(0.02) },
			);
		};
		startAnimating();
	}, [animate]);

	const text =
		"Welcome to Fight Club. The first rule of Fight Club is that you don't talk about Fight Club. The second rule is that you don't talk about Fight Club. ";
	return (
		<div
			ref={scope}
			className="text-white max-w-4xl mx-auto font-bold text-2xl"
		>
			{text.split(" ").map((word, idx) => (
				<motion.span
					key={word + idx}
					style={{ opacity: 0, filter: "blur(10px)", y: 10 }}
					className="inline-block"
				>
					{word} &nbsp;
				</motion.span>
			))}
		</div>
	);
}
