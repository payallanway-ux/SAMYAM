import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { HeroVideo } from "@/components/HeroVideo";
import { FlowerField } from "@/components/FlowerField";
import React from "react";
import { Footer } from "@/components/Footer";
import { detailedYatras } from "@/constants/yatras";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { API_ENDPOINTS } from "@/lib/api-config";
import { formatNormalDash } from "@/lib/utils";

// Asset imports
import spiritualJoy from "@/assets/spiritual_joy_new.jpg";
import founderImg from "@/assets/founder.jpg";
import aartiImg from "@/assets/aarti.jpg";
import kashiImg from "@/assets/kashi.jpg";
import vrindavanImg from "@/assets/vrindavan.jpg";
import himachalImg from "@/assets/himachal.jpg";
import yatra1Img from "@/assets/Yatra-1.jpg";
import studentsImg from "@/assets/students.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    title: "SAMYAM | Awaken to the Mysticism of Bharat",
    meta: [
      {
        name: "description",
        content:
          "Premium spiritual journeys across Bharat, guided by Sanatan Dharma. Travel beyond. Discover within.",
      },
    ],
  }),
});

const differencesList = [
  {
    icon: "🕉️",
    t: "Authentic Experiences",
    d: "All the journeys are crafted, the sites are covered based on the instructions given in the scriptures of Bharat, deeply rooted in Sanatan.",
  },
  {
    icon: "👥",
    t: "Expert Guidance",
    d: "The travels are guided by learned scholars and not tour guides.",
  },
  {
    icon: "🌿",
    t: "Eco Conscious Travel",
    d: "Respecting both the sacred sites and Mother Earth in our journeys.",
  },
  {
    icon: "🎯",
    t: "Personalized Journeys",
    d: "Each yatra is crafted to match your spiritual intent and readiness.",
  },
];

const waysList = [
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
];

const testimonialsList = [
  {
    id: "testimonial-1",
    url: "https://www.youtube.com/embed/dgPaPKni-Zs",
    title: "Testimonials #banaras #hinduism",
  },
  {
    id: "testimonial-2",
    url: "https://www.youtube.com/embed/TvDvO4pWxKw",
    title: "Testimonial: Shakuntala Bharat",
  },
  {
    id: "testimonial-3",
    url: "https://www.youtube.com/embed/_OrVLF9TOg4",
    title: "Seeker Experience: Retreat Diaries",
  },
  {
    id: "testimonial-4",
    url: "https://www.youtube.com/embed/7gFN5p76hzA",
    title: "Teerth Yatra Reflections",
  },
];

import galleryData from "@/data/gallery.json";

const localImages: Record<string, string> = {
  aartiImg,
  kashiImg,
  vrindavanImg,
  spiritualJoy,
  himachalImg,
  yatra1Img,
  studentsImg,
  founderImg,
};

const resolveImage = (imgSrc: string) => {
  if (imgSrc in localImages) {
    return localImages[imgSrc];
  }
  return imgSrc;
};

