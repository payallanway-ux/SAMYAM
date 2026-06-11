import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/Nav";
import { FlowerField } from "@/components/FlowerField";
import { Footer } from "@/components/Footer";
import meth1 from "@/assets/methodology-1.jpeg";
import meth2 from "@/assets/methodology-2.jpeg";
import meth3 from "@/assets/methodology-3.jpg";
import meth4 from "@/assets/methodology-4.jpg";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const Route = createFileRoute("/methodology")({
  component: MethodologyPage,
  head: () => ({
    title: "Samyam Methodology | Dridh Bhakti",
    meta: [
      {
        name: "description",
        content:
          "Six integrated pillars working synergistically to open your Anahata Chakra and deepen your devotion.",
      },
    ],
  }),
});

function AnahataChakraSVG() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-24 h-24 text-accent mx-auto"
      fill="none"
      stroke="currentColor"
    >
      {/* 12 Petals */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = i * 30;
        return (
          <path
            key={i}
            d="M 100 60 C 112 40, 125 50, 100 20 C 75 50, 88 40, 100 60 Z"
            transform={`rotate(${angle} 100 100)`}
            className="fill-accent/5 stroke-accent"
            strokeWidth="1.5"
          />
        );
      })}
      {/* Inner Circle */}
      <circle cx="100" cy="100" r="40" className="stroke-accent fill-accent/5" strokeWidth="1.5" />
      {/* Intersecting Triangles (Shatkona) */}
      <polygon
        points="100,65 130,118 70,118"
        className="stroke-accent fill-none"
        strokeWidth="1.5"
      />
      <polygon
        points="100,135 130,82 70,82"
        className="stroke-accent fill-none"
        strokeWidth="1.5"
      />
      {/* Center Bindu */}
      <circle cx="100" cy="100" r="3.5" className="fill-accent stroke-none" />
    </svg>
  );
}

const detailedPillars = [
  {
    icon: "🕉️",
    title: "Teertha Yatra",
    desc1:
      "Sacred Teerthas in Bharat are charged with divine energies. Our meticulously planned pilgrimages, often with revered saints, are transformative paths to inner awakening.",
    desc2:
      "A Yatra to these sites is a profound spiritual journey that cleanses and elevates the soul. We prepare travelers' bodies and minds to be receptive to these energies, leading to deep cleansing and reception of divine vibrations.",
  },
  {
    icon: "🧘",
    title: "Yoga | Dhyan | Pranayama",
    desc1:
      "Integrating traditional asanas, meditation, and breathwork to align body, mind, and spirit with sacred energies.",
    desc2:
      "Yoga enhances flexibility and strength. Dhyan cultivates stillness and awareness. Pranayama unlocks vitality, regulates energy, and fosters lasting inner peace.",
  },
  {
    icon: "📿",
    title: "Mantra | Stotra Pathana",
    desc1:
      "Experience the vibrational energy of divine sounds. Chanting powerful mantras and devotional hymns enhances focus, purifies the mind, and deepens spiritual connection.",
    desc2:
      "Our sessions provide guidance to chant mantras daily, enabling seekers to immerse in an ancient yet timeless path to transcendence.",
  },
  {
    icon: "📖",
    title: "Swadhyay",
    desc1:
      "Self study of ancient scriptures with the blessings of learned masters. Scriptures play the role of a guiding light in leading a fulfilling life.",
    desc2:
      "Our sessions give insights about various scriptures, relevant to one's journey, and the right methods to pursue studying them daily. Delving into timeless wisdom from the Upanishads, Bhagavad Gita, and Puranas helps seekers be in the company of saints, invoking their blessings.",
  },
  {
    icon: "🙏",
    title: "Satsang | Guru Ashray",
    desc1:
      "Be in the presence of enlightened masters through sacred satsangs and guru ashray. Immerse in divine wisdom, devotional chants, and enriching discourses.",
    desc2:
      "The blessings and guidance of revered saints help seekers internalize teachings, refine their path, and experience deeper connections with the divine. These experiences create a sanctuary for transformation, elevating the soul towards enlightenment.",
  },
  {
    icon: "🎭",
    title: "Culture",
    desc1:
      "Immerse in the rich cultural heritage of Bharat through traditional arts, music, dance, and customs that have been preserved for millennia.",
    desc2:
      "Culture is the living expression of Sanatan Dharma. Through exposure to classical arts, traditional music, dance forms, and cultural practices, seekers connect with the timeless wisdom embedded in our heritage. This pillar helps integrate spiritual understanding with cultural appreciation, making the journey holistic and deeply enriching.",
  },
];

