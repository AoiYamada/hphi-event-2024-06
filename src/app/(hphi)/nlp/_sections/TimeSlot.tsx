import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import { FC } from "react";
import SignUp from "../_components/SignUp";
// import KnowMoreCourseInfo from "@/components/KnowMoreCourseInfo";
import Closed from "@/components/Closed";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const slots: ClassCardProps[] = [
  {
    title: "NLP 假日班",
    time: ["星期日"],
    dates: [
      "3月23日 (10:00-19:00) 9 小時",
      "3月30日 (11:00-18:00) 7 小時",
      "4月6日 (11:00-18:00) 7 小時",
      "4月13日 (10:00-19:30) 9.5 小時",
    ],
    tutors: ["Dr. CW Leung (催眠博士、臨床心理學碩士、商業心理學家)"],
    closed: false,
  },
  {
    title: "NLP 假日班",
    time: ["星期日"],
    dates: [
      "2月16日 (10:00-19:00) 9 小時",
      "2月23日 (11:00-18:00) 7 小時",
      "3月2日 (11:00-18:00) 7 小時",
      "3月9日 (10:00-19:30) 9.5 小時",
    ],
    tutors: ["Dr. CW Leung (催眠博士、臨床心理學碩士、商業心理學家)"],
    closed: false,
  },
  // {
  //   title: "2月-5月班",
  //   time: ["星期三", "每課 3 小時", "（第十課 3.5 小時）"],
  //   dates: [
  //     "2月26日 (19:00-22:00)",
  //     "3月5日 (19:00-22:00)",
  //     "3月12日 (19:00-22:00)",
  //     "3月19日 (19:00-22:00)",
  //     "3月26日 (19:00-22:00)",
  //     "4月2日 (19:00-22:00)",
  //     "4月9日 (19:00-22:00)",
  //     "4月23日 (19:00-22:00)",
  //     "4月30日 (19:00-22:00)",
  //     "5月7日 (18:30-22:00)",
  //   ],
  //   tutors: [
  //     "Miss Vinci Chan (雙碩士輔導心理學家、靜觀發證導師、催眠治療發證導師、NLP 發證導師)",
  //   ],
  //   closed: false,
  // },
];

const TimeSlot = () => {
  return (
    <AnimatedSection className="w-full" id="time-slot">
      <MaxWidthWrapper className="relative flex flex-col items-center justify-center gap-12 text-neutral">
        <h1 className="flex flex-col items-center justify-center text-3xl font-semibold sm:flex-row sm:text-4xl lg:text-5xl">
          開課時間
        </h1>
        <div className="grid grid-flow-row grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
          {slots.map((slot, index) => (
            <ClassCard key={index} {...slot} />
          ))}
        </div>
        <div className="w-full text-left">
          <p>
            本中心另設企業培訓或如有其他課程查詢，詳情請按此：{" "}
            <Link
              href="https://wa.me/85290469438"
              className="text-primary underline underline-offset-4"
            >
              +852 9046 9438
            </Link>
          </p>
          <p>
            如想報讀本中心舉辦之催眠五證書課程，
            <Link
              href="/"
              className="text-primary underline underline-offset-4"
            >
              請按此
            </Link>
            。
          </p>
        </div>
      </MaxWidthWrapper>
    </AnimatedSection>
  );
};

export default TimeSlot;

type ClassCardProps = {
  title: string;
  time: string[];
  dates: string[];
  tutors?: string[];
  closed: boolean;
};

const ClassCard: FC<ClassCardProps> = ({
  title,
  time,
  dates,
  tutors,
  closed,
}) => {
  return (
    <div className="flex flex-col items-center justify-start gap-4 rounded-lg border border-neutral/10 bg-basic/50 p-12 shadow-md">
      <h2 className="text-2xl font-semibold text-primary">{title}</h2>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="shrink-0">時間：</div>
          <div className="flex flex-col">
            {time.map((t) => (
              <p key={t} className="text-nowrap">
                {t}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-row">
          <div className="shrink-0">日期：</div>
          <div>
            {dates.map((d, i) => (
              <span key={d} className="text-nowrap">
                {d}
                {i === dates.length - 1 ? "" : "、"}
              </span>
            ))}
          </div>
        </div>
        {tutors && tutors.length > 0 && (
          <div className="mt-4 flex flex-col">
            <div className="shrink-0">任教導師：</div>
            <div>
              {tutors.map((t, i) => (
                <div key={i}>{t}</div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* <KnowMoreCourseInfo
        href="https://hknlp.info/product/%e8%ba%ab%e5%bf%83%e8%aa%9e%e8%a8%80%e7%a8%8b%e5%bc%8f%e5%ad%b8%e4%ba%ba%e9%9a%9b%e4%ba%a4%e5%be%80%e5%8f%8a%e5%95%86%e6%a5%ad%e7%ae%a1%e7%90%86%e6%8a%80%e5%b7%a7%e8%ad%89%e6%9b%b8/"
        className="mt-8 w-[116px]"
      /> */}
      {closed ? <Closed /> : <SignUp />}
    </div>
  );
};
