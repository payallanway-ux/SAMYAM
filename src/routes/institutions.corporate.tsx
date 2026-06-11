import { createFileRoute, Link } from "@tanstack/react-router";
import { FlowerField } from "@/components/FlowerField";
import { Mail, Phone, CheckCircle2, Clock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import studentsImg from "@/assets/students.png";
import corporatePackagesImg from "@/assets/corporate_packages.png";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const Route = createFileRoute("/institutions/corporate")({
  component: CorporatePage,
  head: () => ({
    title: "Samyam for Corporate | Conscious Wellness",
    meta: [
      {
        name: "description",
        content:
          "Moving from stress management to inner stability. Transform your corporate culture through mindfulness and spiritual leadership.",
      },
    ],
  }),
});

const corporatePrograms = [
  {
    icon: "🧘",
    title: "Enhanced Well-being",
    desc: "Reduce stress and improve mental clarity through spiritual practices.",
  },
  {
    icon: "🤝",
    title: "Team Bonding",
    desc: "Deep connections through shared spiritual experiences.",
  },
  {
    icon: "💡",
    title: "Leadership Growth",
    desc: "Ancient wisdom for modern leadership challenges.",
  },
  {
    icon: "🌱",
    title: "Cultural Immersion",
    desc: "Authentic experiences of India's rich spiritual heritage.",
  },
];

const corporatePackages = [
  {
    title: "Team Immersion",
    duration: "3-5 Days",
    desc: "Perfect for teams seeking spiritual growth and deeper connection.",
    features: ["Accommodation", "All Meals", "Daily Satsang", "Team Activities", "Expert Guides"],
    pricing: "Pricing on request",
    accent: "amber",
  },
  {
    title: "Leadership Retreat",
    duration: "5-7 Days",
    desc: "Transform leadership through ancient wisdom and spiritual practices.",
    features: [
      "Luxury Accommodation",
      "Gourmet Meals",
      "Personal Sessions",
      "Yoga & Meditation",
      "Cultural Experiences",
    ],
    pricing: "Pricing on request",
    accent: "purple",
    popular: true,
  },
  {
    title: "Custom Corporate Journey",
    duration: "Flexible",
    desc: "Tailored experiences designed for your organization's unique needs.",
    features: [
      "Fully Customizable",
      "Multiple Destinations",
      "Workshop Sessions",
      "Team Building",
      "Flexible Schedule",
    ],
    pricing: "Custom Quote",
    accent: "orange",
  },
];

function CorporatePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        data-nav-theme="dark"
        className="relative min-h-[75vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://img.magnific.com/free-photo/low-angle-view-skyscrapers_1359-1105.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Corporate Wellness and Spiritual Leadership"
            className="w-full h-full object-cover object-center filter brightness-[0.4]"
          />
          <div
            className="absolute inset-0"
            style={{
              opacity: 0.85,
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 space-y-6">
          <ScrollReveal variant="fade-in" delay={100}>
            <span className="inline-block text-xs uppercase tracking-[0.5em] text-amber-400 font-bold select-none">
              SAMYAM FOR CORPORATES
            </span>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={300}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold text-white leading-tight">
              Conscious Corporate Wellness <br />
              <span className="text-amber-400">for Inner Stability</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={500}>
            <p className="text-white/95 text-base md:text-xl max-w-3xl mx-auto leading-relaxed font-body font-light">
              Moving from stress management to inner stability. Transform your corporate culture
              through mindfulness, spiritual leadership, and transformative team journeys.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* OUR INTENT SECTION */}
      <section
        data-nav-theme="light"
        className="relative py-20 px-6 bg-background overflow-hidden border-t border-border"
      >
        <FlowerField count={8} />
        <div className="max-w-5xl mx-auto relative z-10">
          <ScrollReveal variant="fade-up">
            <div className="p-8 md:p-14 text-center rounded-[2.5rem] bg-white border border-black/[0.06] shadow-glow space-y-6 text-foreground">
              <span className="text-xs uppercase tracking-[0.55em] text-amber-600 font-bold">
                Our Intent
              </span>
              <h2 className="text-2xl md:text-4xl font-display font-semibold text-foreground max-w-3xl mx-auto leading-tight">
                From stress management to inner stability. We help organizations foster a more
                balanced and conscious work culture.
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed font-body">
                Our corporate programs blend spiritual wisdom with professional excellence,
                providing teams the tools to lead with clarity, empathy, and sustainable intent.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHY CORPORATE CHOOSE SAMYAM */}
      <section
        data-nav-theme="dark"
        className="relative py-20 px-6 text-white overflow-hidden border-t border-white/5"
        style={{
          background: `radial-gradient(circle at 0% 0%, #443741 0%, transparent 60%), 
                       radial-gradient(circle at 100% 100%, #64307A 0%, transparent 60%), 
                       #6D317B`,
        }}
      >
        <FlowerField count={8} />
        <div className="max-w-6xl mx-auto relative z-10 space-y-12">
          <ScrollReveal variant="fade-up">
            <div className="text-center space-y-3">
              <span className="text-xs uppercase tracking-[0.5em] text-amber-400 font-semibold">
                Why Choose SAMYAM for Corporate Journeys?
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-semibold">
                Blend ancient wisdom with modern leadership needs
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {corporatePrograms.map((item, idx) => (
              <ScrollReveal key={idx} variant="fade-up" delay={idx * 150}>
                <div className="p-6 md:p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-amber-400/30 transition-all duration-300 group text-left h-full">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-white font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-white/60 leading-relaxed font-body">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CORPORATE SPECIFIC SECTIONS */}
      <section
        data-nav-theme="light"
        className="relative py-20 px-6 bg-background overflow-hidden border-t border-border"
      >
        <FlowerField count={8} />
        <div className="max-w-6xl mx-auto relative z-10 space-y-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal variant="fade-right">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground leading-tight">
                  The SAMYAM <br />
                  <span className="text-amber-600">Difference</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed font-body">
                  Our corporate journeys are not team-building activities disguised as trips. They
                  are authentic spiritual experiences designed to awaken deeper purpose, enhance
                  decision-making, and build genuine connections.
                </p>
                <ul className="space-y-4">
                  {[
                    "Expert guides with corporate experience",
                    "Flexible itineraries for business needs",
                    "Integration of Vedic wisdom with leadership",
                    "Focus on sustainable and responsible travel",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground font-body">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fade-left" delay={200}>
              <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-glow border border-border">
                <img
                  src="https://i.pinimg.com/originals/37/da/e9/37dae98cd39af52785a8aebda673b2cb.jpg"
                  alt="Team Building"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white">
                  <p className="text-2xl font-display font-medium">
                    "Innovation starts with a steady mind."
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CORPORATE PACKAGES SECTION */}
      <section
        data-nav-theme="dark"
        className="relative py-24 px-6 text-white overflow-hidden border-t border-border"
        style={{
          background: `radial-gradient(circle at 100% 0%, #763B7D 0%, transparent 60%), 
                       radial-gradient(circle at 0% 100%, #443741 0%, transparent 60%), 
                       #6D317B`,
        }}
      >
        <FlowerField count={5} />
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-16 space-y-4">
              <span className="text-xs uppercase tracking-[0.5em] text-amber-400 font-bold">
                Tailored Experiences
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-semibold text-white">
                Corporate Wellness Packages
              </h2>
              <p className="text-sm md:text-base text-white/70 max-w-2xl mx-auto font-body">
                Choose the journey that best aligns with your organization's goals and timeline.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {corporatePackages.map((pkg, idx) => (
              <ScrollReveal key={idx} variant="fade-up" delay={idx * 150}>
                <div
                  className={`relative group p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 shadow-soft hover:shadow-glow hover:-translate-y-2 transition-all duration-500 h-full flex flex-col ${
                    pkg.popular ? "ring-2 ring-amber-500/20" : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-glow-amber">
                      Most Recommended
                    </div>
                  )}

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                        <Clock size={12} className="text-amber-400" />
                        {pkg.duration}
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-semibold text-white mb-3">
                      {pkg.title}
                    </h3>
                    <p className="text-xs text-white/60 leading-relaxed font-body">{pkg.desc}</p>
                  </div>

                  <div className="space-y-4 mb-8 flex-grow">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <ul className="space-y-3">
                      {pkg.features.map((feature, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-center gap-3 text-xs text-white/60 font-body"
                        >
                          <CheckCircle2 size={14} className="text-amber-400 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto space-y-6">
                    <div className="text-center">
                      <p className="text-xs text-white/40 uppercase tracking-widest mb-1 font-body">
                        Investment
                      </p>
                      <p className="text-lg font-semibold text-white">{pkg.pricing}</p>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all duration-300 cursor-pointer shadow-sm">
                          Request Quote
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md bg-[#1a0a1e]/95 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] overflow-hidden p-0 shadow-glow text-white">
                        <div className="relative">
                          <div className="h-2 w-full bg-gradient-cta" />
                          <div className="p-8 space-y-8">
                            <DialogHeader>
                              <DialogTitle className="text-3xl md:text-4xl font-display font-semibold text-white text-center">
                                Request for {pkg.title}
                              </DialogTitle>
                              <DialogDescription className="text-center text-white/60 pt-2 font-body">
                                We'll help you design a transformative experience for your team.
                              </DialogDescription>
                            </DialogHeader>

                            <div className="grid gap-4 font-body">
                              <a
                                href={`mailto:samyamspirituals@gmail.com?subject=Inquiry for ${pkg.title}`}
                                className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] hover:border-amber-400/40 transition-all group"
                              >
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-amber-400 group-hover:text-amber-400 transition-colors">
                                  <Mail className="w-6 h-6" />
                                </div>
                                <div className="text-left">
                                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400/80">
                                    Email Us
                                  </p>
                                  <p className="text-white font-medium">
                                    samyamspirituals@gmail.com
                                  </p>
                                </div>
                              </a>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <a
                                  href="tel:+919035225375"
                                  className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] hover:border-amber-400/40 transition-all group"
                                >
                                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-amber-400 group-hover:text-amber-400 transition-colors">
                                    <Phone className="w-6 h-6" />
                                  </div>
                                  <div className="text-left">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400/80">
                                      Call Now
                                    </p>
                                    <p className="text-white font-medium text-sm">+91 9035225375</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section
        data-nav-theme="dark"
        className="relative py-20 px-6 bg-gradient-to-br from-[#260e28] via-[#1a0a1e] to-[#2d0f30] border-t border-white/5 overflow-hidden"
      >
        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          <ScrollReveal variant="fade-up">
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-white leading-tight max-w-3xl mx-auto">
              Transform your organization’s approach to well-being
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={150}>
            <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed font-body">
              Partner with us to design a bespoke wellness program or leadership retreat tailored to
              your organization’s unique challenges and goals.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-cta text-white font-semibold rounded-full text-base shadow-soft hover:scale-[1.02] transition cursor-pointer border-none">
                    <span>Speak with our Corporate Team</span>
                    <span>→</span>
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-[#1a0a1e]/95 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] overflow-hidden p-0 shadow-glow text-white">
                  <div className="relative">
                    <div className="h-2 w-full bg-gradient-cta" />
                    <div className="p-8 space-y-8">
                      <DialogHeader>
                        <DialogTitle className="text-3xl md:text-4xl font-display font-semibold text-white text-center">
                          Contact our Corporate Team
                        </DialogTitle>
                        <DialogDescription className="text-center text-white/60 pt-2 font-body">
                          We're here to help you design the perfect journey for your organization.
                        </DialogDescription>
                      </DialogHeader>

                      <div className="grid gap-4 font-body">
                        <a
                          href="mailto:samyamspirituals@gmail.com"
                          className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] hover:border-amber-400/40 transition-all group"
                        >
                          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-amber-400 group-hover:text-amber-400 transition-colors">
                            <Mail className="w-6 h-6" />
                          </div>
                          <div className="text-left">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400/80">
                              Email Us
                            </p>
                            <p className="text-white font-medium">samyamspirituals@gmail.com</p>
                          </div>
                        </a>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <a
                            href="tel:+919035225375"
                            className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] hover:border-amber-400/40 transition-all group"
                          >
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-amber-400 group-hover:text-amber-400 transition-colors">
                              <Phone className="w-6 h-6" />
                            </div>
                            <div className="text-left">
                              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400/80">
                                Call Now
                              </p>
                              <p className="text-white font-medium text-sm">+91 9035225375</p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <Link
                to="/knowledge-portal"
                className="inline-flex items-center justify-center px-8 py-4 border border-amber-400 text-amber-400 font-semibold rounded-full text-base hover:bg-amber-400/10 transition cursor-pointer"
              >
                Review Content
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
