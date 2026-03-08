"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Sparkles, BookOpen, Layers, PenLine } from "lucide-react";
import MysticBackground from "@/components/MysticBackground";
import Navigation from "@/components/Navigation";
import DailyCard from "@/components/DailyCard";
import useReadingStore from "@/store/useReadingStore";

function FadeInSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  const language = useReadingStore((s) => s.language);
  const isKo = language === "ko";

  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: isKo ? "AI 해석" : "AI Interpretation",
      desc: isKo
        ? "인공지능이 카드 조합을 분석하여 깊이 있는 맞춤형 해석을 제공합니다."
        : "AI analyzes card combinations to provide deep, personalized interpretations.",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: isKo ? "78장 카드 DB" : "78 Card Database",
      desc: isKo
        ? "메이저 & 마이너 아르카나 전체 78장의 상세한 의미와 상징을 탐구하세요."
        : "Explore detailed meanings and symbolism of all 78 Major & Minor Arcana cards.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: isKo ? "8가지 스프레드" : "8 Spread Layouts",
      desc: isKo
        ? "원카드부터 켈틱 크로스까지, 질문에 맞는 다양한 스프레드를 선택하세요."
        : "From single card to Celtic Cross, choose the perfect spread for your question.",
    },
    {
      icon: <PenLine className="w-8 h-8" />,
      title: isKo ? "저널 기능" : "Journal Feature",
      desc: isKo
        ? "리딩 결과를 저장하고, 과거 기록을 돌아보며 패턴을 발견하세요."
        : "Save readings, review past records, and discover patterns in your journey.",
    },
  ];

  return (
    <>
      <MysticBackground />
      <Navigation />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-16">
          {/* Floating tarot cards */}
          <div className="relative w-64 h-40 mb-8">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute rounded-xl"
                style={{
                  width: 80,
                  height: 120,
                  left: `${i * 70 + 10}px`,
                  top: i === 1 ? 0 : 20,
                  background:
                    "linear-gradient(135deg, #1e1b4b, #312e81, #1e1b4b)",
                  border: "2px solid #d4a574",
                  boxShadow:
                    "0 0 15px rgba(212, 165, 116, 0.2), inset 0 0 30px rgba(139, 92, 246, 0.1)",
                  zIndex: i === 1 ? 2 : 1,
                  transform: `rotate(${(i - 1) * 8}deg)`,
                }}
                animate={{
                  y: [0, -12, 0],
                  rotate: [(i - 1) * 8, (i - 1) * 8 + 2, (i - 1) * 8],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              >
                <div
                  className="absolute inset-2 rounded border opacity-30"
                  style={{ borderColor: "#d4a574" }}
                />
                <div
                  className="w-full h-full flex items-center justify-center text-2xl"
                  style={{ color: "#d4a574" }}
                >
                  ✦
                </div>
              </motion.div>
            ))}
          </div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-center tracking-[0.15em] mb-4"
            style={{
              color: "#d4a574",
              fontFamily: '"Cinzel", serif',
              textShadow:
                "0 0 40px rgba(212, 165, 116, 0.3), 0 0 80px rgba(212, 165, 116, 0.1)",
            }}
          >
            MYSTIC ARCANA
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-lg md:text-xl text-center mb-2"
            style={{ color: "rgba(232, 224, 212, 0.7)" }}
          >
            Discover Your Destiny
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-base md:text-lg text-center mb-10"
            style={{ color: "rgba(139, 92, 246, 0.8)" }}
          >
            {isKo ? "당신의 운명을 발견하세요" : "Discover Your Destiny"}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Link
              href="/reading"
              className="btn-gold-glow inline-block text-lg px-10 py-4 rounded-xl font-bold"
              style={{
                background:
                  "linear-gradient(135deg, #d4a574, #c49560, #d4a574)",
                color: "#0a0a1a",
              }}
            >
              {isKo ? "무료 리딩 시작하기" : "Start Free Reading"}
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ color: "rgba(212, 165, 116, 0.4)" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <FadeInSection>
            <h2
              className="text-3xl md:text-4xl font-bold text-center mb-4"
              style={{ color: "#d4a574", fontFamily: '"Cinzel", serif' }}
            >
              {isKo ? "특별한 기능" : "Features"}
            </h2>
            <p
              className="text-center mb-12 max-w-2xl mx-auto"
              style={{ color: "rgba(232, 224, 212, 0.6)" }}
            >
              {isKo
                ? "타로의 지혜를 현대적인 기술과 결합한 프리미엄 경험"
                : "A premium experience combining tarot wisdom with modern technology"}
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div
                  className="glass rounded-xl p-6 h-full transition-all duration-300 hover:border-[#d4a574]/40"
                  style={{
                    background: "rgba(26, 26, 62, 0.4)",
                    border: "1px solid rgba(212, 165, 116, 0.15)",
                  }}
                >
                  <div className="mb-4" style={{ color: "#8b5cf6" }}>
                    {feature.icon}
                  </div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color: "#d4a574" }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(232, 224, 212, 0.6)" }}
                  >
                    {feature.desc}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </section>

        {/* Daily Card Widget */}
        <section className="py-20 px-4">
          <FadeInSection>
            <h2
              className="text-3xl md:text-4xl font-bold text-center mb-4"
              style={{ color: "#d4a574", fontFamily: '"Cinzel", serif' }}
            >
              {isKo ? "오늘의 카드" : "Today's Card"}
            </h2>
            <p
              className="text-center mb-12 max-w-xl mx-auto"
              style={{ color: "rgba(232, 224, 212, 0.6)" }}
            >
              {isKo
                ? "매일 하나의 카드가 당신에게 메시지를 전합니다"
                : "Every day, one card delivers a message to you"}
            </p>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <DailyCard />
          </FadeInSection>
        </section>

        {/* Footer */}
        <footer
          className="py-12 px-4 border-t"
          style={{ borderColor: "rgba(212, 165, 116, 0.1)" }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <p
              className="text-lg font-bold tracking-wider mb-4"
              style={{ color: "#d4a574", fontFamily: '"Cinzel", serif' }}
            >
              MYSTIC ARCANA
            </p>
            <p
              className="text-xs leading-relaxed max-w-lg mx-auto"
              style={{ color: "rgba(232, 224, 212, 0.4)" }}
            >
              {isKo
                ? "타로 리딩은 오락 및 자기 성찰 목적으로만 제공됩니다. 전문적인 의료, 법률, 재정 조언을 대체하지 않습니다. 중요한 결정을 내리기 전에 항상 전문가와 상담하세요."
                : "Tarot readings are provided for entertainment and self-reflection purposes only. They do not replace professional medical, legal, or financial advice. Always consult a professional before making important decisions."}
            </p>
            <p
              className="text-xs mt-4"
              style={{ color: "rgba(232, 224, 212, 0.3)" }}
            >
              &copy; {new Date().getFullYear()} Mystic Arcana. All rights
              reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
