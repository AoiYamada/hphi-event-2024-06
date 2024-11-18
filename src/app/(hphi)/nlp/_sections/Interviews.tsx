import AnimatedSection from "@/components/AnimatedSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

const Interviews = () => {
  return (
    <AnimatedSection id="interviews" className="block w-full">
      <MaxWidthWrapper className="flex flex-col items-center justify-center gap-12">
        <h1 className="flex flex-col items-center justify-center text-3xl font-semibold sm:text-4xl lg:text-5xl">
          <span>其他訪問：</span>
          <span>神經語言程式學 (NLP) 有甚麼用？專業資格？</span>
        </h1>
        <div className="flex flex-col items-center justify-center gap-12">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/NptrRI4vrUQ?si=pUb9VT6gOrvVu32w"
            title="神經語言程式學 (NLP) 有甚麼用？"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="h-[168px] w-[300px] max-w-full sm:h-[315px] sm:w-[560px] lg:h-[405px] lg:w-[720px]"
          ></iframe>
        </div>
        <br />
        <h1 className="flex flex-col items-center justify-center text-3xl font-semibold sm:text-4xl lg:text-5xl">
          <span>催眠、讀心術與神經語言程式學有什麼關係？</span>
        </h1>
        <div className="flex flex-col items-center justify-center gap-12">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3zL6GEIbETU?si=UaHNuQgaBzDQvMdo"
            title="催眠、讀心術與神經語言程式學有什麼關係？"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="h-[168px] w-[300px] max-w-full sm:h-[315px] sm:w-[560px] lg:h-[405px] lg:w-[720px]"
          ></iframe>
        </div>
      </MaxWidthWrapper>
    </AnimatedSection>
  );
};

export default Interviews;
