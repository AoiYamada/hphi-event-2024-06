import { Toaster } from "@/components/ui/toaster";
import { FC, PropsWithChildren } from "react";
import Header from "./_layout/Header";
import Footer from "./_layout/Footer";
import SignUp from "./_components/SignUp";

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
