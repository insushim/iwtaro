"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, Star } from "lucide-react";
import MysticBackground from "@/components/MysticBackground";
import Navigation from "@/components/Navigation";
import JournalEntryComponent from "@/components/JournalEntry";
import useReadingStore from "@/store/useReadingStore";
import type { JournalEntry } from "@/types/tarot";

type FilterMode = "all" | "favorites";

export default function JournalPage() {
  const language = useReadingStore((s) => s.language);
  const isKo = language === "ko";
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [filterMode, setFilterMode] = useState<FilterMode>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [spreadFilter, setSpreadFilter] = useState<string>("all");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("mystic-journal");
    if (stored) {
      try {
        setEntries(JSON.parse(stored));
      } catch {
        setEntries([]);
      }
    }
    setLoaded(true);
  }, []);

  const saveEntries = (updated: JournalEntry[]) => {
    setEntries(updated);
    localStorage.setItem("mystic-journal", JSON.stringify(updated));
  };

  const handleDelete = (id: string) => {
    saveEntries(entries.filter((e) => e.id !== id));
  };

  const handleToggleFavorite = (id: string) => {
    saveEntries(
      entries.map((e) =>
        e.id === id ? { ...e, isFavorite: !e.isFavorite } : e,
      ),
    );
  };

  const uniqueCategories = useMemo(() => {
    const cats = new Set(entries.map((e) => e.category));
    return Array.from(cats);
  }, [entries]);

  const uniqueSpreads = useMemo(() => {
    const spreads = new Set(
      entries.map((e) => (isKo ? e.spread.nameKo : e.spread.name)),
    );
    return Array.from(spreads);
  }, [entries, isKo]);

  const filteredEntries = useMemo(() => {
    let result = entries;

    if (filterMode === "favorites") {
      result = result.filter((e) => e.isFavorite);
    }

    if (categoryFilter !== "all") {
      result = result.filter((e) => e.category === categoryFilter);
    }

    if (spreadFilter !== "all") {
      result = result.filter(
        (e) => (isKo ? e.spread.nameKo : e.spread.name) === spreadFilter,
      );
    }

    return result;
  }, [entries, filterMode, categoryFilter, spreadFilter, isKo]);

  // Card frequency stats
  const cardFrequency = useMemo(() => {
    const freq: Record<string, number> = {};
    entries.forEach((entry) => {
      entry.cards.forEach((dc) => {
        const name = isKo ? dc.card.nameKo : dc.card.name;
        freq[name] = (freq[name] || 0) + 1;
      });
    });
    return Object.entries(freq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);
  }, [entries, isKo]);

  const maxFreq = cardFrequency.length > 0 ? cardFrequency[0][1] : 1;

  if (!loaded) return null;

  return (
    <>
      <MysticBackground />
      <Navigation />

      <main className="relative z-10 min-h-screen pt-20 pb-12 px-4">
        <div className="max-w-3xl mx-auto">
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
              {isKo ? "리딩 저널" : "Reading Journal"}
            </h1>
            <p
              className="text-sm"
              style={{ color: "rgba(232, 224, 212, 0.6)" }}
            >
              {isKo
                ? `${entries.length}개의 기록`
                : `${entries.length} ${entries.length === 1 ? "entry" : "entries"}`}
            </p>
          </motion.div>

          {entries.length === 0 ? (
            /* Empty state */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <p className="text-5xl mb-6">📔</p>
              <p
                className="text-lg font-semibold mb-2"
                style={{ color: "#e8e0d4" }}
              >
                {isKo ? "아직 기록이 없습니다" : "No entries yet"}
              </p>
              <p
                className="text-sm mb-6"
                style={{ color: "rgba(232, 224, 212, 0.5)" }}
              >
                {isKo
                  ? "첫 번째 리딩을 시작하고 여기에 저장하세요"
                  : "Start your first reading and save it here"}
              </p>
              <Link
                href="/reading"
                className="inline-block px-6 py-3 rounded-xl text-sm font-semibold"
                style={{
                  background: "linear-gradient(135deg, #d4a574, #b8864e)",
                  color: "#0a0a1a",
                }}
              >
                {isKo ? "리딩 시작하기" : "Start Reading"}
              </Link>
            </motion.div>
          ) : (
            <>
              {/* Filters */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-6 space-y-3"
              >
                {/* Mode filter */}
                <div className="flex items-center gap-2 flex-wrap">
                  <Filter
                    size={16}
                    style={{ color: "rgba(232, 224, 212, 0.4)" }}
                  />
                  <button
                    onClick={() => setFilterMode("all")}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer"
                    style={{
                      backgroundColor:
                        filterMode === "all"
                          ? "rgba(212, 165, 116, 0.2)"
                          : "transparent",
                      border: `1px solid ${filterMode === "all" ? "rgba(212, 165, 116, 0.4)" : "rgba(212, 165, 116, 0.1)"}`,
                      color:
                        filterMode === "all"
                          ? "#d4a574"
                          : "rgba(232, 224, 212, 0.5)",
                    }}
                  >
                    {isKo ? "전체" : "All"}
                  </button>
                  <button
                    onClick={() => setFilterMode("favorites")}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer"
                    style={{
                      backgroundColor:
                        filterMode === "favorites"
                          ? "rgba(212, 165, 116, 0.2)"
                          : "transparent",
                      border: `1px solid ${filterMode === "favorites" ? "rgba(212, 165, 116, 0.4)" : "rgba(212, 165, 116, 0.1)"}`,
                      color:
                        filterMode === "favorites"
                          ? "#d4a574"
                          : "rgba(232, 224, 212, 0.5)",
                    }}
                  >
                    <Star size={12} />
                    {isKo ? "즐겨찾기" : "Favorites"}
                  </button>

                  {uniqueCategories.length > 1 && (
                    <select
                      value={categoryFilter}
                      onChange={(e) => setCategoryFilter(e.target.value)}
                      className="px-3 py-1.5 rounded-lg text-xs outline-none cursor-pointer"
                      style={{
                        backgroundColor: "rgba(10, 10, 26, 0.8)",
                        color: "rgba(232, 224, 212, 0.7)",
                        border: "1px solid rgba(212, 165, 116, 0.15)",
                      }}
                    >
                      <option value="all">
                        {isKo ? "모든 카테고리" : "All Categories"}
                      </option>
                      {uniqueCategories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  )}

                  {uniqueSpreads.length > 1 && (
                    <select
                      value={spreadFilter}
                      onChange={(e) => setSpreadFilter(e.target.value)}
                      className="px-3 py-1.5 rounded-lg text-xs outline-none cursor-pointer"
                      style={{
                        backgroundColor: "rgba(10, 10, 26, 0.8)",
                        color: "rgba(232, 224, 212, 0.7)",
                        border: "1px solid rgba(212, 165, 116, 0.15)",
                      }}
                    >
                      <option value="all">
                        {isKo ? "모든 스프레드" : "All Spreads"}
                      </option>
                      {uniqueSpreads.map((sp) => (
                        <option key={sp} value={sp}>
                          {sp}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              </motion.div>

              {/* Entries list */}
              <div className="space-y-4 mb-12">
                <AnimatePresence>
                  {filteredEntries.map((entry) => (
                    <JournalEntryComponent
                      key={entry.id}
                      entry={entry}
                      onDelete={handleDelete}
                      onToggleFavorite={handleToggleFavorite}
                    />
                  ))}
                </AnimatePresence>

                {filteredEntries.length === 0 && entries.length > 0 && (
                  <div className="text-center py-12">
                    <p
                      className="text-sm"
                      style={{ color: "rgba(232, 224, 212, 0.5)" }}
                    >
                      {isKo
                        ? "필터 조건에 맞는 기록이 없습니다"
                        : "No entries match the current filter"}
                    </p>
                  </div>
                )}
              </div>

              {/* Card frequency stats */}
              {cardFrequency.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="rounded-xl p-5"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(212, 165, 116, 0.15)",
                  }}
                >
                  <h3
                    className="text-lg font-semibold mb-4"
                    style={{ color: "#d4a574" }}
                  >
                    {isKo ? "자주 뽑힌 카드" : "Most Drawn Cards"}
                  </h3>
                  <div className="space-y-3">
                    {cardFrequency.map(([name, count], i) => (
                      <div key={name} className="flex items-center gap-3">
                        <span
                          className="text-xs w-4 text-right flex-shrink-0"
                          style={{ color: "rgba(232, 224, 212, 0.4)" }}
                        >
                          {i + 1}
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span
                              className="text-xs font-medium"
                              style={{ color: "#e8e0d4" }}
                            >
                              {name}
                            </span>
                            <span
                              className="text-xs"
                              style={{ color: "rgba(232, 224, 212, 0.5)" }}
                            >
                              {count}
                              {isKo ? "회" : "x"}
                            </span>
                          </div>
                          <div
                            className="h-2 rounded-full overflow-hidden"
                            style={{
                              backgroundColor: "rgba(212, 165, 116, 0.1)",
                            }}
                          >
                            <motion.div
                              className="h-full rounded-full"
                              style={{
                                background:
                                  "linear-gradient(90deg, #8b5cf6, #d4a574)",
                              }}
                              initial={{ width: 0 }}
                              animate={{
                                width: `${(count / maxFreq) * 100}%`,
                              }}
                              transition={{
                                delay: 0.5 + i * 0.05,
                                duration: 0.5,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </>
          )}
        </div>
      </main>
    </>
  );
}
