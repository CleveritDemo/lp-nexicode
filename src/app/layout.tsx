import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { assetPath } from "@/lib/asset-path";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexi code | Terminal inteligente para equipos de desarrollo",
  description:
    "Nexi code reúne terminales, archivos, Git, Jira, GitHub Actions y agentes de programación en un solo workspace para macOS.",
  icons: {
    icon: assetPath("/brand/favicon.svg"),
    shortcut: assetPath("/brand/favicon.svg"),
    apple: assetPath("/brand/favicon.svg"),
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
