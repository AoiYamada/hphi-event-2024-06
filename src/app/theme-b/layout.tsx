import { Toaster } from "@/components/ui/toaster";
import { FC, PropsWithChildren } from "react";
import Header from "./_layout/Header";
import Footer from "./_layout/Footer";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="theme-b">
      <Header />
      {children}
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;
