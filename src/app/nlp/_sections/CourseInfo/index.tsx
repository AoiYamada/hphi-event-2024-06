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
          <div className="flex w-full flex-col items-center gap-4">
            <table className="border-collapse border border-solid border-neutral text-left">
              <tbody>
                <tr>
                  <th className="border border-solid border-neutral p-2 align-top text-primary">
                    <p>資歷名稱（結業資歷）</p>
                  </th>
                  <td className="max-w-lg border border-solid border-neutral p-2 align-top">
                    <p>
                      Certificate in Neuro Linguistic Programming for
                      Interpersonal Communication and Business Management Skills
                    </p>
                    <p>身心語言程式學人際交往及商業管理技巧證書</p>
                  </td>
                </tr>
                <tr>
                  <th className="border border-solid border-neutral p-2 align-top text-primary">
                    主要學習及培訓範疇
                  </th>
                  <td className="max-w-lg border border-solid border-neutral p-2 align-top">
                    人際溝通、商業及管理
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex max-w-2xl flex-row justify-center">
              <Image
                src="/qf-level.png"
                width={1850}
                height={2140}
                alt="qf level"
                className="mx-auto rounded-lg"
              />
            </div>
          </div>
          <div className="relative w-full">
            <div className="flex flex-col items-start justify-start gap-16 lg:flex-row">
              <Intro className="lg:w-3/5" />
              <div className="flex w-full flex-col gap-12 md:flex-row lg:w-2/5 lg:shrink-0 lg:flex-col">
                <Aim className="w-full md:w-1/2 lg:w-full" />
                <Syllabus className="w-full md:w-1/2 md:shrink-0 lg:w-full" />
              </div>
            </div>
            <CardBg />
          </div>
          <div className="relative w-full">
            <div className="flex w-full flex-col items-start justify-start gap-16 md:flex-row lg:gap-16">
              <div className="lg:w-3/5">
                <Image
                  src="/teaching-hypnotherapy.webp"
                  width={416}
                  height={360}
                  alt="teaching-hypnotherapy"
                  className="w-full rounded-lg opacity-90"
                />
              </div>
              <Arrangement className="w-full md:w-1/2 md:shrink-0 lg:w-2/5" />
            </div>
            <CardBg />
          </div>
          <div className="relative w-full">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-primary lg:text-2xl">
                課程已包括以下證書資格
              </h3>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <p>
                    1. 英國IBNLP學會Specific in Interpersonal Communication and
                    Business Management Skills資格(一年會費為港幣2500元)
                  </p>
                  <p>2. HPHI文憑QF Level 3認證證書 (價值$800)</p>
                  <p>
                    3. HKNLP NFNLP Basic Practitioner
                    認證證書(價值$800，證書由心理學家簽發)
                  </p>
                </div>
                <div className="text-sm">
                  <p>
                    * 其他同類課程，證書需逐張繳費，此課程所有證書已計算在內。
                  </p>
                  <p>
                    * 學員畢業後，亦可銜接到ABH,NGH,PBH,IMDHA,University of
                    Clinical Health
                    Science等多個不同學會的認證，此外亦可進修至NLP Master
                    Practitioner及NLP導師。
                  </p>
                  <p>
                    *
                    此外，合資格同學亦可另外申請免試申請美國NFNLP學會資格，費用需另付，費用為港幣$1600，視乎匯率而訂。
                  </p>
                </div>
              </div>
            </div>
            <CardBg />
          </div>
          <div className="relative w-full">
            <div className="flex w-full flex-col items-center gap-12">
              <div className="flex flex-col items-center gap-8">
                <div className="flex w-full flex-col justify-center gap-12 md:flex-row">
                  <Image
                    src="/lessons/graduated-students.webp"
                    width={774}
                    height={578}
                    alt="graduated students"
                    className="w-full rounded-lg opacity-90 md:w-2/5"
                  />
                  <Image
                    src="/lessons/counselling-room.webp"
                    width={770}
                    height={578}
                    alt="counselling room"
                    className="w-full rounded-lg opacity-90 md:w-2/5"
                  />
                </div>
                <p>
                  為保障學員私隱，本中心所有的相片皆不讓學員露面，而所刊登的照片亦會先諮詢學員才刊登。
                </p>
              </div>
              <div className="flex w-full flex-col items-center gap-8">
                <Image
                  src="/lessons/classroom.webp"
                  width={750}
                  height={564}
                  alt="classroom"
                  className="w-full rounded-lg opacity-90 md:w-2/5"
                />
                <p>專業心理治療(香港)中心在香港、九龍亦設有教學培訓場地。</p>
              </div>
            </div>
            <CardBg />
          </div>
          <div className="relative w-full">
            <div className="flex flex-col gap-8">
              <p>* 課程亦送贈由導師親自撰寫，超過600頁的書籍及筆記。</p>
              <div className="flex flex-col gap-12 sm:flex-row">
                <Image
                  src="/books/nlp-practice.png"
                  width={722}
                  height={1070}
                  alt="NLP Practice"
                  className="w-full rounded-lg opacity-90 sm:w-2/5"
                />
                <Image
                  src="/books/nlp-big-deal.png"
                  width={722}
                  height={1070}
                  alt="NLP Big Deal"
                  className="w-full rounded-lg opacity-90 sm:w-2/5"
                />
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
