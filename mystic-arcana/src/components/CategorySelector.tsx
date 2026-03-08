"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { categories } from "@/data/categories";
import useReadingStore from "@/store/useReadingStore";
import type { ReadingCategory } from "@/types/tarot";

interface CategorySelectorProps {
  onSelect: (category: ReadingCategory) => void;
}

export default function CategorySelector({ onSelect }: CategorySelectorProps) {
  const language = useReadingStore((s) => s.language);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelect = (category: ReadingCategory) => {
    setSelectedId(category.id);
    onSelect(category);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl md:text-3xl font-bold text-center mb-8"
        style={{ color: "#d4a574" }}
      >
        {language === "ko"
          ? "어떤 주제로 리딩할까요?"
          : "Choose Your Reading Topic"}
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((category, index) => {
          const isSelected = selectedId === category.id;
          return (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleSelect(category)}
              className="relative rounded-xl p-5 text-left transition-all duration-300 cursor-pointer"
              style={{
                backgroundColor: isSelected
                  ? "rgba(212, 165, 116, 0.15)"
                  : "rgba(255, 255, 255, 0.03)",
                border: `1px solid ${isSelected ? "#d4a574" : "rgba(212, 165, 116, 0.2)"}`,
                boxShadow: isSelected
                  ? "0 0 20px rgba(212, 165, 116, 0.3), inset 0 0 20px rgba(212, 165, 116, 0.05)"
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
              {isSelected && (
                <motion.div
                  layoutId="category-highlight"
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(212, 165, 116, 0.1), rgba(139, 92, 246, 0.05))",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <div className="relative z-10">
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3
                  className="text-base md:text-lg font-semibold mb-1"
                  style={{ color: isSelected ? "#d4a574" : "#e8e0d4" }}
                >
                  {language === "ko" ? category.nameKo : category.name}
                </h3>
                <p
                  className="text-xs md:text-sm leading-relaxed"
                  style={{ color: "rgba(232, 224, 212, 0.6)" }}
                >
                  {language === "ko"
                    ? category.descriptionKo
                    : category.description}
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
