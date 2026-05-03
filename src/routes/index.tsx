import { createFileRoute } from "@tanstack/react-router";
import GooeyFilters from "#/components/manu/9-gooey-filters";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main>
			<GooeyFilters />
		</main>
	);
}
