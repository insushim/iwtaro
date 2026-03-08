"use client";

import { motion } from "framer-motion";
import useReadingStore from "@/store/useReadingStore";
import type { Spread, DrawnCard } from "@/types/tarot";

interface SpreadLayoutProps {
  spread: Spread;
  cards: DrawnCard[];
  revealedIndices: number[];
  onCardClick: (index: number) => void;
}

export default function SpreadLayout({
  spread,
  cards,
  revealedIndices,
  onCardClick,
}: SpreadLayoutProps) {
  const language = useReadingStore((s) => s.language);

  return (
    <>
      {/* Desktop: absolute positioning */}
      <div
        className="hidden md:block relative w-full max-w-5xl mx-auto"
        style={{ height: 680 }}
      >
        {spread.positions.map((pos, index) => {
          const isRevealed = revealedIndices.includes(index);
          const card = cards[index];
          const posLabel = language === "ko" ? pos.nameKo : pos.name;

          return (
            <motion.div
              key={pos.id}
              className="absolute flex flex-col items-center"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div
                className="relative cursor-pointer"
                style={{ perspective: 1000 }}
                onClick={() => onCardClick(index)}
              >
                <motion.div
                  className="relative"
                  style={{
                    width: 140,
                    height: 210,
                    transformStyle: "preserve-3d",
                  }}
                  animate={{ rotateY: isRevealed ? 180 : 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  {/* Card Back */}
                  <div
                    className="absolute inset-0 rounded-xl flex flex-col items-center justify-center gap-1"
                    style={{
                      backfaceVisibility: "hidden",
                      backgroundColor: "#1a1a3e",
                      border: "2px solid rgba(212, 165, 116, 0.4)",
                      backgroundImage:
                        "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.2), transparent 70%)",
                      transform: pos.rotation
                        ? `rotate(${pos.rotation}deg)`
                        : undefined,
                    }}
                  >
                    <span className="text-3xl">✦</span>
                    <span
                      className="text-[9px] tracking-widest"
                      style={{ color: "rgba(212, 165, 116, 0.4)" }}
                    >
                      MYSTIC
                    </span>
                  </div>

                  {/* Card Front */}
                  <div
                    className="absolute inset-0 rounded-xl flex flex-col items-center justify-center p-2"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: `rotateY(180deg)${pos.rotation ? ` rotate(${pos.rotation}deg)` : ""}`,
                      backgroundColor: "rgba(26, 26, 62, 0.95)",
                      border: "2px solid #d4a574",
                      boxShadow: "0 0 20px rgba(212, 165, 116, 0.4)",
                    }}
                  >
                    {card && (
                      <>
                        <div
                          className="text-4xl mb-1"
                          style={{
                            transform: card.isReversed
                              ? "rotate(180deg)"
                              : undefined,
                          }}
                        >
                          {card.card.cardBackEmoji}
                        </div>
                        <div
                          className="text-[13px] text-center font-semibold leading-tight"
                          style={{ color: "#d4a574" }}
                        >
                          {language === "ko"
                            ? card.card.nameKo
                            : card.card.name}
                        </div>
                        {card.isReversed && (
                          <div
                            className="text-[9px] mt-1 px-2 py-0.5 rounded-full"
                            style={{
                              color: "#c084fc",
                              backgroundColor: "rgba(139, 92, 246, 0.15)",
                            }}
                          >
                            {language === "ko" ? "역방향" : "Reversed"}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </motion.div>
              </div>

              <div
                className="text-sm mt-2 text-center font-medium max-w-[150px]"
                style={{ color: "rgba(232, 224, 212, 0.7)" }}
              >
                {posLabel}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile: vertical stack */}
      <div className="md:hidden flex flex-col items-center gap-5 w-full px-4">
        {spread.positions.map((pos, index) => {
          const isRevealed = revealedIndices.includes(index);
          const card = cards[index];
          const posLabel = language === "ko" ? pos.nameKo : pos.name;

          return (
            <motion.div
              key={pos.id}
              className="flex items-center gap-5 w-full max-w-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className="cursor-pointer flex-shrink-0"
                style={{ perspective: 800 }}
                onClick={() => onCardClick(index)}
              >
                <motion.div
                  className="relative"
                  style={{
                    width: 80,
                    height: 120,
                    transformStyle: "preserve-3d",
                  }}
                  animate={{ rotateY: isRevealed ? 180 : 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <div
                    className="absolute inset-0 rounded-xl flex flex-col items-center justify-center gap-0.5"
                    style={{
                      backfaceVisibility: "hidden",
                      backgroundColor: "#1a1a3e",
                      border: "2px solid rgba(212, 165, 116, 0.4)",
                      transform: pos.rotation
                        ? `rotate(${pos.rotation}deg)`
                        : undefined,
                    }}
                  >
                    <span className="text-2xl">✦</span>
                  </div>
                  <div
                    className="absolute inset-0 rounded-xl flex flex-col items-center justify-center p-2"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: `rotateY(180deg)${pos.rotation ? ` rotate(${pos.rotation}deg)` : ""}`,
                      backgroundColor: "rgba(26, 26, 62, 0.95)",
                      border: "2px solid #d4a574",
                      boxShadow: "0 0 15px rgba(212, 165, 116, 0.3)",
                    }}
                  >
                    {card && (
                      <>
                        <div
                          className="text-2xl"
                          style={{
                            transform: card.isReversed
                              ? "rotate(180deg)"
                              : undefined,
                          }}
                        >
                          {card.card.cardBackEmoji}
                        </div>
                        <div
                          className="text-[9px] text-center font-semibold mt-1"
                          style={{ color: "#d4a574" }}
                        >
                          {language === "ko"
                            ? card.card.nameKo
                            : card.card.name}
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              </div>

              <div className="flex flex-col">
                <span
                  className="text-sm font-semibold"
                  style={{ color: "#d4a574" }}
                >
                  {posLabel}
                </span>
                {isRevealed && card && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm mt-1"
                    style={{ color: "#e8e0d4" }}
                  >
                    {language === "ko" ? card.card.nameKo : card.card.name}
                    {card.isReversed && (
                      <span style={{ color: "#c084fc" }}>
                        {" "}
                        ({language === "ko" ? "역방향" : "R"})
                      </span>
                    )}
                  </motion.span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
