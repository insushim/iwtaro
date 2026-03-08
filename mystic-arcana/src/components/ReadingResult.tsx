"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import useReadingStore from "@/store/useReadingStore";
import type {
  ReadingResult as ReadingResultType,
  DrawnCard,
  Spread,
} from "@/types/tarot";

interface ReadingResultProps {
  reading: ReadingResultType;
  cards: DrawnCard[];
  spread: Spread;
  onSave: () => void;
  onNewReading: () => void;
}

export default function ReadingResult({
  reading,
  cards,
  spread,
  onSave,
  onNewReading,
}: ReadingResultProps) {
  const language = useReadingStore((s) => s.language);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const summary = [
      `MYSTIC ARCANA - ${language === "ko" ? spread.nameKo : spread.name}`,
      "",
      reading.opening,
      "",
      reading.overallMessage,
      "",
      `${language === "ko" ? "확언" : "Affirmation"}: ${reading.affirmation}`,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: silent fail
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };

  const adviceItems = reading.actionableAdvice
    .split(/\n/)
    .filter((line) => line.trim())
    .slice(0, 3);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 pb-12">
      {/* Section 1: Opening */}
      <motion.div
        custom={0}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="mb-8 text-center"
      >
        <h2
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{ color: "#d4a574" }}
        >
          {language === "ko" ? "리딩 결과" : "Your Reading"}
        </h2>
        <p className="text-base leading-relaxed" style={{ color: "#e8e0d4" }}>
          {reading.opening}
        </p>
      </motion.div>

      {/* Section 2: Card Interpretations */}
      {reading.cardInterpretations.map((interp, index) => {
        const card = cards[index];
        const position = spread.positions[index];

        return (
          <motion.div
            key={index}
            custom={index + 1}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="mb-6 rounded-xl p-5"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(212, 165, 116, 0.15)",
            }}
          >
            <div className="flex items-start gap-4">
              {card && (
                <div
                  className="flex-shrink-0 w-14 h-20 rounded-lg flex flex-col items-center justify-center"
                  style={{
                    backgroundColor: "rgba(212, 165, 116, 0.1)",
                    border: "1px solid rgba(212, 165, 116, 0.3)",
                  }}
                >
                  <span
                    className="text-xl"
                    style={{
                      transform: card.isReversed ? "rotate(180deg)" : undefined,
                      display: "inline-block",
                    }}
                  >
                    {card.card.cardBackEmoji}
                  </span>
                  {card.isReversed && (
                    <span
                      className="text-[7px] mt-0.5"
                      style={{ color: "#8b5cf6" }}
                    >
                      {language === "ko" ? "역" : "R"}
                    </span>
                  )}
                </div>
              )}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: "rgba(139, 92, 246, 0.15)",
                      color: "#8b5cf6",
                    }}
                  >
                    {position
                      ? language === "ko"
                        ? position.nameKo
                        : position.name
                      : interp.position}
                  </span>
                </div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ color: "#d4a574" }}
                >
                  {interp.cardName}
                  {interp.isReversed && (
                    <span className="text-sm ml-1" style={{ color: "#8b5cf6" }}>
                      ({language === "ko" ? "역방향" : "Reversed"})
                    </span>
                  )}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-2"
                  style={{ color: "rgba(232, 224, 212, 0.8)" }}
                >
                  {interp.interpretation}
                </p>
                <p
                  className="text-sm italic"
                  style={{ color: "rgba(212, 165, 116, 0.7)" }}
                >
                  {interp.advice}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Section 3: Card Interactions */}
      <motion.div
        custom={reading.cardInterpretations.length + 1}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="mb-6 rounded-xl p-5"
        style={{
          backgroundColor: "rgba(139, 92, 246, 0.05)",
          border: "1px solid rgba(139, 92, 246, 0.2)",
        }}
      >
        <h3 className="text-lg font-semibold mb-3" style={{ color: "#8b5cf6" }}>
          {language === "ko" ? "카드 간의 상호작용" : "Card Interactions"}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "rgba(232, 224, 212, 0.8)" }}
        >
          {reading.cardInteractions}
        </p>
      </motion.div>

      {/* Section 4: Overall Message */}
      <motion.div
        custom={reading.cardInterpretations.length + 2}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="mb-6 rounded-xl p-6"
        style={{
          background:
            "linear-gradient(135deg, rgba(212, 165, 116, 0.1), rgba(139, 92, 246, 0.05))",
          border: "1px solid rgba(212, 165, 116, 0.3)",
          boxShadow: "0 0 30px rgba(212, 165, 116, 0.08)",
        }}
      >
        <h3 className="text-lg font-semibold mb-3" style={{ color: "#d4a574" }}>
          {language === "ko" ? "종합 메시지" : "Overall Message"}
        </h3>
        <p className="text-base leading-relaxed" style={{ color: "#e8e0d4" }}>
          {reading.overallMessage}
        </p>
      </motion.div>

      {/* Section 5: Actionable Advice */}
      <motion.div
        custom={reading.cardInterpretations.length + 3}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="mb-6 rounded-xl p-5"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(212, 165, 116, 0.15)",
        }}
      >
        <h3 className="text-lg font-semibold mb-3" style={{ color: "#d4a574" }}>
          {language === "ko" ? "실천 조언" : "Actionable Advice"}
        </h3>
        <ol className="space-y-3">
          {adviceItems.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                style={{
                  backgroundColor: "rgba(212, 165, 116, 0.15)",
                  color: "#d4a574",
                  border: "1px solid rgba(212, 165, 116, 0.3)",
                }}
              >
                {i + 1}
              </span>
              <p
                className="text-sm leading-relaxed pt-0.5"
                style={{ color: "rgba(232, 224, 212, 0.8)" }}
              >
                {item.replace(/^\d+[.)]\s*/, "")}
              </p>
            </li>
          ))}
        </ol>
      </motion.div>

      {/* Section 6: Affirmation */}
      <motion.div
        custom={reading.cardInterpretations.length + 4}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="mb-6 rounded-xl p-6 text-center"
        style={{
          background:
            "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(212, 165, 116, 0.05))",
          border: "1px solid rgba(139, 92, 246, 0.25)",
        }}
      >
        <div className="text-2xl mb-3">✨</div>
        <blockquote
          className="text-lg italic font-medium leading-relaxed"
          style={{ color: "#e8e0d4" }}
        >
          &ldquo;{reading.affirmation}&rdquo;
        </blockquote>
      </motion.div>

      {/* Section 7: Lucky Elements */}
      <motion.div
        custom={reading.cardInterpretations.length + 5}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="mb-8"
      >
        <h3
          className="text-lg font-semibold mb-3 text-center"
          style={{ color: "#d4a574" }}
        >
          {language === "ko" ? "행운의 요소" : "Lucky Elements"}
        </h3>
        <div className="flex justify-center gap-3 flex-wrap">
          {[
            {
              label: language === "ko" ? "색상" : "Color",
              value: reading.luckyElements.color,
              icon: "🎨",
            },
            {
              label: language === "ko" ? "숫자" : "Number",
              value: reading.luckyElements.number,
              icon: "🔢",
            },
            {
              label: language === "ko" ? "요일" : "Day",
              value: reading.luckyElements.day,
              icon: "📅",
            },
          ].map((el, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                backgroundColor: "rgba(212, 165, 116, 0.1)",
                border: "1px solid rgba(212, 165, 116, 0.25)",
              }}
            >
              <span className="text-sm">{el.icon}</span>
              <span
                className="text-xs"
                style={{ color: "rgba(232, 224, 212, 0.6)" }}
              >
                {el.label}:
              </span>
              <span
                className="text-sm font-semibold"
                style={{ color: "#d4a574" }}
              >
                {el.value}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        custom={reading.cardInterpretations.length + 6}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="flex flex-wrap justify-center gap-3"
      >
        <button
          onClick={onSave}
          className="px-6 py-3 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, #d4a574, #b8864e)",
            color: "#0a0a1a",
            boxShadow: "0 0 20px rgba(212, 165, 116, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 0 30px rgba(212, 165, 116, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow =
              "0 0 20px rgba(212, 165, 116, 0.3)";
          }}
        >
          {language === "ko" ? "저널에 저장" : "Save to Journal"}
        </button>

        <button
          onClick={handleShare}
          className="px-6 py-3 rounded-xl text-sm font-medium cursor-pointer transition-all duration-300"
          style={{
            backgroundColor: "transparent",
            color: "#8b5cf6",
            border: "1px solid rgba(139, 92, 246, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#8b5cf6";
            e.currentTarget.style.boxShadow =
              "0 0 15px rgba(139, 92, 246, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(139, 92, 246, 0.3)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {copied
            ? language === "ko"
              ? "복사됨!"
              : "Copied!"
            : language === "ko"
              ? "공유하기"
              : "Share"}
        </button>

        <button
          onClick={onNewReading}
          className="px-6 py-3 rounded-xl text-sm font-medium cursor-pointer transition-all duration-300"
          style={{
            backgroundColor: "transparent",
            color: "rgba(232, 224, 212, 0.6)",
            border: "1px solid rgba(232, 224, 212, 0.2)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(232, 224, 212, 0.4)";
            e.currentTarget.style.color = "#e8e0d4";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(232, 224, 212, 0.2)";
            e.currentTarget.style.color = "rgba(232, 224, 212, 0.6)";
          }}
        >
          {language === "ko" ? "새로운 리딩" : "New Reading"}
        </button>
      </motion.div>
    </div>
  );
}
