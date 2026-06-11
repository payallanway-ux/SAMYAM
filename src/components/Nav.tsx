import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, GraduationCap, Briefcase } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("samyam_token"));
  }, []);

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
      {
        rootMargin: "-10% 0px -85% 0px",
        threshold: 0,
      },
    );

    const sections = document.querySelectorAll("section[data-nav-theme], div[data-nav-theme]");
    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 z-50 w-full transition-all duration-500 ease-in-out border-b border-white/10"
      data-nav-theme={theme}
      style={{
        background: "var(--nav-bg)",
        color: "var(--nav-text)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center gap-6">
        {/* Logo */}
        <Link
          to="/"
          onClick={handleLinkClick}
          className="h-12 w-12 shrink-0 rounded-full bg-white flex items-center justify-center p-1.5 hover:scale-105 transition shadow-sm"
        >
          <img src={logo} alt="Samyam Logo" className="w-full h-full object-contain" />
        </Link>

        {/* Navigation list */}
        <nav className="flex-1 flex items-center justify-start lg:justify-center gap-1 overflow-x-auto no-scrollbar">
          {links.map((l) =>
            "children" in l ? (
              <DropdownMenu key={l.label}>
                <DropdownMenuTrigger className="shrink-0 px-4 py-2 text-xs md:text-sm rounded-full hover:bg-white/10 transition whitespace-nowrap flex items-center gap-1.5 outline-none cursor-pointer">
                  {l.label}
                  <ChevronDown size={14} className="opacity-50" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#1a0a1e]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 min-w-[180px] shadow-glow z-[60]">
                  {l.children.map((child) => (
                    <DropdownMenuItem key={child.label} asChild className="focus:bg-white/5">
                      <Link
                        to={child.to as any}
                        onClick={handleLinkClick}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-medium text-white/80 hover:text-white transition-all cursor-pointer"
                      >
                        <span className="text-amber-400">{child.icon}</span>
                        {child.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={l.label}
                to={l.to}
                activeProps={{
                  className: "font-semibold",
                  style: { backgroundColor: "var(--nav-button-bg)" },
                }}
                style={{ color: "var(--nav-text)" }}
                className="shrink-0 px-4 py-2 text-xs md:text-sm rounded-full hover:bg-white/10 transition whitespace-nowrap"
              >
                {l.label}
              </Link>
            ),
          )}
        </nav>

        {/* Desktop CTA Action Buttons */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Link
            to={isLoggedIn ? "/admin" : "/admin/login"}
            style={{
              backgroundColor: "var(--nav-button-bg)",
              color: "var(--nav-text)",
            }}
            className="px-5 py-2 text-xs font-medium rounded-full hover:opacity-80 transition cursor-pointer border border-white/10 text-center flex items-center justify-center"
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

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
          style={{ color: "var(--nav-text)" }}
          className="lg:hidden p-2 rounded-full hover:bg-white/10 transition cursor-pointer shrink-0"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div
          className="lg:hidden absolute top-20 left-0 w-full border-b border-white/10 shadow-glow backdrop-blur-xl animate-fade-in flex flex-col p-6 space-y-4"
          style={{
            background: "var(--nav-bg)",
            color: "var(--nav-text)",
          }}
        >
          {/* Mobile sub-menu for Institutions */}
          <div className="flex flex-col space-y-2 pb-4 border-b border-white/5">
            <p className="text-[10px] uppercase tracking-widest text-white/40 px-2 mb-1">
              Institutions
            </p>
            <Link
              to="/institutions/school"
              onClick={handleLinkClick}
              className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 text-sm font-medium"
            >
              <GraduationCap size={16} className="text-amber-400" />
              Schools
            </Link>
            <Link
              to="/institutions/corporate"
              onClick={handleLinkClick}
              className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 text-sm font-medium"
            >
              <Briefcase size={16} className="text-amber-400" />
              Corporate
            </Link>
          </div>

          <div className="flex flex-col space-y-3">
            <Link
              to={isLoggedIn ? "/admin" : "/admin/login"}
              onClick={handleLinkClick}
              style={{
                backgroundColor: "var(--nav-button-bg)",
                color: "var(--nav-text)",
              }}
              className="w-full py-3 text-sm font-medium rounded-2xl hover:opacity-80 transition cursor-pointer border border-white/10 text-center flex items-center justify-center"
            >
              {isLoggedIn ? "Admin Panel" : "Login"}
            </Link>
            <Link
              to="/enquire"
              onClick={handleLinkClick}
              className="w-full py-3 text-sm rounded-2xl bg-gradient-cta text-accent-foreground font-semibold shadow-soft text-center block"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
