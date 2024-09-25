import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import HphiLogo from "@/components/HphiLogo";
import SignUp from "../_components/SignUp";

const Header = () => {
  return (
    <header
      id="header"
      className="sticky top-0 z-50 w-full bg-white/90 py-4 shadow-lg"
    >
      <MaxWidthWrapper className="flex flex-row items-center justify-between py-0">
        <HphiLogo />
        <SignUp className="hidden sm:flex" />
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;
