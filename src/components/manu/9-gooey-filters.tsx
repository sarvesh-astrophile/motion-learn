import { motion, type SVGMotionProps } from "motion/react";
import { useEffect, useRef, useState } from "react";

const SVGFilter = () => {
	return (
		<svg className="absolute hidden h-0 w-0">
			<title>SVG Filter</title>
			<defs>
				<filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
					<feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
					<feColorMatrix
						in="blur"
						type="matrix"
						values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
						result="goo"
					/>
					<feComposite in="SourceGraphic" in2="goo" operator="atop" />
				</filter>
			</defs>
		</svg>
	);
};

export default function GooeyFilters() {
	const [isExpanded, setIsExpanded] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const [searchText, setSearchText] = useState("");
	const buttonVariants = {
		collapsed: {
			width: 115,
			marginLeft: 0,
		},
		expanded: {
			width: 200,
			marginLeft: 50,
		},
	};

	const iconBubbleVariants = {
		collapsed: {
			scale: 0,
			opacity: 0,
		},
		expanded: {
			scale: 1,
			opacity: 1,
		},
	};
	const TRANSITION = {
		duration: 0.4,
		type: "spring" as const,
		bounce: 0.25,
	};
	useEffect(() => {
		if (isExpanded) {
			inputRef.current?.focus();
		} else {
			setSearchText("");
		}
	}, [isExpanded]);
	return (
		<div className="h-screen relative flex items-center justify-center">
			<SVGFilter />
			<div
				style={{ filter: "url(#gooey-filter)" }}
				className="relative flex items-center justify-center"
			>
				<motion.div
					variants={buttonVariants}
					initial="collapsed"
					animate={isExpanded ? "expanded" : "collapsed"}
					className="h-10 flex items-center justify-center"
					transition={TRANSITION}
				>
					<button
						type="button"
						onClick={() => setIsExpanded(!isExpanded)}
						className="h-10 px-4 w-full cursor-pointer justify-center flex gap-2 rounded-full bg-black text-white font-medium"
					>
						{!isExpanded && <SearchIcon />}
						<motion.input
							layoutId="searchInput"
							ref={inputRef}
							value={searchText}
							onChange={(e) => setSearchText(e.target.value)}
							onBlur={() => !searchText && setIsExpanded(false)}
							type="text"
							placeholder="Search..."
							className="h-full w-full bg-transparent text-sm placeholder-white/50 outline-none"
						/>
					</button>
				</motion.div>
				<motion.div
					variants={iconBubbleVariants}
					initial="collapsed"
					transition={TRANSITION}
					animate={isExpanded ? "expanded" : "collapsed"}
					className="absolute top-1/2 left-0 size-10 bg-black -translate-y-1/2 items-center justify-center flex rounded-full"
				>
					<SearchIcon className="size-4 h-full text-white" />
				</motion.div>
			</div>
		</div>
	);
}

const SearchIcon = (props: SVGMotionProps<SVGSVGElement>) => {
	return (
		<motion.svg
			layoutId="search-icon"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			className="size-5 h-full"
			{...props}
		>
			<title>Search Icon</title>
			<path
				fillRule="evenodd"
				d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
				clipRule="evenodd"
			/>
		</motion.svg>
	);
};
