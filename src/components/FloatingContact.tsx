import { Phone, MessageCircle, Instagram } from "lucide-react";

export function FloatingContact() {
  const socialLinks = [
    {
      icon: <Instagram size={24} />,
      href: "https://www.instagram.com/samyamspirituals/",
      label: "Instagram",
      className:
        "text-white bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-[0_0_15px_rgba(220,39,67,0.5)]",
    },
    {
      icon: <MessageCircle size={24} />,
      href: "https://wa.me/919035225375",
      label: "WhatsApp",
      className: "text-white bg-[#25D366] shadow-[0_0_15px_rgba(37,211,102,0.5)]",
    },
    {
      icon: <Phone size={24} />,
      href: "tel:+919035225375",
      label: "Phone",
      className: "text-white bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]",
    },
  ];

  return (
    <div className="fixed right-6 bottom-10 z-[100] flex flex-col items-center gap-4">
      {/* Decorative vertical line */}
      <div className="w-px h-16 bg-gradient-to-t from-amber-400/60 to-transparent opacity-50" />

      <div className="flex flex-col gap-3 p-2.5 rounded-[2rem] bg-white/10 backdrop-blur-2xl border border-white/20 shadow-glow animate-fade-up">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className={`w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:scale-110 ${link.className}`}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
