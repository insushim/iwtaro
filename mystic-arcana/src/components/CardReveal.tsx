"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useReadingStore from "@/store/useReadingStore";
import SpreadLayout from "./SpreadLayout";
import type { Spread, DrawnCard } from "@/types/tarot";

interface CardRevealProps {
  drawnCards: DrawnCard[];
  spread: Spread;
  onComplete: () => void;
}

export default function CardReveal({
  drawnCards,
  spread,
  onComplete,
}: CardRevealProps) {
  const language = useReadingStore((s) => s.language);
  const [revealedIndices, setRevealedIndices] = useState<number[]>([]);
  const [isAutoRevealing, setIsAutoRevealing] = useState(true);
  const [lastRevealed, setLastRevealed] = useState<number | null>(null);

  const allRevealed =
    revealedIndices.length >= drawnCards.length && drawnCards.length > 0;

  useEffect(() => {
    if (!isAutoRevealing) return;

    let cancelled = false;
    let currentIndex = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const revealNext = () => {
      if (cancelled || currentIndex >= drawnCards.length) {
        if (!cancelled) setIsAutoRevealing(false);
        return;
      }
      const idx = currentIndex;
      setRevealedIndices((prev) =>
        prev.includes(idx) ? prev : [...prev, idx],
      );
      setLastRevealed(idx);
      currentIndex++;
      if (currentIndex < drawnCards.length) {
        timers.push(setTimeout(revealNext, 800));
      } else {
        setIsAutoRevealing(false);
      }
    };

    timers.push(setTimeout(revealNext, 500));
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [drawnCards.length, isAutoRevealing]);

  const handleCardClick = useCallback(
    (index: number) => {
      if (revealedIndices.includes(index)) return;
      setRevealedIndices((prev) => [...prev, index]);
      setLastRevealed(index);
    },
    [revealedIndices],
  );

  return (
    <div className="w-full max-w-4xl mx-auto px-4 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl md:text-3xl font-bold text-center mb-6"
        style={{ color: "#d4a574" }}
      >
        {allRevealed
          ? language === "ko"
            ? "모든 카드가 공개되었습니다"
            : "All Cards Revealed"
          : language === "ko"
            ? "카드가 공개됩니다..."
            : "Revealing Your Cards..."}
      </motion.h2>

      <SpreadLayout
        spread={spread}
        cards={drawnCards}
        revealedIndices={revealedIndices}
        onCardClick={handleCardClick}
      />

      <AnimatePresence>
        {lastRevealed !== null && revealedIndices.includes(lastRevealed) && (
          <motion.div
            key={lastRevealed}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 text-center"
          >
            <p className="text-lg font-semibold" style={{ color: "#e8e0d4" }}>
              {language === "ko"
                ? drawnCards[lastRevealed].card.nameKo
                : drawnCards[lastRevealed].card.name}
            </p>
            <p
              className="text-sm mt-1"
              style={{
                color: drawnCards[lastRevealed].isReversed
                  ? "#8b5cf6"
                  : "#d4a574",
              }}
            >
              {drawnCards[lastRevealed].isReversed
                ? language === "ko"
                  ? "역방향 (Reversed)"
                  : "Reversed"
                : language === "ko"
                  ? "정방향 (Upright)"
                  : "Upright"}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {allRevealed && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onComplete}
            className="mt-8 px-8 py-3 rounded-xl text-base font-semibold cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #d4a574, #b8864e)",
              color: "#0a0a1a",
              boxShadow: "0 0 25px rgba(212, 165, 116, 0.4)",
            }}
          >
            {language === "ko" ? "해석 보기" : "View Reading"}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
