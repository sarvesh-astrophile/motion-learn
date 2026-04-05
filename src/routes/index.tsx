import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "../components/manu/9-portfolio";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main className="min-h-screen! flex justify-center items-center">
      <Portfolio />
    </main>
  );
}
