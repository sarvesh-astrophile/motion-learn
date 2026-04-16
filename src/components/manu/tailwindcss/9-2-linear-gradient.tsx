const SVGLinearGradient = () => {
	return (
		<div className="w-full h-full mx-auto flex items-center justify-center">
			<div className="size-10 rounded-sm bg-neutral-100 z-20 relative overflow-hidden translate-x-6 p-px">
				<div className="w-full h-full relative z-20 bg-white rounded-sm flex items-center justify-center">
					hi
				</div>
				<div className="absolute h-full w-full inset-0 bg-[conic-gradient(at_center,transparent,var(--color-blue-500)_20%,transparent_30%)] animate-spin scale-[1.4]" />
				<div className="absolute h-full w-full inset-0 bg-[conic-gradient(at_center,transparent,var(--color-red-500)_20%,transparent_30%)] animate-spin scale-[1.4] [animattion-delay:0.4s]" />
			</div>
		</div>
	);
};

export default SVGLinearGradient;
