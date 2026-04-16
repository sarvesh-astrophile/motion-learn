import { createFileRoute } from "@tanstack/react-router";
import SVGLinearGradient from "#/components/manu/tailwindcss/9-2-linear-gradient";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main>
			<SVGLinearGradient />
		</main>
	);
}
