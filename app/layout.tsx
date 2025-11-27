import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClientLayout } from "../components/ClientLayout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gr8Builds - Premium Software Development Agency",
  description: "Build faster. Ship smarter. Premium software development agency specializing in payment systems, learning platforms, and digital experiences.",
  keywords: ["software development", "web development", "payment escrow", "teaching platform", "project management"],
  authors: [{ name: "Gr8Builds" }],
  openGraph: {
    title: "Gr8Builds - Premium Software Development Agency",
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
      <ClientLayout geistSans={geistSans.variable} geistMono={geistMono.variable}>
        {children}
      </ClientLayout>
    </html>
  );
}
