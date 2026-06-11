import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { FlowerField } from "@/components/FlowerField";
import { Footer } from "@/components/Footer";
const yatra1 = "/images/Yatra-1.jpg";
import { detailedYatras } from "@/constants/yatras";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { API_ENDPOINTS } from "@/lib/api-config";
import { formatNormalDash } from "@/lib/utils";

import { useState } from "react";

export const Route = createFileRoute("/yatras/")({
  component: YatrasPage,
  head: () => ({
    title: "Samyam Yatras | Transformational Journeys",
    meta: [
      {
        name: "description",
        content:
          "Experience the kshetras of Bharat through our unique Yatra & Retreat programs, infused with divine spiritual practice.",
      },
    ],
  }),
});

import { useEffect } from "react";

function YatrasPage() {
  const [yatras, setYatras] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeRegion, setActiveRegion] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchYatras = async () => {
      try {
        const res = await fetch(API_ENDPOINTS.YATRAS);
        const result = await res.json();
        if (result.success && result.data && result.data.length > 0) {
          setYatras(result.data.filter((y: any) => y.isPublished));
        } else {
          setYatras(detailedYatras);
        }
      } catch (err) {
        console.error("Failed to fetch yatras:", err);
        setYatras(detailedYatras);
      } finally {
        setLoading(false);
      }
    };
    fetchYatras();
  }, []);

  const yatrasWithRegion = yatras.map((y) => {
    let region = "North"; // Default
    if (y.slug === "dwarka") region = "West";
    if (y.slug === "rameshwaram") region = "South";
    return { ...y, region };
  });

  const filteredYatras = yatrasWithRegion.filter((y) => {
    const matchesRegion = activeRegion === "All" || y.region === activeRegion;
    const matchesSearch =
      y.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      y.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground flex flex-col justify-between">
      <Nav />

      {/* HERO SECTION | Cinematic fullscreen */}
      <section
        data-nav-theme="dark"
        className="relative min-h-[75vh] flex items-end justify-center overflow-hidden"
      >
        {/* Ken Burns Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={yatra1}
            alt="Transformational Journeys"
            className="w-full h-full object-cover object-center animate-ken-burns"
          />
          {/* Multi-layer gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a1e] via-[#1a0a1e]/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a0a1e]/30 to-transparent"></div>
        </div>

        {/* Decorative floating particles */}
        <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
          <div
            className="absolute top-[20%] left-[10%] w-1.5 h-1.5 rounded-full bg-amber-400/40 animate-gentle-float"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="absolute top-[35%] right-[15%] w-1 h-1 rounded-full bg-amber-300/30 animate-gentle-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-[50%] left-[60%] w-2 h-2 rounded-full bg-purple-300/20 animate-gentle-float"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="absolute top-[15%] right-[40%] w-1 h-1 rounded-full bg-white/20 animate-gentle-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 pb-20 space-y-8">
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 animate-hero-reveal-delay">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-amber-400/60"></span>
            <span className="text-amber-400/80 text-xs font-semibold uppercase tracking-[0.3em] font-body">
              Inner Passage & Pilgrimage
            </span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-amber-400/60"></span>
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-semibold text-white tracking-tight leading-[0.9] animate-hero-reveal">
            Transformational
            <br />
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              Journeys
            </span>
          </h1>

          <p className="text-white/70 text-sm md:text-lg max-w-2xl mx-auto font-body leading-relaxed animate-hero-reveal-delay">
            Immersive programs designed to awaken your inner consciousness. Move from mere visiting
            to profound energetic reception under the guidance of scholars.
          </p>

          {/* Search Bar | Glassmorphic */}
          <div className="max-w-lg mx-auto relative mt-6 animate-hero-reveal-delay">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-white/40">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by destination or yatra themes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white placeholder:text-white/40 focus:outline-none focus:border-amber-400/40 focus:bg-white/8 transition-all text-sm font-body"
            />
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-gentle-float">
          <span className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-body">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"></div>
        </div>
      </section>

      {/* FILTERS SECTION | Glassmorphic strip */}
      <section
        data-nav-theme="light"
        className="sticky top-0 z-30 py-5 px-6 border-b border-border"
        style={{ background: "rgba(255, 255, 255, 0.85)", backdropFilter: "blur(20px)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:items-center justify-center">
          {/* Regions */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.15em] font-body shrink-0">
              Filter by Region
            </span>
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              {["All", "North", "South", "West", "East"].map((region) => (
                <button
                  key={region}
                  onClick={() => setActiveRegion(region)}
                  className={`shrink-0 px-5 py-2 rounded-xl text-[11px] font-semibold transition-all duration-300 cursor-pointer ${
                    activeRegion === region
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-[0_4px_20px_rgba(245,158,11,0.3)]"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* YATRAS LIST SECTION */}
      <section
        data-nav-theme="light"
        className="relative py-20 px-4 sm:px-6 bg-background text-foreground overflow-hidden"
      >
        <FlowerField count={12} />
        <div className="max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12">
          {filteredYatras.length > 0 ? (
            filteredYatras.map((yatra, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <ScrollReveal key={yatra.slug} variant={isEven ? "fade-left" : "fade-right"}>
                  <div className="p-6 sm:p-10 rounded-3xl bg-white border border-black/[0.06] shadow-soft hover:shadow-[0_20px_60px_-15px_rgba(92,36,94,0.1)] hover:border-amber-600/20 transition-all duration-500">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                      {/* Content Column */}
                      <div
                        className={`space-y-6 text-left lg:col-span-7 order-2 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                      >
                        <div>
                          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground leading-tight">
                            {formatNormalDash(yatra.name)}
                          </h2>
                          <div className="flex items-center gap-3 mt-2 text-xs sm:text-sm font-body font-semibold">
                            <span className="text-amber-600">{yatra.date}</span>
                            <span className="text-muted-foreground/30">•</span>
                            <span className="text-muted-foreground font-medium">
                              {yatra.duration}
                            </span>
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed font-body">
                          {yatra.desc}
                        </p>

                        {/* Occupancy Badges */}
                        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                          <div className="px-4 py-2 rounded-xl text-[10px] font-bold text-amber-700 bg-amber-500/10 border border-amber-500/20 shadow-sm flex items-center gap-2">
                            <span className="uppercase tracking-[0.1em] text-[9px] opacity-60">
                              Triple:
                            </span>
                            {yatra.triplePrice}
                          </div>
                          <div className="px-4 py-2 rounded-xl text-[10px] font-bold text-purple-700 bg-purple-500/10 border border-purple-500/20 shadow-sm flex items-center gap-2">
                            <span className="uppercase tracking-[0.1em] text-[9px] opacity-60">
                              Double:
                            </span>
                            {yatra.doublePrice}
                          </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-2">
                          <Link
                            to="/yatras/explore"
                            search={{ yatra: yatra.slug }}
                            className="px-6 py-3 bg-gradient-cta text-accent-foreground font-semibold rounded-full text-xs sm:text-sm shadow-soft hover:scale-[1.03] transition flex items-center justify-center gap-2 w-fit cursor-pointer"
                          >
                            Explore ➔
                          </Link>
                        </div>
                      </div>

                      {/* Image Column */}
                      <div
                        className={`lg:col-span-5 order-1 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                      >
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-black/[0.06] shadow-soft">
                          <img
                            src={yatra.thumbnailImage}
                            alt={yatra.name}
                            loading="lazy"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })
          ) : (
            <div className="p-16 rounded-3xl bg-muted border border-border text-center">
              <span className="text-4xl mb-4 block">✨</span>
              <p className="text-muted-foreground font-body text-sm">
                No transformational journeys found matching your filters.
              </p>
            </div>
          )}
        </div>

        {/* Results counter */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <span className="w-16 h-px bg-border"></span>
          <span className="text-muted-foreground text-xs font-body tracking-wider">
            {filteredYatras.length} of {yatrasWithRegion.length} journeys available
          </span>
          <span className="w-16 h-px bg-border"></span>
        </div>
      </section>

      {/* YOUR JOURNEY, YOUR WAY */}
      <section
        data-nav-theme="dark"
        className="relative py-20 px-4 sm:px-6 bg-gradient-to-b from-[#823883] to-[#3D0068] text-white overflow-hidden border-t border-white/5"
      >
        <FlowerField count={6} />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <ScrollReveal variant="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-white">
              Your Journey, Your Way
            </h2>
            <p className="text-white/70 mt-4 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
              Choose the experience that resonates with your spiritual intent and inner calling.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
            {[
              {
                i: "🧘",
                t: "Individual Yatra",
                d: "A personal journey of transformation, crafted for your unique spiritual path.",
              },
              {
                i: "👨‍👩‍👧‍👦",
                t: "Family Yatra",
                d: "Create sacred memories together with a journey designed for families.",
              },
              {
                i: "🏢",
                t: "Corporate Immersion",
                d: "Team retreats that combine spiritual awakening with team building.",
              },
            ].map((c, idx) => (
              <ScrollReveal key={c.t} variant="fade-up" delay={idx * 150} className="h-full">
                <Link
                  to="/enquire"
                  className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 shadow-soft hover:shadow-glow hover:border-amber-400/40 transition-all duration-300 block h-full"
                >
                  <div className="text-4xl">{c.i}</div>
                  <h3 className="text-2xl text-white mt-4 font-display font-semibold">{c.t}</h3>
                  <p className="text-xs sm:text-sm text-white/70 mt-2 leading-relaxed font-body">
                    {c.d}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
