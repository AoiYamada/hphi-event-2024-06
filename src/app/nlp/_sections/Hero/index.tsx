import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Banner from "./Banner";
import KnowMore from "@/components/KnowMore";
import SignUp from "../../_components/SignUp";

const Hero = () => {
  return (
    <section id="hero" className="w-full">
      <MaxWidthWrapper className="relative flex flex-row items-center justify-center gap-8">
        <div className="z-10 flex w-full flex-col items-start justify-center gap-12 text-neutral sm:w-1/2 md:gap-20">
          <Banner />
          <div className="flex flex-row gap-4">
            <KnowMore />
            <SignUp />
          </div>
        </div>
        <Image
          src="/business-meeting-using-nlp.png"
          className="hero-mask-to-r pointer-events-none absolute right-0 top-0 h-80 w-auto select-none opacity-20 sm:static sm:h-auto sm:w-1/2 sm:rounded-lg sm:opacity-80"
          alt="business meeting using NLP"
          width={630}
          height={539}
        />
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
