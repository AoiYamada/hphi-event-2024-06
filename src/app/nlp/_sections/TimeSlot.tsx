import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import { FC } from "react";
import SignUp from "../_components/SignUp";

const slots = [
  {
    title: "9月班",
    time: ["星期日"],
    dates: [
      "9月8日 (10:00-19:00) 9 小時",
      "9月15日 (11:00-18:00) 7 小時",
      "9月18日 (11:00-18:00) 7 小時",
      "9月22日 (10:00-19:30) 9.5 小時",
    ],
  },
  {
    title: "10月班",
    time: ["星期日"],
    dates: [
      "10月1日 (11:00-18:00) 7 小時",
      "10月6日 (11:00-18:00) 7 小時",
      "10月13日 (10:00-19:00) 9 小時",
      "10月20日 (10:00-19:30) 9.5 小時",
    ],
  },
  {
    title: "閒日班",
    time: ["星期三"],
    dates: [
      "10月9日 (19:00-22:30) 3.5 小時",
      "10月11日 (假期) (10:00-19:30) 9.5 小時",
      "10月16日 (19:00-22:30) 3.5 小時",
      "10月23日 (19:00-22:30) 3.5 小時",
      "10月30日 (19:00-22:30) 3.5 小時",
      "11月6日 (19:00-22:30) 3.5 小時",
      "11月13日 (19:00-22:30) 3.5 小時",
    ],
  },
  {
    title: "假日期",
    time: ["星期日"],
    dates: [
      "10月27日 (10:00-19:00) 9 小時",
      "11月3日 (11:00-18:00) 7 小時",
      "11月10日 (11:00-18:00) 7 小時",
      "11月17日 (10:00-19:30) 9.5 小時",
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
      </MaxWidthWrapper>
    </section>
  );
};

export default TimeSlot;

type ClassCardProps = {
  title: string;
  time: string[];
  dates: string[];
};

const ClassCard: FC<ClassCardProps> = ({ title, time, dates }) => {
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
      </div>
      <SignUp className="mt-8" />
    </div>
  );
};
