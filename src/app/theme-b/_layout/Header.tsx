import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SignUp from "../_components/SignUp";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 py-4 shadow-lg">
      <MaxWidthWrapper className="flex flex-row items-center justify-between">
        <div className="text-neutral flex flex-row items-center justify-between gap-4 text-xl">
          <Image
            src="/hphi-logo.png"
            alt="HPHI 專業心理治療(香港)中心 Logo"
            width={45 * 1.7}
            height={32 * 1.7}
          />
          <div>專業心理治療(香港)中心</div>
        </div>
        <SignUp className="hidden sm:flex" />
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;