const transformationalPhases = [
  {
    id: "pre-travel",
    tabLabel: "Pre Travel Phase",
    icon: "🌱",
    title: "Pre Travel Phase",
    subtitle: "Preparing the Seeker",
    desc: "Set the tone for your journey with structured preparation of body, mind, and breath.",
    historyTitle: "Historical Context",
    historyDesc:
      "Historically, yatras took months or years, during which travelers focused solely on divine expectations. The hardships humbled them, making them receptive to divine vibrations upon reaching the sacred site.",
    subcards: [
      {
        tag: "Online",
        title: "Hatha Yoga & Pranayama Sessions",
        desc: "Online sessions to enhance physical and mental readiness, harmonizing body, mind, and breath.",
      },
      {
        tag: "Online/Live",
        title: "Devta Upasana Sessions",
        desc: "Mantra Lekhana (writing mantras), Stotra Pathana (reciting hymns), and Prarthana (prayers) to invoke divine energies. Tailored to specific destinations, such as Sri Ram for Ayodhya, Narayan for Badrinath, Shiva for Kashi.",
      },
      {
        tag: "Interactive",
        title: "Curated Video Sessions & Interactive Quizzes",
        desc: "Profound scriptural insights into the significance of each teerth, ensuring an informed and engaged pilgrimage. Fun quizzes to ensure knowledge is imprinted in the hearts of seekers.",
      },
    ],
  },
  {
    id: "travel",
    tabLabel: "Travel Phase",
    icon: "🚩",
    title: "Travel Phase",
    subtitle: "Immersive Devotion & Experience",
    desc: "Deepen your connection at the holy site through authentic rituals, guidance, and community.",
    historyTitle: "Historical Context",
    historyDesc:
      "In ancient times, pilgrims walked barefoot, chanting the name of the deity, and seeking the guidance of local saints to understand the energetic landscape of the teerth.",
    subcards: [
      {
        tag: "On Site",
        title: "Guided Teerth Darshan",
        desc: "Scholarly walkthroughs of temples, explaining architectural, astronomical, and spiritual layers of the site.",
      },
      {
        tag: "Live Rituals",
        title: "Aarti & Satsang",
        desc: "Participate in local traditional worships and sit in the presence of saints for spiritual discourses.",
      },
      {
        tag: "Community",
        title: "Shared Seva",
        desc: "Engage in collective service, supporting temples and local communities, cultivating humility and connection.",
      },
    ],
  },
  {
    id: "post-travel",
    tabLabel: "Post Travel Phase",
    icon: "🌳",
    title: "Post Travel Phase",
    subtitle: "Integration & Daily Practice",
    desc: "Bring the transformation back home and integrate it into your daily life.",
    historyTitle: "Historical Context",
    historyDesc:
      "Returning from a yatra, a pilgrim carried the holy water (Teerth) and soil (Mrid) to share the blessings with their community, committing to a life of elevated consciousness.",
    subcards: [
      {
        tag: "Online",
        title: "Integration Circles",
        desc: "Interactive group sessions to share experiences, address spiritual questions, and sustain your practice.",
      },
      {
        tag: "Daily Sadhana",
        title: "Guided Daily Practice",
        desc: "Structured morning routine recommendations, including simple chants, dhyan, and yoga, to keep the inner flame alive.",
      },
      {
        tag: "Continuity",
        title: "Community Satsang",
        desc: "Access ongoing study materials, monthly lectures, and stay connected with fellow seekers.",
      },
    ],
  },
];

