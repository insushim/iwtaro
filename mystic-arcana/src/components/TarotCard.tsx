"use client";

import { motion } from "framer-motion";
import type { TarotCard as TarotCardType } from "@/types/tarot";

interface CardVisual {
  emoji: string;
  gradient: string;
}

const majorArcanaVisuals: Record<number, CardVisual> = {
  0: { emoji: "🃏", gradient: "linear-gradient(135deg, #fef3c7, #f59e0b)" },
  1: { emoji: "🪄", gradient: "linear-gradient(135deg, #fde68a, #d97706)" },
  2: { emoji: "🌙", gradient: "linear-gradient(135deg, #c4b5fd, #6d28d9)" },
  3: { emoji: "👑", gradient: "linear-gradient(135deg, #bbf7d0, #16a34a)" },
  4: { emoji: "🏛️", gradient: "linear-gradient(135deg, #fca5a5, #dc2626)" },
  5: { emoji: "🔑", gradient: "linear-gradient(135deg, #c4b5fd, #7c3aed)" },
  6: { emoji: "💕", gradient: "linear-gradient(135deg, #fbcfe8, #ec4899)" },
  7: { emoji: "🏆", gradient: "linear-gradient(135deg, #fed7aa, #ea580c)" },
  8: { emoji: "🦁", gradient: "linear-gradient(135deg, #fde68a, #ca8a04)" },
  9: { emoji: "🏔️", gradient: "linear-gradient(135deg, #e2e8f0, #64748b)" },
  10: { emoji: "🎡", gradient: "linear-gradient(135deg, #a5f3fc, #0891b2)" },
  11: { emoji: "⚖️", gradient: "linear-gradient(135deg, #bfdbfe, #2563eb)" },
  12: { emoji: "🙃", gradient: "linear-gradient(135deg, #c4b5fd, #7c3aed)" },
  13: { emoji: "💀", gradient: "linear-gradient(135deg, #1e1b4b, #000000)" },
  14: { emoji: "🏺", gradient: "linear-gradient(135deg, #bfdbfe, #3b82f6)" },
  15: { emoji: "😈", gradient: "linear-gradient(135deg, #450a0a, #991b1b)" },
  16: { emoji: "🗼", gradient: "linear-gradient(135deg, #7f1d1d, #f87171)" },
  17: { emoji: "⭐", gradient: "linear-gradient(135deg, #dbeafe, #93c5fd)" },
  18: { emoji: "🌕", gradient: "linear-gradient(135deg, #1e1b4b, #4338ca)" },
  19: { emoji: "☀️", gradient: "linear-gradient(135deg, #fef08a, #facc15)" },
  20: { emoji: "📯", gradient: "linear-gradient(135deg, #e0e7ff, #818cf8)" },
  21: { emoji: "🌍", gradient: "linear-gradient(135deg, #d9f99d, #65a30d)" },
};

const suitEmojis: Record<string, string> = {
  wands: "\u{1F525}",
  cups: "\u{1F4A7}",
  swords: "\u{2694}\u{FE0F}",
  pentacles: "\u{1F48E}",
};

const suitGradients: Record<string, string> = {
  wands: "linear-gradient(135deg, #fed7aa, #ea580c)",
  cups: "linear-gradient(135deg, #bfdbfe, #3b82f6)",
  swords: "linear-gradient(135deg, #e2e8f0, #64748b)",
  pentacles: "linear-gradient(135deg, #d9f99d, #65a30d)",
};

function getCardVisual(card: TarotCardType): CardVisual {
  if (card.arcana === "major") {
    return (
      majorArcanaVisuals[card.number] || {
        emoji: "✨",
        gradient: "linear-gradient(135deg, #c4b5fd, #7c3aed)",
      }
    );
  }
  const suit = card.suit || "wands";
  return {
    emoji: suitEmojis[suit] || "✨",
    gradient:
      suitGradients[suit] || "linear-gradient(135deg, #c4b5fd, #7c3aed)",
  };
}

function toRoman(num: number): string {
  if (num === 0) return "0";
  const romanNumerals: [number, string][] = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  let result = "";
  let remaining = num;
  for (const [value, symbol] of romanNumerals) {
    while (remaining >= value) {
      result += symbol;
      remaining -= value;
    }
  }
  return result;
}

