import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import Intro from "./Intro";
import Aim from "./Aim";
import Syllabus from "./Syllabus";
import Image from "next/image";
import Arrangement from "./Arrangement";
import CardBg from "@/components/sections/CourseInfo/CardBg";

const CourseInfo = () => {
  return (
    <section id="course-info" className="w-full">
      <MaxWidthWrapper className="flex flex-col items-center justify-center text-neutral">
        <div className="flex flex-col items-center justify-center gap-12 rounded-lg border border-neutral/10 bg-basic/50 px-4 pb-16 pt-12 shadow-md md:px-12">
          <h1 className="flex flex-col items-center justify-center text-3xl font-semibold lg:flex-row">
            <span className="shrink-0">身心語言程式學</span>
            <span className="shrink-0">人際交往及商業管理</span>
            <span className="shrink-0">技巧證書 QF Level 3</span>
          </h1>
          <div className="relative w-full">
            <div className="flex flex-col items-start justify-start gap-16 lg:flex-row">
              <Intro className="lg:w-3/5" />
              <div className="flex w-full flex-col gap-12 md:flex-row lg:w-auto lg:flex-col">
                <Aim className="w-full md:w-1/2 lg:w-full" />
                <Syllabus className="w-full md:w-1/2 md:shrink-0 lg:w-full" />
              </div>
            </div>
            <CardBg />
          </div>
          <div className="relative w-full">
            <div className="flex w-full flex-col items-start justify-start gap-16 md:flex-row lg:gap-16">
              <div className="lg:w-3/5 lg:shrink-0">
                <Image
                  src="/teaching-hypnotherapy.webp"
                  width={416}
                  height={360}
                  alt="teaching-hypnotherapy"
                  className="w-full rounded-lg opacity-80"
                />
              </div>
              <Arrangement className="w-full md:w-1/2 md:shrink-0 lg:w-auto lg:shrink" />
            </div>
            <CardBg />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default CourseInfo;
