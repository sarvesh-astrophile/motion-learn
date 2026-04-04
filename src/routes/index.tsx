import { createFileRoute } from "@tanstack/react-router";
import AnimatedSequence2 from "../components/manu/8-animated-sequneces-2";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main className="min-h-screen! flex justify-center items-center">
      <AnimatedSequence2 />
    </main>
  );
}
