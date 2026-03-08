"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Trash2, ChevronDown, ChevronUp } from "lucide-react";
import type { JournalEntry as JournalEntryType } from "@/types/tarot";
import useReadingStore from "@/store/useReadingStore";

interface JournalEntryProps {
  entry: JournalEntryType;
  onDelete: (id: string) => void;
  onToggleFavorite: (id: string) => void;
}

export default function JournalEntryComponent({
  entry,
  onDelete,
  onToggleFavorite,
}: JournalEntryProps) {
  const language = useReadingStore((s) => s.language);
  const isKo = language === "ko";
  const [expanded, setExpanded] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const formattedDate = new Date(entry.date).toLocaleDateString(
    isKo ? "ko-KR" : "en-US",
    { year: "numeric", month: "long", day: "numeric" },
  );

  const openingSummary =
    entry.reading.opening.length > 200
      ? entry.reading.opening.slice(0, 200) + "..."
      : entry.reading.opening;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="rounded-xl overflow-hidden"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.03)",
        border: `1px solid ${entry.isFavorite ? "rgba(212, 165, 116, 0.3)" : "rgba(212, 165, 116, 0.1)"}`,
      }}
    >
      <div className="p-4 md:p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span
                className="text-xs"
                style={{ color: "rgba(232, 224, 212, 0.5)" }}
              >
                {formattedDate}
              </span>
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  color: "#8b5cf6",
                  border: "1px solid rgba(139, 92, 246, 0.2)",
                }}
              >
                {isKo ? entry.spread.nameKo : entry.spread.name}
              </span>
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: "rgba(212, 165, 116, 0.1)",
                  color: "#d4a574",
                  border: "1px solid rgba(212, 165, 116, 0.2)",
                }}
              >
                {entry.category}
              </span>
            </div>

            {entry.question && (
              <p
                className="text-sm font-medium mb-2"
                style={{ color: "#e8e0d4" }}
              >
                &ldquo;{entry.question}&rdquo;
              </p>
            )}
          </div>

          <div className="flex items-center gap-1 flex-shrink-0">
            <button
              onClick={() => onToggleFavorite(entry.id)}
              className="p-1.5 rounded-lg transition-colors hover:bg-white/5"
              aria-label="Toggle favorite"
            >
              <Star
                size={18}
                fill={entry.isFavorite ? "#d4a574" : "none"}
                style={{
                  color: entry.isFavorite
                    ? "#d4a574"
                    : "rgba(232, 224, 212, 0.3)",
                }}
              />
            </button>
            {showDeleteConfirm ? (
              <div className="flex items-center gap-1">
                <button
                  onClick={() => onDelete(entry.id)}
                  className="px-2 py-1 rounded text-xs font-medium"
                  style={{
                    backgroundColor: "rgba(239, 68, 68, 0.2)",
                    color: "#ef4444",
                  }}
                >
                  {isKo ? "삭제" : "Delete"}
                </button>
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="px-2 py-1 rounded text-xs"
                  style={{ color: "rgba(232, 224, 212, 0.5)" }}
                >
                  {isKo ? "취소" : "Cancel"}
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowDeleteConfirm(true)}
                className="p-1.5 rounded-lg transition-colors hover:bg-white/5"
                aria-label="Delete entry"
              >
                <Trash2
                  size={16}
                  style={{ color: "rgba(232, 224, 212, 0.3)" }}
                />
              </button>
            )}
          </div>
        </div>

        {/* Mini cards */}
        <div className="flex gap-1.5 mb-3 flex-wrap">
          {entry.cards.map((drawnCard, i) => (
            <div
              key={i}
              className="w-8 h-12 rounded flex flex-col items-center justify-center text-xs"
              style={{
                backgroundColor: "rgba(212, 165, 116, 0.1)",
                border: "1px solid rgba(212, 165, 116, 0.2)",
              }}
            >
              <span
                style={{
                  transform: drawnCard.isReversed
                    ? "rotate(180deg)"
                    : undefined,
                  display: "inline-block",
                  fontSize: "12px",
                }}
              >
                {drawnCard.card.cardBackEmoji}
              </span>
            </div>
          ))}
        </div>

        {/* Reading summary */}
        <p
          className="text-sm leading-relaxed mb-2"
          style={{ color: "rgba(232, 224, 212, 0.6)" }}
        >
          {expanded ? entry.reading.opening : openingSummary}
        </p>

        {/* Expand/collapse */}
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-3 space-y-3"
          >
            {entry.reading.cardInterpretations.map((interp, i) => (
              <div
                key={i}
                className="p-3 rounded-lg"
                style={{
                  backgroundColor: "rgba(10, 10, 26, 0.5)",
                  border: "1px solid rgba(212, 165, 116, 0.1)",
                }}
              >
                <p
                  className="text-xs font-semibold mb-1"
                  style={{ color: "#d4a574" }}
                >
                  {interp.cardName}
                  {interp.isReversed && (
                    <span className="ml-1" style={{ color: "#8b5cf6" }}>
                      ({isKo ? "역" : "R"})
                    </span>
                  )}
                </p>
                <p
                  className="text-xs"
                  style={{ color: "rgba(232, 224, 212, 0.7)" }}
                >
                  {interp.interpretation}
                </p>
              </div>
            ))}

            <div
              className="p-3 rounded-lg"
              style={{
                backgroundColor: "rgba(139, 92, 246, 0.05)",
                border: "1px solid rgba(139, 92, 246, 0.15)",
              }}
            >
              <p
                className="text-xs font-semibold mb-1"
                style={{ color: "#8b5cf6" }}
              >
                {isKo ? "종합 메시지" : "Overall Message"}
              </p>
              <p
                className="text-xs"
                style={{ color: "rgba(232, 224, 212, 0.7)" }}
              >
                {entry.reading.overallMessage}
              </p>
            </div>

            <div className="text-center">
              <p className="text-sm italic" style={{ color: "#d4a574" }}>
                &ldquo;{entry.reading.affirmation}&rdquo;
              </p>
            </div>
          </motion.div>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 mt-2 text-xs transition-colors"
          style={{ color: "rgba(139, 92, 246, 0.7)" }}
        >
          {expanded ? (
            <>
              {isKo ? "접기" : "Collapse"} <ChevronUp size={14} />
            </>
          ) : (
            <>
              {isKo ? "전체 보기" : "View Full"} <ChevronDown size={14} />
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}
