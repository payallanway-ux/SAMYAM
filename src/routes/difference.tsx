import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { differences } from "@/constants/landing-page";
import { FlowerField } from "@/components/FlowerField";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const Route = createFileRoute("/difference")({
  component: DifferencePage,
  head: () => ({
    title: "The Samyam Difference | Spiritual Travel",
    meta: [
      {
        name: "description",
        content: "Learn what sets Samyam apart in spiritual travel and sacred geography curation.",
      },
    ],
  }),
});

function DifferencePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground flex flex-col justify-between">
      <Nav />

      {/* DIFFERENCE */}
      <section
        id="difference"
        data-nav-theme="light"
        className="relative py-32 px-6 bg-background text-foreground overflow-hidden"
      >
        <FlowerField count={6} />
        <div className="relative max-w-6xl mx-auto">
          <ScrollReveal variant="fade-up">
            <p className="text-sm tracking-[0.3em] uppercase text-amber-600 text-center mb-3 font-semibold">
              The Samyam Difference
            </p>
            <h2 className="text-4xl md:text-5xl text-center text-foreground font-display leading-tight">
              What sets us apart in spiritual travel
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {differences.map((d, idx) => (
              <ScrollReveal key={d.t} variant="scale-up" delay={idx * 100}>
                <div className="p-8 rounded-3xl bg-white border border-black/[0.06] shadow-soft text-center hover:border-amber-600/30 hover:bg-muted hover:-translate-y-1 transition-all duration-300 font-body h-full">
                  <div className="text-5xl mb-4">{d.icon}</div>
                  <h3 className="text-xl text-foreground font-display mb-2">{d.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
