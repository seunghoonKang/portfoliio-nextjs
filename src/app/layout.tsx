"use client";
import "./globals.css";
import Nav from "../components/Nav";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ThemeProvider enableSystem={true} attribute="class">
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
