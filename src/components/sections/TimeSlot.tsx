import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SignUp from "../SignUp";
import { FC } from "react";
import KnowMoreCourseInfo from "../KnowMoreCourseInfo";

const slots = [
  {
    title: "八月暑期班",
    time: ["星期六、日", "10:00 - 19:00"],
    dates: ["8月4日", "8月10日", "8月11日", "8月18日", "8月25日", "9月7日"],
    tutors: ["Dr. CW Leung (催眠博士、臨床心理學碩士、商業心理學家)"],
  },
  {
    title: "10月 - 11月常規假日班",
    time: ["星期六、日", "10:00 - 19:00"],
    dates: [
      "10月11日",
      "10月13日",
      "10月20日",
      "10月26日",
      "10月27日",
      "11月3日",
    ],
    tutors: ["Dr. CW Leung (催眠博士、臨床心理學碩士、商業心理學家)"],
  },
  {
    title: "9月-10月特別班",
    time: ["星期六、日、假日"],
    dates: [
      "9月21日 (10:00-19:00) 9小時",
      "9月22日 (11:00-18:00) 7小時",
      "9月28日 (11:00-18:00) 7小時",
      "10月1日 (10:00-19:30) 9.5小時",
    ],
    tutors: [
      "Mr. Abby Chung (前大專講師、NLP應用、跨學科電腦專家)",
      "Dr, CW Leung (催眠博士、臨床心理學碩士、仲裁調解法律碩士、英國ABP商業心理學家)",
    ],
  },
];

const TimeSlot = () => {
  return (
    <section className="w-full" id="time-slot">
      <MaxWidthWrapper className="relative flex flex-col items-center justify-center gap-12 text-neutral">
        <h1 className="flex flex-col items-center justify-center text-3xl font-semibold sm:flex-row sm:text-4xl lg:text-5xl">
          開課時間
        </h1>
        <div className="grid grid-flow-row grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
          {slots.map((slot, index) => (
            <ClassCard key={index} {...slot} />
          ))}
        </div>
        <div>* 每個課程均設立助教跟進學員進度。</div>
      </MaxWidthWrapper>
    </section>
  );
};

export default TimeSlot;

type ClassCardProps = {
  title: string;
  time: string[];
  dates: string[];
  tutors: string[];
};

const ClassCard: FC<ClassCardProps> = ({ title, time, dates, tutors }) => {
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
        <div className="mt-4 flex flex-col">
          <div className="shrink-0">任教導師：</div>
          <div>
            {tutors.map((t, i) => (
              <div key={i}>{t}</div>
            ))}
          </div>
        </div>
      </div>
      <KnowMoreCourseInfo
        href="https://www.hk-hphi.com/%E7%BE%8E%E5%9C%8B%E8%A8%BB%E5%86%8A%E5%82%AC%E7%9C%A0%E6%B2%BB%E7%99%82%E5%B8%AB%E8%AA%B2%E7%A8%8B-abh-ngh"
        className="mt-8 w-[116px]"
      />
      <SignUp />
    </div>
  );
};
