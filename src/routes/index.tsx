import { createFileRoute } from "@tanstack/react-router";
import HoverExit from "../components/manu/2-hover-exit";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main className="min-h-screen! flex justify-center items-center">
      <HoverExit />
    </main>
  );
}
