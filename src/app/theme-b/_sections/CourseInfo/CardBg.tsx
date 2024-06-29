import Image from "next/image";
import React from "react";

const CardBg = () => {
  return (
    <div>
      <Image
        src="/hphi-logo.png"
        className="not-sr-only pointer-events-none absolute bottom-16 left-12 w-60 opacity-10 blur-sm md:bottom-12 md:w-80"
        alt="hphi logo background"
        width={45}
        height={32}
      />
      <Image
        src="/hphi-logo.png"
        className="not-sr-only pointer-events-none absolute right-12 top-4 w-60 opacity-10 blur-sm md:top-8 md:w-80"
        alt="hphi logo background"
        width={45}
        height={32}
      />
    </div>
  );
};

export default CardBg;
