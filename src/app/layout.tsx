import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Ifrah-Ashraf",
  
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
        <title>
        Ifrah Ashraf
        </title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
