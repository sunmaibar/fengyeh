import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import heroImg from "../public/hero.jpg"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "豐業環保科技有限公司",
  description: "豐業環保科技有限公司｜專業柴油發電機黑煙處理與煙霧淨化設備．服務桃園、中壢及全台地區。提供柴油發電機黑煙處理器安裝、維修保養、空汙改善方案。聯絡人羅文業 0922-213-695，為企業打造高效環保節能解決方案。",
  openGraph: {
    title: '豐業環保科技有限公司',
    description: "豐業環保科技有限公司｜專業柴油發電機黑煙處理與煙霧淨化設備．服務桃園、中壢及全台地區。提供柴油發電機黑煙處理器安裝、維修保養、空汙改善方案。聯絡人羅文業 0922-213-695，為企業打造高效環保節能解決方案。",
    url: 'https://fengyeh.netlify.app',
    siteName: '豐業環保科技有限公司',
    images: [
      {
        url: 'https://fengyeh.netlify.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '豐業環保科技網站預覽圖',
      },
    ],
    locale: 'zh_TW',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
