"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Share2 } from "lucide-react";
import MysticBackground from "@/components/MysticBackground";
import Navigation from "@/components/Navigation";
import TarotCardComponent from "@/components/TarotCard";
import useReadingStore from "@/store/useReadingStore";
import { TarotEngine } from "@/lib/tarotEngine";

export default function DailyPage() {
  const language = useReadingStore((s) => s.language);
  const isKo = language === "ko";

  const today = new Date().toISOString().split("T")[0];
  const dailyDraw = TarotEngine.getDailyCard(today);
  const card = dailyDraw.card;

  const [isFlipped, setIsFlipped] = useState(false);
  const [copied, setCopied] = useState(false);

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
  const keywords = isKo
    ? card.keywords[`${meaningKey}Ko`]
    : card.keywords[meaningKey];
  const advice = isKo ? card.adviceKo : card.advice;
  const affirmation = isKo ? card.affirmationKo : card.affirmation;

  const handleShare = async () => {
    const text = [
      `MYSTIC ARCANA - ${isKo ? "오늘의 카드" : "Daily Card"}`,
      `${today}`,
      "",
      `${isKo ? card.nameKo : card.name} ${dailyDraw.isReversed ? (isKo ? "(역방향)" : "(Reversed)") : isKo ? "(정방향)" : "(Upright)"}`,
      "",
      generalMeaning,
      "",
      `${isKo ? "확언" : "Affirmation"}: "${affirmation}"`,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // silent fail
    }
  };

  return (
    <>
      <MysticBackground />
      <Navigation />

      <main className="relative z-10 min-h-screen pt-20 pb-12 px-4">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ color: "#d4a574", fontFamily: '"Cinzel", serif' }}
            >
              {isKo ? "오늘의 카드" : "Daily Card"}
            </h1>
            <p
              className="text-sm"
              style={{ color: "rgba(232, 224, 212, 0.5)" }}
            >
              {today}
            </p>
          </motion.div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div onClick={handleFlip}>
              <TarotCardComponent
                card={card}
                isReversed={dailyDraw.isReversed}
                isFlipped={isFlipped}
                size="lg"
              />
            </div>
          </motion.div>

          {!isFlipped && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center text-sm mb-8"
              style={{ color: "rgba(232, 224, 212, 0.5)" }}
            >
              {isKo
                ? "카드를 클릭하여 오늘의 메시지를 확인하세요"
                : "Click the card to reveal today's message"}
            </motion.p>
          )}

          {isFlipped && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              {/* Card name & orientation */}
              <div className="text-center">
                <h2
                  className="text-2xl font-bold mb-1"
                  style={{ color: "#d4a574", fontFamily: '"Cinzel", serif' }}
                >
                  {isKo ? card.nameKo : card.name}
                </h2>
                <p
                  className="text-sm"
                  style={{
                    color: isKo ? card.name : card.nameKo,
                    opacity: 0.5,
                  }}
                >
                  {isKo ? card.name : card.nameKo}
                </p>
                <p
                  className="text-sm mt-1 font-medium"
                  style={{
                    color: dailyDraw.isReversed ? "#8b5cf6" : "#4ade80",
                  }}
                >
                  {dailyDraw.isReversed
                    ? isKo
                      ? "역방향 (Reversed)"
                      : "Reversed"
                    : isKo
                      ? "정방향 (Upright)"
                      : "Upright"}
                </p>
              </div>

              {/* Keywords */}
              <div className="flex flex-wrap justify-center gap-2">
                {(keywords as string[]).map((kw, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs"
                    style={{
                      backgroundColor: "rgba(212, 165, 116, 0.1)",
                      border: "1px solid rgba(212, 165, 116, 0.25)",
                      color: "#d4a574",
                    }}
                  >
                    {kw}
                  </span>
                ))}
              </div>

              {/* General meaning */}
              <div
                className="rounded-xl p-5"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(212, 165, 116, 0.15)",
                }}
              >
                <h3
                  className="text-sm font-semibold mb-2"
                  style={{ color: "#d4a574" }}
                >
                  {isKo ? "오늘의 메시지" : "Today's Message"}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(232, 224, 212, 0.8)" }}
                >
                  {generalMeaning}
                </p>
              </div>

              {/* Advice */}
              <div
                className="rounded-xl p-5"
                style={{
                  backgroundColor: "rgba(139, 92, 246, 0.05)",
                  border: "1px solid rgba(139, 92, 246, 0.2)",
                }}
              >
                <h3
                  className="text-sm font-semibold mb-2"
                  style={{ color: "#8b5cf6" }}
                >
                  {isKo ? "오늘의 조언" : "Today's Advice"}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(232, 224, 212, 0.8)" }}
                >
                  {advice}
                </p>
              </div>

              {/* Affirmation */}
              <div
                className="rounded-xl p-6 text-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(212, 165, 116, 0.1), rgba(139, 92, 246, 0.05))",
                  border: "1px solid rgba(212, 165, 116, 0.2)",
                }}
              >
                <p
                  className="text-xs uppercase tracking-wider mb-2"
                  style={{ color: "#8b5cf6" }}
                >
                  {isKo ? "오늘의 확언" : "Affirmation"}
                </p>
                <p
                  className="text-base italic font-medium"
                  style={{ color: "#d4a574" }}
                >
                  &ldquo;{affirmation}&rdquo;
                </p>
              </div>

              {/* Share button */}
              <div className="flex justify-center">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium cursor-pointer transition-all duration-300"
                  style={{
                    backgroundColor: "transparent",
                    color: "#8b5cf6",
                    border: "1px solid rgba(139, 92, 246, 0.3)",
                  }}
                >
                  <Share2 size={16} />
                  {copied
                    ? isKo
                      ? "복사됨!"
                      : "Copied!"
                    : isKo
                      ? "공유하기"
                      : "Share"}
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </>
  );
}
