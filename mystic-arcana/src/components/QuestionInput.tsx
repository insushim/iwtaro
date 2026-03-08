"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import useReadingStore from "@/store/useReadingStore";
import type { ReadingCategory } from "@/types/tarot";

interface QuestionInputProps {
  category: ReadingCategory;
  onSubmit: (question: string) => void;
  onSkip: () => void;
}

const MAX_CHARS = 200;

export default function QuestionInput({
  category,
  onSubmit,
  onSkip,
}: QuestionInputProps) {
  const language = useReadingStore((s) => s.language);
  const [question, setQuestion] = useState("");

  const sampleQuestions =
    language === "ko" ? category.sampleQuestionsKo : category.sampleQuestions;

  const handleSubmit = () => {
    if (question.trim()) {
      onSubmit(question.trim());
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl md:text-3xl font-bold text-center mb-2"
        style={{ color: "#d4a574" }}
      >
        {language === "ko" ? "질문을 입력하세요" : "Ask Your Question"}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center text-sm mb-6"
        style={{ color: "rgba(232, 224, 212, 0.6)" }}
      >
        {language === "ko"
          ? `${category.nameKo} 카테고리에 대해 궁금한 점을 물어보세요`
          : `Ask about ${category.name}`}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative mb-4"
      >
        <textarea
          value={question}
          onChange={(e) => {
            if (e.target.value.length <= MAX_CHARS) {
              setQuestion(e.target.value);
            }
          }}
          placeholder={
            language === "ko"
              ? "마음속 질문을 적어주세요..."
              : "Write your question here..."
          }
          rows={4}
          className="w-full rounded-xl p-4 text-base resize-none outline-none transition-all duration-300 focus:ring-2"
          style={{
            backgroundColor: "rgba(10, 10, 26, 0.8)",
            color: "#e8e0d4",
            border: "1px solid rgba(212, 165, 116, 0.3)",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "#d4a574";
            e.currentTarget.style.boxShadow =
              "0 0 15px rgba(212, 165, 116, 0.2)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "rgba(212, 165, 116, 0.3)";
            e.currentTarget.style.boxShadow = "none";
          }}
        />
        <div
          className="absolute bottom-3 right-3 text-xs"
          style={{
            color:
              question.length >= MAX_CHARS
                ? "#ef4444"
                : "rgba(232, 224, 212, 0.4)",
          }}
        >
          {question.length}/{MAX_CHARS}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-6"
      >
        <p
          className="text-xs mb-2 font-medium"
          style={{ color: "rgba(139, 92, 246, 0.8)" }}
        >
          {language === "ko" ? "예시 질문:" : "Sample questions:"}
        </p>
        <div className="flex flex-col gap-2">
          {sampleQuestions.map((sq, i) => (
            <button
              key={i}
              onClick={() => setQuestion(sq.slice(0, MAX_CHARS))}
              className="text-left text-sm px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer"
              style={{
                backgroundColor: "rgba(139, 92, 246, 0.05)",
                color: "rgba(232, 224, 212, 0.7)",
                border: "1px solid rgba(139, 92, 246, 0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(139, 92, 246, 0.1)";
                e.currentTarget.style.borderColor = "rgba(139, 92, 246, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(139, 92, 246, 0.05)";
                e.currentTarget.style.borderColor = "rgba(139, 92, 246, 0.15)";
              }}
            >
              {sq}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex gap-3 justify-center"
      >
        <button
          onClick={onSkip}
          className="px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer"
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
          {language === "ko" ? "건너뛰기" : "Skip"}
        </button>
        <button
          onClick={handleSubmit}
          disabled={!question.trim()}
          className="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          style={{
            background: question.trim()
              ? "linear-gradient(135deg, #d4a574, #b8864e)"
              : "rgba(212, 165, 116, 0.3)",
            color: "#0a0a1a",
            boxShadow: question.trim()
              ? "0 0 20px rgba(212, 165, 116, 0.3)"
              : "none",
          }}
        >
          {language === "ko" ? "질문하기" : "Ask Question"}
        </button>
      </motion.div>
    </div>
  );
}
