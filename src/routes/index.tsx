import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/manu/6-layout-part-2";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main className="min-h-screen! flex justify-center items-center">
      <Navbar />
    </main>
  );
}
