import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SignUp from "../SignUp";
import { FC } from "react";
import KnowMoreCourseInfo from "../KnowMoreCourseInfo";
import Closed from "../Closed";
import Link from "next/link";
import AnimatedSection from "../AnimatedSection";

const slots: ClassCardProps[] = [
  {
    title: "假日班",
    time: ["星期日", "10:00 - 19:00"],
    dates: [
      "3月23日",
      "3月30日",
      "4月6日",
      "4月13日",
      "4月18日(星期五)",
      "4月20日",
    ],
    tutors: ["Dr. CW Leung (催眠博士、臨床心理學碩士、商業心理學家)"],
    closed: false,
  },
  {
    title: "2025年2月-2025年3月常規假日班",
    time: ["星期日", "10:00 - 19:00"],
    dates: ["2月2日", "2月9日", "2月23日", "3月2日", "3月9日", "3月16日"],
    tutors: ["Dr. CW Leung (催眠博士、臨床心理學碩士、商業心理學家)"],
    closed: false,
  },
  {
    title: "2024年12月-2025年1月常規假日班",
    time: ["星期六、日", "10:00 - 19:00"],
    dates: [
      "12月22日",
      "12月26日",
      "12月28日",
      "12月29日",
      "1月12日",
      "1月19日",
    ],
    tutors: ["Dr. CW Leung (催眠博士、臨床心理學碩士、商業心理學家)"],
    closed: true,
  },
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
            共 6 課。除 6
            課必修課外，本課程亦設有額外進修時數及網上授課時數，同學可選擇是否參與，彈性完成。共
            120
            小時。如同學未能依時完成，本中心亦設一年免費補課及補考服務，時間彈性。
          </p>
          <p>一班最多 8 人，現正招生中，確認會開辦。</p>
          <br />
          <p>* 每個課程均設立助教跟進學員進度。</p>
          <p>
            本中心另設企業培訓或如有其他課程查詢，詳情請按此：{" "}
            <Link
              href="https://wa.me/85293098317"
              className="text-primary underline underline-offset-4"
            >
              +852 9309 8317
            </Link>
          </p>
          <p>
            如想報讀本中心舉辦之 NLP 可持續進修基金課程，
            <Link
              href="/nlp"
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
      <KnowMoreCourseInfo
        href="https://www.hk-hphi.com/%E7%BE%8E%E5%9C%8B%E8%A8%BB%E5%86%8A%E5%82%AC%E7%9C%A0%E6%B2%BB%E7%99%82%E5%B8%AB%E8%AA%B2%E7%A8%8B-abh-ngh"
        className="mt-8 w-[116px]"
      />
      {closed ? <Closed /> : <SignUp />}
    </div>
  );
};
