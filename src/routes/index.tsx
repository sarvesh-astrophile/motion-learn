import { createFileRoute } from "@tanstack/react-router";
import HooksAnimate from "../components/manu/4-hooks-animate";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main className="min-h-screen! flex justify-center items-center">
      <HooksAnimate />
    </main>
  );
}
