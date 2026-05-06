import { createFileRoute } from "@tanstack/react-router";
import HoverAndTapAnimation from "#/components/motion/react-tutorial/5-hover-and-tap-animation";

export const Route = createFileRoute("/motion")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex items-center justify-center min-h-screen">
			<HoverAndTapAnimation />
		</div>
	);
}
