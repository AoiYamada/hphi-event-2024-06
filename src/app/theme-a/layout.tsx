import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Toaster } from "@/components/ui/toaster";
import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;
