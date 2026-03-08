"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { spreads } from "@/data/spreads";
import useReadingStore from "@/store/useReadingStore";
import type { Spread } from "@/types/tarot";

interface SpreadSelectorProps {
  onSelect: (spread: Spread) => void;
}

const difficultyConfig = {
  beginner: { label: "Beginner", labelKo: "초급", color: "#22c55e" },
  intermediate: { label: "Intermediate", labelKo: "중급", color: "#eab308" },
  advanced: { label: "Advanced", labelKo: "고급", color: "#ef4444" },
};

function MiniPreview({ spread }: { spread: Spread }) {
  return (
    <div className="relative w-full h-16 my-2">
      {spread.positions.map((pos) => (
        <div
          key={pos.id}
          className="absolute w-3 h-4 rounded-sm"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            transform: `translate(-50%, -50%) ${pos.rotation ? `rotate(${pos.rotation}deg)` : ""}`,
            backgroundColor: "rgba(212, 165, 116, 0.4)",
            border: "1px solid rgba(212, 165, 116, 0.6)",
          }}
        />
      ))}
    </div>
  );
}

export default function SpreadSelector({ onSelect }: SpreadSelectorProps) {
  const language = useReadingStore((s) => s.language);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelect = (spread: Spread) => {
    setSelectedId(spread.id);
    onSelect(spread);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl md:text-3xl font-bold text-center mb-8"
        style={{ color: "#d4a574" }}
      >
        {language === "ko" ? "스프레드를 선택하세요" : "Choose Your Spread"}
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {spreads.map((spread, index) => {
          const isSelected = selectedId === spread.id;
          const diff = difficultyConfig[spread.difficulty];
          return (
            <motion.button
              key={spread.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleSelect(spread)}
              className="relative rounded-xl p-4 text-left transition-all duration-300 cursor-pointer flex flex-col"
              style={{
                backgroundColor: isSelected
                  ? "rgba(212, 165, 116, 0.15)"
                  : "rgba(255, 255, 255, 0.03)",
                border: `1px solid ${isSelected ? "#d4a574" : "rgba(212, 165, 116, 0.2)"}`,
                boxShadow: isSelected
                  ? "0 0 20px rgba(212, 165, 116, 0.3)"
                  : "none",
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = "#d4a574";
                  e.currentTarget.style.boxShadow =
                    "0 0 15px rgba(212, 165, 116, 0.2)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor =
                    "rgba(212, 165, 116, 0.2)";
                  e.currentTarget.style.boxShadow = "none";
                }
              }}
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-2xl">{spread.icon}</span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{
                    backgroundColor: `${diff.color}20`,
                    color: diff.color,
                    border: `1px solid ${diff.color}40`,
                  }}
                >
                  {language === "ko" ? diff.labelKo : diff.label}
                </span>
              </div>

              <h3
                className="text-sm md:text-base font-semibold mb-1"
                style={{ color: isSelected ? "#d4a574" : "#e8e0d4" }}
              >
                {language === "ko" ? spread.nameKo : spread.name}
              </h3>

              <div
                className="text-xs font-medium mb-1"
                style={{ color: "#8b5cf6" }}
              >
                {spread.cardCount}{" "}
                {language === "ko"
                  ? "장"
                  : spread.cardCount === 1
                    ? "card"
                    : "cards"}
              </div>

              <MiniPreview spread={spread} />

              <div className="flex flex-wrap gap-1 mt-auto">
                {(language === "ko" ? spread.bestForKo : spread.bestFor).map(
                  (tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-1.5 py-0.5 rounded"
                      style={{
                        backgroundColor: "rgba(139, 92, 246, 0.1)",
                        color: "rgba(139, 92, 246, 0.8)",
                        border: "1px solid rgba(139, 92, 246, 0.2)",
                      }}
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
