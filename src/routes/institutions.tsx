import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/institutions")({
  component: InstitutionsLayout,
});

function InstitutionsLayout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground flex flex-col justify-between">
      <Nav />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
