"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { TarotCard } from "@/types/tarot";
import useReadingStore from "@/store/useReadingStore";
import TarotCardComponent from "./TarotCard";

type Orientation = "upright" | "reversed";
type MeaningCategory =
  | "general"
  | "love"
  | "career"
  | "finance"
  | "health"
  | "spirituality";

const meaningLabels: Record<MeaningCategory, { en: string; ko: string }> = {
  general: { en: "General", ko: "일반" },
  love: { en: "Love", ko: "연애" },
  career: { en: "Career", ko: "직업" },
  finance: { en: "Finance", ko: "재정" },
  health: { en: "Health", ko: "건강" },
  spirituality: { en: "Spiritual", ko: "영적" },
};

const orientationLabels: Record<Orientation, { en: string; ko: string }> = {
  upright: { en: "Upright", ko: "정방향" },
  reversed: { en: "Reversed", ko: "역방향" },
};

interface CardDetailProps {
  card: TarotCard;
  isReversed?: boolean;
  isOpen: boolean;
  onClose: () => void;
}

export default function CardDetail({
  card,
  isReversed = false,
  isOpen,
  onClose,
}: CardDetailProps) {
  const { language } = useReadingStore();
  const [orientation, setOrientation] = useState<Orientation>(
    isReversed ? "reversed" : "upright",
  );
  const [activeCategory, setActiveCategory] =
    useState<MeaningCategory>("general");
  const isKo = language === "ko";

  const meaningKey =
    `${activeCategory}${isKo ? "Ko" : ""}` as keyof (typeof card.meaning)["upright"];
  const currentMeaning = card.meaning[orientation][meaningKey];

  const keywordsKey =
    `${orientation}${isKo ? "Ko" : ""}` as keyof typeof card.keywords;
  const currentKeywords = card.keywords[keywordsKey];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl"
            style={{
              backgroundColor: "rgba(10, 10, 26, 0.95)",
              border: "1px solid rgba(212, 165, 116, 0.3)",
              boxShadow:
                "0 0 40px rgba(139, 92, 246, 0.15), 0 0 80px rgba(0,0,0,0.5)",
            }}
            initial={{ scale: 0.85, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.85, y: 30, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full transition-colors hover:bg-white/10"
              style={{ color: "#d4a574" }}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="p-6">
              {/* Card visual + name header */}
              <div className="flex flex-col items-center gap-4 mb-6">
                <TarotCardComponent
                  card={card}
                  isReversed={orientation === "reversed"}
                  isFlipped={true}
                  size="lg"
                />
                <div className="text-center">
                  <h2
                    className="text-xl font-bold"
                    style={{
                      color: "#d4a574",
                      fontFamily: '"Cinzel", serif',
                    }}
                  >
                    {isKo ? card.nameKo : card.name}
                  </h2>
                  <p
                    className="text-sm mt-1"
                    style={{ color: "rgba(232, 224, 212, 0.6)" }}
                  >
                    {isKo ? card.name : card.nameKo}
                  </p>
                </div>
              </div>

              {/* Element, Zodiac, Yes/No row */}
              <div
                className="flex justify-center gap-4 mb-6 text-sm flex-wrap"
                style={{ color: "#e8e0d4" }}
              >
                <div className="flex items-center gap-1.5">
                  <span style={{ color: "#8b5cf6" }}>
                    {isKo ? "원소" : "Element"}:
                  </span>
                  <span>{isKo ? card.elementKo : card.element}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span style={{ color: "#8b5cf6" }}>
                    {isKo ? "별자리" : "Zodiac"}:
                  </span>
                  <span>{isKo ? card.zodiacKo : card.zodiac}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span style={{ color: "#8b5cf6" }}>Yes/No:</span>
                  <span
                    style={{
                      color:
                        card.yesOrNo === "yes"
                          ? "#4ade80"
                          : card.yesOrNo === "no"
                            ? "#f87171"
                            : "#fbbf24",
                    }}
                  >
                    {card.yesOrNo.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Numerology */}
              <div
                className="mb-6 p-3 rounded-lg text-sm"
                style={{
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  border: "1px solid rgba(139, 92, 246, 0.2)",
                  color: "#e8e0d4",
                }}
              >
                <span className="font-semibold" style={{ color: "#8b5cf6" }}>
                  {isKo ? "수비학" : "Numerology"}:{" "}
                </span>
                {isKo ? card.numerologyKo : card.numerology}
              </div>

              {/* Keywords */}
              <div className="mb-6">
                <h3
                  className="text-sm font-semibold mb-2"
                  style={{ color: "#d4a574" }}
                >
                  {isKo ? "키워드" : "Keywords"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(currentKeywords as string[]).map((keyword, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-full text-xs"
                      style={{
                        backgroundColor: "rgba(212, 165, 116, 0.1)",
                        border: "1px solid rgba(212, 165, 116, 0.25)",
                        color: "#d4a574",
                      }}
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Orientation tabs */}
              <div className="flex gap-2 mb-4">
                {(["upright", "reversed"] as Orientation[]).map((orient) => (
                  <button
                    key={orient}
                    onClick={() => setOrientation(orient)}
                    className="flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                    style={{
                      backgroundColor:
                        orientation === orient
                          ? "rgba(139, 92, 246, 0.3)"
                          : "rgba(139, 92, 246, 0.05)",
                      border: `1px solid ${orientation === orient ? "rgba(139, 92, 246, 0.5)" : "rgba(139, 92, 246, 0.15)"}`,
                      color:
                        orientation === orient
                          ? "#a78bfa"
                          : "rgba(232, 224, 212, 0.5)",
                    }}
                  >
                    {isKo
                      ? orientationLabels[orient].ko
                      : orientationLabels[orient].en}
                  </button>
                ))}
              </div>

              {/* Meaning category tabs */}
              <div className="flex gap-1 mb-4 overflow-x-auto pb-1">
                {(Object.keys(meaningLabels) as MeaningCategory[]).map(
                  (cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200"
                      style={{
                        backgroundColor:
                          activeCategory === cat
                            ? "rgba(212, 165, 116, 0.2)"
                            : "transparent",
                        border: `1px solid ${activeCategory === cat ? "rgba(212, 165, 116, 0.4)" : "rgba(212, 165, 116, 0.1)"}`,
                        color:
                          activeCategory === cat
                            ? "#d4a574"
                            : "rgba(232, 224, 212, 0.5)",
                      }}
                    >
                      {isKo ? meaningLabels[cat].ko : meaningLabels[cat].en}
                    </button>
                  ),
                )}
              </div>

              {/* Meaning content */}
              <motion.div
                key={`${orientation}-${activeCategory}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="mb-6 p-4 rounded-lg text-sm leading-relaxed"
                style={{
                  backgroundColor: "rgba(10, 10, 26, 0.5)",
                  border: "1px solid rgba(212, 165, 116, 0.1)",
                  color: "#e8e0d4",
                }}
              >
                {currentMeaning}
              </motion.div>

              {/* Symbolism */}
              <div className="mb-4">
                <h3
                  className="text-sm font-semibold mb-2"
                  style={{ color: "#d4a574" }}
                >
                  {isKo ? "상징" : "Symbolism"}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(232, 224, 212, 0.8)" }}
                >
                  {isKo ? card.symbolismKo : card.symbolism}
                </p>
              </div>

              {/* Advice */}
              <div className="mb-4">
                <h3
                  className="text-sm font-semibold mb-2"
                  style={{ color: "#d4a574" }}
                >
                  {isKo ? "조언" : "Advice"}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(232, 224, 212, 0.8)" }}
                >
                  {isKo ? card.adviceKo : card.advice}
                </p>
              </div>

              {/* Affirmation */}
              <div
                className="p-4 rounded-lg text-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(212, 165, 116, 0.1))",
                  border: "1px solid rgba(212, 165, 116, 0.2)",
                }}
              >
                <p
                  className="text-xs uppercase tracking-wider mb-1"
                  style={{ color: "#8b5cf6" }}
                >
                  {isKo ? "확언" : "Affirmation"}
                </p>
                <p className="text-sm italic" style={{ color: "#d4a574" }}>
                  &ldquo;{isKo ? card.affirmationKo : card.affirmation}&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
