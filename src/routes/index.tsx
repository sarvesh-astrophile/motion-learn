import { createFileRoute } from "@tanstack/react-router";
import EnterAnimation from "../components/motion/react-tutorial/3-enter-animation";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main className="min-h-screen!">
      <EnterAnimation />
    </main>
  );
}
