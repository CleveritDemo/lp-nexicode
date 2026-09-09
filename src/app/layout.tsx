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

const siteUrl = "https://cleveritdemo.github.io/lp-nexicode";
const title = "Nexi code | Terminal inteligente para equipos de desarrollo";
const description =
  "Nexi code reúne terminales, archivos, Git, Jira, GitHub Actions y agentes de programación en un solo workspace para macOS.";

export const metadata: Metadata = {
  metadataBase: new URL("https://cleveritdemo.github.io"),
  title,
  description,
  applicationName: "Nexi code",
  authors: [{ name: "Cleverit" }],
  creator: "Cleverit",
  publisher: "Cleverit",
  keywords: [
    "Nexi code",
    "terminal macOS",
    "AI agents",
    "developer tools",
    "Git workflow",
    "Jira Cloud",
    "GitHub Actions",
    "agentic AI",
  ],
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: assetPath("/brand/favicon.svg"),
    shortcut: assetPath("/brand/favicon.svg"),
    apple: assetPath("/brand/favicon.svg"),
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    siteName: "Nexi code",
    title,
    description,
    images: [
      {
        url: assetPath("/org-image.png"),
        width: 1200,
        height: 630,
        alt: "Nexi code, terminal inteligente para equipos de desarrollo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [assetPath("/org-image.png")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
