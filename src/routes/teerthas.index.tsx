import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { FlowerField } from "@/components/FlowerField";
import { Footer } from "@/components/Footer";
import { useState } from "react";
const teerthas1 = "/images/teerthas1.jpg";
import { Mail, Phone, MapPin, Sparkles, Loader2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { formatNormalDash } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/teerthas/")({
  component: TeerthasPage,
  head: () => ({
    title: "Sacred Teerthas | Samyam Spiritual Tourism",
    meta: [
      {
        name: "description",
        content:
          "The sacred geography of Bharat is intelligent and alive. Each kshetra awakens something precise in you.",
      },
    ],
  }),
});

import { API_ENDPOINTS } from "@/lib/api-config";
import { useEffect } from "react";

function TeerthasPage() {
  const [teerthas, setTeerthas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeRegion, setActiveRegion] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSignificance, setActiveSignificance] = useState("All");

  useEffect(() => {
    const fetchTeerthas = async () => {
      try {
        const res = await fetch(API_ENDPOINTS.TEERTHAS);
        const result = await res.json();
        if (result.success && result.data && result.data.length > 0) {
          setTeerthas(result.data.filter((t: any) => t.isPublished));
        }
      } catch (err) {
        console.error("Failed to fetch teerthas:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTeerthas();
  }, []);

  const regions = ["All", "North", "East", "West", "South"];

  const categories = ["All", "Jyotirlinga", "Char Dham", "Krishna", "Sai Baba"];

  const getCategory = (significance = "") => {
    const s = significance.toLowerCase();

    if (s.includes("jyotirlinga")) return "Jyotirlinga";
    if (s.includes("char dham") || s.includes("four char dhams")) return "Char Dham";
    if (s.includes("krishna")) return "Krishna";
    if (s.includes("sai baba")) return "Sai Baba";

    return "Other";
  };

  const filteredTeerthas = teerthas.filter((teertha) => {
    const matchesCategory =
      activeSignificance === "All" || getCategory(teertha.significance) === activeSignificance;

    const matchesRegion = activeRegion === "All" || teertha.region === activeRegion;

    const search = searchTerm.toLowerCase();

    const matchesSearch =
      !search ||
      teertha.name?.toLowerCase().includes(search) ||
      teertha.region?.toLowerCase().includes(search) ||
      teertha.significance?.toLowerCase().includes(search) ||
      teertha.description?.toLowerCase().includes(search) ||
      teertha.tagline?.toLowerCase().includes(search);

    return matchesCategory && matchesRegion && matchesSearch;
  });

  const exploreOtherTeerthas = teerthas.slice(0, 10).map((t) => ({
    name: t.name,
    slug: t.slug,
    img: t.thumbnailImage || t.img,
  }));

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />

      {/* HERO SECTION | Cinematic fullscreen */}
      <section
        data-nav-theme="dark"
        className="relative min-h-[85vh] flex items-end justify-center overflow-hidden"
      >
        {/* Ken Burns Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={teerthas1}
            alt="Sacred Teerthas"
            className="w-full h-full object-cover object-center animate-ken-burns"
          />
          {/* Multi-layer gradient for depth */}
          <div className="absolute inset-0 bg-linear-to-t from-[#1a0a1e] via-[#1a0a1e]/40 to-transparent"></div>
          <div className="absolute inset-0 bg-linear-to-r from-[#1a0a1e]/30 to-transparent"></div>
        </div>

        {/* Decorative floating particles */}
        <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
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
            <span className="w-12 h-px bg-linear-to-r from-transparent to-amber-400/60"></span>
            <span className="text-amber-400/80 text-xs font-semibold uppercase tracking-[0.3em] font-body">
              Sacred Geography of Bharat
            </span>
            <span className="w-12 h-px bg-linear-to-l from-transparent to-amber-400/60"></span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-semibold text-white tracking-tight leading-[0.9] animate-hero-reveal">
            Sacred
            <br />
            <span className="bg-linear-to-r from-amber-200 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              Teerthas
            </span>
          </h1>

          <p className="text-white/70 text-sm md:text-lg max-w-2xl mx-auto font-body leading-relaxed animate-hero-reveal-delay">
            Each kshetra awakens something precise in you. The land remembers, the rivers carry
            wisdom, and the temples hold frequencies that transform.
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
              placeholder="Search by region, deity, or sacred story..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white placeholder:text-white/40 focus:outline-none focus:border-amber-400/40 focus:bg-white/8 transition-all text-sm font-body"
            />
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-gentle-float">
          <span className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-body">
            Scroll
          </span>
          <div className="w-px h-8 bg-linear-to-b from-white/30 to-transparent"></div>
        </div>
      </section>

      {/* FILTERS SECTION | Glassmorphic strip */}
      <section
        data-nav-theme="light"
        className="sticky top-0 z-30 py-5 px-6 border-b border-border"
        style={{ background: "rgba(255, 255, 255, 0.85)", backdropFilter: "blur(20px)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:items-center">
          {/* Regions */}
          <div className="flex items-center gap-3 flex-1">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.15em] font-body shrink-0">
              Region
            </span>
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              {regions.slice(0, 5)?.map((region) => (
                <button
                  key={region}
                  onClick={() => setActiveRegion(region)}
                  className={`shrink-0 px-5 py-2 rounded-xl text-[11px] font-semibold transition-all duration-300 cursor-pointer ${
                    activeRegion === region
                      ? "bg-linear-to-r from-amber-500 to-orange-500 text-white shadow-[0_4px_20px_rgba(245,158,11,0.3)]"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:block w-px h-6 bg-border"></div>

          {/* Significance */}
          <div className="flex items-center gap-3 flex-1">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.15em] font-body shrink-0">
              Type
            </span>
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              {categories.slice(0, 5).map((sig) => (
                <button
                  key={sig}
                  onClick={() => setActiveSignificance(sig)}
                  className={`shrink-0 px-5 py-2 rounded-xl text-[11px] font-semibold transition-all duration-300 cursor-pointer ${
                    activeSignificance === sig
                      ? "bg-linear-to-r from-amber-500 to-orange-500 text-white shadow-[0_4px_20px_rgba(245,158,11,0.3)]"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  }`}
                >
                  {sig}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEERTHAS GRID | Premium cards */}
      <section
        data-nav-theme="light"
        className="px-6 py-20 max-w-7xl mx-auto bg-background text-foreground"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeerthas.map((teertha, idx) => (
            <ScrollReveal
              key={teertha.name + idx}
              variant="fade-up"
              delay={(idx % 3) * 150}
              className="h-full"
            >
              <div className="group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-soft border border-border bg-white h-full flex flex-col justify-between">
                {/* Image with parallax hover */}
                <div className="aspect-4/3 overflow-hidden relative flex-1">
                  <img
                    src={teertha.img}
                    alt={teertha.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer" />

                  {/* Tags - floating over image */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white/90 rounded-lg bg-white/10 backdrop-blur-md border border-white/10">
                      {teertha.region}
                    </span>
                  </div>

                  {/* Duration badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 text-[10px] font-bold text-amber-300/90 rounded-lg bg-amber-400/10 backdrop-blur-md border border-amber-400/10">
                      {teertha.duration}
                    </span>
                  </div>

                  {/* Bottom content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl md:text-3xl font-display font-semibold text-white leading-tight mb-2 group-hover:text-amber-100 transition-colors">
                      {formatNormalDash(teertha.name)}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-[9px] font-bold text-amber-300/80 uppercase tracking-wider flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-amber-400"></span>
                        Triple: {teertha.triplePrice}
                      </span>
                      <span className="text-[9px] font-bold text-amber-300/80 uppercase tracking-wider flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-amber-400"></span>
                        Double: {teertha.doublePrice}
                      </span>
                    </div>
                    <p className="text-sm text-white/60 font-body leading-relaxed line-clamp-2 group-hover:text-white/80 transition-colors">
                      {teertha.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom action bar */}
                <div className="px-6 py-4 flex items-center justify-between border-t border-border bg-muted/40">
                  <Link
                    to="/teerthas/explore"
                    search={{ teertha: teertha.slug }}
                    className="inline-flex items-center gap-2 text-[11px] font-bold text-amber-600 hover:text-amber-700 transition-colors group/link uppercase tracking-wider"
                  >
                    Explore Journey
                    <span className="group-hover/link:translate-x-1.5 transition-transform duration-300">
                      →
                    </span>
                  </Link>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                    <span className="text-[10px] text-muted-foreground font-body">Available</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Results counter */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <span className="w-16 h-px bg-border"></span>
          <span className="text-muted-foreground text-xs font-body tracking-wider">
            {filteredTeerthas.length} of {teerthas.length} sacred destinations
          </span>
          <span className="w-16 h-px bg-border"></span>
        </div>
      </section>

      {/* EXPLORE OTHER TEERTHAS | Immersive gallery */}
      <section data-nav-theme="light" className="relative py-28 px-6 bg-[#faf7f5] overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-200 rounded-full bg-linear-to-b from-amber-100/30 to-transparent blur-3xl"></div>
          <FlowerField count={3} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-20 space-y-5">
              <span className="text-[11px] font-bold text-amber-600/70 uppercase tracking-[0.3em] font-body">
                Discover More
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-semibold text-[#2a1030] leading-tight">
                Explore Other
                <br />
                <span className="bg-linear-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                  Sacred Destinations
                </span>
              </h2>
              <p className="text-[#5c245e]/60 text-sm md:text-base max-w-xl mx-auto font-body leading-relaxed">
                Each land holds a unique spiritual frequency. Discover the teertha that calls to
                your soul.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {exploreOtherTeerthas.map((item, idx) => {
              // Card content shared between Link and Dialog
              const cardContent = (
                <div className="group relative rounded-2xl overflow-hidden aspect-3/4 cursor-pointer h-full">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <h4 className="text-sm md:text-base font-display font-semibold text-white leading-tight group-hover:text-amber-100 transition-colors">
                      {formatNormalDash(item.name)}
                    </h4>
                    <span className="text-[10px] text-white/50 font-body mt-1 group-hover:text-white/70 transition-colors uppercase tracking-wider">
                      Tap to explore →
                    </span>
                  </div>

                  {/* Hover border glow */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-amber-400/30 transition-colors duration-500"></div>
                </div>
              );

              // If item has a slug with a matching detail page, link directly
              const innerBlock = item.slug ? (
                <Link
                  to="/teerthas/explore"
                  search={{ teertha: item.slug }}
                  className="block h-full"
                >
                  {cardContent}
                </Link>
              ) : (
                <Dialog>
                  <DialogTrigger asChild>{cardContent}</DialogTrigger>
                  <DialogContent className="sm:max-w-md bg-background/95 backdrop-blur-2xl border-accent/20 rounded-[2.5rem] overflow-hidden p-0 shadow-glow">
                    <div className="relative">
                      <div className="h-2 w-full bg-gradient-cta" />
                      <div className="p-8 space-y-8">
                        <DialogHeader>
                          <DialogTitle className="text-3xl md:text-4xl font-display font-semibold text-primary text-center">
                            Explore {item.name}
                          </DialogTitle>
                          <DialogDescription className="text-center text-muted-foreground pt-2">
                            This destination is coming soon. Express your interest below.
                          </DialogDescription>
                        </DialogHeader>

                        <div className="grid gap-5">
                          <Link
                            to="/custom-yatra"
                            className="group flex items-center gap-5 p-6 rounded-3xl bg-card border border-border shadow-soft hover:shadow-glow hover:border-accent/40 transition-all duration-300"
                          >
                            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                              <Sparkles className="w-7 h-7" />
                            </div>
                            <div className="text-left flex-1">
                              <h5 className="text-xl font-display font-semibold text-primary">
                                Customize your Yatra
                              </h5>
                              <p className="text-sm text-muted-foreground">
                                Design a personalized spiritual experience
                              </p>
                            </div>
                            <span className="text-accent group-hover:translate-x-1 transition-transform">
                              →
                            </span>
                          </Link>

                          <div className="pt-6 border-t border-border/50">
                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent text-center mb-5">
                              Or speak with our team
                            </p>
                            <div className="grid grid-cols-1 gap-3">
                              <a
                                href="mailto:samyamspirituals@gmail.com"
                                className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 border border-border/50 hover:bg-white hover:border-accent/20 transition-all group"
                              >
                                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:text-accent transition-colors">
                                  <Mail className="w-5 h-5" />
                                </div>
                                <span className="text-sm font-medium text-primary/80 group-hover:text-primary transition-colors">
                                  samyamspirituals@gmail.com
                                </span>
                              </a>
                              <div className="flex gap-3">
                                <a
                                  href="tel:+919035225375"
                                  className="flex-1 flex items-center gap-4 p-4 rounded-2xl bg-white/50 border border-border/50 hover:bg-white hover:border-accent/20 transition-all group"
                                >
                                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:text-accent transition-colors">
                                    <Phone className="w-5 h-5" />
                                  </div>
                                  <span className="text-sm font-medium text-primary/80 group-hover:text-primary transition-colors">
                                    +91 9035225375
                                  </span>
                                </a>
                                <a
                                  href="https://wa.me/919035225375"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-600 hover:bg-green-500 hover:text-white transition-all shadow-sm"
                                  title="WhatsApp"
                                >
                                  <svg
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.432h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              );
              return (
                <ScrollReveal
                  key={item.name + idx}
                  variant="fade-up"
                  delay={(idx % 5) * 100}
                  className="h-full"
                >
                  {innerBlock}
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA | Dramatic gradient */}
      <section
        data-nav-theme="dark"
        className="relative py-32 px-6 text-center overflow-hidden bg-linear-to-b from-[#823883] to-[#3D0068]"
      >
        {/* Animated background orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-[#5c245e]/20 blur-[120px] animate-gentle-float"></div>
          <div
            className="absolute top-1/3 left-1/4 w-75 h-75 rounded-full bg-amber-500/5 blur-[80px] animate-gentle-float"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-10">
          <ScrollReveal variant="fade-up">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-16 h-px bg-linear-to-r from-transparent to-amber-400/40"></span>
              <span className="text-amber-400/60 text-xs uppercase tracking-[0.3em] font-body">
                Begin Your Pilgrimage
              </span>
              <span className="w-16 h-px bg-linear-to-l from-transparent to-amber-400/40"></span>
            </div>

            <h2 className="text-5xl md:text-7xl font-display font-semibold text-white leading-[0.95]">
              Ready to Begin
              <br />
              <span className="bg-linear-to-r from-amber-200 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                Your Journey?
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={150}>
            <p className="text-white/50 text-base md:text-lg font-body max-w-xl mx-auto leading-relaxed">
              Let us help you choose the perfect teertha aligned with your spiritual intent and
              inner calling.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="scale-up" delay={300}>
            <div className="pt-4">
              <Link
                to="/enquire"
                className="inline-flex items-center gap-4 px-12 py-5 bg-linear-to-r from-amber-500 to-orange-500 text-white font-bold rounded-2xl shadow-[0_8px_40px_-8px_rgba(245,158,11,0.4)] hover:shadow-[0_12px_50px_-8px_rgba(245,158,11,0.6)] hover:scale-[1.03] transition-all duration-300 text-base tracking-wide cursor-pointer"
              >
                Plan My Yatra
                <span className="text-lg">→</span>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-in" delay={450}>
            <p className="text-white/25 text-xs font-body pt-4">
              No commitment required • Personalized guidance • Sacred timing considered
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