const sizeMap = {
  sm: {
    width: "5rem",
    height: "8rem",
    emoji: "text-2xl",
    name: "text-[8px]",
    roman: "text-[7px]",
  },
  md: {
    width: "7rem",
    height: "11rem",
    emoji: "text-4xl",
    name: "text-[10px]",
    roman: "text-[9px]",
  },
  lg: {
    width: "9rem",
    height: "14rem",
    emoji: "text-5xl",
    name: "text-xs",
    roman: "text-[10px]",
  },
};

interface TarotCardProps {
  card: TarotCardType;
  isReversed?: boolean;
  isFlipped?: boolean;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  showDetail?: boolean;
}

export default function TarotCard({
  card,
  isReversed = false,
  isFlipped = false,
  onClick,
  size = "md",
  showDetail = false,
}: TarotCardProps) {
  const visual = getCardVisual(card);
  const dimensions = sizeMap[size];

  return (
    <div
      className="cursor-pointer"
      style={{
        width: dimensions.width,
        height: dimensions.height,
        perspective: "1000px",
      }}
      onClick={onClick}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.6s ease",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
        whileHover={{ scale: 1.05 }}
      >
        {/* Card Back */}
        <div
          className="absolute inset-0 rounded-lg flex items-center justify-center"
          style={{
            backfaceVisibility: "hidden",
            background: "linear-gradient(135deg, #1e1b4b, #312e81, #1e1b4b)",
            border: "2px solid #d4a574",
            boxShadow:
              "0 0 15px rgba(212, 165, 116, 0.2), inset 0 0 30px rgba(139, 92, 246, 0.1)",
          }}
        >
          {/* Geometric pattern */}
          <div
            className="absolute inset-2 rounded border opacity-30"
            style={{ borderColor: "#d4a574" }}
          />
          <div
            className="absolute inset-4 rounded border opacity-20"
            style={{ borderColor: "#d4a574" }}
          />
          {/* Corner decorations */}
          <div
            className="absolute top-2 left-2 text-[8px]"
            style={{ color: "#d4a574", opacity: 0.4 }}
          >
            ✦
          </div>
          <div
            className="absolute top-2 right-2 text-[8px]"
            style={{ color: "#d4a574", opacity: 0.4 }}
          >
            ✦
          </div>
          <div
            className="absolute bottom-2 left-2 text-[8px]"
            style={{ color: "#d4a574", opacity: 0.4 }}
          >
            ✦
          </div>
          <div
            className="absolute bottom-2 right-2 text-[8px]"
            style={{ color: "#d4a574", opacity: 0.4 }}
          >
            ✦
          </div>
          {/* Center symbol */}
          <span
            className="text-2xl"
            style={{
              color: "#d4a574",
              textShadow: "0 0 10px rgba(212, 165, 116, 0.5)",
            }}
          >
            ✦
          </span>
        </div>

        {/* Card Front */}
        <div
          className="absolute inset-0 rounded-lg flex flex-col items-center justify-between overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: `rotateY(180deg)${isReversed ? " rotate(180deg)" : ""}`,
            background: visual.gradient,
            border: "2px solid #d4a574",
            boxShadow: "0 0 15px rgba(212, 165, 116, 0.2)",
            padding: size === "sm" ? "0.25rem" : "0.5rem",
          }}
        >
          {/* Dark overlay for readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)",
            }}
          />

          {/* Roman numeral */}
          <div
            className={`relative z-10 font-bold tracking-wider ${dimensions.roman}`}
            style={{
              color: "#d4a574",
              fontFamily: '"Cinzel", serif',
              textShadow: "0 1px 3px rgba(0,0,0,0.5)",
            }}
          >
            {toRoman(card.number)}
          </div>

          {/* Emoji */}
          <div className={`relative z-10 ${dimensions.emoji}`}>
            {visual.emoji}
          </div>

          {/* Card name */}
          <div
            className={`relative z-10 text-center font-semibold leading-tight ${dimensions.name}`}
            style={{
              color: "#ffffff",
              fontFamily: '"Cinzel", serif',
              textShadow: "0 1px 3px rgba(0,0,0,0.7)",
            }}
          >
            {card.name}
          </div>
        </div>
      </motion.div>

      {/* Hover glow effect */}
      <style jsx>{`
        div:hover > div {
          filter: drop-shadow(0 0 12px rgba(212, 165, 116, 0.4));
        }
      `}</style>
    </div>
  );
}
