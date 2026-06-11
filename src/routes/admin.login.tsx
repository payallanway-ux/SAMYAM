import { createFileRoute, useNavigate } from "@tanstack/react-router";
import React, { useState, useEffect } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FlowerField } from "@/components/FlowerField";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { API_ENDPOINTS } from "@/lib/api-config";

export const Route = createFileRoute("/admin/login")({
  component: AdminLoginPage,
  head: () => ({
    title: "Admin Login | Samyam Sacred Journeys",
    meta: [
      {
        name: "description",
        content: "Admin access for Samyam Sacred Journeys dashboard.",
      },
    ],
  }),
});

function AdminLoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("samyam_token");
    if (token) {
      navigate({ to: "/admin" });
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    const url = API_ENDPOINTS.AUTH.LOGIN;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Authentication failed");
      }

      localStorage.setItem("samyam_token", result.data.accessToken);
      localStorage.setItem("samyam_email", result.data.uid);
      setSuccess("Success! Redirecting...");
      setTimeout(() => {
        navigate({ to: "/admin" });
      }, 1000);
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#1a0a1e] text-white flex flex-col justify-between">
      <section
        data-nav-theme="dark"
        className="relative py-32 px-4 bg-linear-to-b from-[#1a0a1e] via-[#1c081e] to-[#120614] overflow-hidden min-h-[90vh] flex items-center justify-center grow"
      >
        <FlowerField count={10} />

        <ScrollReveal variant="fade-up" className="relative max-w-md w-full mx-auto">
          <div className="text-center mb-8">
            <span className="text-5xl animate-pulse block mb-4 text-amber-400">ॐ</span>
            <h2 className="text-3xl font-display font-semibold tracking-wide text-white">
              Samyam Admin Portal
            </h2>
            <p className="text-white/60 text-sm mt-2 font-body">
              Manage sacred yatras, user queries, and testimonials
            </p>
          </div>

          <div className="bg-white/3 backdrop-blur-lg border border-white/10 rounded-3xl p-5 sm:p-8 shadow-glow">
            {/* Header Title */}
            <div className="border-b border-white/10 mb-6 pb-3 text-center">
              <h3 className="text-sm font-semibold tracking-wider uppercase text-amber-400 font-body">
                Administrator Sign In
              </h3>
            </div>

            {/* Error & Success Messages */}
            {error && (
              <div className="p-3 mb-4 bg-red-500/10 border border-red-500/20 text-red-200 text-xs rounded-2xl text-center font-body">
                {error}
              </div>
            )}
            {success && (
              <div className="p-3 mb-4 bg-green-500/10 border border-green-500/20 text-green-200 text-xs rounded-2xl text-center font-body animate-pulse">
                {success}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 font-body text-left">
              <div>
                <label className="block text-xs font-semibold text-amber-400/85 mb-2 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@samyam.co"
                  className="w-full px-4 py-3 rounded-2xl bg-white/4 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 text-sm transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-400/85 mb-2 uppercase tracking-wider">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-2xl bg-white/4 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 text-sm transition-all duration-300"
                />
                <div className="mt-5 text-right">
                  <button
                    type="button"
                    onClick={() => navigate({ to: "/admin/forgot-password" })}
                    className="text-xs text-amber-400 hover:text-amber-300 transition-colors duration-300"
                  >
                    Forgot your password?
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-full bg-gradient-cta text-white font-semibold shadow-glow hover:scale-[1.02] active:scale-[0.98] transition duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Processing..." : "Sign In"}
              </button>
            </form>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
