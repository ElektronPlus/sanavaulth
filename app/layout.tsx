import { Inter } from "@next/font/google";
import "styles/globals.css";
import { ReactNode } from "react";

const inter = Inter();

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html className={inter.className}>
      <head />
      <body className="bg-zinc-900 text-white">{children}</body>
    </html>
  );
}
