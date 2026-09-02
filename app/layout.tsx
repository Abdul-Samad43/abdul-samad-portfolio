import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Abdul Samad — AI Engineer | LLMs, RAG & AI Agents",
  description:
    "Abdul Samad is an AI Engineer building practical LLM applications, RAG systems, AI agents, and intelligent automation solutions.",
  keywords: [
    "AI Engineer",
    "LLM",
    "RAG",
    "LangChain",
    "AI Agents",
    "Python",
    "Abdul Samad",
  ],
  authors: [{ name: "Abdul Samad" }],
  openGraph: {
    title: "Abdul Samad — AI Engineer",
    description:
      "Building practical LLM applications, RAG systems, and AI agents.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Samad — AI Engineer",
    description:
      "Building practical LLM applications, RAG systems, and AI agents.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}