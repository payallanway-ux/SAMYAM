import React, { useEffect, useRef } from "react";
import samyamHeroVideo from "@/assets/samyamhero.mp4";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.warn("Hero video autoplay failed to start:", err);
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-cover opacity-100 transition-opacity duration-1000"
      >
        <source src={samyamHeroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
