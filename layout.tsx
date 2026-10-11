import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taklif Pro — Электронные пригласительные",
  description:
    "Создавайте красивые интерактивные пригласительные на той, свадьбу и семейные торжества за несколько минут",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  );
}
