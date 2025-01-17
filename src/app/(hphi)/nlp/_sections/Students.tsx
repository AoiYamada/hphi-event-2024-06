import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Sharing from "../_components/Sharing";
import AnimatedSection from "@/components/AnimatedSection";

const Students = () => {
  return (
    <AnimatedSection id="students" className="block w-full lg:hidden">
      <MaxWidthWrapper className="flex flex-col items-center justify-center gap-12">
        <h1 className="flex flex-col items-center justify-center text-3xl font-semibold sm:flex-row sm:text-4xl lg:text-5xl">
          學員分享
        </h1>
        <Sharing className="w-sm max-w-full md:max-w-md" />
      </MaxWidthWrapper>
    </AnimatedSection>
  );
};

export default Students;
