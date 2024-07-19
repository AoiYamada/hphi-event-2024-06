"use client";

import Image from "next/image";

const HphiLogo = () => {
  return (
    <div
      className="flex cursor-pointer flex-row items-center justify-between gap-4 text-neutral"
      onClick={() => {
        document.getElementById("root")?.scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      <Image
        src="/hphi-logo.png"
        alt="專業心理治療及催眠應用（香港）有限公司（HPHI） Logo"
        width={45 * 1.7}
        height={32 * 1.7}
      />
      <div className="flex flex-col">
        <div>
          專業心理治療及催眠應用
          <span className="text-nowrap">(香港)有限公司</span>
        </div>
        <div className="text-nowrap text-sm">HPHI EDUCATION LIMITED</div>
      </div>
    </div>
  );
};

export default HphiLogo;
