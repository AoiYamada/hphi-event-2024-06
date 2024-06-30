import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import Intro from "./Intro";
import Aim from "./Aim";
import Syllabus from "./Syllabus";
import CardBg from "./CardBg";
import Image from "next/image";
import { CircleDollarSign, Clock, Languages, UsersRound } from "lucide-react";

const CourseInfo = () => {
  return (
    <section id="course-info" className="w-full">
      <MaxWidthWrapper className="flex flex-col items-center justify-center text-neutral">
        <div className="bg-basic/50 flex flex-col items-center justify-center gap-12 rounded-lg border border-neutral/10 px-4 pb-16 pt-12 shadow-md md:px-12">
          <h1 className="flex flex-col items-center justify-center text-3xl font-semibold sm:flex-row sm:text-4xl lg:text-5xl">
            <span>應用催眠心理學</span>
            <span>短期進修課程</span>
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
              <div className="flex w-full flex-col gap-2 md:w-1/2 md:shrink-0 lg:w-auto lg:shrink">
                <h2 className="text-xl font-bold text-primary lg:text-2xl">
                  課程安排
                </h2>
                <div className="flex flex-row items-start gap-4">
                  <Clock size={36} />
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold">120 小時課程</span>
                    <span>實體課：54 小時（必修）</span>
                    <span>網　課：66 小時（選修）</span>
                  </div>
                </div>
                <div className="flex flex-row items-start gap-4">
                  <UsersRound size={36} />
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold">小組教學</span>
                    <span>10 人以內</span>
                    <span>互動教學</span>
                  </div>
                </div>
                <div className="flex flex-row items-start gap-4">
                  <Languages size={36} />
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold">教學語言</span>
                    <span>粵語授課</span>
                    <span>英語輔助</span>
                  </div>
                </div>
                <div className="flex flex-row items-start gap-4">
                  <CircleDollarSign size={36} />
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold">學費</span>
                    <span>HKD 15,800/人</span>
                    <span className="font-semibold text-primary">
                      現有十周年 88 折優惠（HKD 13,800/人）
                    </span>
                    <span className="font-semibold text-primary">
                      名額有限，先報先得
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-sm">
                  * 如同學未能依時完成課程，本中心亦設一年免費補課及補考服務
                </p>
              </div>
            </div>
            <CardBg />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default CourseInfo;
