import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "#/lib/utils";

export default function Card() {
	const [open, setOpen] = useState(true);
	return (
		<AnimatePresence>
			{open && (
				<motion.div
					initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
					animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
					exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					className={cn(
						"w-78 min-h-104 h-108 rounded-xl border bg-white",
						"shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
						"p-4 flex flex-col",
					)}
				>
					<h2 className="font-bold text-xs">Aceternity UI Compoenents</h2>
					<p className="text-gray-600 mt-2 text-xs">
						A collection of beautiful UI components, let's get on with it
					</p>
					<div className="flex items-center justify-center">
						<button
							onClick={() => setOpen(false)}
							type="button"
							className={cn(
								"flex items-center gap-1 text-xs mt-4",
								"px-2 py-1 rounded-md ring-1 ring-gray-950/5",
								// "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
							)}
						>
							<img src="/logo.webp" alt="Aceternity logo" className="size-4" />
							Aceternity
							<IconX />
						</button>
					</div>
					<div className="flex-1 bg-gray-100 ring-1 ring-gray-200 mt-4 rounded-lg relative">
						<motion.div
							initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
							whileHover={{ opacity: 1, scale: 1.05, filter: "blur(0px)" }}
							transition={{ type: "spring", stiffness: 100, damping: 15 }}
							className="absolute inset-0 h-full w-full bg-white rounded-lg divide-y divide-gray-200 ring-1 ring-gray-200"
						>
							<div className="p-4 gap-2 flex">
								<div className="size-10 ring-1 ring-gray-950/5  bg-white rounded-md flex items-center justify-center shadow-sm">
									<InboxIcon />
								</div>
								<div className="flex flex-col justify-between">
									<p className="text-xs font- text-gray-600">
										Aceternity UI Compoenents
									</p>
									<p className="text-gray-400 text-xs">
										A collections of UI components
									</p>
								</div>
							</div>
							<div className="p-4 gap-2 flex">
								<div className="size-10 ring-1 ring-gray-950/5  bg-white rounded-md flex items-center justify-center shadow-sm">
									<InboxIcon />
								</div>
								<div className="flex flex-col justify-between">
									<p className="text-xs font- text-gray-600">
										24 hours turnaround
									</p>
									<p className="text-gray-400 text-xs">
										Super fast delivery at warp speed.
									</p>
								</div>
							</div>
							<div className="p-4 gap-2 flex">
								<div className="size-10 ring-1 ring-gray-950/5  bg-white rounded-md flex items-center justify-center shadow-sm">
									<InboxIcon />
								</div>
								<div className="flex flex-col justify-between">
									<p className="text-xs font- text-gray-600">
										360 days all around
									</p>
									<p className="text-gray-400 text-xs">
										We-re here to help you 24/7.
									</p>
								</div>
							</div>
							<div className="p-4 gap-2 flex">
								<div className="size-10 ring-1 ring-gray-950/5  bg-white rounded-md flex items-center justify-center shadow-sm">
									<InboxIcon />
								</div>
								<div className="flex flex-col justify-between">
									<p className="text-xs font- text-gray-600">
										Some other Compoenents
									</p>
									<p className="text-gray-400 text-xs">
										Here goes another subtitle.
									</p>
								</div>
							</div>
						</motion.div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

function IconX() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			fill="currentColor"
			className="size-3 text-gray-400"
		>
			<path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
		</svg>
	);
}

function InboxIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			className="size-4 text-gray-600"
		>
			<path
				fillRule="evenodd"
				d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 0 0-.266.112L8.78 21.53A.75.75 0 0 1 7.5 21v-3.955a48.842 48.842 0 0 1-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z"
				clipRule="evenodd"
			/>
		</svg>
	);
}
