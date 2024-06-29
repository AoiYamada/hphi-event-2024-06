import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const CourseArrangement = () => {
  return (
    <MaxWidthWrapper className="relative flex flex-col items-center justify-center gap-8">
      <h1 className="flex flex-col items-center justify-center text-3xl font-semibold sm:flex-row sm:text-4xl lg:text-5xl">
        開課時間
      </h1>
    </MaxWidthWrapper>
  );
};

export default CourseArrangement;
