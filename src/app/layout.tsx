import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ifrah Ashraf — Full Stack & AI Engineer",
  description: "Full Stack Developer, AI Agent Builder, and First Principles Thinker. Building systems that solve real problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/ai_1.png" />
      </head>
      <body style={{ backgroundColor: '#05050a', color: '#e2e8f0' }}>
        {children}
      </body>
    </html>
  );
}
