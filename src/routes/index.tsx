import { createFileRoute } from "@tanstack/react-router";
import CSSGeneration from "../components/motion/react-tutorial/1-css-spring";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main className="h-full w-full">
      <CSSGeneration />
    </main>
  );
}
