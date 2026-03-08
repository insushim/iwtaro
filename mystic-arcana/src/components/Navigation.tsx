"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import useReadingStore from "@/store/useReadingStore";

const navLinks = [
  { href: "/", labelEn: "Home", labelKo: "홈" },
  { href: "/reading", labelEn: "Reading", labelKo: "리딩" },
  { href: "/daily", labelEn: "Daily Card", labelKo: "오늘의 카드" },
  { href: "/learn", labelEn: "Learn", labelKo: "배우기" },
  { href: "/journal", labelEn: "Journal", labelKo: "저널" },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useReadingStore();

  const toggleLanguage = () => {
    setLanguage(language === "ko" ? "en" : "ko");
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: "rgba(10, 10, 26, 0.8)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(212, 165, 116, 0.15)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="/"
              className="font-cinzel-decorative text-xl tracking-widest"
              style={{
                color: "#d4a574",
                fontFamily: '"Cinzel Decorative", "Cinzel", serif',
                textShadow: "0 0 20px rgba(212, 165, 116, 0.3)",
              }}
            >
              MYSTIC ARCANA
            </a>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-white/5"
                  style={{ color: "#e8e0d4" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#d4a574";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#e8e0d4";
                  }}
                >
                  {language === "ko" ? link.labelKo : link.labelEn}
                </a>
              ))}

              {/* Language toggle */}
              <button
                onClick={toggleLanguage}
                className="ml-3 px-3 py-1.5 rounded-full text-sm transition-all duration-300 hover:scale-110"
                style={{
                  border: "1px solid rgba(212, 165, 116, 0.3)",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  color: "#e8e0d4",
                }}
                title={
                  language === "ko" ? "Switch to English" : "한국어로 전환"
                }
              >
                {language === "ko"
                  ? "\u{1F1FA}\u{1F1F8}"
                  : "\u{1F1F0}\u{1F1F7}"}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleLanguage}
                className="px-2 py-1.5 rounded-full text-sm"
                style={{
                  border: "1px solid rgba(212, 165, 116, 0.3)",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                }}
              >
                {language === "ko"
                  ? "\u{1F1FA}\u{1F1F8}"
                  : "\u{1F1F0}\u{1F1F7}"}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg transition-colors"
                style={{ color: "#d4a574" }}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile slide-in panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72"
              style={{
                backgroundColor: "rgba(10, 10, 26, 0.95)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderLeft: "1px solid rgba(212, 165, 116, 0.2)",
              }}
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg"
                  style={{ color: "#d4a574" }}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-1 px-4 pt-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-3 rounded-lg text-base transition-all duration-300 hover:bg-white/5"
                    style={{ color: "#e8e0d4" }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#d4a574";
                      e.currentTarget.style.backgroundColor =
                        "rgba(139, 92, 246, 0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#e8e0d4";
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    {language === "ko" ? link.labelKo : link.labelEn}
                  </motion.a>
                ))}
              </div>

              {/* Decorative bottom element */}
              <div
                className="absolute bottom-8 left-0 right-0 text-center text-xs tracking-[0.3em]"
                style={{
                  color: "rgba(212, 165, 116, 0.3)",
                  fontFamily: '"Cinzel Decorative", "Cinzel", serif',
                }}
              >
                MYSTIC ARCANA
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