const scripturesData = [
  {
    title: "Bhagavad Gita",
    type: "Text",
    desc: "The Song of the Divine Core teachings on duty, devotion, and liberation",
  },
  {
    title: "Upanishads",
    type: "Text",
    desc: "Ancient wisdom texts exploring the nature of reality and consciousness",
  },
  {
    title: "Bhagavatha Mahapuran",
    type: "Text",
    desc: "Stories of divine incarnations and devotion inspiring narratives",
  },
  {
    title: "Puranas",
    type: "Text",
    desc: "Mythological texts explaining the significance of sacred places and deities",
  },
];

const mantrasData = [
  {
    title: "Om Namah Shivaya",
    type: "Mantra",
    desc: "The five-syllable mantra for Lord Shiva",
  },
  {
    title: "Gayatri Mantra",
    type: "Mantra",
    desc: "Universal prayer for wisdom and enlightenment",
  },
  {
    title: "Vishnu Sahasranama",
    type: "Stotra",
    desc: "1000 names of Lord Vishnu",
  },
  {
    title: "Shiva Stotras",
    type: "Stotra",
    desc: "Devotional hymns to Lord Shiva",
  },
];

function MethodologyPage() {
  const [activeTab, setActiveTab] = useState<"scriptures" | "mantras" | "videos" | "quizzes">(
    "scriptures",
  );
  const isDarkTab = activeTab === "mantras";
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

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
            src={meth1}
            alt="Samyam Methodology Hero"
            className="w-full h-full object-cover object-center animate-ken-burns"
            decoding="async"
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
              Six Integrated Pillars
            </span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-amber-400/60"></span>
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-semibold text-white tracking-tight leading-[0.9] animate-hero-reveal">
            Dridh
            <br />
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              Bhakti
            </span>
          </h1>

          <p className="text-white/70 text-sm md:text-lg max-w-2xl mx-auto font-body leading-relaxed animate-hero-reveal-delay">
            Our integrated methodology works synergistically to open your Anahata Chakra, deepening
            your devotion and leading you towards true transformation.
          </p>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-gentle-float">
          <span className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-body">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"></div>
        </div>
      </section>

      {/* INTRO & THE PATH TO FIRM DEVOTION */}
      <section
        data-nav-theme="light"
        className="relative py-20 px-6 bg-background text-foreground overflow-hidden"
      >
        <FlowerField count={10} />
        <div className="max-w-4xl mx-auto text-center space-y-16 relative z-10">
          {/* Paragraph quote */}
          <ScrollReveal variant="fade-up">
            <p className="text-base md:text-xl text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto italic font-light">
              We don't just take you on journeys, we guide you through a complete spiritual
              transformation by integrating pilgrimage, practice, and wisdom into one harmonious
              path.
            </p>
          </ScrollReveal>

          {/* Heading and details */}
          <ScrollReveal variant="fade-up">
            <div className="space-y-6 pt-4 border-t border-border">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
                The Path to Firm Devotion
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto font-body">
                Dridh Bhakti (Firm Devotion) is the central outcome of our integrated approach. Each
                of the six pillars works synergistically to open your Anahata Chakra (heart chakra),
                deepening your bhakti (devotion), leading you towards true jnana (wisdom) and
                vairagya (mindful detachment).
              </p>
            </div>
          </ScrollReveal>

          {/* Anahata Chakra Card */}
          <ScrollReveal variant="scale-up">
            <div className="max-w-xl mx-auto p-8 md:p-10 rounded-3xl bg-white border border-black/[0.06] shadow-soft hover:shadow-glow hover:border-amber-600/30 transition-all duration-500 group">
              <div className="mb-6 transform group-hover:scale-105 transition-transform duration-500">
                <AnahataChakraSVG />
              </div>
              <h3 className="font-display font-semibold text-xl md:text-2xl text-foreground mb-4">
                Activating the Anahata Chakra
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-md mx-auto font-body">
                Our primary objective is to activate your heart chakra, the 12 petalled lotus of
                love and devotion. Through our integrated methodology, we help you open the doorways
                of bhakti in your Anahata Chakra, transforming your journey from a physical visit to
                a profound inner awakening.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SIX INTEGRATED PILLARS */}
      <section
        data-nav-theme="dark"
        className="relative py-20 px-6 bg-gradient-to-b from-[#823883] to-[#3D0068] text-white overflow-hidden border-t border-white/5"
      >
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />
        <FlowerField count={8} />

        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollReveal variant="fade-up">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-semibold text-white">
                Six Integrated Pillars
              </h2>
              <p className="text-white/60 text-xs md:text-sm tracking-wider uppercase font-body">
                Each pillar is essential. Together, all six create a complete spiritual
                transformation.
              </p>
            </div>
          </ScrollReveal>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedPillars.map((p, idx) => (
              <ScrollReveal key={idx} variant="fade-up" delay={idx * 150}>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-400/30 transition-all duration-300 group text-left flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-white/15 transition-all duration-300">
                      {p.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white font-display">
                      {p.title}
                    </h3>
                    <div className="space-y-4 text-xs md:text-sm text-white/80 leading-relaxed font-body">
                      <p>{p.desc1}</p>
                      <p className="border-t border-white/10 pt-3 text-white/60 italic">
                        {p.desc2}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SPIRITUAL RESOURCES LIBRARY */}
      <section
        data-nav-theme="dark"
        className="relative py-20 px-6 overflow-hidden border-t bg-[#3D0068] text-white border-white/5"
      >
        <FlowerField count={8} />
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <ScrollReveal variant="fade-up">
            <div className="text-center space-y-4 mb-12">
              {activeTab === "mantras" ? (
                <>
                  <div className="flex justify-center mb-2">
                    <span className="text-4xl select-none text-[#FF7722]">📿</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display font-semibold text-white">
                    Mantras & Stotras
                  </h2>
                </>
              ) : (
                <>
                  <h2 className="text-4xl md:text-5xl font-display font-semibold text-white">
                    Spiritual Resources Library
                  </h2>
                  <p className="text-sm max-w-lg mx-auto font-body text-white/70">
                    Access timeless wisdom and continue your spiritual journey
                  </p>
                </>
              )}
            </div>
          </ScrollReveal>

          {/* Tabs Navigation */}
          <ScrollReveal variant="fade-up">
            <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-3xl mx-auto font-body">
              {[
                { id: "scriptures", label: "Scriptures (Swadhyay)", icon: "📖" },
                { id: "mantras", label: "Mantras & Stotras", icon: "📿" },
                { id: "videos", label: "Video Sessions", icon: "🎥" },
                { id: "quizzes", label: "Interactive Quizzes", icon: "🧩" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-gradient-cta text-white shadow-soft"
                      : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Tab Panels */}
          <div className="min-h-[250px] transition-all duration-300">
            {activeTab === "scriptures" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {scripturesData.map((item, idx) => (
                  <ScrollReveal key={idx} variant="fade-up" delay={idx * 100}>
                    <div className="p-8 rounded-[2rem] bg-white/[0.04] border border-white/10 shadow-soft hover:border-[#FF7722]/30 transition-all duration-300 text-left relative overflow-hidden group backdrop-blur-md h-full">
                      <div className="absolute top-0 right-0 bg-[#FF7722]/15 border-b border-l border-white/10 text-[#FF7722] text-[10px] font-bold tracking-wider px-3.5 py-1 rounded-bl-xl uppercase font-body font-semibold">
                        {item.type}
                      </div>
                      <div className="text-xl mb-3 text-[#FF7722] group-hover:scale-110 transition-transform">
                        📖
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2 font-display">
                        {item.title}
                      </h4>
                      <p className="text-xs md:text-sm text-white/70 leading-relaxed font-body">
                        {item.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            )}

            {activeTab === "mantras" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {mantrasData.map((item, idx) => (
                  <ScrollReveal key={idx} variant="fade-up" delay={idx * 100}>
                    <div className="p-8 rounded-[2rem] bg-white/[0.04] border border-white/10 shadow-soft hover:border-[#FF7722]/30 transition-all duration-300 text-left relative overflow-hidden group backdrop-blur-md h-full">
                      <div className="inline-block px-3 py-0.5 bg-[#FF7722]/15 border border-[#FF7722]/30 text-[#FF7722] text-[10px] font-bold tracking-wider rounded-full uppercase mb-4 font-body font-semibold">
                        {item.type}
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2 font-display">
                        {item.title}
                      </h4>
                      <p className="text-xs md:text-sm text-white/70 leading-relaxed font-body">
                        {item.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            )}

            {activeTab !== "scriptures" && activeTab !== "mantras" && (
              <ScrollReveal variant="fade-in">
                <div className="max-w-2xl mx-auto p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 text-center shadow-glow backdrop-blur-md">
                  <span className="text-4xl mb-4 block animate-pulse">✨</span>
                  <h4 className="text-xl font-display font-semibold text-white mb-2">
                    Preparing Authentic Materials
                  </h4>
                  <p className="text-sm text-white/70 leading-relaxed max-w-md mx-auto font-body">
                    Our scholars are currently indexing ancient audio tracks, mantra chants, visual
                    guides, and quizzes aligned with classical scriptures.
                  </p>
                </div>
              </ScrollReveal>
            )}
          </div>

          {/* Coming Soon & Call To Action */}
          <ScrollReveal variant="scale-up">
            <div className="mt-16 max-w-3xl mx-auto p-8 md:p-12 rounded-3xl bg-gradient-to-b from-[#823883] to-[#3D0068] text-white via-[#1a0a1e] to-[#2d0f30] border border-white/10 text-white text-center relative overflow-hidden shadow-glow">
              {/* Background elements */}
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-2 animate-bounce">
                  🚀
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-semibold">
                  Resource Library Coming Soon
                </h3>
                <p className="text-white/80 text-xs md:text-sm leading-relaxed max-w-xl mx-auto font-body">
                  We're building a comprehensive library of scriptures, mantras, videos, and
                  interactive quizzes to support your spiritual journey. Join our community to be
                  notified when resources become available.
                </p>

                {/* Sub Form */}
                <div className="max-w-md mx-auto pt-2">
                  {subscribed ? (
                    <div className="p-4 rounded-full bg-white/10 border border-white/20 text-amber-400 font-medium text-sm animate-pulse font-body">
                      ✨ Thank you! We will notify you when the library opens.
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubscribe}
                      className="flex flex-col sm:flex-row gap-2 bg-black/40 p-1.5 rounded-full border border-white/10 focus-within:border-amber-400 transition-all duration-300"
                    >
                      <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 bg-transparent px-4 py-2 text-xs md:text-sm text-white placeholder-white/40 focus:outline-none w-full font-body"
                      />
                      <button
                        type="submit"
                        className="px-6 py-2.5 bg-gradient-cta text-white font-semibold rounded-full text-xs md:text-sm shadow-soft hover:scale-[1.02] transition cursor-pointer whitespace-nowrap"
                      >
                        Get Notified
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* HOW THEY WORK TOGETHER & THE RESULT */}
      <section
        data-nav-theme="light"
        className="relative py-20 px-6 bg-background text-foreground overflow-hidden border-t border-border"
      >
        <FlowerField count={6} />
        <div className="max-w-5xl mx-auto relative z-10 space-y-16">
          {/* Header */}
          <ScrollReveal variant="fade-up">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground">
                How They Work Together
              </h2>
              <p className="text-muted-foreground text-xs md:text-sm tracking-wider uppercase font-body">
                A Complete Spiritual Loop
              </p>
            </div>
          </ScrollReveal>

          {/* Cards Loop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                t: "Complete Immersion",
                d: "Teertha Yatra + Mantra chanting at sacred sites creates a powerful resonance with divine energies.",
                icon: "⚡",
              },
              {
                t: "Physical & Mental Alignment",
                d: "Yoga and Pranayama prepare your body and mind to fully receive the vibrations of sacred places.",
                icon: "🌀",
              },
              {
                t: "Wisdom & Understanding",
                d: "Swadhyay and Satsang provide the knowledge and guidance to understand and integrate your experiences.",
                icon: "💡",
              },
            ].map((step, idx) => (
              <ScrollReveal key={idx} variant="fade-up" delay={idx * 150}>
                <div className="p-6 md:p-8 rounded-3xl bg-white border border-black/[0.06] text-left hover:border-amber-600/30 hover:bg-muted transition duration-300 flex flex-col justify-between shadow-soft h-full">
                  <div>
                    <div className="text-2xl mb-4 text-amber-600">{step.icon}</div>
                    <h4 className="text-lg font-semibold font-display mb-3 text-foreground">
                      {step.t}
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-body">
                      {step.d}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* The Result: 100% Phal Card */}
          <ScrollReveal variant="scale-up">
            <div className="max-w-3xl mx-auto mt-12 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#2d0f30] via-[#1c081e] to-[#260e28] border border-amber-400/30 shadow-glow text-center relative overflow-hidden group">
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <div className="inline-block px-4 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-2 select-none animate-pulse font-body">
                  🏆 The Result: 100% Phal (Complete Benefit)
                </div>
                <p className="text-base md:text-lg text-white/95 font-body leading-relaxed max-w-2xl mx-auto">
                  When all five pillars are integrated, you receive the complete spiritual benefit
                  as described in sacred phala shrutis. Your journey becomes a true transformation,
                  not just visiting holy sites, but awakening your true nature of ever existent
                  bliss through knowledge, devotion, and experience.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
