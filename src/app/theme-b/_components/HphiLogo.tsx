"use client";

import Image from "next/image";

const HphiLogo = () => {
  return (
    <div
      className="flex cursor-pointer flex-row items-center justify-between gap-4 text-xl text-neutral"
      onClick={() => {
        document.getElementById("root")?.scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      <Image
        src="/hphi-logo.png"
        alt="HPHI 專業心理治療(香港)中心 Logo"
        width={45 * 1.7}
        height={32 * 1.7}
      />
      <div>專業心理治療(香港)中心</div>
    </div>
  );
};

export default HphiLogo;
