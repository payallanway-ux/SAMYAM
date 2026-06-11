import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { FlowerField } from "@/components/FlowerField";
import spiritualJoy from "@/assets/spiritual_joy_new.jpg";
import aarti from "@/assets/aarti.jpg";
import founder from "@/assets/founder.jpg";
import bgAbout from "@/assets/bg-about.png";
import logo from "@/assets/logo.png";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    title: "About Samyam | Philosophy & Purpose",
    meta: [
      {
        name: "description",
        content:
          "Welcome to Samyam Spiritual Tourism, where spiritual travel is not just a journey, but an exquisite transcendental experience.",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground flex flex-col justify-between">
      <Nav />

      {/* PHILOSOPHY & PURPOSE HERO */}
      <section
        data-nav-theme="dark"
        className="relative pt-36 pb-24 px-4 text-center overflow-hidden min-h-[60vh] md:min-h-[70vh] flex items-center justify-center"
      >
        <img
          src={bgAbout}
          alt="Samyam Background"
          className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-[0.4]"
        />
        {/* Soft overlay to ensure readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c081e]/30 via-[#1c081e]/60 to-[#1c081e] z-0" />

        <FlowerField count={10} />

        <div className="relative z-10 max-w-4xl mx-auto mt-8">
          <ScrollReveal variant="fade-up" delay={100}>
            <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-none drop-shadow-lg">
              Philosophy & Purpose
            </h1>
          </ScrollReveal>

          {/* Gradient Line Underline */}
          <ScrollReveal variant="fade-up" delay={300}>
            <div className="w-24 h-1 bg-gradient-cta mx-auto my-6 rounded-full" />
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={400}>
            <p className="text-base md:text-xl text-white/90 font-body max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Rooted in ancient wisdom, guided by modern compassion
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-in" delay={650}>
            <div>
              <p className="mt-12 text-xs tracking-[0.3em] uppercase text-white/60 drop-shadow-sm">
                About Samyam
              </p>
              <h2 className="mt-2 text-lg md:text-xl text-white/80 font-display font-medium italic drop-shadow-md">
                Travel Beyond. Discover Within.
              </h2>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* INTRO GRID */}
      <section
        data-nav-theme="light"
        className="py-16 px-4 bg-background overflow-hidden border-t border-border relative"
      >
        <FlowerField count={8} />
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column - Content Card */}
          <ScrollReveal variant="fade-left" className="lg:col-span-7 h-full">
            <div className="bg-white border border-black/[0.06] rounded-3xl p-8 md:p-12 shadow-soft flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-amber-600 font-semibold">
                    About Samyam
                  </span>
                  <div className="h-[1px] w-12 bg-amber-600/30" />
                </div>
                <h2 className="font-display font-semibold text-3xl md:text-5xl text-foreground leading-tight mb-6">
                  Travel Beyond.
                  <br />
                  Discover Within.
                </h2>

                <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed font-body">
                  <p>
                    Welcome to Samyam Spiritual Tourism, where spiritual travel is not just a
                    journey, but an exquisite transcendental experience. Founded by Nileema Shenoy
                    and a team of Sanatani scholars, Samyam redefines the very essence of teerth
                    yatra by seamlessly blending tools to invoke divine energies, inner tranquility,
                    and luxurious comfort.
                  </p>
                  <p>
                    We cater to seekers who aspire to elevate their spiritual consciousness while
                    indulging in the powerful aura of Bharat's most sacred destinations through
                    meticulously programmed premium pilgrimages.
                  </p>
                  <p>
                    At Samyam, we believe that a pilgrimage is not merely an itinerary, but an
                    intimate dialogue with the divine, offering an opportunity to spiritually
                    advance.
                  </p>
                  <p>
                    By imbibing our spiritual and cultural exuberance, we ensure that each traveller
                    experiences an awakening that aligns their soul with the supreme, unlocking the
                    highest potential of bhakti, jnana, and vairagya using the traditional methods
                    and tools prescribed in our ancient texts.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-8">
                  {[
                    "Scholar led rituals",
                    "Guided yoga & dhyan",
                    "Satsang immersion",
                    "Boutique curation",
                    "Bespoke seva tracks",
                  ].map((badge) => (
                    <span
                      key={badge}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-muted text-amber-600 border border-border font-body"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics Sub-Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-border font-body">
                <div className="p-4 rounded-2xl bg-muted border border-border">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Founded By
                  </p>
                  <p className="text-sm font-semibold text-foreground mt-1">Nileema Shenoy</p>
                </div>
                <div className="p-4 rounded-2xl bg-muted border border-border">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Guided By
                  </p>
                  <p className="text-sm font-semibold text-foreground mt-1">Sanatani Scholars</p>
                </div>
                <div className="p-4 rounded-2xl bg-muted border border-border">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Signature
                  </p>
                  <p className="text-sm font-semibold text-foreground mt-1">
                    Premium Ritual Immersions
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-muted border border-border">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Focus
                  </p>
                  <p className="text-sm font-semibold text-foreground mt-1">
                    Inner & Outer Exploration
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Media Portrait Card */}
          <ScrollReveal variant="fade-right" className="lg:col-span-5 h-full">
            <div className="relative overflow-hidden rounded-3xl shadow-glow border border-border group min-h-[500px] h-full">
              <img
                src={spiritualJoy}
                alt="Seekers celebrating with joy"
                className="w-full h-full object-cover group-hover:scale-102 transition duration-500"
              />
              {/* Dark overlay at the bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1c081e] via-[#1c081e]/50 to-transparent pointer-events-none" />

              <div className="absolute bottom-8 left-8 right-8 text-white z-10">
                <p className="text-[10px] uppercase tracking-[0.25em] text-amber-400 font-semibold mb-1">
                  Sacred Symmetry
                </p>
                <h3 className="font-display font-semibold text-xl md:text-2xl mb-2 text-white">
                  Sanatan Wisdom × Contemporary Care
                </h3>
                <p className="text-xs text-white/80 leading-relaxed font-light font-body">
                  Scholar led rituals · Guided yoga & dhyan · Curated satsangs · Bespoke stays
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SACRED DESIGN HOUSE */}
      <section
        data-nav-theme="light"
        className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-[#f8efe6] via-[#fbf7f2] to-[#f3e6d8] text-foreground border-t border-border"
      >
        <FlowerField count={8} />

        <div className="relative max-w-6xl mx-auto text-center z-10">
          <ScrollReveal variant="fade-up">
            <p className="text-xs tracking-[0.3em] uppercase text-amber-600 font-semibold mb-3">
              We Are
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground leading-tight mb-8">
              A Sacred Design House
            </h2>
            <div className="max-w-3xl mx-auto space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed mb-16 font-body">
              <p>
                We are committed to{" "}
                <span className="text-amber-600 font-semibold">
                  reviving the true essence of teerth yatra
                </span>
                , ensuring that every seeker embarks on a spiritually enriching journey. Our
                exquisitely curated programs are designed to align with the{" "}
                <span className="text-amber-600 font-semibold">
                  sacred teachings of ancient scriptures
                </span>
                , offering not just a visit to holy sites but a profound inner transformation.
              </p>
              <p>
                With <span className="text-amber-600 font-semibold">scholar led guidance</span>,
                immersive rituals, and curated comforts, we create journeys that honour tradition
                while welcoming modern seekers into a space of{" "}
                <span className="text-amber-600 font-semibold">
                  reverence, reflection, and renewal
                </span>
                .
              </p>
            </div>
          </ScrollReveal>

          {/* 4 Feature cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 text-left font-body">
            {[
              {
                label: "Spirit of Service",
                desc: "Seva-driven hospitality with warmth",
              },
              {
                label: "Curatorial Edge",
                desc: "Each yatra is choreographed with rasa & rhythm",
              },
              {
                label: "Modern Sensibility",
                desc: "Luxury that bows to sacredness",
              },
              {
                label: "Ancestral Lineage",
                desc: "Practices blessed by parampara",
              },
            ].map((f, idx) => (
              <ScrollReveal key={f.label} variant="scale-up" delay={idx * 100}>
                <div className="bg-white border border-black/[0.05] p-6 rounded-2xl hover:bg-white/[0.8] hover:border-amber-600/40 hover:scale-[1.02] transition-all duration-300 group shadow-soft h-full">
                  <p className="text-[10px] uppercase tracking-wider text-amber-600 mb-2 font-semibold">
                    {f.label}
                  </p>
                  <p className="text-sm md:text-base font-semibold text-foreground leading-snug">
                    {f.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Prepare - Immerse - Absorb - Integrate horizontal block */}
          <div className="bg-white border border-black/[0.05] rounded-2xl grid grid-cols-2 md:grid-cols-4 gap-6 p-8 text-center mb-16 shadow-lg shadow-black/5 font-body">
            {[
              {
                t: "Prepare",
                d: "Pre yatra swadhyay & sankalp design",
              },
              {
                t: "Immerse",
                d: "On ground rituals, seva & dhyan",
              },
              {
                t: "Absorb",
                d: "Reflection circles & satsang dialogues",
              },
              {
                t: "Integrate",
                d: "Post yatra anchors for daily life",
              },
            ].map((step, idx, arr) => (
              <ScrollReveal key={step.t} variant="fade-up" delay={idx * 150}>
                <div
                  className={`relative flex flex-col items-center justify-center px-4 group hover:scale-105 transition-transform duration-300 h-full ${
                    idx < arr.length - 1 ? "md:border-r md:border-black/10" : ""
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-amber-600 font-bold mb-2 group-hover:text-primary transition-colors">
                    {step.t}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px]">
                    {step.d}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* 4 Numbered cards grid */}
          <div className="grid md:grid-cols-2 gap-8 text-left mb-16">
            {[
              {
                num: "1",
                t: "Authentic Spiritual Experience",
                d: "We guide seekers in undertaking teerth yatras in their <span class='text-amber-600 font-semibold'>truest spirit</span>, fostering a deep connection with divine energies.",
              },
              {
                num: "2",
                t: "Maximizing Spiritual Benefits",
                d: "Our yatras are structured to help travellers receive the <span class='text-amber-600 font-semibold'>complete phal</span> (spiritual incentives) as described in sacred phala shruthis.",
              },
              {
                num: "3",
                t: "Divine Immersion",
                d: "Seekers absorb the <span class='text-amber-600 font-semibold'>divine vibrations</span> of these destinations through sacred rituals, guided yoga and meditations, and time with revered saints.",
              },
              {
                num: "4",
                t: "Heart Centred Awakening",
                d: "Our journeys focus on <span class='text-amber-600 font-semibold'>opening the anahata chakra</span>, deepening one's bhakti (devotion), and leading towards true jnana (wisdom) and vairagya.",
              },
            ].map((card, idx) => (
              <ScrollReveal key={card.num} variant="fade-up" delay={idx * 100}>
                <div className="bg-white border border-black/[0.05] p-8 rounded-3xl flex flex-col gap-3 relative hover:bg-white/[0.8] hover:border-amber-600/30 hover:scale-[1.01] transition-all duration-300 group shadow-lg shadow-black/5 h-full">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center text-sm font-bold text-amber-600 shadow-soft group-hover:border-amber-600/50 transition-colors font-body">
                      {card.num}
                    </div>
                    <h3 className="font-semibold text-lg md:text-xl text-foreground group-hover:text-amber-600 transition-colors">
                      {card.t}
                    </h3>
                  </div>
                  <p
                    className="text-sm text-muted-foreground leading-relaxed pl-14 font-body"
                    dangerouslySetInnerHTML={{ __html: card.d }}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Closing italic quote */}
          <ScrollReveal variant="fade-up">
            <p className="font-display italic text-lg md:text-xl text-[#5c245e] leading-relaxed max-w-4xl mx-auto drop-shadow-sm">
              "With Samyam, every yatra becomes a sacred passage, transforming the seeker from
              within, paving the way for divine spiritual awakening and eternal bliss."
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* TRAVEL BEYOND SECTION */}
      <section
        data-nav-theme="light"
        className="py-16 px-4 bg-background overflow-hidden border-t border-border relative"
      >
        <FlowerField count={8} />
        <div className="max-w-6xl mx-auto bg-white border border-black/[0.06] rounded-[2rem] p-8 md:p-12 shadow-glow text-foreground">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left bio content */}
            <div className="lg:col-span-6 text-left">
              <ScrollReveal variant="fade-left">
                <div className="space-y-6">
                  <h2 className="font-display font-semibold text-3xl md:text-5xl text-foreground leading-tight">
                    Travel Beyond.
                    <br />
                    Discover Within.
                  </h2>
                  <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed font-body">
                    <p>
                      SAMYAM offers premium pilgrimages that are more than journeys, they are sacred
                      experiences designed to align the soul with divine vibrations. We blend
                      Sanatan wisdom with contemporary comfort, guiding both inner exploration and
                      immersive darshans across Bharat.
                    </p>
                    <p>
                      Spirituality is not a privilege but a birthright. Our journeys are crafted to
                      be profound yet welcoming for young seekers, modern explorers, and families
                      alike. Every itinerary is a living dialogue between tradition and the present
                      moment.
                    </p>
                    <p>
                      We challenge the notion that spirituality belongs only to the past or to
                      isolation. Spirituality is alive, relevant, and deeply personal. Journeys
                      should be immersive, enriching, and timeless.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4 text-left font-body">
              {[
                {
                  t: "Devotional Luxury",
                  d: "Handpicked stays, curated culinary experiences, and bespoke care that honour the sanctity of the journey.",
                },
                {
                  t: "Scripture Aligned Design",
                  d: "Each day’s rhythm references shastra, ensuring seekers receive the spiritual phal promised in phala shruthis.",
                },
                {
                  t: "Inner & Outer Exploration",
                  d: "Morning sadhanas, riverside meditations, temple darshans, and evening satsangs harmonise inner stillness with outer awe.",
                },
                {
                  t: "Living Spirituality",
                  d: "We make Sanatan wisdom contemporary, relevant for families, leaders, young seekers, and those in golden years.",
                },
              ].map((card, idx) => (
                <ScrollReveal key={card.t} variant="fade-up" delay={idx * 100}>
                  <div className="p-6 rounded-2xl bg-muted border border-border shadow-soft hover:border-amber-600/30 transition h-full">
                    <h4 className="font-semibold text-foreground mb-2 text-base">{card.t}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{card.d}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal variant="fade-up" delay={200}>
            <div className="mt-12 pt-8 border-t border-border text-center">
              <p className="font-display italic text-lg text-foreground leading-relaxed">
                "Let's not just visit the sacred. Let the sacred transform us from deep within."
              </p>
              <p className="text-xs uppercase tracking-widest text-amber-600 mt-2 font-body font-semibold">
                - Nileema Shenoy, Founder
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* & MISSION & GOALS (DARK MODE) */}
      <section
        data-nav-theme="dark"
        className="py-20 px-4 bg-gradient-to-b from-[#823883] to-[#3D0068] text-white border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal variant="fade-up">
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-center mb-16">
              Vision | Mission | Goals
            </h2>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch font-body">
            {/* Vision */}
            <ScrollReveal variant="fade-up" delay={100} className="h-full">
              <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 shadow-soft flex flex-col justify-between hover:border-amber-400/30 transition-all duration-300 h-full">
                <div>
                  <span className="text-3xl">🌟</span>
                  <h3 className="text-2xl font-display font-semibold text-white mt-4 mb-4">
                    Vision
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    To be the global pioneer in spiritual travel, seamlessly blending luxury,
                    culture, authentic roots, and divinity. To raise benchmarks in spiritual tourism
                    and position Bharat as the world’s foremost destination for seekers,
                    facilitating inner awakening and meaningful exploration.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Mission */}
            <ScrollReveal variant="fade-up" delay={250} className="h-full">
              <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 shadow-soft flex flex-col justify-between hover:border-amber-400/30 transition-all duration-300 h-full">
                <div>
                  <span className="text-3xl">🎯</span>
                  <h3 className="text-2xl font-display font-semibold text-white mt-4 mb-4 font-display">
                    Mission
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    To redefine spiritual tourism through premium, transformative journeys across
                    Bharat’s sacred sites. Every experience converges divinity and luxury, enabling
                    seekers to embrace Sanatan Dharma’s timeless wisdom with unmatched care.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Goals */}
            <ScrollReveal variant="fade-up" delay={400} className="h-full">
              <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 shadow-soft flex flex-col justify-between hover:border-amber-400/30 transition-all duration-300 h-full">
                <div>
                  <span className="text-3xl">💫</span>
                  <h3 className="text-2xl font-display font-semibold text-white mt-4 mb-4">
                    Goals
                  </h3>
                  <ul className="space-y-4 text-sm text-white/70 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span>
                        <strong className="text-white">Inspire Awakening:</strong> Spark
                        consciousness through curated sadhanas, rituals, and divine encounters.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span>
                        <strong className="text-white">Uphold Dharma:</strong> Share Bharat’s
                        heritage and values with authenticity and reverence.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span>
                        <strong className="text-white">Craft Experiences:</strong> Offer soulful
                        journeys for young seekers and retired explorers, uniting comfort with
                        depth.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* OUR DIVINE EMBLEM */}
      <section
        data-nav-theme="light"
        className="py-24 px-4 bg-background text-foreground border-t border-border relative"
      >
        <FlowerField count={6} />
        <div className="max-w-6xl mx-auto">
          <ScrollReveal variant="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground">
                Our Divine Emblem
              </h2>
              <p className="text-sm text-muted-foreground tracking-wider mt-2 font-body">
                Every element of our logo carries profound spiritual significance
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Emblem Circle on Left */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <ScrollReveal variant="scale-up" delay={100}>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-white shadow-glow border-4 border-amber-400 flex items-center justify-center p-8 group hover:scale-[1.02] transition duration-500">
                  <img
                    src={logo}
                    alt="Samyam Logo Emblem"
                    className="w-40 h-40 md:w-52 md:h-52 object-contain"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal variant="fade-in" delay={300}>
                <p className="mt-6 text-sm tracking-widest uppercase text-muted-foreground italic font-body">
                  Our Divine Emblem
                </p>
              </ScrollReveal>
            </div>

            {/* List on Right */}
            <div className="lg:col-span-7 space-y-4">
              {[
                {
                  t: "Mandala Aakar (Circular Shape)",
                  d: "Invoking divine energies of the universe",
                },
                {
                  t: "Patra Aakar (Petals)",
                  d: "Denotes Sharanagati: an act of surrender",
                },
                {
                  t: "'S' for Samyam",
                  d: "Represents Samyam and also Kundalini, the divine energy",
                },
                {
                  t: "Anahata Chakra",
                  d: "The heart chakra with 12 petals. Our objective is to activate this chakra, opening the doorways of bhakti.",
                },
                {
                  t: "Ardha Chandra Aakar (Crescent Moon)",
                  d: "Top arc: Teerthas (Tourism). Bottom arc: An ecstatic feeling",
                },
              ].map((item, idx) => (
                <ScrollReveal key={item.t} variant="fade-left" delay={idx * 100}>
                  <div className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-soft hover:border-amber-600/30 hover:bg-muted transition-all text-left">
                    <h4 className="font-semibold text-foreground text-sm md:text-base font-display">
                      {item.t}
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1 leading-relaxed font-body">
                      {item.d}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section
        data-nav-theme="dark"
        className="py-20 px-4 bg-gradient-to-b from-[#823883] to-[#3D0068] text-white border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal variant="fade-up">
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-14">Our Values</h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left font-body">
            {[
              {
                icon: "🙏",
                t: "Reverence",
                d: "Deep respect for sacred sites, traditions, and the wisdom they hold.",
              },
              {
                icon: "🌍",
                t: "Responsibility",
                d: "Protecting and preserving these holy places for future generations.",
              },
              {
                icon: "💎",
                t: "Authenticity",
                d: "Genuine experiences rooted in Sanatan Dharma, not commercial tourism.",
              },
              {
                icon: "🧘",
                t: "Transformation",
                d: "Every journey is designed for spiritual awakening and personal growth.",
              },
            ].map((f, idx) => (
              <ScrollReveal key={f.t} variant="scale-up" delay={idx * 100} className="h-full">
                <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-3xl">{f.icon}</span>
                    <h3 className="text-lg font-semibold text-white mt-3 mb-2 font-display">
                      {f.t}
                    </h3>
                    <p className="text-xs text-white/60 leading-relaxed">{f.d}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR JOURNEY */}
      <section
        data-nav-theme="light"
        className="py-20 px-4 bg-background text-foreground border-t border-border relative"
      >
        <FlowerField count={8} />
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal variant="fade-up">
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-3">Our Journey</h2>
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-16 font-body">
              Milestones on the path of serving spiritual seekers
            </p>
          </ScrollReveal>

          <div className="relative border-l border-border ml-4 md:ml-32 text-left space-y-12">
            {[
              {
                year: "2024",
                t: "SAMYAM Founded",
                d: "Established to craft authentic, scripture aligned spiritual journeys.",
              },
              {
                year: "Apr 2025",
                t: "First Yatra & Retreat",
                d: "Launched our inaugural experiential retreat in April 2025, bringing seekers to Kashi with curated rituals.",
              },
              {
                year: "2025",
                t: "7 Journeys Completed",
                d: "Successfully hosted seven yatras and retreats across sacred circuits within our first year of operations.",
              },
            ].map((m, idx) => (
              <ScrollReveal key={m.year} variant="fade-up" delay={idx * 150}>
                <div className="relative pl-8 md:pl-12">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-amber-400 border-2 border-background shadow-soft" />

                  {/* Timeline content card */}
                  <div className="bg-white border border-black/[0.06] rounded-2xl p-6 hover:border-amber-600/30 transition-all duration-300 shadow-soft">
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 px-3 py-1 rounded-full bg-muted font-body border border-border">
                      {m.year}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mt-3 mb-2 font-display">
                      {m.t}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-body">{m.d}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* MEET THE FOUNDER */}
      <section
        data-nav-theme="light"
        className="py-24 px-6 bg-background text-foreground border-t border-border relative overflow-hidden"
      >
        <FlowerField count={8} />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid md:grid-cols-12 gap-12 items-center mb-12">
            {/* Founder Bio Column */}
            <div className="md:col-span-7 text-left">
              <ScrollReveal variant="fade-left">
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-[#FF7722] mb-3 font-bold">
                    Meet the Founder
                  </p>
                  <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-6">
                    Nileema Shenoy
                  </h2>

                  <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed font-body">
                    <p>
                      Nileema Shenoy is a young, qualified Chartered Accountant from the sacred town
                      of Karkala in Udupi. An academic achiever, she pursued graduation and
                      Chartered Accountancy simultaneously, clearing every level in her first
                      attempt.
                    </p>
                    <p>
                      Growing up amidst Karkala’s scriptural heritage immersed her in ancient Indian
                      wisdom from childhood. Guided by her spiritual masters, she continues to study
                      the shastras with devotion.
                    </p>
                    <p>
                      A passionate traveller, Nileema has explored spiritual geographies across
                      Bharat and the world, especially the Himalayas and other sacred teerthas,
                      seeking deeper communion with divinity.
                    </p>
                    <p>
                      Observing how others experienced yatras differently inspired her to design
                      journeys that follow a structured, scripture aligned approach, ensuring
                      seekers receive the full spiritual potency of each pilgrimage.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Founder Image Column with Overlay Card */}
            <div className="md:col-span-5 w-full">
              <ScrollReveal variant="fade-right">
                <div className="relative overflow-hidden rounded-3xl shadow-glow border border-black/[0.06] group aspect-[3/4] max-w-sm mx-auto w-full">
                  <img
                    src={founder}
                    alt="Nileema Shenoy, Founder of Samyam"
                    className="w-full h-full object-cover group-hover:scale-102 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent flex flex-col justify-end p-6 md:p-8 text-left">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-white/60 font-bold font-body mb-1">
                      Founder
                    </span>
                    <h3 className="text-2xl font-display font-semibold text-white mb-2">
                      Nileema Shenoy
                    </h3>
                    <p className="text-xs text-white/80 leading-relaxed font-body font-light">
                      Bridging authenticity, ancient scriptures, devotion & hospitality for modern
                      age seekers.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Highlights Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              {
                emoji: "📜",
                category: "Academic Excellence",
                text: "Qualified Chartered Accountant; cleared all levels alongside graduation.",
              },
              {
                emoji: "📚",
                category: "Scripture Seeker",
                text: "Trained under revered masters; steeped in Sanatan studies since childhood.",
              },
              {
                emoji: "🗺️",
                category: "Spiritual Explorer",
                text: "Journeyed across Bharat's teerthas with a quest to decode living divinity.",
              },
              {
                emoji: "🕉️",
                category: "Sacred Design Mind",
                text: "Crafts yatras with structured, scripture aligned processes for seekers.",
              },
            ].map((card, idx) => (
              <ScrollReveal key={idx} variant="scale-up" delay={idx * 100} className="h-full">
                <div className="p-6 bg-white border border-black/[0.06] rounded-3xl shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between h-full">
                  <div>
                    <span className="text-3xl mb-3 block select-none">{card.emoji}</span>
                    <h4 className="text-[#FF7722] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-2 font-body">
                      {card.category}
                    </h4>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed font-body">
                      {card.text}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Intention Section */}
          <ScrollReveal variant="fade-up" delay={150}>
            <div className="mt-16 pt-12 border-t border-border text-left">
              <p className="text-[#FF7722] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-3 font-body">
                Her Intention
              </p>
              <blockquote className="font-display italic text-xl md:text-2xl text-foreground leading-relaxed font-medium">
                “Every yatra must be a living scripture, designed with devotion, discipline, and
                divine grace so that each seeker truly feels the awakening they came for.”
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
