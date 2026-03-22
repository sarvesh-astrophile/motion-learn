import { createFileRoute } from "@tanstack/react-router";
import ExitAnimation from "../components/motion/react-tutorial/4-exit-animation";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main className="min-h-screen! flex justify-center items-center">
      <ExitAnimation />
    </main>
  );
}
