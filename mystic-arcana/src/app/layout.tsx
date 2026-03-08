import type { Metadata } from "next";
import {
  Cinzel_Decorative,
  Cormorant_Garamond,
  Raleway,
  Noto_Serif_KR,
} from "next/font/google";
import "./globals.css";
import MysticBackground from "@/components/MysticBackground";
import Navigation from "@/components/Navigation";
import PWAInstaller from "@/components/PWAInstaller";
import UpdateChecker from "@/components/UpdateChecker";

const cinzel = Cinzel_Decorative({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const notoSerifKR = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MYSTIC ARCANA - AI Tarot Reading",
  description:
    "Discover your destiny with MYSTIC ARCANA. AI-powered tarot readings that combine ancient wisdom with modern insight. Explore your past, present, and future through the mystical art of tarot.",
  openGraph: {
    title: "MYSTIC ARCANA - AI Tarot Reading",
    description:
      "AI-powered tarot readings combining ancient wisdom with modern insight. 78 cards, 8 spreads, deep personalized interpretations.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MYSTIC ARCANA - AI Tarot Reading",
    description:
      "AI-powered tarot readings combining ancient wisdom with modern insight.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icons/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0a0a1a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="MYSTIC ARCANA" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      </head>
      <body
        className={`${cinzel.variable} ${cormorant.variable} ${raleway.variable} ${notoSerifKR.variable} antialiased`}
      >
        <MysticBackground />
        <Navigation />
        <UpdateChecker />
        <main className="relative z-10 pt-16">{children}</main>
        <PWAInstaller />
      </body>
    </html>
  );
}
