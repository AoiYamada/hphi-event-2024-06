import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

const HypnosisIntroVideo = () => {
  return (
    <section id="hypnosis_intro_video" className="block w-full">
      <MaxWidthWrapper className="flex flex-col items-center justify-center gap-12">
        <div className="flex flex-col items-center justify-center gap-12">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/nudgfiJsefg?si=6pkJ_0_rycc_HbVo"
            title="3招練習自我催眠"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="h-[168px] w-[300px] max-w-full sm:h-[315px] sm:w-[560px] lg:h-[405px] lg:w-[720px]"
          ></iframe>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HypnosisIntroVideo;
