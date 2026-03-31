import { createFileRoute } from "@tanstack/react-router";
import Layouts from "../components/motion/react-tutorial/5-layouts";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main className="min-h-screen! flex justify-center items-center">
      <Layouts />
    </main>
  );
}
