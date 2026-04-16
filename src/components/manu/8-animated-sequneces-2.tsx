import { type AnimationSequence, motion, useAnimate } from "motion/react";

export default function AnimatedSequences2() {
	const [scope, animate] = useAnimate();
	const sequence: AnimationSequence = [
		[".loader", { opacity: [0, 1], width: "2rem" }, { duration: 0.1 }],
		[".loader", { rotate: 360 * 4 }, { duration: 2 }],
		[".loader", { opacity: [1, 0], scale: 0 }, { duration: 0.1 }],
		[".text", { opacity: 0 }, { duration: 0.1 }],
		["button", { width: "5rem", borderRadius: "1000px" }, { duration: 0.3 }],
		[
			"button",
			{
				opacity: 1,
				scale: [1, 1.2, 0.8, 1],
				backgroundImage: "linear-gradient(to right, #00ff99, #00ccff)",
			},
			{ duration: 0.5 },
		],
		[".check-icon", { opacity: [0, 1] }, { duration: 0.1, at: "-0.4" }],
		[".check-icon path", { pathLength: 1 }, { duration: 0.3 }],
	];
	const startAnimation = async () => {
		await animate(sequence);
	};
	return (
		<div
			ref={scope}
			className="relative w-60 h-20 flex items-center justify-center"
		>
			<motion.button
				onClick={startAnimation}
				style={{ width: "30rem" }}
				className="h-20 rounded-lg flex items-center justify-center bg-linear-to-r from-purple-500 via-violet-600 to-indigo-500 text-white cursor-pointer font-medium"
			>
				<motion.svg
					height="24"
					width="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth={2}
					strokeLinecap="round"
					strokeLinejoin="round"
					className="loader size-5 text-white"
					initial={{ width: "0rem" }}
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M12 3a9 9 0 1 0 9 9" />
				</motion.svg>
				<span className="text">Purchase Now ($169)</span>
			</motion.button>

			<motion.svg
				fill="none"
				stroke="#FFFFFF"
				viewBox="0 0 24 24"
				strokeWidth={3}
				style={{ opacity: 0 }}
				className="check-icon size-8 absolute inset-0 m-auto z-50 pointer-events-none"
			>
				<motion.path
					initial={{
						pathLength: 0,
					}}
					transition={{
						duration: 0.3,
						type: "tween",
						ease: "easeOut",
					}}
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M5 13l4 4L19 7"
				/>
			</motion.svg>
		</div>
	);
}
