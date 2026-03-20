import { createFileRoute } from "@tanstack/react-router";
import { ReactDrag } from "../components/motion/react-tutorial/2-react-drag";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main className="min-h-screen!">
      <ReactDrag />
    </main>
  );
}
