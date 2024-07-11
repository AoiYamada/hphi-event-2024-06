import { Toaster } from "@/components/ui/toaster";
import { FC, PropsWithChildren } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import SignUp from "../../components/SignUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "2024 年暑期身心語言程式學課程 | 專業心理治療(香港)中心",
  description:
    "專業心理治療(香港)中心 HPHI 是一所為普羅市民提供專業心理輔導服務的機構，並提供一系列的催眠師課程，包括 NLP、NGH、PBH 等國際認可的心理治療、催眠課程，向學員和案主解說催眠術入門知識。",
};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="theme-b relative">
      <Header />
      {children}
      <Footer />
      <div className="sticky bottom-0 h-0 sm:hidden">
        <SignUp className="absolute bottom-4 right-4" />
      </div>
      <Toaster />
    </div>
  );
};

export default Layout;
