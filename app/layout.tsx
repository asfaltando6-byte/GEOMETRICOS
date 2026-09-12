import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kit Sólidos Geométricos | Veja, Monte e Fixe",
  description:
    "Kit pedagógico digital com cartazes, moldes 3D e atividades prontas para ensinar sólidos geométricos de forma visual e prática.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
