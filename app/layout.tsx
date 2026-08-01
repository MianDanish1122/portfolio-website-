import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Danish | AI Engineer Portfolio",

  description:
    "Muhammad Danish is an AI Engineer specializing in Machine Learning, Deep Learning, Generative AI, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), AI Agents, and FastAPI.",

  keywords: [
    "Muhammad Danish",
    "AI Engineer",
    "Machine Learning Engineer",
    "Generative AI",
    "Deep Learning",
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

  metadataBase: new URL("https://your-portfolio.vercel.app"),

  openGraph: {
    title: "Muhammad Danish | AI Engineer",
    description:
      "AI Engineer specializing in Machine Learning, Deep Learning, LLMs, RAG, AI Agents, and FastAPI.",
    url: "https://your-portfolio.vercel.app",
    siteName: "Muhammad Danish Portfolio",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Danish Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Muhammad Danish | AI Engineer",

    description:
      "AI Engineer Portfolio",

    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}