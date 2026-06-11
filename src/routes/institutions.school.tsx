import { createFileRoute, Link } from "@tanstack/react-router";
import { FlowerField } from "@/components/FlowerField";
import { Mail, Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import studentsImg from "@/assets/students.png";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const Route = createFileRoute("/institutions/school")({
  component: SchoolPage,
  head: () => ({
    title: "Samyam for Schools | Sacred Learning Journeys",
    meta: [
      {
        name: "description",
        content:
          "More than study tours—immersions that blend civilizational wisdom with contemporary pedagogy, curated especially for students, faculty, and parent communities.",
      },
    ],
  }),
});

const whyChooseSchools = [
  {
    icon: "🎓",
    title: "Curriculum Aligned",
    desc: "Programs co-created with school faculty to match age, boards, and learning objectives.",
  },
  {
    icon: "🕉️",
    title: "Spiritual Authenticity",
    desc: "Scholar-led rituals, mantra sessions, and cultural immersions that honour the shastra.",
  },
  {
    icon: "🌱",
    title: "Character Building",
    desc: "Empathy, leadership, responsibility, and gratitude woven into every activity.",
  },
  {
    icon: "🛡️",
    title: "Safety & Care",
    desc: "Dedicated program managers, vetted stays, medical support, and clear communication with parents.",
  },
];

const threeStreamFramework = [
  {
    title: "Pre-Yatra Classroom",
    points: [
      "Orientation assemblies",
      "Storytelling & quizzes",
      "Reflection journals",
      "Mindfulness routines",
    ],
  },
  {
    title: "On-ground Immersion",
    points: [
      "Guided darshans & seva",
      "Workshops with artisans",
      "Cultural performances",
      "Yoga & mantra labs",
    ],
  },
  {
    title: "Post-Yatra Integration",
    points: [
      "Portfolio of learnings",
      "Service projects",
      "Parent showcase evenings",
      "Certificates & badges",
    ],
  },
];

const experienceArc = [
  {
    phase: "Orientation",
    detail: "Interactive sessions setting intent, cultural context, and safety briefings.",
  },
  {
    phase: "Immersion",
    detail: "Multi-day experiential journey with curated modules and reflective pauses.",
  },
  {
    phase: "Integration",
    detail: "Digital keepsakes, gratitude circles, and follow-up sessions with mentors.",
  },
];

const immersionLabs = [
  {
    title: "Yoga & Breathwork Labs",
    desc: "Short, age-appropriate practices to anchor energy before temple immersions.",
  },
  {
    title: "Culture Studios",
    desc: "Hands-on modules with classical artists, temple architects, and textile revivalists.",
  },
  {
    title: "Service Pods",
    desc: "Seva activities that build empathy, such as gaushala care, annadanam prep, or heritage clean-ups.",
  },
  {
    title: "Wisdom Circles",
    desc: "Dialogue-led sessions with scholars translating scriptures into modern life lessons.",
  },
];

function SchoolPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        data-nav-theme="dark"
        className="relative min-h-[75vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={studentsImg}
            alt="Students Exploring Heritage"
            className="w-full h-full object-cover object-center filter brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c081e]/30 via-[#1c081e]/60 to-[#1c081e]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 space-y-6">
          <ScrollReveal variant="fade-in" delay={100}>
            <span className="inline-block text-xs uppercase tracking-[0.5em] text-amber-400 font-bold select-none">
              SAMYAM FOR SCHOOLS
            </span>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={300}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold text-white leading-tight">
              Sacred Learning Journeys <br />
              <span className="text-amber-400">for Modern Classrooms</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={500}>
            <p className="text-white/95 text-base md:text-xl max-w-3xl mx-auto leading-relaxed font-body font-light">
              More than study tours—immersions that blend civilizational wisdom with contemporary
              pedagogy, curated especially for students, faculty, and parent communities.
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
                Not “just” sightseeing. We help students experience living Sanatan culture with awe,
                sensitivity, and relevance.
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed font-body">
                Every program is co-designed with school leadership, aligning with academic goals
                while initiating young minds into gratitude, seva, and inner leadership.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHY SCHOOLS CHOOSE SAMYAM */}
      <section
        data-nav-theme="dark"
        className="relative py-20 px-6 bg-[#1c081e] text-white overflow-hidden border-t border-white/5"
      >
        <FlowerField count={8} />
        <div className="max-w-6xl mx-auto relative z-10 space-y-12">
          <ScrollReveal variant="fade-up">
            <div className="text-center space-y-3">
              <span className="text-xs uppercase tracking-[0.5em] text-amber-400 font-semibold">
                Why Schools Choose SAMYAM
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-semibold">
                Learning that transforms
              </h2>
              <p className="text-white/60 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed font-body">
                We combine scholar guidance, stellar logistics, and thoughtful facilitation so every
                student completes the journey with clarity and pride.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChooseSchools.map((item, idx) => (
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

      {/* THREE STREAM FRAMEWORK */}
      <section
        data-nav-theme="light"
        className="relative py-20 px-6 bg-background overflow-hidden border-t border-border"
      >
        <FlowerField count={8} />
        <div className="max-w-6xl mx-auto relative z-10 space-y-12">
          <ScrollReveal variant="fade-up">
            <div className="text-center space-y-3">
              <span className="text-xs uppercase tracking-[0.5em] text-amber-600 font-semibold">
                Three Stream Framework
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
                How we co-create each journey
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {threeStreamFramework.map((stream, idx) => (
              <ScrollReveal key={idx} variant="scale-up" delay={idx * 150}>
                <div className="p-6 md:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-soft hover:shadow-glow hover:border-amber-600/30 transition-all duration-300 h-full">
                  <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-4 border-b border-border pb-2">
                    {stream.title}
                  </h3>
                  <ul className="space-y-3 text-xs md:text-sm text-muted-foreground list-none font-body">
                    {stream.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex gap-2.5 items-center">
                        <span className="text-amber-600 font-bold">✺</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE ARC SECTION */}
      <section
        data-nav-theme="dark"
        className="relative py-20 px-6 bg-gradient-to-b from-[#823883] to-[#3D0068] text-white overflow-hidden border-t border-white/5"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10 space-y-12">
          <ScrollReveal variant="fade-up">
            <div className="text-center space-y-3">
              <span className="text-xs uppercase tracking-[0.55em] text-amber-400 font-semibold">
                Experience Arc
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-semibold">
                A guided flow from intent to impact
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {experienceArc.map((arc, idx) => (
              <ScrollReveal key={idx} variant="fade-up" delay={idx * 150}>
                <div className="p-6 md:p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-amber-400/30 transition-all duration-300 h-full">
                  <span className="text-[10px] uppercase tracking-wider text-amber-400 font-bold block mb-2 font-body">
                    Phase {idx + 1}
                  </span>
                  <h3 className="text-xl font-display font-semibold mb-3 text-white">
                    {arc.phase}
                  </h3>
                  <p className="text-xs md:text-sm text-white/60 leading-relaxed font-body">
                    {arc.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* IMMERSION LABS */}
      <section
        data-nav-theme="light"
        className="relative py-20 px-6 bg-background overflow-hidden border-t border-border"
      >
        <FlowerField count={8} />
        <div className="max-w-6xl mx-auto relative z-10 space-y-12">
          <ScrollReveal variant="fade-up">
            <div className="text-left space-y-2">
              <span className="text-xs uppercase tracking-[0.5em] text-amber-600 font-semibold">
                Immersion Labs
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
                Where learning becomes visceral
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {immersionLabs.map((lab, idx) => (
              <ScrollReveal key={idx} variant="fade-up" delay={idx * 150}>
                <div className="p-6 md:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-soft hover:shadow-glow hover:border-amber-600/30 transition-all duration-300 h-full">
                  <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-3">
                    {lab.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-body">
                    {lab.desc}
                  </p>
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
              Let’s co-create your school’s next transformative journey
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={150}>
            <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed font-body">
              Share your preferred destination, batch size, timeline, and learning objectives. Our
              academic strategists will design an immersive program deck within 3 working days.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-cta text-white font-semibold rounded-full text-base shadow-soft hover:scale-[1.02] transition cursor-pointer border-none">
                    <span>Speak with our Schools Team</span>
                    <span>→</span>
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-[#1a0a1e]/95 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] overflow-hidden p-0 shadow-glow text-white">
                  <div className="relative">
                    <div className="h-2 w-full bg-gradient-cta" />
                    <div className="p-8 space-y-8">
                      <DialogHeader>
                        <DialogTitle className="text-3xl md:text-4xl font-display font-semibold text-white text-center">
                          Contact our Schools Team
                        </DialogTitle>
                        <DialogDescription className="text-center text-white/60 pt-2 font-body">
                          We're here to help you design the perfect journey for your students.
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
