import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ifrah Ashraf",
  description: "Ifrah Ashraf — software engineer learning systems deeply and building across the stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='16' fill='%2305050a'/><text y='.9em' font-size='55' x='50%' dominant-baseline='middle' text-anchor='middle' fill='%23d8c39b' font-family='Arial' font-weight='bold'>IA</text></svg>" />
      </head>
      <body style={{ backgroundColor: "#05050a", color: "#f1eadb" }}>
        {children}
      </body>
    </html>
  );
}
