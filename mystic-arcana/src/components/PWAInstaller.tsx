"use client";

import { useState, useEffect, useCallback } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function PWAInstaller() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  const [showIOSModal, setShowIOSModal] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Register service worker
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => {
          console.log("Service Worker registered:", reg.scope);
        })
        .catch((err) => {
          console.warn("Service Worker registration failed:", err);
        });
    }

    // Check if already installed (standalone mode)
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as unknown as { standalone?: boolean }).standalone === true;
    setIsStandalone(standalone);

    if (standalone) return;

    // Check if user dismissed the install prompt
    const dismissed = localStorage.getItem("pwa-install-dismissed");
    if (dismissed) {
      const dismissedAt = parseInt(dismissed, 10);
      const daysSinceDismissed =
        (Date.now() - dismissedAt) / (1000 * 60 * 60 * 24);
      // Show again after 7 days
      if (daysSinceDismissed < 7) return;
    }

    // Listen for beforeinstallprompt (Android Chrome)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallBanner(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Detect iOS Safari
    const isIOS =
      /iPhone|iPad|iPod/.test(navigator.userAgent) &&
      !(window as unknown as { MSStream?: unknown }).MSStream;
    const isSafari =
      /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);

    if (isIOS && isSafari) {
      // Show iOS install instructions after a short delay
      const timer = setTimeout(() => {
        setShowIOSModal(true);
      }, 3000);
      return () => {
        window.removeEventListener(
          "beforeinstallprompt",
          handleBeforeInstallPrompt,
        );
        clearTimeout(timer);
      };
    }

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
    };
  }, []);

  const handleInstall = useCallback(async () => {
    if (!deferredPrompt) return;

    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      console.log("PWA installed");
    }

    setDeferredPrompt(null);
    setShowInstallBanner(false);
  }, [deferredPrompt]);

  const handleDismiss = useCallback(() => {
    localStorage.setItem("pwa-install-dismissed", Date.now().toString());
    setShowInstallBanner(false);
    setShowIOSModal(false);
  }, []);

  if (isStandalone) return null;

  return (
    <>
      {/* Android/Desktop Install Banner */}
      {showInstallBanner && (
        <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-md animate-slide-up">
          <div
            className="rounded-2xl border border-amber-500/20 p-4 shadow-2xl backdrop-blur-xl"
            style={{
              background: "linear-gradient(135deg, #1a1a3e 0%, #0a0a1a 100%)",
            }}
          >
            <div className="flex items-start gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/10">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <polygon
                    points="14,2 17,11 26,11 19,17 21,26 14,21 7,26 9,17 2,11 11,11"
                    fill="#c9a84c"
                    opacity="0.9"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3
                  className="text-sm font-semibold"
                  style={{ color: "#c9a84c" }}
                >
                  MYSTIC ARCANA 설치
                </h3>
                <p className="mt-0.5 text-xs text-gray-400">
                  홈 화면에 추가하여 더 빠르게 타로 리딩을 시작하세요
                </p>
                <div className="mt-3 flex gap-2">
                  <button
                    onClick={handleInstall}
                    className="rounded-lg px-4 py-1.5 text-xs font-medium text-black transition-colors"
                    style={{ backgroundColor: "#c9a84c" }}
                  >
                    설치하기
                  </button>
                  <button
                    onClick={handleDismiss}
                    className="rounded-lg px-3 py-1.5 text-xs text-gray-400 transition-colors hover:text-gray-300"
                  >
                    나중에
                  </button>
                </div>
              </div>
              <button
                onClick={handleDismiss}
                className="shrink-0 text-gray-500 hover:text-gray-300"
                aria-label="닫기"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* iOS Install Instructions Modal */}
      {showIOSModal && (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={handleDismiss}
          />
          <div
            className="relative w-full max-w-md animate-slide-up rounded-2xl border border-amber-500/20 p-6 shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #1a1a3e 0%, #0a0a1a 100%)",
            }}
          >
            <button
              onClick={handleDismiss}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-300"
              aria-label="닫기"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5.646 5.646a.5.5 0 0 1 .708 0L10 9.293l3.646-3.647a.5.5 0 0 1 .708.708L10.707 10l3.647 3.646a.5.5 0 0 1-.708.708L10 10.707l-3.646 3.647a.5.5 0 0 1-.708-.708L9.293 10 5.646 6.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <polygon
                    points="16,2 19.5,12.5 30,12.5 21.5,19 24.5,30 16,23.5 7.5,30 10.5,19 2,12.5 12.5,12.5"
                    fill="#c9a84c"
                    opacity="0.9"
                  />
                </svg>
              </div>
              <h3
                className="text-lg font-semibold"
                style={{ color: "#c9a84c", fontFamily: "var(--font-cinzel)" }}
              >
                MYSTIC ARCANA 설치
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                홈 화면에 추가하면 앱처럼 사용할 수 있습니다
              </p>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8" />
                    <polyline points="16,6 12,2 8,6" />
                    <line x1="12" y1="2" x2="12" y2="15" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-200">
                    하단의{" "}
                    <span className="font-medium text-blue-400">공유</span>{" "}
                    버튼을 탭하세요
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-200">
                    <span className="font-medium text-blue-400">
                      홈 화면에 추가
                    </span>
                    를 선택하세요
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={handleDismiss}
              className="mt-6 w-full rounded-xl py-2.5 text-sm text-gray-400 transition-colors hover:text-gray-300"
            >
              나중에 하기
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.4s ease-out;
        }
      `}</style>
    </>
  );
}
