import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Muhammad Danish | AI/ML Engineer",

  description:
    "Muhammad Danish is an AI/ML Engineer building production AI applications with Generative AI, Machine Learning, LLMs, RAG, and AI Agents using Python and FastAPI.",

  keywords: [
    "Muhammad Danish",
    "AI/ML Engineer",
    "Machine Learning Engineer",
    "Generative AI",
    "LLM",
    "Large Language Models",
    "RAG",
    "AI Agents",
    "FastAPI",
    "Python",
    "Portfolio",
  ],

  authors: [
    {
      name: "Muhammad Danish",
    },
  ],

  creator: "Muhammad Danish",

  metadataBase: new URL("https://danishai.vercel.app"),

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: "Muhammad Danish | AI/ML Engineer",
    description:
      "AI/ML Engineer specializing in Generative AI, Machine Learning, LLMs, RAG, AI Agents, and FastAPI.",
    url: "https://danishai.vercel.app",
    siteName: "Muhammad Danish Portfolio",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 1200,
        alt: "Muhammad Danish Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Muhammad Danish | AI/ML Engineer",

    description: "AI/ML Engineer Portfolio",

    images: ["/images/profile.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#05070d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
