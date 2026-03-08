"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TarotEngine } from "@/lib/tarotEngine";
import TarotCardComponent from "./TarotCard";
import useReadingStore from "@/store/useReadingStore";

export default function DailyCard() {
  const language = useReadingStore((s) => s.language);
  const isKo = language === "ko";
  const [isFlipped, setIsFlipped] = useState(false);

  const today = new Date().toISOString().split("T")[0];
  const dailyDraw = TarotEngine.getDailyCard(today);
  const card = dailyDraw.card;

  useEffect(() => {
    const saved = localStorage.getItem("mystic-daily-card-date");
    if (saved === today) {
      setIsFlipped(true);
    }
  }, [today]);

  const handleFlip = () => {
    if (!isFlipped) {
      setIsFlipped(true);
      localStorage.setItem("mystic-daily-card-date", today);
    }
  };

  const meaningKey = dailyDraw.isReversed ? "reversed" : "upright";
  const generalMeaning = isKo
    ? card.meaning[meaningKey].generalKo
    : card.meaning[meaningKey].general;

  return (
    <div className="flex flex-col items-center max-w-sm mx-auto">
      <div onClick={handleFlip}>
        <TarotCardComponent
          card={card}
          isReversed={dailyDraw.isReversed}
          isFlipped={isFlipped}
          size="lg"
        />
      </div>

      {!isFlipped && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-sm"
          style={{ color: "rgba(232, 224, 212, 0.5)" }}
        >
          {isKo ? "카드를 클릭하여 공개하세요" : "Click the card to reveal"}
        </motion.p>
      )}

      {isFlipped && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-center"
        >
          <h3
            className="text-lg font-semibold mb-1"
            style={{ color: "#d4a574", fontFamily: '"Cinzel", serif' }}
          >
            {isKo ? card.nameKo : card.name}
          </h3>
          <p
            className="text-xs mb-2"
            style={{
              color: dailyDraw.isReversed
                ? "#8b5cf6"
                : "rgba(232, 224, 212, 0.6)",
            }}
          >
            {dailyDraw.isReversed
              ? isKo
                ? "역방향"
                : "Reversed"
              : isKo
                ? "정방향"
                : "Upright"}
          </p>
          <p
            className="text-sm leading-relaxed max-w-xs"
            style={{ color: "rgba(232, 224, 212, 0.7)" }}
          >
            {generalMeaning}
          </p>
          <Link
            href="/daily"
            className="inline-block mt-4 text-sm font-medium transition-colors"
            style={{ color: "#8b5cf6" }}
          >
            {isKo ? "자세히 보기 →" : "View Details →"}
          </Link>
        </motion.div>
      )}
    </div>
  );
}
