import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import AnimatedSection from "../AnimatedSection";

const Cooperators = () => {
  return (
    <AnimatedSection className="w-full" id="cooperators">
      <MaxWidthWrapper className="flex flex-col items-center justify-center gap-12">
        <h1 className="flex flex-col items-center justify-center text-3xl font-semibold sm:flex-row sm:text-4xl lg:text-5xl">
          合作夥伴
        </h1>
        <div className="w-full">
          <Image
            src="/cooperators.webp"
            alt="合作夥伴"
            width={773}
            height={626}
            className="mx-auto"
          />
        </div>
      </MaxWidthWrapper>
    </AnimatedSection>
  );
};

export default Cooperators;
