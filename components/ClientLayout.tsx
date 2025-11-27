'use client';

import { Footer } from "./Footer";

interface ClientLayoutProps {
  children: React.ReactNode;
  geistSans: string;
  geistMono: string;
}

export function ClientLayout({ children, geistSans, geistMono }: ClientLayoutProps) {
  return (
    <body
      suppressHydrationWarning={true}
      className={`${geistSans} ${geistMono} antialiased bg-black text-white min-h-screen`}
    >
      {children}
      <Footer />
    </body>
  );
}
