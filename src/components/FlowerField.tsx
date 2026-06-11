import flower from "@/assets/flower.png";

export function FlowerField({ count = 18 }: { count?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const left = (i * 53) % 100;
        const size = 40 + ((i * 17) % 60);
        const dur = 14 + ((i * 7) % 16);
        const delay = (i * 1.7) % 12;
        return (
          <img
            key={i}
            src={flower}
            alt=""
            aria-hidden
            className="flower-petal"
            decoding="async"
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              animationDuration: `${dur}s`,
              animationDelay: `-${delay}s`,
              opacity: 0.45,
            }}
          />
        );
      })}
    </div>
  );
}
