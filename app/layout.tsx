import type { Metadata } from "next";
import { Geist_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://web-ops-portfolio.vercel.app"),
  title: {
    default: "Web実装・運用改善ポートフォリオ",
    template: "%s",
  },
  description:
    "Webサイト運用、LP / ECサイト制作・改修、業務自動化の経験をもとに、現場課題を使いやすい形へ落とし込むポートフォリオです。",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Web実装・運用改善ポートフォリオ",
    description:
      "Web実装、運用改善、業務自動化を通じて現場課題を整理するポートフォリオ。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web実装・運用改善ポートフォリオ",
    description:
      "Web実装、運用改善、業務自動化を通じて現場課題を整理するポートフォリオ。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJp.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
