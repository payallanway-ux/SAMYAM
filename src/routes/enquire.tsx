import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { FlowerField } from "@/components/FlowerField";
import React, { useState } from "react";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { API_ENDPOINTS } from "@/lib/api-config";

export const Route = createFileRoute("/enquire")({
  component: EnquirePage,
  head: () => ({
    title: "Enquire Now | Samyam Sacred Journeys",
    meta: [
      {
        name: "description",
        content:
          "Begin your spiritual transformation. Enquire now to plan your sacred Yatra with Samyam.",
      },
    ],
  }),
});

function EnquirePage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const data = new FormData(e.currentTarget);
    const payload = {
      name: data.get("name") as string,
      phoneNumber: data.get("phoneNumber") as string,
      preferredYatra: data.get("preferredYatra") as string,
      message: data.get("message") as string,
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
        throw new Error("Failed to submit enquiry. Please try again.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#1a0a1e] text-white">
      <Nav />

      {/* CTA */}
      <section
        id="plan"
        data-nav-theme="dark"
        className="relative py-32 px-4 bg-gradient-to-b from-[#1a0a1e] via-[#1c081e] to-[#120614] overflow-hidden min-h-screen flex items-center justify-center"
      >
        <FlowerField count={14} />
        <ScrollReveal
          variant="fade-up"
          className="relative max-w-3xl mx-auto text-center text-white w-full"
        >
          <h2 className="text-4xl md:text-6xl font-display mt-8">Begin Your Yatra</h2>
          <p className="mt-6 text-lg opacity-90 font-body">
            Your sacred journey awaits. Let us craft an experience that awakens your soul.
          </p>

          <div className="mt-10 max-w-lg mx-auto bg-white/[0.03] text-white p-5 sm:p-8 rounded-3xl shadow-glow border border-white/10">
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <span className="text-5xl animate-pulse block">ॐ</span>
                <h3 className="text-2xl text-amber-400 font-display font-semibold">
                  Pranaam & Thank You
                </h3>
                <p className="text-white/70 text-sm leading-relaxed font-body">
                  We have received your request. Our spiritual journey curator will connect with you
                  shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left font-body">
                {error && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-200 text-xs rounded-2xl text-center">
                    {error}
                  </div>
                )}
                <div>
                  <label className="block text-xs font-semibold text-amber-400/85 mb-2 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 text-sm transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-amber-400/85 mb-2 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    name="phoneNumber"
                    className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 text-sm transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-amber-400/85 mb-2 uppercase tracking-wider">
                    Preferred Yatra
                  </label>
                  <select
                    name="preferredYatra"
                    className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 text-sm transition-all duration-300 [&>option]:bg-[#1c081e] [&>option]:text-white"
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Kashi Yatra">Kashi Yatra</option>
                    <option value="Himachal Retreat">Himachal Retreat</option>
                    <option value="Vrindavan Parikrama">Vrindavan Parikrama</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-amber-400/85 mb-2 uppercase tracking-wider">
                    Message / Spiritual Intent
                  </label>
                  <textarea
                    rows={3}
                    required
                    name="message"
                    className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 text-sm resize-none transition-all duration-300"
                    placeholder="Share any specific spiritual intent or requests..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-gradient-cta text-white font-semibold shadow-glow hover:scale-[1.02] active:scale-[0.98] transition duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            )}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 font-body">
            <a
              href="tel:+919035225375"
              className="px-6 py-3 rounded-full bg-white/10 backdrop-blur border border-white/10 hover:bg-white/20 transition text-white text-sm"
            >
              📞 Call Us Now
            </a>
            <a
              href="https://wa.me/919035225375"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-green-500/10 backdrop-blur border border-green-500/20 hover:bg-green-500 hover:text-white transition text-green-400 text-sm"
            >
              💬 WhatsApp
            </a>
          </div>
          <p className="mt-12 text-xs opacity-60 text-white font-body tracking-wider uppercase">
            Join 500+ seekers who have transformed through SAMYAM
          </p>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}
