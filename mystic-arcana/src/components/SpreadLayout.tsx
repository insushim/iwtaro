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
        className="hidden md:block relative w-full max-w-3xl mx-auto"
        style={{ height: 500 }}
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
                style={{ perspective: 800 }}
                onClick={() => onCardClick(index)}
              >
                <motion.div
                  className="relative"
                  style={{
                    width: 70,
                    height: 100,
                    transformStyle: "preserve-3d",
                  }}
                  animate={{ rotateY: isRevealed ? 180 : 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  {/* Card Back */}
                  <div
                    className="absolute inset-0 rounded-lg flex items-center justify-center text-2xl"
                    style={{
                      backfaceVisibility: "hidden",
                      backgroundColor: "#1a1a2e",
                      border: "2px solid rgba(212, 165, 116, 0.4)",
                      backgroundImage:
                        "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15), transparent 70%)",
                      transform: pos.rotation
                        ? `rotate(${pos.rotation}deg)`
                        : undefined,
                    }}
                  >
                    🌙
                  </div>

                  {/* Card Front */}
                  <div
                    className="absolute inset-0 rounded-lg flex flex-col items-center justify-center p-1"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: `rotateY(180deg)${pos.rotation ? ` rotate(${pos.rotation}deg)` : ""}`,
                      backgroundColor: "rgba(212, 165, 116, 0.1)",
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
                          className="text-[8px] text-center font-medium mt-1 leading-tight"
                          style={{ color: "#d4a574" }}
                        >
                          {language === "ko"
                            ? card.card.nameKo
                            : card.card.name}
                        </div>
                        {card.isReversed && (
                          <div
                            className="text-[7px] mt-0.5"
                            style={{ color: "#8b5cf6" }}
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
                className="text-[10px] mt-2 text-center font-medium max-w-[80px]"
                style={{ color: "rgba(232, 224, 212, 0.6)" }}
              >
                {posLabel}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile: vertical stack */}
      <div className="md:hidden flex flex-col items-center gap-4 w-full px-4">
        {spread.positions.map((pos, index) => {
          const isRevealed = revealedIndices.includes(index);
          const card = cards[index];
          const posLabel = language === "ko" ? pos.nameKo : pos.name;

          return (
            <motion.div
              key={pos.id}
              className="flex items-center gap-4 w-full max-w-sm"
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
                    width: 56,
                    height: 80,
                    transformStyle: "preserve-3d",
                  }}
                  animate={{ rotateY: isRevealed ? 180 : 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <div
                    className="absolute inset-0 rounded-lg flex items-center justify-center text-xl"
                    style={{
                      backfaceVisibility: "hidden",
                      backgroundColor: "#1a1a2e",
                      border: "2px solid rgba(212, 165, 116, 0.4)",
                      transform: pos.rotation
                        ? `rotate(${pos.rotation}deg)`
                        : undefined,
                    }}
                  >
                    🌙
                  </div>
                  <div
                    className="absolute inset-0 rounded-lg flex flex-col items-center justify-center p-1"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: `rotateY(180deg)${pos.rotation ? ` rotate(${pos.rotation}deg)` : ""}`,
                      backgroundColor: "rgba(212, 165, 116, 0.1)",
                      border: "2px solid #d4a574",
                      boxShadow: "0 0 15px rgba(212, 165, 116, 0.3)",
                    }}
                  >
                    {card && (
                      <>
                        <div
                          className="text-xl"
                          style={{
                            transform: card.isReversed
                              ? "rotate(180deg)"
                              : undefined,
                          }}
                        >
                          {card.card.cardBackEmoji}
                        </div>
                        <div
                          className="text-[7px] text-center font-medium mt-0.5"
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
                  className="text-xs font-semibold"
                  style={{ color: "#d4a574" }}
                >
                  {posLabel}
                </span>
                {isRevealed && card && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs mt-0.5"
                    style={{ color: "#e8e0d4" }}
                  >
                    {language === "ko" ? card.card.nameKo : card.card.name}
                    {card.isReversed && (
                      <span style={{ color: "#8b5cf6" }}>
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