function Index() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [activePhase, setActivePhase] = React.useState("pre-travel");
  const [yatras, setYatras] = React.useState<any[]>([]);
  const [blogs, setBlogs] = React.useState<any[]>([]);

  React.useEffect(() => {
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
      }
    };
    const fetchBlogs = async () => {
      try {
        const res = await fetch(API_ENDPOINTS.BLOGS);
        const result = await res.json();
        if (result.success && result.data && result.data.length > 0) {
          setBlogs(result.data.filter((b: any) => b.isPublished));
        }
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      }
    };
    fetchYatras();
    fetchBlogs();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveSlide(index);
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground flex flex-col justify-between">
      <Nav />

      {/* HERO */}
      <section
        data-nav-theme="dark"
        className="relative min-h-screen flex items-center justify-center px-4 pt-32 pb-20 overflow-hidden"
      >
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <HeroVideo />
          <div className="absolute inset-0 bg-black/40 bg-linear-to-b from-black/40 via-transparent to-transparent" />
        </div>
        <FlowerField count={22} />
        <div className="relative z-10 max-w-5xl text-center">
          <ScrollReveal variant="fade-up" delay={100}>
            <p className="font-display italic text-white/90 text-lg md:text-xl mb-4 drop-shadow-md">
              ॥ श्री गुरुभ्यो नमः ॥
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={300}>
            <h1 className="font-display font-semibold text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-white drop-shadow-lg">
              Awaken to the
              <br />
              Mysticism of Bharat
            </h1>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={500}>
            <p className="mt-8 text-lg md:text-xl text-white/95 max-w-2xl mx-auto drop-shadow-md">
              Premium spiritual journeys guided by Sanatan Dharma.
              <br />
              <span className="italic">Travel Beyond. Discover Within.</span>
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={700}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/custom-yatra"
                className="px-8 py-4 rounded-full bg-gradient-cta text-accent-foreground font-medium shadow-glow hover:scale-105 transition"
              >
                Plan My Journey
              </a>
              <a
                href="/teerthas"
                className="px-8 py-4 rounded-full border-2 border-white text-white font-medium hover:bg-white hover:text-[#3D0068] transition"
              >
                Explore Teerthas
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-in" delay={1000}>
            <p className="mt-16 text-xs tracking-[0.4em] uppercase text-white/80">Scroll</p>
          </ScrollReveal>
        </div>
      </section>

      {/* WHY */}
      <section
        id="about"
        data-nav-theme="light"
        className="relative py-24 px-4 bg-background text-foreground"
      >
        <FlowerField count={8} />
        <div className="relative max-w-6xl mx-auto">
          <ScrollReveal variant="fade-up">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-foreground text-center mb-4">
              Why Choose SAMYAM
            </h2>
            <p className="text-lg md:text-sm text-center text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed">
              We don't just take you to sacred places; we guide you through a transformation.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Content Column (Left) */}
            <div className="lg:col-span-6 text-left">
              <ScrollReveal variant="fade-left" delay={150}>
                <div className="space-y-10">
                  <div>
                    <h3 className="text-xl font-body font-bold text-foreground mb-4">
                      Sacred. Respectful. Responsible.
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm font-body">
                      Every journey with SAMYAM is designed with deep reverence for the sacred
                      sites, respect for local traditions, and responsibility toward preserving
                      these holy places for future generations.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-body font-bold text-foreground mb-4">
                      Intelligent Sacred Geography
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm font-body">
                      The sacred geography of Bharat is intelligent and alive. Each kshetra awakens
                      something precise in you. We understand this and craft journeys accordingly.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Image Column (Right) */}
            <div className="lg:col-span-6 w-full">
              <ScrollReveal variant="fade-right" delay={150}>
                <div className="relative overflow-hidden rounded-[2.5rem] shadow-soft border border-black/[0.06] aspect-[4/3] w-full">
                  <img
                    src="https://samyam-frontend.pages.dev/assets/spiritual_joy_new-BQacSRm6.jpg"
                    alt="Devotion and spiritual celebration with Samyam seekers"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* YATRAS */}
      <section
        id="yatras"
        data-nav-theme="dark"
        className="relative py-24 px-4 bg-gradient-to-b from-[#823883] to-[#3D0068] text-white"
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal variant="fade-up">
            <p className="text-sm tracking-[0.3em] uppercase text-[#FF7722] text-center mb-3">
              Samyam's sacred offerings
            </p>
            <h2 className="text-4xl md:text-5xl text-center text-white font-display font-semibold">
              Curated Yatras & Retreats
            </h2>
            <p className="text-center text-white/70 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
              Specially curated yatras infused with divine spiritual retreats; Don't just visit the
              kshetras. Experience them with our unique one of its kind Yatra and Retreat programs.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {yatras.slice(0, 6).map((y, idx) => (
              <ScrollReveal key={y.name} variant="fade-up" delay={idx * 150} className="h-full">
                <article className="group rounded-3xl overflow-hidden bg-white/[0.03] shadow-soft border border-white/10 hover:border-[#FF7722]/30 hover:shadow-[0_20px_60px_-15px_rgba(61,0,104,0.4)] transition flex flex-col h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={y.thumbnailImage}
                      alt={y.name}
                      loading="lazy"
                      decoding="async"
                      width={1024}
                      height={768}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between text-left">
                    <div>
                      <p className="text-xs tracking-widest uppercase text-[#FF883D] font-body font-semibold">
                        {y.date}
                      </p>
                      <h3 className="text-2xl text-white mt-2 font-display font-semibold">
                        {formatNormalDash(y.name, "text-white/40")}
                      </h3>
                      <p className="text-xs text-white/50 mt-1">{y.duration}</p>
                      <p className="text-sm text-white/70 mt-4 leading-relaxed line-clamp-3 group-hover:text-white/90 transition-colors">
                        {y.desc}
                      </p>
                    </div>
                    <div className="mt-6 pt-5 border-t border-white/10">
                      <div className="flex flex-col gap-2.5">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]"></span>
                          <p className="text-[11px] text-white/60 font-body">
                            <span className="font-semibold text-amber-400/90 tracking-wide uppercase text-[9px] mr-1.5">
                              Triple:
                            </span>
                            {y.triplePrice ||
                              (y.pricing ? y.pricing.tripleOccupancy : "On Request")}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF7722] shadow-[0_0_8px_rgba(255,119,34,0.6)]"></span>
                          <p className="text-[11px] text-white/60 font-body">
                            <span className="font-semibold text-[#FF883D] tracking-wide uppercase text-[9px] mr-1.5">
                              Double:
                            </span>
                            {y.doublePrice ||
                              (y.pricing ? y.pricing.doubleOccupancy : "On Request")}
                          </p>
                        </div>
                      </div>
                      <div className="mt-5 flex items-center justify-between">
                        <a
                          href={`/yatras/explore?yatra=${y.slug}`}
                          className="text-sm font-semibold text-[#FF883D] hover:text-[#FF7722] transition flex items-center gap-1 uppercase tracking-wider text-[11px]"
                        >
                          Explore <span className="group-hover:translate-x-1 transition">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENCE */}
      <section
        id="difference"
        data-nav-theme="light"
        className="relative py-24 px-4 bg-background text-foreground"
      >
        <FlowerField count={6} />
        <div className="relative max-w-6xl mx-auto">
          <ScrollReveal variant="fade-up">
            <p className="text-sm tracking-[0.3em] uppercase text-[#FF7722] text-center mb-3">
              The SAMYAM Difference
            </p>
            <h2 className="text-4xl md:text-5xl text-center text-foreground font-display font-semibold mb-16">
              What sets us apart in spiritual travel
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differencesList.map((d, idx) => (
              <ScrollReveal key={d.t} variant="scale-up" delay={idx * 100}>
                <div className="p-8 rounded-3xl bg-card shadow-soft border border-border text-center hover:border-[#FF7722]/40 hover:-translate-y-1 transition duration-300 h-full">
                  <div className="text-5xl mb-4">{d.icon}</div>
                  <h3 className="text-xl text-foreground font-display font-semibold mb-2">{d.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY YOUR WAY */}
      <section
        data-nav-theme="dark"
        className="relative py-24 px-4 bg-linear-to-b from-[#823883] to-[#3D0068] text-white"
      >
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal variant="fade-up">
            <h2 className="text-4xl md:text-5xl text-white font-display font-semibold">
              Your Journey, Your Way
            </h2>
            <p className="text-white/70 mt-4 max-w-xl mx-auto text-sm">
              Choose the experience that resonates with your spiritual intent
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 mt-14 text-left">
            {waysList.map((c, idx) => (
              <ScrollReveal key={c.t} variant="fade-up" delay={idx * 150}>
                <a
                  href="/custom-yatra"
                  className="p-8 rounded-3xl bg-white/3 shadow-soft border border-white/10 hover:border-[#FF7722]/40 transition duration-300 block h-full"
                >
                  <div className="text-4xl">{c.i}</div>
                  <h3 className="text-2xl text-white mt-4 font-display font-semibold">{c.t}</h3>
                  <p className="text-sm text-white/70 mt-2 leading-relaxed">{c.d}</p>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMATIONS & STORIES */}
      <section
        data-nav-theme="light"
        className="relative py-24 px-4 bg-background text-foreground border-t border-border overflow-hidden"
      >
        <FlowerField count={8} />
        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-16 space-y-4">
              <p className="text-sm tracking-[0.3em] uppercase text-[#FF7722] font-bold text-center">
                Transformations & Stories
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground text-center">
                Hear from seekers who felt seen, guided, and held
              </h2>
              <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed">
                Swipe to read how different yatras shifted hearts across Bharat.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={150}>
            <div className="max-w-5xl mx-auto relative px-8">
              {/* Left arrow */}
              <button
                onClick={() => scroll("left")}
                aria-label="Previous Slide"
                className="absolute left-0 top-1/2 -translate-y-1/2 text-4xl font-light text-[#FF7722] hover:text-[#FF883D] transition hover:scale-110 cursor-pointer z-20 select-none"
              >
                ⟨
              </button>

              {/* Viewport wrapper with CSS scroll */}
              <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-4"
              >
                {testimonialsList.map((t) => (
                  <div
                    key={t.id}
                    className="w-full sm:w-[calc(33.33%-16px)] shrink-0 snap-center px-2"
                  >
                    <div className="aspect-[3/5] max-w-[220px] mx-auto rounded-[2rem] overflow-hidden border border-black/[0.06] shadow-soft bg-black">
                      <iframe
                        src={`${t.url}?rel=0`}
                        title={t.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Right arrow */}
              <button
                onClick={() => scroll("right")}
                aria-label="Next Slide"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-4xl font-light text-[#FF7722] hover:text-[#FF883D] transition hover:scale-110 cursor-pointer z-20 select-none"
              >
                ⟩
              </button>
            </div>
          </ScrollReveal>

          {/* Dots Indicator */}
          <ScrollReveal variant="fade-in" delay={300}>
            <div className="flex justify-center gap-2 mt-8">
              {testimonialsList.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (scrollRef.current) {
                      const scrollAmount = scrollRef.current.clientWidth * i;
                      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
                    }
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeSlide === i ? "bg-[#FF7722] w-4" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ROOTED IN SANATAN DHARMA */}
      <section
        data-nav-theme="dark"
        className="relative py-24 px-4 bg-[#3D0068] text-white overflow-hidden border-t border-white/5"
      >
        <FlowerField count={8} />
        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white text-center">
                Rooted in Sanatan Dharma
              </h2>
              <p className="text-xl md:text-2xl text-white/90 font-display italic text-center max-w-4xl mx-auto leading-relaxed">
                "Let the journey not be just movement of the body to a holy place, but the softening
                of the heart into devotion."
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Side: Cards */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <ScrollReveal variant="fade-left" delay={100}>
                <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 shadow-soft hover:border-[#FF7722]/30 transition-all duration-300">
                  <h3 className="text-2xl font-body font-bold text-white mb-3">Sacred Wisdom</h3>
                  <p className="text-sm md:text-base text-white/70 font-body leading-relaxed">
                    Our journeys are guided by timeless wisdom from the Vedas, Upanishads, and
                    Puranas. Each destination is chosen for its specific spiritual significance.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal variant="fade-left" delay={250}>
                <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 shadow-soft hover:border-[#FF7722]/30 transition-all duration-300">
                  <h3 className="text-2xl font-body font-bold text-white mb-3">
                    Respectful Practice
                  </h3>
                  <p className="text-sm md:text-base text-white/70 font-body leading-relaxed">
                    We honor the traditions, rituals, and local customs of each sacred site. Our
                    guides help you participate authentically and respectfully.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Side: Glowing Om */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <ScrollReveal variant="scale-up" delay={100}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/46/Om_-symbol.png"
                  alt="Om Symbol"
                  className="w-48 h-48 md:w-56 md:h-56 object-contain select-none animate-gentle-float"
                  // style={{ filter: 'invert(57%) sepia(90%) saturate(1900%) hue-rotate(345deg) brightness(102%) contrast(102%) drop-shadow(0 0 30px rgba(255, 119, 34, 0.55))' }}
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* DRIDH BHAKTI - METHODOLOGY PILLARS */}
      <section
        data-nav-theme="light"
        className="relative py-24 px-4 bg-background text-foreground overflow-hidden border-t border-border"
      >
        <FlowerField count={8} />
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <ScrollReveal variant="fade-up">
            {/* Saffron Om Icon */}
            <div className="flex justify-center mb-6">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/46/Om_-symbol.png"
                alt="Om Icon"
                className="w-12 h-12 object-contain select-none"
                // style={{ filter: 'invert(57%) sepia(90%) saturate(1900%) hue-rotate(345deg) brightness(102%) contrast(102%)' }}
              />
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-4">
              Dridh Bhakti: Our Methodology
            </h2>

            <p className="text-sm md:text-base text-muted-foreground font-body max-w-2xl mx-auto mb-16 leading-relaxed">
              Six integrated pillars working synergistically to open your Anahata Chakra and deepen
              your devotion
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {[
              { label: "Teertha Yatra", emoji: "🕉️" },
              { label: "Yoga | Dhyan | Pranayama", emoji: "🧘" },
              { label: "Mantra | Stotra", emoji: "📿" },
              { label: "Swadhyay", emoji: "📖" },
              { label: "Satsang | Guru Ashray", emoji: "🙏" },
              { label: "Culture Immersion", emoji: "🎭" },
            ].map((pillar, idx) => (
              <ScrollReveal key={idx} variant="scale-up" delay={idx * 100}>
                <div className="flex flex-col items-center justify-center p-6 bg-white border border-black/[0.06] rounded-[2rem] shadow-soft hover:shadow-glow hover:-translate-y-1 hover:border-[#823883]/20 transition-all duration-300 min-h-[170px] h-full">
                  <span className="text-4xl mb-4 select-none" role="img" aria-label={pillar.label}>
                    {pillar.emoji}
                  </span>
                  <span className="text-sm font-body font-semibold text-foreground leading-snug">
                    {pillar.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal variant="fade-up" delay={300}>
            <div>
              <Link
                to="/methodology"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-cta text-white rounded-full font-body font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] cursor-pointer border-none"
              >
                Explore Our Methodology <span className="text-lg">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* THREE-PHASE TRANSFORMATIONAL JOURNEY */}
      <section
        data-nav-theme="dark"
        className="relative py-24 px-4 bg-gradient-to-b from-[#1c081e] via-[#3D0068] to-[#1c081e] text-white overflow-hidden border-t border-white/5"
      >
        <FlowerField count={8} />

        {/* Ambient glow effects */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#FF7722]/10 blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          {/* Section Header */}
          <ScrollReveal variant="fade-up">
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-4">
              Three Phase Transformational Journey
            </h2>
            <p className="text-sm md:text-base text-white/70 font-body max-w-2xl mx-auto mb-12">
              Your spiritual transformation begins before you travel and continues long after you
              return
            </p>
          </ScrollReveal>

          {/* Phase Switcher Tabs */}
          <ScrollReveal variant="fade-up" delay={150}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {transformationalPhases.map((phase) => {
                const isActive = activePhase === phase.id;
                return (
                  <button
                    key={phase.id}
                    onClick={() => setActivePhase(phase.id)}
                    className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "border-2 border-[#FF7722] text-white bg-white/5 shadow-md"
                        : "border border-white/20 text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {phase.tabLabel}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Active Phase Card Container */}
          {transformationalPhases.map((phase) => {
            if (activePhase !== phase.id) return null;
            return (
              <ScrollReveal key={phase.id} variant="fade-up" delay={300}>
                <div className="max-w-5xl mx-auto p-8 md:p-12 rounded-[2.5rem] bg-white/[0.03] border border-white/10 shadow-glow backdrop-blur-md text-center">
                  {/* Sprout Icon / Phase Emoji */}
                  <div className="text-5xl mb-4 select-none animate-gentle-float">{phase.icon}</div>

                  {/* Phase Title */}
                  <h3 className="font-display font-semibold text-3xl md:text-4xl text-white mb-2">
                    {phase.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-[#FF883D] font-body text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4">
                    {phase.subtitle}
                  </p>

                  {/* Main Desc */}
                  <p className="text-white/80 font-body text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
                    {phase.desc}
                  </p>

                  {/* Historical Context Box */}
                  <div className="max-w-3xl mx-auto p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 text-left mb-8">
                    <h4 className="font-body font-bold text-white text-base mb-2">
                      {phase.historyTitle}
                    </h4>
                    <p className="font-body text-white/70 text-sm md:text-base leading-relaxed">
                      {phase.historyDesc}
                    </p>
                  </div>

                  {/* Subcards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    {phase.subcards.map((card, idx) => (
                      <div
                        key={idx}
                        className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FF7722]/30 transition-all duration-300 flex flex-col justify-between"
                      >
                        <div>
                          <span className="text-white/50 text-[10px] font-body font-semibold uppercase tracking-wider mb-2 block">
                            {card.tag}
                          </span>
                          <h5 className="font-body font-bold text-white text-base mb-2">
                            {card.title}
                          </h5>
                          <p className="font-body text-white/70 text-xs md:text-sm leading-relaxed">
                            {card.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* GLIMPSES OF GRACE | VISUAL GALLERY */}
      <section data-nav-theme="light" className="relative py-24 px-4 bg-background text-foreground">
        <FlowerField count={8} />
        <div className="max-w-6xl mx-auto">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-16 space-y-4">
              <p className="text-sm tracking-[0.3em] uppercase text-[#FF7722] font-bold">
                Glimpses of Grace
              </p>
              <h2 className="text-4xl md:text-6xl font-display font-semibold text-foreground">
                Visual stories from our sacred journeys
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
            {galleryData.map((item, idx) => (
              <ScrollReveal
                key={idx}
                variant="zoom-in"
                delay={(idx % 4) * 100}
                className={item.span}
              >
                <div className="relative group rounded-3xl overflow-hidden shadow-soft hover:shadow-glow border border-border hover:border-[#823883]/30 transition-all duration-500 w-full h-full">
                  <img
                    src={resolveImage(item.img)}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <h4 className="text-white font-display text-xl md:text-2xl font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRAVEL BEYOND. DISCOVER WITHIN. | BRAND PHILOSOPHY */}
      <section
        data-nav-theme="light"
        className="relative py-28 px-4 overflow-hidden bg-background text-foreground"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-b from-[#FF7722]/5 to-transparent blur-3xl pointer-events-none" />
        <FlowerField count={8} />

        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-16 space-y-4">
              <p className="text-sm tracking-[0.4em] uppercase text-[#FF7722] font-bold">
                The SAMYAM Vision
              </p>
              <h2 className="text-5xl md:text-7xl font-display font-semibold text-foreground leading-tight">
                Travel Beyond.
                <br />
                <span className="italic text-[#FF7722] drop-shadow-sm">Discover Within.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Philosophy Text */}
            <ScrollReveal variant="fade-left" delay={150}>
              <div className="space-y-8 text-lg md:text-xl text-muted-foreground font-body leading-relaxed text-left">
                <p className="text-foreground font-medium">
                  At SAMYAM, we redefine spiritual journeys across Bharat, where luxury meets
                  divinity, and travel becomes transformation. We believe spirituality is not a
                  privilege, but a birthright.
                </p>
                <p>
                  Our journeys are sacred experiences, weaving together culture, heritage, and
                  Sanatan wisdom with comfort and care. We help you not just see the sacred, but to
                  feel it, live it, and carry it within.
                </p>
                <p>
                  With SAMYAM, every yatra becomes a sacred passage, one that transforms the seeker
                  from within, paving the way for divine spiritual awakening and eternal bliss.
                </p>
              </div>
            </ScrollReveal>

            {/* Founder Quote Card */}
            <ScrollReveal variant="scale-up" delay={200}>
              <div className="relative group text-center">
                <div className="absolute -inset-4 bg-gradient-cta opacity-5 blur-2xl group-hover:opacity-10 transition duration-700 rounded-[3rem]" />
                <div className="relative p-10 md:p-14 rounded-[3rem] bg-gradient-to-b from-[#823883] to-[#3D0068] border border-[#EFD9F7]/10 shadow-soft hover:shadow-glow transition-all duration-500 space-y-8 overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF7722]/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#823883]/5 rounded-full -ml-16 -mb-16 blur-2xl" />

                  <div className="relative z-10">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-[#FF7722]/20 mb-6 shadow-md">
                      <img
                        src={founderImg}
                        alt="Nileema Shenoy"
                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                    <div className="text-4xl text-[#FF7722]/30 mb-6 font-serif">“</div>
                    <blockquote className="text-2xl md:text-3xl font-display font-medium text-white italic leading-snug">
                      Lets not just visit the sacred. Let the sacred transform us from deep within.
                    </blockquote>
                    <div className="mt-8 space-y-1">
                      <div className="w-12 h-px bg-white/20 mx-auto mb-4" />
                      <cite className="not-italic block font-display text-xl text-white font-semibold">
                        Nileema Shenoy
                      </cite>
                      <span className="text-xs uppercase tracking-[0.2em] text-[#FF7722] font-bold">
                        Founder
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* BLOGS / CEO INSIGHTS SECTION */}
      {blogs.length > 0 && (
        <section className="relative py-20 px-6 bg-[#3f0369] border-t border-white/5">
          <div className="max-w-4xl mx-auto space-y-12">
            <ScrollReveal variant="fade-up">
              <div className="text-center space-y-3">
                <p className="text-xs tracking-[0.3em] uppercase text-[#FF7722] font-bold">
                  Insights & Philosophy
                </p>
                <h3 className="text-3xl md:text-5xl font-display font-semibold text-white">
                  From the Founder's Desk
                </h3>
                <p className="text-xs text-white/50 font-body max-w-md mx-auto">
                  Philosophical wisdom and spiritual ideas shared by Nileema Shenoy to guide modern
                  seekers.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-8">
              {blogs.slice(0, 1).map((blog) => (
                <Link to="/blogs">
                  <ScrollReveal key={blog.id} variant="fade-up">
                    <div className="relative group p-8 md:p-10 rounded-[2.5rem] bg-white/[0.01] border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300 space-y-6 overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-cta opacity-5 rounded-full blur-2xl" />

                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        {/* Thumbnail image — falls back to founderImg */}
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#FF7722]/30 shrink-0 shadow-md">
                          <img
                            src={blog.thumbnailImage || founderImg}
                            alt={blog.author || "Nileema Shenoy"}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = founderImg;
                            }}
                          />
                        </div>

                        <div className="text-left">
                          <h4 className="text-lg md:text-xl font-display font-semibold text-white">
                            {blog.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-1 flex-wrap">
                            <span className="text-[10px] uppercase tracking-wider text-[#FF7722] font-bold">
                              {blog.author || "Nileema Shenoy"}
                            </span>
                            {blog.category && (
                              <>
                                <span className="text-[10px] text-white/30">•</span>
                                <span className="text-[9px] uppercase tracking-wider text-white/40">
                                  {blog.category}
                                </span>
                              </>
                            )}
                            {blog.readTime && (
                              <>
                                <span className="text-[10px] text-white/30">•</span>
                                <span className="text-[9px] uppercase tracking-wider text-white/40">
                                  {blog.readTime}
                                </span>
                              </>
                            )}
                          </div>
                          {/* Tags */}
                          {blog.tags?.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mt-2">
                              {blog.tags.map((tag: string) => (
                                <span
                                  key={tag}
                                  className="px-2 py-0.5 rounded-full bg-[#FF7722]/10 border border-[#FF7722]/20 text-[#FF7722]/80 text-[9px] font-semibold uppercase tracking-wider"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* excerpt as pull-quote (replaces blog.quote) */}
                      {blog.excerpt && (
                        <div className="relative pl-6 border-l-2 border-[#FF7722]/60 py-1 text-left">
                          <blockquote className="text-base md:text-lg font-medium text-[#FF7722]/90 italic leading-snug font-display">
                            "{blog.excerpt}"
                          </blockquote>
                        </div>
                      )}

                      {blog.content && (
                        <div className="relative pl-6  py-1 text-left">
                          <blockquote className="text-base md:text-lg font-medium text-white leading-snug font-display">
                            {blog.content}
                          </blockquote>
                        </div>
                      )}
                    </div>
                  </ScrollReveal>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
