import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import { cn } from "@/lib/utils";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "專業心理治療(香港)中心",
  description:
    "專業心理治療(香港)中心 HPHI 是一所為普羅市民提供專業心理輔導服務的機構，並提供一系列的催眠師課程，包括 NLP、NGH、PBH 等國際認可的心理治療、催眠課程，向學員和案主解說催眠術入門知識。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
