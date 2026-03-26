import { createFileRoute } from "@tanstack/react-router";
import Variants from "../components/manu/3-variants";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main className="min-h-screen! flex justify-center items-center">
      <Variants />
    </main>
  );
}
