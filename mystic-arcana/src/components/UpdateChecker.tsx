"use client";

import { useState, useEffect } from "react";

const APP_VERSION = "1.1.0";
const GITHUB_REPO = "insushim/iwtaro";

interface GitHubRelease {
  tag_name: string;
  html_url: string;
  assets: Array<{
    name: string;
    browser_download_url: string;
  }>;
}

function compareVersions(current: string, latest: string): number {
  const normalize = (v: string) => v.replace(/^v/, "");
  const a = normalize(current).split(".").map(Number);
  const b = normalize(latest).split(".").map(Number);
  const len = Math.max(a.length, b.length);

  for (let i = 0; i < len; i++) {
    const av = a[i] || 0;
    const bv = b[i] || 0;
    if (av < bv) return -1;
    if (av > bv) return 1;
  }
  return 0;
}

export default function UpdateChecker() {
  const [updateInfo, setUpdateInfo] = useState<{
    version: string;
    url: string;
    apkUrl?: string;
  } | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check once per session
    if (sessionStorage.getItem("update-checked")) return;
    sessionStorage.setItem("update-checked", "1");

    const checkUpdate = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`,
          {
            headers: { Accept: "application/vnd.github.v3+json" },
          },
        );

        if (!res.ok) return;

        const release: GitHubRelease = await res.json();
        const latestVersion = release.tag_name;

        if (compareVersions(APP_VERSION, latestVersion) < 0) {
          const apkAsset = release.assets.find((a) => a.name.endsWith(".apk"));

          setUpdateInfo({
            version: latestVersion.replace(/^v/, ""),
            url: release.html_url,
            apkUrl: apkAsset?.browser_download_url,
          });
        }
      } catch {
        // Silently fail - update check is non-critical
      }
    };

    checkUpdate();
  }, []);

  const handleUpdate = () => {
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as unknown as { standalone?: boolean }).standalone === true;

    if (isStandalone && updateInfo?.apkUrl) {
      // For standalone/APK: link to APK download
      window.open(updateInfo.apkUrl, "_blank");
    } else {
      // For web: reload to get latest version
      window.location.reload();
    }
  };

  const handleDismiss = () => {
    setDismissed(true);
  };

  if (!updateInfo || dismissed) return null;

  return (
    <div className="fixed left-0 right-0 top-0 z-50">
      <div
        className="flex items-center justify-center gap-3 px-4 py-2.5 text-sm"
        style={{
          background:
            "linear-gradient(90deg, #1a1a3e 0%, #2a1a4e 50%, #1a1a3e 100%)",
          borderBottom: "1px solid rgba(201, 168, 76, 0.3)",
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="shrink-0"
        >
          <circle cx="8" cy="8" r="7" stroke="#c9a84c" strokeWidth="1.5" />
          <path
            d="M8 4v5"
            stroke="#c9a84c"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="8" cy="11.5" r="0.75" fill="#c9a84c" />
        </svg>
        <span className="text-gray-300">
          새 버전이 있습니다!{" "}
          <span style={{ color: "#c9a84c" }}>v{updateInfo.version}</span>
        </span>
        <button
          onClick={handleUpdate}
          className="rounded-lg px-3 py-1 text-xs font-medium text-black transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#c9a84c" }}
        >
          업데이트
        </button>
        <button
          onClick={handleDismiss}
          className="ml-1 text-gray-500 transition-colors hover:text-gray-300"
          aria-label="닫기"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
