"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useReadingStore from "@/store/useReadingStore";

interface CardDeckProps {
  cardCount: number;
  onCardsSelected: (indices: number[]) => void;
}

const TOTAL_CARDS = 78;

export default function CardDeck({
  cardCount,
  onCardsSelected,
}: CardDeckProps) {
  const language = useReadingStore((s) => s.language);
  const [phase, setPhase] = useState<"initial" | "shuffling" | "selecting">(
    "initial",
  );
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [shuffleKey, setShuffleKey] = useState(0);

  const handleShuffle = useCallback(() => {
    setPhase("shuffling");
    setShuffleKey((k) => k + 1);
    setTimeout(() => {
      setPhase("selecting");
    }, 1500);
  }, []);

  const handleCardClick = useCallback(
    (index: number) => {
      if (phase !== "selecting") return;
      if (selectedIndices.includes(index)) {
        setSelectedIndices((prev) => prev.filter((i) => i !== index));
        return;
      }
      if (selectedIndices.length >= cardCount) return;
      setSelectedIndices((prev) => [...prev, index]);
    },
    [phase, selectedIndices, cardCount],
  );

  const handleConfirm = () => {
    onCardsSelected(selectedIndices);
  };

  const displayCardCount = Math.min(TOTAL_CARDS, 22);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl md:text-3xl font-bold text-center mb-2"
        style={{ color: "#d4a574" }}
      >
        {phase === "initial" &&
          (language === "ko" ? "카드를 섞어주세요" : "Shuffle the Cards")}
        {phase === "shuffling" &&
          (language === "ko" ? "카드를 섞는 중..." : "Shuffling...")}
        {phase === "selecting" &&
          (language === "ko"
            ? `${cardCount}장의 카드를 선택하세요`
            : `Select ${cardCount} card${cardCount > 1 ? "s" : ""}`)}
      </motion.h2>

      {phase === "selecting" && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm mb-4"
          style={{ color: "rgba(232, 224, 212, 0.6)" }}
        >
          {language === "ko"
            ? `${selectedIndices.length} / ${cardCount} 선택됨`
            : `${selectedIndices.length} / ${cardCount} selected`}
        </motion.p>
      )}

      {phase === "initial" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative my-12"
          style={{ width: 180, height: 260 }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-2xl"
              animate={{
                rotate: (i - 2) * 4,
                x: (i - 2) * 3,
              }}
              transition={{ duration: 0.6 }}
              style={{
                backgroundColor: "#1a1a3e",
                border: "2px solid rgba(212, 165, 116, 0.35)",
                backgroundImage:
                  "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15), transparent 60%)",
              }}
            >
              <div
                className="w-full h-full flex flex-col items-center justify-center rounded-2xl"
                style={{
                  backgroundImage:
                    "repeating-conic-gradient(rgba(212, 165, 116, 0.05) 0% 25%, transparent 0% 50%)",
                  backgroundSize: "20px 20px",
                }}
              >
                <span className="text-5xl mb-2">✦</span>
                <span
                  className="text-xs tracking-widest"
                  style={{ color: "rgba(212, 165, 116, 0.5)" }}
                >
                  MYSTIC
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {phase === "initial" && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleShuffle}
          className="px-8 py-3 rounded-xl text-base font-semibold cursor-pointer mt-4"
          style={{
            background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
            color: "#e8e0d4",
            boxShadow: "0 0 25px rgba(139, 92, 246, 0.3)",
          }}
        >
          {language === "ko" ? "카드 섞기" : "Shuffle"}
        </motion.button>
      )}

      {phase === "shuffling" && (
        <div className="relative w-60 h-40 my-12">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={`${shuffleKey}-${i}`}
              className="absolute rounded-lg"
              style={{
                width: 60,
                height: 84,
                left: "50%",
                top: "50%",
                backgroundColor: "#1a1a2e",
                border: "1px solid rgba(212, 165, 116, 0.4)",
              }}
              initial={{ x: "-50%", y: "-50%", rotate: 0 }}
              animate={{
                x: ["-50%", `${(i % 2 === 0 ? -1 : 1) * 80 - 50}%`, "-50%"],
                y: ["-50%", `${(i % 3 === 0 ? -1 : 1) * 40 - 50}%`, "-50%"],
                rotate: [0, (i % 2 === 0 ? 1 : -1) * 180, 360],
              }}
              transition={{
                duration: 1.2,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {phase === "selecting" && (
        <>
          {/* Desktop: arc layout */}
          <div
            className="hidden md:flex justify-center items-end my-8 relative"
            style={{ height: 580 }}
          >
            {Array.from({ length: displayCardCount }).map((_, i) => {
              const isSelected = selectedIndices.includes(i);
              const angle =
                ((i - displayCardCount / 2) / displayCardCount) * 50;
              const radius = 720;
              const rad = (angle * Math.PI) / 180;
              const x = Math.sin(rad) * radius;
              const y = -Math.cos(rad) * radius + radius;

              return (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{
                    opacity: 1,
                    x,
                    y: isSelected ? y - 50 : y,
                    rotate: angle,
                  }}
                  transition={{ delay: i * 0.03, duration: 0.5 }}
                  whileHover={
                    !isSelected && selectedIndices.length < cardCount
                      ? { y: y - 30, scale: 1.08 }
                      : {}
                  }
                  onClick={() => handleCardClick(i)}
                  disabled={selectedIndices.length >= cardCount && !isSelected}
                  className="absolute rounded-xl cursor-pointer disabled:cursor-not-allowed"
                  style={{
                    width: 130,
                    height: 190,
                    left: "50%",
                    bottom: 0,
                    marginLeft: -65,
                    backgroundColor: isSelected
                      ? "rgba(212, 165, 116, 0.15)"
                      : "#1a1a3e",
                    border: `2px solid ${isSelected ? "#d4a574" : "rgba(212, 165, 116, 0.25)"}`,
                    boxShadow: isSelected
                      ? "0 0 25px rgba(212, 165, 116, 0.6), 0 -8px 20px rgba(212, 165, 116, 0.3)"
                      : "0 4px 12px rgba(0,0,0,0.4)",
                    backgroundImage: isSelected
                      ? "none"
                      : "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15), transparent 70%)",
                    zIndex: isSelected ? 30 : i,
                  }}
                >
                  <div
                    className="w-full h-full flex flex-col items-center justify-center gap-1 rounded-xl"
                    style={{
                      backgroundImage: !isSelected
                        ? "repeating-conic-gradient(rgba(212, 165, 116, 0.04) 0% 25%, transparent 0% 50%)"
                        : "none",
                      backgroundSize: "16px 16px",
                    }}
                  >
                    <span className="text-3xl">{isSelected ? "✨" : "✦"}</span>
                    {isSelected && (
                      <span
                        className="text-[10px] font-bold"
                        style={{ color: "#d4a574" }}
                      >
                        {selectedIndices.indexOf(i) + 1}
                      </span>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Mobile: horizontal scroll */}
          <div className="md:hidden w-full overflow-x-auto py-6 my-4">
            <div className="flex gap-3 px-4" style={{ width: "max-content" }}>
              {Array.from({ length: displayCardCount }).map((_, i) => {
                const isSelected = selectedIndices.includes(i);
                return (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{
                      opacity: 1,
                      y: isSelected ? -16 : 0,
                    }}
                    transition={{ delay: i * 0.03 }}
                    onClick={() => handleCardClick(i)}
                    disabled={
                      selectedIndices.length >= cardCount && !isSelected
                    }
                    className="flex-shrink-0 rounded-xl cursor-pointer disabled:cursor-not-allowed"
                    style={{
                      width: 70,
                      height: 105,
                      backgroundColor: isSelected
                        ? "rgba(212, 165, 116, 0.15)"
                        : "#1a1a3e",
                      border: `2px solid ${isSelected ? "#d4a574" : "rgba(212, 165, 116, 0.25)"}`,
                      boxShadow: isSelected
                        ? "0 0 20px rgba(212, 165, 116, 0.5)"
                        : "0 3px 10px rgba(0,0,0,0.4)",
                    }}
                  >
                    <div className="w-full h-full flex flex-col items-center justify-center gap-1">
                      <span className="text-xl">{isSelected ? "✨" : "✦"}</span>
                      {isSelected && (
                        <span
                          className="text-[10px] font-bold"
                          style={{ color: "#d4a574" }}
                        >
                          {selectedIndices.indexOf(i) + 1}
                        </span>
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </>
      )}

      <AnimatePresence>
        {selectedIndices.length === cardCount && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleConfirm}
            className="px-8 py-3 rounded-xl text-base font-semibold cursor-pointer mt-4"
            style={{
              background: "linear-gradient(135deg, #d4a574, #b8864e)",
              color: "#0a0a1a",
              boxShadow: "0 0 25px rgba(212, 165, 116, 0.4)",
            }}
          >
            {language === "ko" ? "선택 완료" : "Confirm Selection"}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
