import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { z } from "zod";
import { Nav } from "@/components/Nav";
import { FlowerField } from "@/components/FlowerField";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { API_ENDPOINTS } from "@/lib/api-config";
import { formatNormalDash } from "@/lib/utils";
import { Loader2, X, ChevronLeft, ChevronRight } from "lucide-react";

const exploreSearchSchema = z.object({
  teertha: z.string().optional(),
});

export const Route = createFileRoute("/teerthas/explore")({
  validateSearch: exploreSearchSchema,
  component: ExploreTeerthasPage,
  head: () => ({
    title: "Explore Teertha | Samyam Spiritual Tourism",
    meta: [
      {
        name: "description",
        content:
          "Explore the deep spiritual itinerary, inclusions, and sacred darshans for Samyam's curated teertha journeys.",
      },
    ],
  }),
});

function GalleryLightbox({
  images,
  startIndex,
  onClose,
}: {
  images: string[];
  startIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white/80 hover:text-white transition p-2 cursor-pointer"
        onClick={onClose}
        aria-label="Close gallery"
      >
        <X size={28} />
      </button>

      {images.length > 1 && (
        <>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition p-2 bg-white/10 rounded-full cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition p-2 bg-white/10 rounded-full cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </>
      )}

      <img
        src={images[current]}
        alt={`Gallery image ${current + 1}`}
        className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      {images.length > 1 && (
        <div className="absolute bottom-6 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setCurrent(i);
              }}
              className={`w-2 h-2 rounded-full transition cursor-pointer ${
                i === current ? "bg-amber-400 scale-125" : "bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ExploreTeerthasPage() {
  const search = Route.useSearch();
  const initialSlug = search.teertha || "kashi";

  const [teertha, setTeertha] = useState<any>(null);
  const [selectedTeertha, setSelectedTeertha] = useState(initialSlug);
  const [activeSubTab, setActiveSubTab] = useState<"overview" | "itinerary" | "prep">("itinerary");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchTeertha = async () => {
      try {
        const res = await fetch(`${API_ENDPOINTS.TEERTHAS}/${selectedTeertha}`);
        const result = await res.json();
        if (result.success) {
          setTeertha(result.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchTeertha();
  }, [selectedTeertha]);

  useEffect(() => {
    if (search.teertha) {
      setSelectedTeertha(search.teertha);
    }
  }, [search.teertha]);

  const activeTeertha = teertha;
  const allTeerthas = [teertha];

  // All images: hero + gallery
  const allGalleryImages: string[] = activeTeertha
    ? [activeTeertha.img, ...(activeTeertha.galleryImages || [])]
    : [];

  if (!activeTeertha) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 size={40} />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          images={allGalleryImages}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      {/* HERO SECTION */}
      <section
        data-nav-theme="dark"
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={activeTeertha.img}
            alt={activeTeertha.name}
            className="w-full h-full object-cover object-center transition-all duration-700 filter brightness-75"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#1a0a1e] via-[#1a0a1e]/40 to-[#1a0a1e]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
          <ScrollReveal variant="fade-in" delay={100}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-200 text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              {activeTeertha.tagline}
            </span>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={250}>
            <h1 className="text-4xl md:text-6xl font-display font-semibold text-white tracking-wide leading-tight">
              {formatNormalDash(activeTeertha.name, "text-white/50")}
            </h1>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={400}>
            <p className="text-white/80 text-xs md:text-sm tracking-[0.1em] font-medium uppercase font-body mt-2">
              {activeTeertha.duration} &nbsp;•&nbsp; {activeTeertha.region}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* BRAND SLOGAN BANNER */}
      <div className="text-center py-4 border-b border-white/10 bg-[#1c081e]/60 select-none">
        <p className="text-[10px] md:text-xs tracking-[0.45em] font-semibold text-amber-400 uppercase animate-pulse">
          {activeTeertha.slogan}
        </p>
      </div>

      {/* SELECTOR TAB BAR */}
      <div className="bg-background/90 border-b border-border sticky top-16 z-30 shadow-sm backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {allTeerthas.map((item: any) => (
            <button
              key={item.slug}
              onClick={() => {
                setSelectedTeertha(item.slug);
                setActiveSubTab("overview");
              }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] md:text-xs font-medium transition cursor-pointer ${
                selectedTeertha === item.slug
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-soft"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground border border-border"
              }`}
            >
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* DETAILED CONTENT SECTION */}
      <section
        data-nav-theme="light"
        className="relative py-12 px-4 md:px-8 bg-background text-foreground min-h-[60vh]"
      >
        <FlowerField count={8} />
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Sub Navigation Bar */}
          <div className="flex justify-center border-b border-border mb-8 max-w-md mx-auto">
            {[
              { id: "overview", label: "Overview" },
              { id: "itinerary", label: "Day wise Itinerary" },
              { id: "prep", label: "Preparation Guide" },
            ].map((subTab) => (
              <button
                key={subTab.id}
                onClick={() => {
                  setActiveSubTab(subTab.id as any);
                  if (subTab.id === "itinerary") {
                    setTimeout(() => {
                      document.getElementById("itinerary-section")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }, 100);
                  }
                }}
                className={`flex-1 pb-3 text-sm font-medium tracking-wide border-b-2 transition cursor-pointer text-center ${
                  activeSubTab === subTab.id
                    ? "border-amber-600 text-foreground font-semibold"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {subTab.label}
              </button>
            ))}
          </div>

          {/* TAB PANELS */}
          <div className="transition-all duration-300">
            {(activeSubTab === "overview" || activeSubTab === "itinerary") && (
              <div className="space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  {/* Left side: Overview text & pricing */}
                  <div className="lg:col-span-7 space-y-6 text-left">
                    <ScrollReveal variant="fade-up">
                      <div className="space-y-3">
                        <span className="text-amber-600 font-bold text-xs uppercase tracking-wider block">
                          Spiritual Calling
                        </span>
                        <h3 className="text-3xl font-display font-semibold text-foreground flex items-center gap-1.5 flex-wrap">
                          {formatNormalDash(activeTeertha.name)}
                          <span className="font-sans font-normal text-muted-foreground/60 select-none">
                            |
                          </span>
                          <span>Overview</span>
                        </h3>
                        <p className="text-xs md:text-sm font-body font-medium text-muted-foreground">
                          📅 {activeTeertha.date} &nbsp;•&nbsp; ⏱️ {activeTeertha.duration}
                        </p>
                      </div>
                    </ScrollReveal>

                    <ScrollReveal variant="fade-up" delay={100}>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-body">
                        {activeTeertha.desc}
                      </p>
                    </ScrollReveal>

                    {/* Highlights */}
                    <ScrollReveal variant="fade-up" delay={200}>
                      <div className="flex flex-wrap gap-2">
                        {activeTeertha.highlights.map((highlight: string, idx: number) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-[10px] font-semibold font-body"
                          >
                            ✦ {highlight}
                          </span>
                        ))}
                      </div>
                    </ScrollReveal>

                    {/* Call to Action */}
                    <ScrollReveal variant="fade-up" delay={400}>
                      <div className="pt-2 flex flex-wrap gap-4">
                        <Link
                          to="/enquire"
                          className="px-8 py-3 bg-gradient-cta text-accent-foreground font-semibold rounded-full text-sm shadow-soft hover:scale-[1.03] transition flex items-center justify-center gap-2 cursor-pointer"
                        >
                          Book This Package ➔
                        </Link>
                        <Link
                          to="/custom-yatra"
                          className="px-8 py-3 bg-muted border border-border text-foreground font-semibold rounded-full text-sm shadow-soft hover:scale-[1.03] hover:border-amber-600/40 transition flex items-center justify-center gap-2 cursor-pointer"
                        >
                          Customize This Journey
                        </Link>
                      </div>
                    </ScrollReveal>
                  </div>

                  {/* Right side: Inclusions List */}
                  <ScrollReveal variant="fade-left" delay={200} className="lg:col-span-5">
                    <div className="p-8 rounded-3xl bg-white border border-black/[0.06] text-foreground space-y-6 shadow-glow relative overflow-hidden text-left hover:border-amber-600/30 transition-all duration-300">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
                      <h3 className="text-xl font-display font-semibold border-b border-border pb-3 flex items-center gap-2 text-foreground">
                        <span>✨</span> All Inclusions
                      </h3>
                      <p className="text-xs text-muted-foreground italic leading-relaxed">
                        Everything you need for a transformative journey
                      </p>
                      <ul className="space-y-4 text-xs md:text-sm text-muted-foreground">
                        {activeTeertha.inclusions.map((item: string, idx: number) => (
                          <li key={idx} className="flex gap-3 items-start leading-relaxed">
                            <span className="text-amber-600 text-base mt-0.5">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                </div>

                <div id="itinerary-section" className="animate-fade-in scroll-mt-20">
                  <div className="p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-[#802c84] via-[#460b4c] to-[#1d0121] border border-white/10 text-white shadow-glow relative overflow-hidden">
                    <div className="absolute bottom-4 right-4 text-5xl opacity-15 pointer-events-none select-none">
                      🪷
                    </div>

                    <div className="text-center mb-8 space-y-2">
                      <h4 className="text-2xl md:text-3xl font-display font-semibold text-white">
                        Day-wise Itinerary
                      </h4>
                      <p className="text-xs md:text-sm text-white/60 italic font-body">
                        Schedule subject to shift in timings based on local conditions
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
                      {activeTeertha.itinerary.map((dayItem: any, idx: number) => {
                        const firstPoint = dayItem.points[0] || "";
                        const isCulmination =
                          firstPoint &&
                          (firstPoint.toLowerCase().includes("participate in") ||
                            firstPoint.toLowerCase().includes("special puja") ||
                            firstPoint.toLowerCase().includes("havan for") ||
                            firstPoint.toLowerCase().includes("culmination"));

                        const displayPoints = isCulmination
                          ? dayItem.points.slice(1)
                          : dayItem.points;

                        return (
                          <ScrollReveal key={idx} variant="fade-up" delay={idx * 100}>
                            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-amber-400/30 transition-all duration-300 flex flex-col">
                              {isCulmination ? (
                                <div className="mb-4 space-y-2">
                                  <div className="inline-flex w-8 h-8 rounded-full bg-[#ff5a00] flex items-center justify-center text-sm font-bold text-white shadow-sm">
                                    {dayItem.day}
                                  </div>
                                  <h5 className="text-sm font-semibold text-white leading-snug font-display">
                                    {firstPoint}
                                  </h5>
                                </div>
                              ) : (
                                <div className="mb-4">
                                  <div className="inline-flex w-8 h-8 rounded-full bg-[#ff5a00] flex items-center justify-center text-sm font-bold text-white shadow-sm">
                                    {dayItem.day}
                                  </div>
                                </div>
                              )}

                              <ul className="space-y-3 text-xs text-white/80 list-none font-body mt-auto">
                                {displayPoints.map((pointText: string, pIdx: number) => (
                                  <li
                                    key={pIdx}
                                    className="flex gap-2 items-start leading-relaxed text-left"
                                  >
                                    <span className="text-amber-400 text-sm leading-none select-none mt-0.5">
                                      •
                                    </span>
                                    <span>{pointText}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </ScrollReveal>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* ── GALLERY SECTION ── */}
                {activeTeertha.galleryImages && activeTeertha.galleryImages.length > 0 && (
                  <ScrollReveal variant="fade-up">
                    <div className="space-y-5">
                      <div className="flex items-center gap-3">
                        <span className="text-amber-600 font-bold text-xs uppercase tracking-wider">
                          Previous Glimpses of Teerthas
                        </span>
                        <span className="flex-1 h-px bg-border" />
                        <span className="text-[10px] text-muted-foreground">
                          {allGalleryImages.length} photos
                        </span>
                      </div>

                      {/* Main featured image + side images grid */}
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {allGalleryImages.map((img: string, idx: number) => (
                          <button
                            key={idx}
                            onClick={() => setLightboxIndex(idx)}
                            className="overflow-hidden rounded-lg"
                          >
                            <img
                              src={img}
                              alt={`${activeTeertha.name} ${idx + 1}`}
                              className="w-full h-48 object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                )}

                {/* ── FLOATING CTA STRIP ── */}
                <div className="sticky bottom-0 z-40 w-full bg-linear-to-r from-[#802c84] via-[#5c0e62] to-[#1d0121] border-t border-white/10 shadow-2xl rounded-4xl">
                  <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between gap-4">
                    <div className="hidden sm:block">
                      <p className="text-white font-semibold text-sm font-display">
                        {activeTeertha.name}
                      </p>
                      <p className="text-white/50 text-[10px] font-body">
                        {activeTeertha.duration} &nbsp;•&nbsp; {activeTeertha.region}
                      </p>
                    </div>

                    <Link
                      to="/enquire"
                      className="ml-auto px-7 py-2.5 bg-gradient-cta text-accent-foreground font-semibold rounded-full text-sm shadow-soft hover:scale-[1.03] transition flex items-center gap-2 cursor-pointer whitespace-nowrap"
                    >
                      Book This Yatra ➔
                    </Link>
                  </div>
                </div>

                {/* Day-wise Itinerary (Full Width Grid) */}
                {activeSubTab === "itinerary" && (
                  <div id="itinerary-section" className="animate-fade-in scroll-mt-20">
                    <div className="p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-[#802c84] via-[#460b4c] to-[#1d0121] border border-white/10 text-white shadow-glow relative overflow-hidden">
                      <div className="absolute bottom-4 right-4 text-5xl opacity-15 pointer-events-none select-none">
                        🪷
                      </div>

                      <div className="text-center mb-8 space-y-2">
                        <h4 className="text-2xl md:text-3xl font-display font-semibold text-white">
                          Day-wise Itinerary
                        </h4>
                        <p className="text-xs md:text-sm text-white/60 italic font-body">
                          Schedule subject to shift in timings based on local conditions
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
                        {activeTeertha.itinerary.map((dayItem: any, idx: number) => {
                          const firstPoint = dayItem.points[0] || "";
                          const isCulmination =
                            firstPoint &&
                            (firstPoint.toLowerCase().includes("participate in") ||
                              firstPoint.toLowerCase().includes("special puja") ||
                              firstPoint.toLowerCase().includes("havan for") ||
                              firstPoint.toLowerCase().includes("culmination"));

                          const displayPoints = isCulmination
                            ? dayItem.points.slice(1)
                            : dayItem.points;

                          return (
                            <ScrollReveal key={idx} variant="fade-up" delay={idx * 100}>
                              <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-amber-400/30 transition-all duration-300 flex flex-col">
                                {isCulmination ? (
                                  <div className="mb-4 space-y-2">
                                    <div className="inline-flex w-8 h-8 rounded-full bg-[#ff5a00] flex items-center justify-center text-sm font-bold text-white shadow-sm">
                                      {dayItem.day}
                                    </div>
                                    <h5 className="text-sm font-semibold text-white leading-snug font-display">
                                      {firstPoint}
                                    </h5>
                                  </div>
                                ) : (
                                  <div className="mb-4">
                                    <div className="inline-flex w-8 h-8 rounded-full bg-[#ff5a00] flex items-center justify-center text-sm font-bold text-white shadow-sm">
                                      {dayItem.day}
                                    </div>
                                  </div>
                                )}

                                <ul className="space-y-3 text-xs text-white/80 list-none font-body mt-auto">
                                  {displayPoints.map((pointText: string, pIdx: number) => (
                                    <li
                                      key={pIdx}
                                      className="flex gap-2 items-start leading-relaxed text-left"
                                    >
                                      <span className="text-amber-400 text-sm leading-none select-none mt-0.5">
                                        •
                                      </span>
                                      <span>{pointText}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </ScrollReveal>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* Sacred Darshans Circuit */}
                <div className="border-t border-border pt-12">
                  <ScrollReveal variant="fade-up">
                    <div className="text-center mb-10">
                      <h3 className="text-3xl font-display font-semibold text-foreground">
                        Sacred Darshans
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground mt-2">
                        Experience the divine presence at sacred sites
                      </p>
                    </div>
                  </ScrollReveal>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    {activeTeertha.darshans.map((category: any, cIdx: number) => (
                      <ScrollReveal
                        key={cIdx}
                        variant="fade-up"
                        delay={cIdx * 150}
                        className="h-full"
                      >
                        <div className="p-6 md:p-8 rounded-3xl bg-white border border-black/6 shadow-soft hover:shadow-glow hover:border-amber-600/30 transition-all duration-300 flex flex-col justify-between h-full">
                          <div>
                            <h4 className="text-lg font-display font-semibold text-foreground mb-4 border-b border-border pb-2">
                              {category.title}
                            </h4>
                            <ul className="space-y-3.5 text-xs md:text-sm text-muted-foreground">
                              {category.items.map((item: string, itemIdx: number) => (
                                <li key={itemIdx} className="flex gap-3 items-center">
                                  <span className="text-amber-600 font-bold text-sm">✓</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeSubTab === "prep" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
                {/* Spiritual Preparation Card */}
                <ScrollReveal variant="fade-right" className="h-full">
                  <div className="p-8 rounded-3xl bg-white border border-black/[0.06] shadow-soft hover:border-amber-600/30 transition duration-300 space-y-6 h-full">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-2xl text-amber-600 border border-amber-500/20">
                      📿
                    </div>
                    <h3 className="text-2xl font-display font-semibold text-foreground">
                      Spiritual Swadhyay & Prep
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-body">
                      Unlike ordinary tours, a Samyam yatra is an energetic experience. We request
                      all seekers to engage in spiritual preparation before departure to make their
                      system receptive.
                    </p>
                    <ul className="space-y-4 text-xs md:text-sm text-muted-foreground font-body">
                      <li className="flex gap-3 items-start leading-relaxed">
                        <span className="text-amber-600 font-bold mt-0.5">•</span>
                        <span>
                          Engage in regular mantra chanting or light dhyan practice for at least 2
                          weeks before the yatra.
                        </span>
                      </li>
                      <li className="flex gap-3 items-start leading-relaxed">
                        <span className="text-amber-600 font-bold mt-0.5">•</span>
                        <span>
                          Read scripture passages relating to the history and significance of{" "}
                          {activeTeertha.name}.
                        </span>
                      </li>
                      <li className="flex gap-3 items-start leading-relaxed">
                        <span className="text-amber-600 font-bold mt-0.5">•</span>
                        <span>
                          Maintain a clean, devotional mindset leading up to departure. Reduce
                          screen time and worldly distractions.
                        </span>
                      </li>
                      <li className="flex gap-3 items-start leading-relaxed">
                        <span className="text-amber-600 font-bold mt-0.5">•</span>
                        <span>
                          Begin a sattvik diet at least one week before the journey to prepare your
                          body and mind.
                        </span>
                      </li>
                    </ul>
                  </div>
                </ScrollReveal>

                {/* Practical Advice Card */}
                <ScrollReveal variant="fade-left" delay={150} className="h-full">
                  <div className="p-8 rounded-3xl bg-white border border-black/[0.06] shadow-soft hover:border-amber-600/30 transition duration-300 space-y-6 h-full">
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-2xl text-purple-600 border border-purple-500/20">
                      🎒
                    </div>
                    <h3 className="text-2xl font-display font-semibold text-foreground">
                      Seeker's Conduct (Yatra Maryada)
                    </h3>
                    <ul className="space-y-4 text-xs md:text-sm text-muted-foreground font-body">
                      <li className="flex gap-3 items-start leading-relaxed">
                        <span className="text-amber-600 font-bold mt-0.5">1.</span>
                        <span>
                          <strong>Sattvik Diet:</strong> Seekers must adhere to strictly vegetarian,
                          eggless meals throughout the yatra duration.
                        </span>
                      </li>
                      <li className="flex gap-3 items-start leading-relaxed">
                        <span className="text-amber-600 font-bold mt-0.5">2.</span>
                        <span>
                          <strong>Dress Code:</strong> Traditional Indian clothing
                          (kurta/dhoti/saree/salwar suit) is highly encouraged inside temples.
                        </span>
                      </li>
                      <li className="flex gap-3 items-start leading-relaxed">
                        <span className="text-amber-600 font-bold mt-0.5">3.</span>
                        <span>
                          <strong>Eco Conscious Conduct:</strong> Respect the local ecology of
                          sacred sites; strictly avoid plastic waste.
                        </span>
                      </li>
                      <li className="flex gap-3 items-start leading-relaxed">
                        <span className="text-amber-600 font-bold mt-0.5">4.</span>
                        <span>
                          <strong>Group Harmony:</strong> Maintain punctuality and respect fellow
                          seekers' space during meditation and darshan.
                        </span>
                      </li>
                      <li className="flex gap-3 items-start leading-relaxed">
                        <span className="text-amber-600 font-bold mt-0.5">5.</span>
                        <span>
                          <strong>Digital Detox:</strong> Minimize phone usage during sacred
                          experiences. Be present in the moment.
                        </span>
                      </li>
                    </ul>
                  </div>
                </ScrollReveal>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* OTHER TEERTHAS CTA */}
      <section className="py-16 px-6 bg-[#1c081e]/60 border-t border-white/10">
        <ScrollReveal variant="fade-up">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-2xl md:text-4xl font-display font-semibold text-white">
              Explore More Sacred Destinations
            </h3>
            <p className="text-sm text-white/60 font-body max-w-lg mx-auto leading-relaxed">
              Each teertha holds a unique spiritual frequency. Discover all our curated journeys.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <Link
                to="/teerthas"
                className="px-8 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-full text-sm shadow-soft hover:scale-[1.03] hover:bg-white/10 transition inline-flex items-center gap-2 cursor-pointer"
              >
                ← Back to All Teerthas
              </Link>
              <Link
                to="/enquire"
                className="px-8 py-3 bg-gradient-cta text-accent-foreground font-semibold rounded-full text-sm shadow-soft hover:scale-[1.03] transition inline-flex items-center gap-2 cursor-pointer"
              >
                Plan My Yatra ➔
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}
