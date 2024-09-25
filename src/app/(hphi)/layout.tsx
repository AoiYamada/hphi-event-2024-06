import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "2024 年秋季催眠進修課程招生中 | 專業心理治療及催眠應用（香港）有限公司 HPHI EDUCATION LIMITED",
  description:
    "專業心理治療及催眠應用（香港）有限公司 （HPHI） 是一所為普羅市民提供專業心理輔導服務的機構，並提供一系列的催眠師課程，包括 NLP、NGH、PBH 等國際認可的心理治療、催眠課程，向學員和案主解說催眠術入門知識。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="root" className={cn(inter.className)}>
        {children}
      </body>
      <GoogleAnalytics gaId="AW-16658005021" />
    </html>
  );
}
