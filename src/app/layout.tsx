"use client";
import "./globals.css";
import Nav from "@/components/Nav";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head />
      <body id="home">
        <ThemeProvider enableSystem={true} attribute="class">
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
