import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "../_components/MaxWidthWrapper";
import SignUp from "../_components/SignUp";

const Header = () => {
  return (
    <header className="w-full py-4">
      <MaxWidthWrapper className="flex flex-row justify-between">
        <div className="flex flex-row items-center justify-between gap-4">
          <Image
            src="/hphi-logo.png"
            alt="專業心理治療及催眠應用（香港）有限公司（HPHI） Logo"
            width={45}
            height={32}
          />
          <div>
            專業心理治療及催眠應用（香港）有限公司 HPHI EDUCATION LIMITED
          </div>
        </div>
        <SignUp />
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;