"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import MysticBackground from "@/components/MysticBackground";
import Navigation from "@/components/Navigation";
import CategorySelector from "@/components/CategorySelector";
import SpreadSelector from "@/components/SpreadSelector";
import QuestionInput from "@/components/QuestionInput";
import CardDeck from "@/components/CardDeck";
import CardReveal from "@/components/CardReveal";
import LoadingOracle from "@/components/LoadingOracle";
import ReadingResult from "@/components/ReadingResult";
import useReadingStore from "@/store/useReadingStore";
import { TarotEngine } from "@/lib/tarotEngine";
import type {
  ReadingCategory,
  Spread,
  DrawnCard,
  ReadingResult as ReadingResultType,
  JournalEntry,
} from "@/types/tarot";

const stepOrder = [
  "category",
  "spread",
  "question",
  "shuffle",
  "select",
  "reveal",
  "reading",
  "result",
] as const;

type Step = (typeof stepOrder)[number];

export default function ReadingPage() {
  const {
    step,
    setStep,
    selectedCategory,
    setSelectedCategory,
    selectedSpread,
    setSelectedSpread,
    question,
    setQuestion,
    drawnCards,
    setDrawnCards,
    readingResult,
    setReadingResult,
    isLoading,
    setIsLoading,
    language,
    resetReading,
  } = useReadingStore();

  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const isKo = language === "ko";

  const currentStepIndex = stepOrder.indexOf(step as Step);

  const goBack = () => {
    if (currentStepIndex > 0) {
      const prevStep = stepOrder[currentStepIndex - 1];
      setStep(prevStep);
    }
  };

  const handleCategorySelect = useCallback(
    (category: ReadingCategory) => {
      setSelectedCategory(category);
      setTimeout(() => setStep("spread"), 300);
    },
    [setSelectedCategory, setStep],
  );

  const handleSpreadSelect = useCallback(
    (spread: Spread) => {
      setSelectedSpread(spread);
      setTimeout(() => setStep("question"), 300);
    },
    [setSelectedSpread, setStep],
  );

  const handleQuestionSubmit = useCallback(
    (q: string) => {
      setQuestion(q);
      setStep("shuffle");
    },
    [setQuestion, setStep],
  );

  const handleQuestionSkip = useCallback(() => {
    setQuestion("");
    setStep("shuffle");
  }, [setQuestion, setStep]);

  const handleCardsSelected = useCallback(
    (indices: number[]) => {
      if (!selectedSpread) return;
      const cards = TarotEngine.drawCards(selectedSpread.cardCount);
      setDrawnCards(cards);
      setStep("reveal");
    },
    [selectedSpread, setDrawnCards, setStep],
  );

  const handleRevealComplete = useCallback(async () => {
    if (!selectedSpread || !selectedCategory) return;
    setStep("reading");
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/reading", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cards: drawnCards,
          spread: selectedSpread,
          question,
          category: selectedCategory.id,
          language,
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = (await response.json()) as ReadingResultType;
      setReadingResult(data);
      setStep("result");
    } catch (err) {
      console.error("Reading API error:", err);
      setError(
        isKo
          ? "리딩 중 오류가 발생했습니다. 다시 시도해주세요."
          : "An error occurred during reading. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  }, [
    selectedSpread,
    selectedCategory,
    drawnCards,
    question,
    language,
    isKo,
    setStep,
    setIsLoading,
    setReadingResult,
  ]);

  const handleRetry = () => {
    setError(null);
    handleRevealComplete();
  };

  const handleSaveToJournal = useCallback(() => {
    if (!readingResult || !selectedSpread || !selectedCategory) return;

    const entry: JournalEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      spread: selectedSpread,
      cards: drawnCards,
      question,
      category: isKo ? selectedCategory.nameKo : selectedCategory.name,
      reading: readingResult,
      isFavorite: false,
    };

    const existing = JSON.parse(
      localStorage.getItem("mystic-journal") || "[]",
    ) as JournalEntry[];
    existing.unshift(entry);
    localStorage.setItem("mystic-journal", JSON.stringify(existing));
    setSaved(true);
  }, [
    readingResult,
    selectedSpread,
    selectedCategory,
    drawnCards,
    question,
    isKo,
  ]);

  const handleNewReading = () => {
    resetReading();
    setSaved(false);
    setError(null);
  };

  const progressSteps = [
    { key: "category", label: isKo ? "주제" : "Topic" },
    { key: "spread", label: isKo ? "스프레드" : "Spread" },
    { key: "question", label: isKo ? "질문" : "Question" },
    { key: "shuffle", label: isKo ? "셔플" : "Shuffle" },
    { key: "reveal", label: isKo ? "공개" : "Reveal" },
    { key: "result", label: isKo ? "결과" : "Result" },
  ];

  const getProgressIndex = () => {
    const map: Record<string, number> = {
      category: 0,
      spread: 1,
      question: 2,
      shuffle: 3,
      select: 3,
      reveal: 4,
      reading: 5,
      result: 5,
    };
    return map[step] ?? 0;
  };

  return (
    <>
      <MysticBackground />
      <Navigation />

      <main className="relative z-10 min-h-screen pt-20 pb-12 px-4">
        {/* Progress indicator */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex items-center justify-between gap-1">
            {progressSteps.map((ps, i) => {
              const active = getProgressIndex() >= i;
              return (
                <div key={ps.key} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full h-1 rounded-full mb-1"
                    style={{
                      backgroundColor: active
                        ? "#d4a574"
                        : "rgba(212, 165, 116, 0.15)",
                      transition: "background-color 0.3s",
                    }}
                  />
                  <span
                    className="text-[10px]"
                    style={{
                      color: active ? "#d4a574" : "rgba(232, 224, 212, 0.3)",
                    }}
                  >
                    {ps.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Back button */}
        {currentStepIndex > 0 && step !== "reading" && step !== "result" && (
          <div className="max-w-4xl mx-auto mb-4">
            <button
              onClick={goBack}
              className="flex items-center gap-1 text-sm transition-colors cursor-pointer"
              style={{ color: "rgba(232, 224, 212, 0.5)" }}
            >
              <ChevronLeft size={16} />
              {isKo ? "뒤로" : "Back"}
            </button>
          </div>
        )}

        {/* Step content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {step === "category" && (
              <CategorySelector onSelect={handleCategorySelect} />
            )}

            {step === "spread" && (
              <SpreadSelector onSelect={handleSpreadSelect} />
            )}

            {step === "question" && selectedCategory && (
              <QuestionInput
                category={selectedCategory}
                onSubmit={handleQuestionSubmit}
                onSkip={handleQuestionSkip}
              />
            )}

            {(step === "shuffle" || step === "select") && selectedSpread && (
              <CardDeck
                cardCount={selectedSpread.cardCount}
                onCardsSelected={handleCardsSelected}
              />
            )}

            {step === "reveal" && selectedSpread && drawnCards.length > 0 && (
              <CardReveal
                drawnCards={drawnCards}
                spread={selectedSpread}
                onComplete={handleRevealComplete}
              />
            )}

            {step === "reading" && !error && <LoadingOracle />}

            {step === "reading" && error && (
              <div className="flex flex-col items-center justify-center py-20 gap-6">
                <div
                  className="text-center p-6 rounded-xl max-w-md"
                  style={{
                    backgroundColor: "rgba(239, 68, 68, 0.1)",
                    border: "1px solid rgba(239, 68, 68, 0.3)",
                  }}
                >
                  <p className="text-4xl mb-4">😔</p>
                  <p className="text-sm mb-4" style={{ color: "#ef4444" }}>
                    {error}
                  </p>
                  <button
                    onClick={handleRetry}
                    className="px-6 py-2 rounded-xl text-sm font-semibold cursor-pointer"
                    style={{
                      background: "linear-gradient(135deg, #d4a574, #b8864e)",
                      color: "#0a0a1a",
                    }}
                  >
                    {isKo ? "다시 시도" : "Retry"}
                  </button>
                </div>
              </div>
            )}

            {step === "result" &&
              readingResult &&
              selectedSpread &&
              drawnCards.length > 0 && (
                <ReadingResult
                  reading={readingResult}
                  cards={drawnCards}
                  spread={selectedSpread}
                  onSave={handleSaveToJournal}
                  onNewReading={handleNewReading}
                />
              )}
          </motion.div>
        </AnimatePresence>

        {/* Saved confirmation */}
        <AnimatePresence>
          {saved && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 rounded-xl z-50"
              style={{
                backgroundColor: "rgba(34, 197, 94, 0.2)",
                border: "1px solid rgba(34, 197, 94, 0.4)",
                color: "#4ade80",
              }}
            >
              {isKo ? "저널에 저장되었습니다!" : "Saved to journal!"}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
