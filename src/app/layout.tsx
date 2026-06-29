import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ifrah Ashraf",
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
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%236366f1'/><text y='.9em' font-size='60' x='50%' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='system-ui' font-weight='bold'>IA</text></svg>" />
      </head>
      <body style={{ backgroundColor: '#05050a', color: '#e2e8f0' }}>
        {children}
      </body>
    </html>
  );
}
