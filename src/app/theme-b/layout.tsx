import Footer from "@/components/layout/Footer";

import { Toaster } from "@/components/ui/toaster";
import { FC, PropsWithChildren } from "react";
import Header from "./_layout/Header";

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
