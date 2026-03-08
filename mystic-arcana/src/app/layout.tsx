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
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
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
