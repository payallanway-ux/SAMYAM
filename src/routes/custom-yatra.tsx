import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { FlowerField } from "@/components/FlowerField";
import { Footer } from "@/components/Footer";
import React, { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { API_ENDPOINTS } from "@/lib/api-config";

export const Route = createFileRoute("/custom-yatra")({
  component: CustomYatraPage,
  head: () => ({
    title: "Customize Your Yatra | Samyam Spiritual Tourism",
    meta: [
      {
        name: "description",
        content:
          "Design a custom, spiritually rooted pilgrimage. Choose the place, pace, and depth of your sacred yatra.",
      },
    ],
  }),
});

const b$ = [
  {
    icon: "🗺️",
    title: "Choose Your Sacred Map",
    desc: "Select the kshetra, pace, and depth you desire, such as Kashi intensives, Mathura devotion trails, or bespoke circuits.",
  },
  {
    icon: "📅",
    title: "Tell Us Your Rhythm",
    desc: "Pick travel windows, festival alignments, preferred number of seekers, and the amount of stillness vs. exploration.",
  },
  {
    icon: "🕉️",
    title: "Spiritual Intent",
    desc: "Share your sankalpa (ancestral seva, inner healing, gratitude, initiation). We match rituals, mentors, and practices accordingly.",
  },
  {
    icon: "🤝",
    title: "We Co Create Everything",
    desc: "From scholar access to gourmet sattvic cuisine, from special darshans to travel documentation, we hold your hand throughout.",
  },
];

const w$ = [
  {
    title: "Dedicated Journey Designer",
    detail: "Single point of contact on WhatsApp and calls for every micro detail.",
  },
  {
    title: "Scholar Led Ritual Planning",
    detail: "We align pujas, sankalpas, and offerings exactly as prescribed in the scriptures.",
  },
  {
    title: "Premium Logistics",
    detail: "Handpicked stays, culinary curation, mindful transport, and vetted on ground teams.",
  },
  {
    title: "After Journey Anchors",
    detail:
      "Meditation recordings, community invites, and mentoring to sustain the bhakti you cultivated.",
  },
];

const _$ = [
  {
    title: "Temple Visits",
    desc: "Walk the sacred paths of timeless temples, experience divine blessings in every darshan.",
    icon: "🏛️",
  },
  {
    title: "Yoga & Mantra Sessions",
    desc: "Flow into place with yoga and mantra vibrations, realigning body and mind with timeless practice.",
    icon: "🧘",
  },
  {
    title: "Sound Healing",
    desc: "Bathed in the soothing rhythm of sound, hymns, and sonic bowls to restore inner harmony.",
    icon: "🎶",
  },
  {
    title: "Classical Music Immersions",
    desc: "Journey through soulful notes with kirtans, classical music, and soulful baithaks.",
    icon: "🎤",
  },
  {
    title: "Swadhyay Sessions",
    desc: "Inner work through self study circles, scripture dialogues, and scholar led satsangs.",
    icon: "📜",
  },
  {
    title: "Heritage Accommodations",
    desc: "Stay in comfort where every detail nourishes body, mind, and spirit; serenity meets luxury.",
    icon: "🏨",
  },
];

const T$ = [
  "Handpicked luxury, premium stays, comfort, and warmth.",
  "Seamless travel & logistics with effortless ground support.",
  "Sacred site visits + deep spiritual immersions guided by scholars.",
  "Journeys shaped with classical music, yoga, swadhyay, bhaava, and curated mentors.",
  "Tailored retreat design curated to your theme, community, or intent.",
  "With SAMYAM, experiences stay devotional, refined, and rooted in transformation.",
];

function CustomYatraPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelers: "",
    journeyType: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    // Basic validation
    if (step === 1 && (!formData.name || !formData.email || !formData.phone)) {
      alert("Please fill in all required fields.");
      return;
    }
    if (step === 2 && (!formData.destination || !formData.travelers)) {
      alert("Please specify a destination and traveler count.");
      return;
    }
    setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.journeyType || !formData.message) {
      alert("Please specify journey type and share your spiritual intent.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    const payload = {
      name: formData.name,
      phoneNumber: formData.phone,
      email: formData.email,
      preferredYatra: `Custom Yatra: ${formData.destination}`,
      travelers: formData.travelers,
      journeyType: formData.journeyType,
      budget: formData.budget || "Prefer not to say",
      message: formData.message,
    };

    try {
      const response = await fetch(API_ENDPOINTS.ENQUIRIES, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit custom yatra enquiry. Please try again.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground flex flex-col justify-between">
      <Nav />

      {/* HERO SECTION */}
      <section
        data-nav-theme="dark"
        className="relative min-h-[60vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://samyam.co/images/custom%20yatra.jpg"
            alt="Custom Yatra Hero"
            className="w-full h-full object-cover object-center filter brightness-[0.45]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c081e]/30 via-[#1c081e]/60 to-[#1c081e]"></div>
        </div>

        <FlowerField count={18} />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-6 pt-24">
          <ScrollReveal variant="fade-up" delay={100}>
            <p className="font-display italic text-accent text-lg md:text-xl tracking-wider">
              ॥ संकल्प से सिद्धि ॥
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={300}>
            <h1
              className="text-5xl md:text-8xl font-display font-semibold text-white tracking-tight leading-none"
              style={{
                textShadow: "0 6px 40px rgba(0,0,0,0.8), 0 0 60px rgba(174,49,100,0.3)",
              }}
            >
              Customize Your Yatra
            </h1>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={500}>
            <p className="text-white/80 text-sm md:text-lg max-w-2xl mx-auto font-body leading-relaxed">
              Co create a sacred pilgrimage tailored to your spiritual rhythm, preferred pace, and
              divine intent. Move beyond sightseeing to a true inner awakening.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* THE SAMYAM OFFERING (WEAVE) & SIDEBAR */}
      <section data-nav-theme="light" className="py-20 bg-background text-foreground relative">
        <FlowerField count={8} />
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-[1.3fr_0.7fr] gap-12 items-start relative z-10">
          {/* Grid of Weaving Points */}
          <div className="space-y-8 text-left">
            <ScrollReveal variant="fade-left">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-amber-600 mb-2 font-semibold">
                  What we weave in
                </p>
                <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground">
                  Tailored Devotional Immersions
                </h2>
                <p className="text-sm md:text-base text-muted-foreground mt-4 leading-relaxed max-w-xl font-body">
                  Our custom programs weave ancient wisdom, cultural richness, and premium comfort,
                  offering seekers more than travel, a true awakening.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {_$.map((item, i) => (
                <ScrollReveal key={i} variant="fade-up" delay={i * 100}>
                  <div className="p-6 rounded-3xl border border-black/[0.06] bg-white hover:border-amber-600/40 transition-all duration-300 space-y-3 flex flex-col justify-start shadow-soft h-full">
                    <div className="text-3xl">{item.icon}</div>
                    <h4 className="text-base uppercase tracking-[0.2em] font-semibold text-amber-600 leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-body">
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Sidebar Partner Card */}
          <ScrollReveal variant="fade-right" className="lg:sticky lg:top-28">
            <div className="p-5 sm:p-8 rounded-[32px] border border-black/[0.06] bg-white shadow-soft text-left space-y-6 text-foreground w-full">
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
                Partner With SAMYAM
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">
                Crafting retreats that go beyond travel, sacred experiences tailored for your
                vision, family, or corporate team.
              </p>
              <ul className="space-y-4">
                {T$.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-xs md:text-sm text-muted-foreground"
                  >
                    <span className="text-amber-600 mt-0.5 shrink-0">✺</span>
                    <span className="leading-relaxed font-body">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl border border-border bg-muted p-5 flex flex-col gap-2 text-xs md:text-sm shadow-sm font-body">
                <span className="font-semibold uppercase tracking-[0.25em] text-amber-600">
                  Contact Support
                </span>
                <a
                  href="tel:+919035225375"
                  className="hover:text-amber-600 text-foreground transition font-medium"
                >
                  +91 9035225375
                </a>
                <a
                  href="mailto:samyamspirituals@gmail.com"
                  className="hover:text-amber-600 text-foreground transition font-medium"
                >
                  samyamspirituals@gmail.com
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CO-CREATION PROCESS */}
      <section
        data-nav-theme="light"
        className="py-20 bg-background text-foreground border-y border-border relative"
      >
        <FlowerField count={8} />
        <div className="max-w-6xl mx-auto px-6 text-center">
          <ScrollReveal variant="fade-up">
            <div className="space-y-4 mb-16">
              <p className="text-xs uppercase tracking-[0.4em] text-amber-600 font-semibold">
                How we co create
              </p>
              <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground leading-tight">
                Choose the place, pace, and purpose. We hold everything else.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {b$.map((p, i) => (
              <ScrollReveal key={i} variant="scale-up" delay={i * 100}>
                <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-soft hover:shadow-glow hover:border-amber-600/30 hover:-translate-y-1 transition-all duration-300 space-y-4 h-full">
                  <div className="text-4xl">{p.icon}</div>
                  <h3 className="text-lg font-display font-semibold text-foreground">{p.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-body">
                    {p.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* MULTI-STEP INTENTION FORM */}
      <section data-nav-theme="dark" className="py-20 bg-[#1c081e] text-white relative">
        <FlowerField count={10} />
        <ScrollReveal variant="fade-up" className="max-w-3xl mx-auto px-6 relative z-10">
          {submitted ? (
            <div className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 shadow-glow text-center space-y-6">
              <div className="text-6xl md:text-8xl animate-pulse">✨</div>
              <h2 className="text-3xl md:text-5xl font-display font-semibold text-white">
                Pranaam & Thank You
              </h2>
              <p className="text-white/80 text-sm md:text-lg max-w-xl mx-auto leading-relaxed font-body">
                Your intention has been received. Our team will contact you within 24 hours to craft
                your personalized spiritual journey.
              </p>
              <div className="pt-4">
                <a
                  href="/"
                  className="inline-block px-8 py-3 bg-gradient-cta text-accent-foreground font-bold rounded-full shadow-soft hover:scale-105 transition-all text-sm tracking-wide"
                >
                  Return Home
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-10">
              {/* Stepper Header */}
              <div className="flex items-center justify-between mb-8 max-w-md mx-auto">
                {[
                  { id: 1, title: "Intent" },
                  { id: 2, title: "Plan" },
                  { id: 3, title: "Preferences" },
                ].map((s) => (
                  <div key={s.id} className="flex items-center flex-1 last:flex-none">
                    <div className="flex flex-col items-center flex-1">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-xs md:text-sm transition-all duration-300 ${
                          step >= s.id ? "bg-gradient-cta text-white" : "bg-white/10 text-white/50"
                        }`}
                      >
                        {step > s.id ? "✓" : s.id}
                      </div>
                      <span className="mt-2 text-[10px] uppercase tracking-wider opacity-60">
                        {s.title}
                      </span>
                    </div>
                    {s.id < 3 && (
                      <div
                        className={`h-0.5 flex-1 mx-2 transition-all duration-500 ${
                          step > s.id ? "bg-accent" : "bg-white/10"
                        }`}
                      ></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Form Body */}
              <form
                onSubmit={handleSubmit}
                className="p-5 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 shadow-glow text-left space-y-6 backdrop-blur-md"
              >
                {error && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-200 text-xs rounded-2xl text-center">
                    {error}
                  </div>
                )}
                {step === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-xl md:text-2xl font-display font-semibold border-b border-white/10 pb-2 text-white">
                      Tell Us About Yourself
                    </h3>
                    <div className="space-y-4 font-body">
                      <div>
                        <label className="block text-xs font-semibold text-amber-400/85 mb-2 uppercase tracking-wider">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="w-full rounded-2xl bg-white/[0.04] border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 text-sm transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-amber-400/85 mb-2 uppercase tracking-wider">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          className="w-full rounded-2xl bg-white/[0.04] border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 text-sm transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-amber-400/85 mb-2 uppercase tracking-wider">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full rounded-2xl bg-white/[0.04] border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 text-sm transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-xl md:text-2xl font-display font-semibold border-b border-white/10 pb-2 text-white">
                      Where & When?
                    </h3>
                    <div className="space-y-4 font-body">
                      <div>
                        <label className="block text-xs font-semibold text-amber-400/85 mb-2 uppercase tracking-wider">
                          Preferred Destination *
                        </label>
                        <select
                          required
                          name="destination"
                          value={formData.destination}
                          onChange={handleChange}
                          className="w-full rounded-2xl bg-white/[0.04] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 text-sm transition-all duration-300 [&>option]:bg-[#1c081e] [&>option]:text-white"
                        >
                          <option value="">Select a destination</option>
                          <option value="kashi">Kashi (Varanasi)</option>
                          <option value="mathura-vrindavan">Mathura Vrindavan</option>
                          <option value="dwarka-somnath">Dwarka Somnath</option>
                          <option value="char-dham">Char Dham circuit</option>
                          <option value="himachal">Himachal Shaktipeethas</option>
                          <option value="other">Other / Custom route</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-amber-400/85 mb-2 uppercase tracking-wider">
                          Number of Travelers *
                        </label>
                        <select
                          required
                          name="travelers"
                          value={formData.travelers}
                          onChange={handleChange}
                          className="w-full rounded-2xl bg-white/[0.04] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 text-sm transition-all duration-300 [&>option]:bg-[#1c081e] [&>option]:text-white"
                        >
                          <option value="">Select traveler count</option>
                          <option value="1">Just Me</option>
                          <option value="2">2 People</option>
                          <option value="3-5">3 to 5 People</option>
                          <option value="6-10">6 to 10 People</option>
                          <option value="10+">More than 10</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-xl md:text-2xl font-display font-semibold border-b border-white/10 pb-2 text-white">
                      Journey Preferences
                    </h3>
                    <div className="space-y-4 font-body">
                      <div>
                        <label className="block text-xs font-semibold text-amber-400/85 mb-2 uppercase tracking-wider">
                          Journey Type *
                        </label>
                        <select
                          required
                          name="journeyType"
                          value={formData.journeyType}
                          onChange={handleChange}
                          className="w-full rounded-2xl bg-white/[0.04] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 text-sm transition-all duration-300 [&>option]:bg-[#1c081e] [&>option]:text-white"
                        >
                          <option value="">Select journey type</option>
                          <option value="solo">Solo yatra</option>
                          <option value="family">Family yatra</option>
                          <option value="corporate">Corporate immersion</option>
                          <option value="group">Group journey</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-amber-400/85 mb-2 uppercase tracking-wider">
                          Budget Range (Optional)
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full rounded-2xl bg-white/[0.04] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 text-sm transition-all duration-300 [&>option]:bg-[#1c081e] [&>option]:text-white"
                        >
                          <option value="">Prefer not to say</option>
                          <option value="essentials">Curated Essentials</option>
                          <option value="premium">Premium Comfort</option>
                          <option value="luxury">Luxury Immersion</option>
                          <option value="bespoke">Bespoke Royal Experience</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-amber-400/85 mb-2 uppercase tracking-wider">
                          Tell Us Your Spiritual Intent *
                        </label>
                        <textarea
                          required
                          rows={4}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="What draw is pulling you to this sacred pilgrimage? What seekings do you have?"
                          className="w-full rounded-2xl bg-white/[0.04] border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 text-sm resize-none transition-all duration-300 font-body"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                )}

                {/* Form Buttons */}
                <div className="flex justify-between items-center pt-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={step === 1}
                    className={`px-6 py-2.5 rounded-full font-medium transition-all text-xs md:text-sm font-body ${
                      step === 1
                        ? "opacity-30 cursor-not-allowed"
                        : "hover:bg-white/20 hover:scale-102"
                    }`}
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "white",
                    }}
                  >
                    ← Previous
                  </button>
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-6 py-2.5 bg-gradient-cta text-white font-semibold rounded-full text-xs md:text-sm hover:scale-[1.05] shadow-md transition cursor-pointer"
                    >
                      Next →
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2.5 bg-gradient-cta text-white font-semibold rounded-full text-xs md:text-sm hover:scale-[1.05] active:scale-[0.98] shadow-md transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Intent"}
                    </button>
                  )}
                </div>
              </form>
            </div>
          )}
        </ScrollReveal>
      </section>

      {/* JOURNEY DESIGNER CONCIERGE */}

      <Footer />
    </div>
  );
}
