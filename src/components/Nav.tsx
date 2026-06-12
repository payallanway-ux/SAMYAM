import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { useEffect, useState, useRef } from "react";
import { Menu, X, ChevronDown, GraduationCap, Briefcase } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "Yatra & retreats", to: "/yatras" },
  { label: "Teerthas", to: "/teerthas" },
  {
    label: "Institutions",
    to: "/institutions",
    children: [
      { label: "Schools", to: "/institutions/school", icon: <GraduationCap size={14} /> },
      { label: "Corporate", to: "/institutions/corporate", icon: <Briefcase size={14} /> },
    ],
  },
  { label: "Methodology", to: "/methodology" },
  { label: "Customize Yatra", to: "/custom-yatra" },
  { label: "Knowledge Portal", to: "/knowledge-portal" },
  { label: "About us", to: "/about" },
] as const;

export function Nav() {
  const [theme, setTheme] = useState<"default" | "light" | "dark" | "accent">("default");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [instOpen, setInstOpen] = useState(false); // desktop dropdown
  const [mobInstOpen, setMobInstOpen] = useState(false); // mobile accordion
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("samyam_token"));
  }, []);

  // Scroll-aware section theme
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newTheme = entry.target.getAttribute("data-nav-theme") as any;
            if (newTheme) setTheme(newTheme);
          }
        });
      },
      { rootMargin: "-10% 0px -85% 0px", threshold: 0 },
    );
    const sections = document.querySelectorAll("section[data-nav-theme], div[data-nav-theme]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setInstOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
    setInstOpen(false);
    setMobInstOpen(false);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 z-50 w-full transition-all duration-500 ease-in-out border-b border-white/10"
        style={{ background: "var(--nav-bg)", color: "var(--nav-text)" }}
      >
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center gap-4">
          {/* Logo */}
          <Link
            to="/"
            onClick={handleLinkClick}
            className="h-12 w-12 shrink-0 rounded-full bg-white flex items-center justify-center p-1.5 hover:scale-105 transition shadow-sm"
          >
            <img src={logo} alt="Samyam Logo" className="w-full h-full object-contain" />
          </Link>

          {/* Desktop Nav — hidden on <lg */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-1 overflow-x-auto no-scrollbar">
            {links.map((l) =>
              "children" in l ? (
                <div key={l.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setInstOpen((v) => !v)}
                    className="shrink-0 px-4 py-2 text-sm rounded-full hover:bg-white/10 transition whitespace-nowrap flex items-center gap-1.5 outline-none cursor-pointer"
                    style={{ color: "var(--nav-text)" }}
                  >
                    {l.label}
                    <ChevronDown
                      size={13}
                      className={`opacity-50 transition-transform duration-200 ${instOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {instOpen && (
                    <div className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 bg-[#1a0a1e]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 min-w-[180px] shadow-glow z-[60] animate-fade-in">
                      {l.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.to as any}
                          onClick={handleLinkClick}
                          className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-medium text-white/80 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
                        >
                          <span className="text-amber-400">{child.icon}</span>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={l.label}
                  to={l.to}
                  activeProps={{
                    className: "font-semibold",
                    style: { backgroundColor: "var(--nav-button-bg)" },
                  }}
                  style={{ color: "var(--nav-text)" }}
                  className="shrink-0 px-4 py-2 text-sm rounded-full hover:bg-white/10 transition whitespace-nowrap"
                >
                  {l.label}
                </Link>
              ),
            )}
          </nav>

          {/* Desktop CTA — hidden on <lg */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              to={isLoggedIn ? "/admin" : "/admin/login"}
              style={{ backgroundColor: "var(--nav-button-bg)", color: "var(--nav-text)" }}
              className="px-5 py-2 text-xs font-medium rounded-full hover:opacity-80 transition border border-white/10 text-center"
            >
              {isLoggedIn ? "Admin Panel" : "Login"}
            </Link>
            <Link
              to="/enquire"
              className="px-5 py-2 text-xs rounded-full bg-gradient-cta text-accent-foreground font-semibold shadow-soft hover:scale-105 transition"
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile toggle — shown on <lg, pushed to far right */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle Navigation Menu"
            style={{ color: "var(--nav-text)" }}
            className="lg:hidden ml-auto p-2 rounded-full hover:bg-white/10 transition cursor-pointer shrink-0"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* ── Mobile Drawer ── */}
        {isOpen && (
          <div
            className="lg:hidden absolute top-20 left-0 w-full border-b border-white/10 shadow-glow backdrop-blur-xl animate-fade-in flex flex-col px-5 py-5 gap-1 max-h-[calc(100vh-5rem)] overflow-y-auto"
            style={{ background: "var(--nav-bg)", color: "var(--nav-text)" }}
          >
            {/* All nav links */}
            {links.map((l) =>
              "children" in l ? (
                <div key={l.label}>
                  {/* Accordion trigger */}
                  <button
                    onClick={() => setMobInstOpen((v) => !v)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-2xl hover:bg-white/5 transition text-sm font-medium"
                    style={{ color: "var(--nav-text)" }}
                  >
                    {l.label}
                    <ChevronDown
                      size={14}
                      className={`opacity-50 transition-transform duration-200 ${mobInstOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {/* Accordion body */}
                  {mobInstOpen && (
                    <div className="flex flex-col gap-1 pl-3 pb-1 animate-fade-in">
                      {l.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.to as any}
                          onClick={handleLinkClick}
                          className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 text-sm font-medium hover:bg-white/10 transition"
                        >
                          <span className="text-amber-400">{child.icon}</span>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={l.label}
                  to={l.to}
                  onClick={handleLinkClick}
                  activeProps={{ className: "bg-white/10 font-semibold" }}
                  style={{ color: "var(--nav-text)" }}
                  className="px-4 py-3 rounded-2xl text-sm hover:bg-white/5 transition block"
                >
                  {l.label}
                </Link>
              ),
            )}

            {/* Mobile CTA strip */}
            <div className="flex gap-3 mt-4 pt-4 border-t border-white/10">
              <Link
                to={isLoggedIn ? "/admin" : "/admin/login"}
                onClick={handleLinkClick}
                style={{ backgroundColor: "var(--nav-button-bg)", color: "var(--nav-text)" }}
                className="flex-1 py-3 text-sm font-medium rounded-2xl hover:opacity-80 transition border border-white/10 text-center"
              >
                {isLoggedIn ? "Admin Panel" : "Login"}
              </Link>
              <Link
                to="/enquire"
                onClick={handleLinkClick}
                className="flex-1 py-3 text-sm rounded-2xl bg-gradient-cta text-accent-foreground font-semibold shadow-soft text-center block"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Overlay — closes drawer on tap */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
