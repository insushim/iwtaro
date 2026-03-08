"use client";

import { motion } from "framer-motion";
import useReadingStore from "@/store/useReadingStore";

const floatingSymbols = [
  { symbol: "✦", delay: 0, x: -60, y: -40 },
  { symbol: "☽", delay: 0.3, x: 50, y: -50 },
  { symbol: "✧", delay: 0.6, x: -50, y: 30 },
  { symbol: "⚝", delay: 0.9, x: 60, y: 20 },
  { symbol: "◈", delay: 1.2, x: -30, y: -60 },
  { symbol: "❋", delay: 1.5, x: 40, y: 50 },
  { symbol: "⟡", delay: 1.8, x: -70, y: 0 },
  { symbol: "✺", delay: 2.1, x: 70, y: -10 },
];

export default function LoadingOracle() {
  const { language } = useReadingStore();

  return (
    <div className="flex flex-col items-center justify-center py-20 gap-8">
      {/* Crystal ball container */}
      <div className="relative" style={{ width: "160px", height: "160px" }}>
        {/* Floating symbols */}
        {floatingSymbols.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-lg"
            style={{
              left: "50%",
              top: "50%",
              color: index % 2 === 0 ? "#d4a574" : "#8b5cf6",
            }}
            animate={{
              x: [item.x * 0.8, item.x * 1.2, item.x * 0.8],
              y: [item.y * 0.8, item.y * 1.2, item.y * 0.8],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {item.symbol}
          </motion.div>
        ))}

        {/* Outer glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Crystal ball */}
        <motion.div
          className="absolute rounded-full flex items-center justify-center"
          style={{
            top: "20px",
            left: "20px",
            right: "20px",
            bottom: "20px",
            background:
              "radial-gradient(circle at 35% 35%, rgba(167, 139, 250, 0.4), rgba(139, 92, 246, 0.2), rgba(30, 27, 75, 0.8))",
            border: "2px solid rgba(139, 92, 246, 0.4)",
            boxShadow:
              "0 0 40px rgba(139, 92, 246, 0.3), inset 0 0 30px rgba(139, 92, 246, 0.15)",
          }}
          animate={{
            boxShadow: [
              "0 0 40px rgba(139, 92, 246, 0.3), inset 0 0 30px rgba(139, 92, 246, 0.15)",
              "0 0 60px rgba(139, 92, 246, 0.5), inset 0 0 40px rgba(139, 92, 246, 0.25)",
              "0 0 40px rgba(139, 92, 246, 0.3), inset 0 0 30px rgba(139, 92, 246, 0.15)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Inner highlight */}
          <div
            className="absolute rounded-full"
            style={{
              width: "30%",
              height: "30%",
              top: "20%",
              left: "25%",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.2), transparent)",
            }}
          />

          {/* Center eye/symbol */}
          <motion.span
            className="text-3xl"
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🔮
          </motion.span>
        </motion.div>

        {/* Base/pedestal */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: "60%",
            height: "12px",
            background:
              "linear-gradient(to bottom, rgba(212, 165, 116, 0.3), rgba(212, 165, 116, 0.1))",
            borderRadius: "0 0 50% 50%",
          }}
        />
      </div>

      {/* Loading text */}
      <div className="text-center">
        <motion.p
          className="text-base"
          style={{
            color: "#e8e0d4",
            fontFamily: '"Cinzel", serif',
          }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {language === "ko"
            ? "오라클이 카드를 읽고 있습니다..."
            : "The Oracle is reading your cards..."}
        </motion.p>

        {/* Animated dots */}
        <div className="flex justify-center gap-2 mt-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="rounded-full"
              style={{
                width: "6px",
                height: "6px",
                backgroundColor: "#d4a574",
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.2,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
