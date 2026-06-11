import React, { useEffect, useRef, useState } from "react";

export type ScrollRevealVariant =
  | "fade-up"
  | "fade-in"
  | "fade-left"
  | "fade-right"
  | "scale-up"
  | "zoom-in";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: ScrollRevealVariant;
  duration?: number; // duration in ms
  delay?: number; // delay in ms
  threshold?: number; // visibility ratio to trigger
  once?: boolean; // trigger only once
}

export function ScrollReveal({
  children,
  className = "",
  variant = "fade-up",
  duration = 1200,
  delay = 0,
  threshold = 0.1,
  once = true,
}: ScrollRevealProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (once) {
            observer.unobserve(el);
          }
        } else if (!once) {
          setIsIntersecting(false);
        }
      },
      {
        threshold,
        // Start the animation slightly before the element is in full view
        rootMargin: "0px 0px -80px 0px",
      },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  const getVariantStyles = () => {
    switch (variant) {
      case "fade-up":
        return isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12";
      case "fade-in":
        return isIntersecting ? "opacity-100" : "opacity-0";
      case "fade-left":
        return isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12";
      case "fade-right":
        return isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12";
      case "scale-up":
        return isIntersecting ? "opacity-100 scale-100" : "opacity-0 scale-95";
      case "zoom-in":
        return isIntersecting ? "opacity-100 scale-100" : "opacity-0 scale-90";
      default:
        return isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-out-expo will-change-[transform,opacity] ${getVariantStyles()} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
