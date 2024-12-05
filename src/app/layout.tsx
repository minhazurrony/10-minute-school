import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IELTS LIVE Batch in BD - Take Best IELTS Preparation [2025]",
  description:
    "Join the Best IELTS Live Batch now to learn the complete concepts of the IELTS exam all modules, question types, and solutions for difficult concepts.",
  keywords: ["IELTS LIVE Batch"],

  icons: {
    icon: "https://cdn.10minuteschool.com/image/icon-512x512_1702964557063.png", // Primary favicon
    shortcut:
      "https://cdn.10minuteschool.com/image/icon-512x512_1702964557063.png", // Shortcut icon for mobile browsers
    apple:
      "https://cdn.10minuteschool.com/image/icon-512x512_1702964557063.png", // Apple touch icon (default 180x180)
  },

  openGraph: {
    title: "IELTS LIVE Batch in BD - Take Best IELTS Preparation [2025]",
    description:
      "Join the Best IELTS Live Batch now to learn the complete concepts of the IELTS exam all modules, question types, and solutions for difficult concepts.",
    url: "https://10minuteschool.com",
    images: [
      {
        url: "https://cdn.10minuteschool.com/images/thumbnails/ielts-live-batch-8-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "IELTS Live Batch",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IELTS LIVE Batch in BD - Take Best IELTS Preparation [2025]",
    description:
      "Join the Best IELTS Live Batch now to learn the complete concepts of the IELTS exam all modules, question types, and solutions for difficult concepts.",
    images: [
      "https://cdn.10minuteschool.com/images/thumbnails/ielts-live-batch-8-thumbnail.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
