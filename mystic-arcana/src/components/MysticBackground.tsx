"use client";

import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: "small" | "large" | "gold";
  duration: number;
  delay: number;
}

export default function MysticBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generated: Star[] = Array.from({ length: 80 }, (_, i) => {
      const rand = Math.random();
      let size: Star["size"] = "small";
      if (rand > 0.9) size = "gold";
      else if (rand > 0.7) size = "large";

      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size,
        duration: 2 + Math.random() * 5,
        delay: Math.random() * 5,
      };
    });
    setStars(generated);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Deep space gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(139,92,246,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(59,130,246,0.06) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(212,165,116,0.04) 0%, transparent 50%)",
        }}
      />

      {/* Star field */}
      {stars.map((star) => (
        <div
          key={star.id}
          className={`star-particle ${
            star.size === "large"
              ? "star-particle--large"
              : star.size === "gold"
                ? "star-particle--gold"
                : ""
          }`}
          style={
            {
              left: `${star.x}%`,
              top: `${star.y}%`,
              "--duration": `${star.duration}s`,
              "--delay": `${star.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}

      {/* Subtle nebula overlays */}
      <div
        className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -right-1/4 bottom-1/4 h-96 w-96 rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
