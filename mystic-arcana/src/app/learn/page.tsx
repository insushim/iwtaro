"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import MysticBackground from "@/components/MysticBackground";
import Navigation from "@/components/Navigation";
import TarotCardComponent from "@/components/TarotCard";
import CardDetail from "@/components/CardDetail";
import { fullDeck } from "@/data/tarotDatabase";
import useReadingStore from "@/store/useReadingStore";
import type { TarotCard } from "@/types/tarot";

type FilterType = "all" | "major" | "wands" | "cups" | "swords" | "pentacles";

const filters: { key: FilterType; label: string; labelKo: string }[] = [
  { key: "all", label: "All", labelKo: "전체" },
  { key: "major", label: "Major Arcana", labelKo: "메이저 아르카나" },
  { key: "wands", label: "Wands", labelKo: "완드" },
  { key: "cups", label: "Cups", labelKo: "컵" },
  { key: "swords", label: "Swords", labelKo: "소드" },
  { key: "pentacles", label: "Pentacles", labelKo: "펜타클" },
];

export default function LearnPage() {
  const language = useReadingStore((s) => s.language);
  const isKo = language === "ko";
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCard, setSelectedCard] = useState<TarotCard | null>(null);

  const filteredCards = useMemo(() => {
    let cards = fullDeck;

    if (activeFilter === "major") {
      cards = cards.filter((c) => c.arcana === "major");
    } else if (activeFilter !== "all") {
      cards = cards.filter((c) => c.suit === activeFilter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      cards = cards.filter(
        (c) => c.name.toLowerCase().includes(q) || c.nameKo.includes(q),
      );
    }

    return cards;
  }, [activeFilter, searchQuery]);

  return (
    <>
      <MysticBackground />
      <Navigation />

      <main className="relative z-10 min-h-screen pt-20 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
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
              {isKo ? "카드 백과사전" : "Card Encyclopedia"}
            </h1>
            <p
              className="text-sm"
              style={{ color: "rgba(232, 224, 212, 0.6)" }}
            >
              {isKo
                ? "78장의 타로 카드를 탐구하세요"
                : "Explore all 78 tarot cards"}
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-md mx-auto mb-6"
          >
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2"
                style={{ color: "rgba(232, 224, 212, 0.4)" }}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isKo ? "카드 이름 검색..." : "Search card name..."}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm outline-none transition-all"
                style={{
                  backgroundColor: "rgba(10, 10, 26, 0.8)",
                  color: "#e8e0d4",
                  border: "1px solid rgba(212, 165, 116, 0.2)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#d4a574";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(212, 165, 116, 0.2)";
                }}
              />
            </div>
          </motion.div>

          {/* Filter buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer"
                style={{
                  backgroundColor:
                    activeFilter === f.key
                      ? "rgba(212, 165, 116, 0.2)"
                      : "rgba(255, 255, 255, 0.03)",
                  border: `1px solid ${activeFilter === f.key ? "#d4a574" : "rgba(212, 165, 116, 0.15)"}`,
                  color:
                    activeFilter === f.key
                      ? "#d4a574"
                      : "rgba(232, 224, 212, 0.6)",
                }}
              >
                {isKo ? f.labelKo : f.label}
              </button>
            ))}
          </motion.div>

          {/* Card count */}
          <p
            className="text-center text-xs mb-6"
            style={{ color: "rgba(232, 224, 212, 0.4)" }}
          >
            {filteredCards.length} {isKo ? "장" : "cards"}
          </p>

          {/* Card grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 justify-items-center">
            {filteredCards.map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.02, 1), duration: 0.3 }}
                className="flex flex-col items-center gap-1"
              >
                <TarotCardComponent
                  card={card}
                  isFlipped={true}
                  size="sm"
                  onClick={() => setSelectedCard(card)}
                />
                <p
                  className="text-[9px] text-center leading-tight max-w-[5rem]"
                  style={{ color: "rgba(232, 224, 212, 0.5)" }}
                >
                  {isKo ? card.nameKo : card.name}
                </p>
              </motion.div>
            ))}
          </div>

          {filteredCards.length === 0 && (
            <div className="text-center py-20">
              <p className="text-4xl mb-4">🔍</p>
              <p style={{ color: "rgba(232, 224, 212, 0.5)" }}>
                {isKo ? "검색 결과가 없습니다" : "No cards found"}
              </p>
            </div>
          )}
        </div>

        {/* Card Detail Modal */}
        {selectedCard && (
          <CardDetail
            card={selectedCard}
            isOpen={true}
            onClose={() => setSelectedCard(null)}
          />
        )}
      </main>
    </>
  );
}
