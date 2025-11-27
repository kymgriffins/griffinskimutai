import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GR8Builds - Premium Software Development Agency",
  description: "Build faster. Ship smarter. Premium software development agency specializing in payment systems, learning platforms, and digital experiences.",
  keywords: ["software development", "web development", "payment escrow", "teaching platform", "project management"],
  authors: [{ name: "GR8Builds" }],
  openGraph: {
    title: "GR8Builds - Premium Software Development Agency",
    description: "Build faster. Ship smarter. Premium software development agency specializing in payment systems, learning platforms, and digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
