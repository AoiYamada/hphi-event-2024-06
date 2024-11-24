import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import KnowMore from "../../KnowMore";
import SignUp from "../../SignUp";
import Banner from "./Banner";

const Hero = () => {
  return (
    <section id="hero" className="w-full">
      <MaxWidthWrapper className="flex flex-col gap-8">
        <blockquote className="relative w-full text-primary before:absolute before:-left-3 before:-top-5 before:font-serif before:text-7xl before:italic before:text-primary/30 before:content-['“'] after:absolute after:-right-3 after:-top-5 after:font-serif after:text-7xl after:italic after:text-primary/30 after:content-['”']">
          <p className="text-justify text-2xl font-bold leading-relaxed lg:text-4xl lg:leading-relaxed">
            當有十人在房間裡，九個不信任你，但只要有一人開始相信你，你的世界便從此而改變。
          </p>
        </blockquote>
        <div className="relative flex flex-row items-center justify-center gap-8">
          <div className="z-10 flex w-full flex-col items-start justify-center gap-12 bg-white/90 bg-[url('/hypnotherapy-session.png')] bg-right py-16 text-neutral bg-blend-lighten sm:w-1/2 sm:bg-none sm:py-0 sm:bg-blend-normal md:gap-20">
            <Banner />
            <div className="flex flex-row gap-4">
              <KnowMore />
              <SignUp />
            </div>
          </div>
          <Image
            src="/hypnotherapy-session.png"
            className="hero-mask-to-r pointer-events-none right-0 top-0 hidden h-80 w-auto select-none opacity-20 sm:static sm:block sm:h-auto sm:w-1/2 sm:rounded-lg sm:opacity-80"
            alt="hypnotherapy session"
            width={512}
            height={512}
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
