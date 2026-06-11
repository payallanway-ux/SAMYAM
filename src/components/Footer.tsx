import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { useEffect, useState } from "react";
import {
  Instagram,
  Youtube,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  User,
} from "lucide-react";

export function Footer() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("samyam_token"));
  }, []);

  return (
    <footer className="bg-gradient-to-b from-[#2e004e]/95 to-[#150027] text-white py-12 px-6 md:px-12 relative overflow-hidden border-t border-white/10 backdrop-blur-md">
      {/* Background soft glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="h-10 w-10 rounded-full bg-white flex items-center justify-center p-1.5 shadow-soft border border-white/10 hover:scale-105 transition duration-300"
              >
                <img src={logo} alt="Samyam Logo" className="w-full h-full object-contain" />
              </Link>
              <div>
                <span className="font-display font-bold text-lg tracking-wider bg-gradient-to-r from-amber-200 via-amber-400 to-amber-300 bg-clip-text text-transparent">
                  SAMYAM
                </span>
                <span className="text-[10px] font-body block tracking-widest text-amber-400/80 uppercase">
                  Spiritual Tourism
                </span>
              </div>
            </div>

            <div className="space-y-2 max-w-sm">
              <p className="font-body text-xs font-semibold text-amber-200/90">
                Samyam Spiritual Tourism Private Limited
              </p>
              <p className="font-display italic text-sm text-purple-200">
                "Travel Beyond. Discover Within."
              </p>
              <p className="font-body text-xs text-white/70 leading-relaxed">
                We craft spiritually rooted pilgrimages across Bharat's sacred teerthas for seekers
                who want awakening, not sightseeing.
              </p>
            </div>

            {/* Social Icons with premium hover styles */}
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-amber-400 hover:text-black flex items-center justify-center border border-white/10 hover:border-amber-400 transition-all duration-300 text-white/80"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Youtube"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-amber-400 hover:text-black flex items-center justify-center border border-white/10 hover:border-amber-400 transition-all duration-300 text-white/80"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/919035225375"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-amber-400 hover:text-black flex items-center justify-center border border-white/10 hover:border-amber-400 transition-all duration-300 text-white/80"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Explore Links - Matching Navbar links in the exact same order */}
          <div className="md:col-span-4 text-left">
            <h4 className="font-display font-semibold text-sm tracking-wider text-amber-400 uppercase mb-4 flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-amber-400/85" />
              Explore
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 font-body text-xs text-white/70">
              <li>
                <Link
                  to="/"
                  className="hover:text-amber-300 transition duration-200 flex items-center gap-2"
                >
                  <span className="h-1 w-1 bg-amber-400/50 rounded-full shrink-0" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/yatras"
                  className="hover:text-amber-300 transition duration-200 flex items-center gap-2"
                >
                  <span className="h-1 w-1 bg-amber-400/50 rounded-full shrink-0" />
                  Yatra & Retreats
                </Link>
              </li>
              <li>
                <Link
                  to="/teerthas"
                  className="hover:text-amber-300 transition duration-200 flex items-center gap-2"
                >
                  <span className="h-1 w-1 bg-amber-400/50 rounded-full shrink-0" />
                  Teerthas
                </Link>
              </li>
              <li>
                <Link
                  to="/institutions"
                  className="hover:text-amber-300 transition duration-200 flex items-center gap-2"
                >
                  <span className="h-1 w-1 bg-amber-400/50 rounded-full shrink-0" />
                  Institutions
                </Link>
              </li>
              <li>
                <Link
                  to="/methodology"
                  className="hover:text-amber-300 transition duration-200 flex items-center gap-2"
                >
                  <span className="h-1 w-1 bg-amber-400/50 rounded-full shrink-0" />
                  Methodology
                </Link>
              </li>
              <li>
                <Link
                  to="/custom-yatra"
                  className="hover:text-amber-300 transition duration-200 flex items-center gap-2"
                >
                  <span className="h-1 w-1 bg-amber-400/50 rounded-full shrink-0" />
                  Customize Yatra
                </Link>
              </li>
              <li>
                <Link
                  to="/knowledge-portal"
                  className="hover:text-amber-300 transition duration-200 flex items-center gap-2"
                >
                  <span className="h-1 w-1 bg-amber-400/50 rounded-full shrink-0" />
                  Knowledge Portal
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-amber-300 transition duration-200 flex items-center gap-2"
                >
                  <span className="h-1 w-1 bg-amber-400/50 rounded-full shrink-0" />
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Actions */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-display font-semibold text-sm tracking-wider text-amber-400 uppercase mb-4 flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-amber-400/85" />
              Connect
            </h4>
            <ul className="space-y-3 font-body text-xs text-white/70">
              <li>
                <Link
                  to="/enquire"
                  className="hover:text-amber-300 transition duration-200 flex items-center gap-2"
                >
                  <span className="h-1 w-1 bg-amber-400/50 rounded-full shrink-0" />
                  Enquire Now
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/919035225375"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition duration-200 flex items-center gap-2"
                >
                  <span className="h-1 w-1 bg-amber-400/50 rounded-full shrink-0" />
                  WhatsApp Chat
                </a>
              </li>
              <li>
                <a
                  href="mailto:samyamspirituals@gmail.com"
                  className="hover:text-amber-300 transition duration-200 flex items-center gap-2"
                >
                  <span className="h-1 w-1 bg-amber-400/50 rounded-full shrink-0" />
                  Email Support
                </a>
              </li>
              <li className="pt-2 border-t border-white/5">
                <Link
                  to={isLoggedIn ? "/admin" : "/admin/login"}
                  className="hover:text-amber-300 transition duration-200 flex items-center gap-2 text-amber-400/90 font-medium"
                >
                  <User className="h-3.5 w-3.5 shrink-0" />
                  {isLoggedIn ? "Admin Panel" : "Login"}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/10" />

        {/* Contact and Quote */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Contact Details with Icons */}
          <div className="md:col-span-5 space-y-3 text-left">
            <h4 className="font-display font-semibold text-sm tracking-wider text-amber-400 uppercase mb-1">
              Contact
            </h4>
            <div className="space-y-2.5 font-body text-xs text-white/80">
              <a
                href="mailto:samyamspirituals@gmail.com"
                className="flex items-center gap-2.5 hover:text-amber-300 transition"
              >
                <Mail className="h-3.5 w-3.5 text-amber-400/70" />
                samyamspirituals@gmail.com
              </a>
              <a
                href="tel:+919035225375"
                className="flex items-center gap-2.5 hover:text-amber-300 transition"
              >
                <Phone className="h-3.5 w-3.5 text-amber-400/70" />
                +91 9035225375
              </a>
              <div className="flex items-start gap-2.5 leading-relaxed">
                <MapPin className="h-3.5 w-3.5 text-amber-400/70 shrink-0 mt-0.5" />
                <span>Electronic City Phase 2, Bangalore 560100, Karnataka</span>
              </div>
            </div>
          </div>

          {/* Quote Block with visual decoration */}
          <div className="md:col-span-7 space-y-2 text-left">
            <h4 className="font-display font-semibold text-sm tracking-wider text-amber-400 uppercase">
              Devotion
            </h4>
            <div className="relative pl-6 border-l-2 border-amber-400/50">
              <span className="absolute top-0 left-1.5 font-display text-4xl text-amber-400/20 leading-none">
                “
              </span>
              <p className="font-display italic text-sm md:text-base text-purple-100 leading-relaxed max-w-xl">
                Let the journey not be just movement of the body to a holy place, but the softening
                of the heart into devotion.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom copyright info */}
        <div className="pt-8 border-t border-white/5 text-center text-xs text-white/50">
          <p>© {new Date().getFullYear()} SAMYAM™ • Sacred. Respectful. Responsible.</p>
        </div>
      </div>
    </footer>
  );
}
