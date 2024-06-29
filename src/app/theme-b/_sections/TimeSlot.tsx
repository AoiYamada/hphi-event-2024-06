import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SignUp from "../_components/SignUp";
import { FC } from "react";

const TimeSlot = () => {
  return (
    <section className="w-full" id="time-slot">
      <MaxWidthWrapper className="relative flex flex-col items-center justify-center gap-12 text-neutral">
        <h1 className="flex flex-col items-center justify-center text-3xl font-semibold sm:flex-row sm:text-4xl lg:text-5xl">
          開課時間
        </h1>
        <div className="grid grid-flow-row grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
          <ClassCard
            title="七月暑期班"
            time={["星期六", "10:00 - 19:00"]}
            dates={[
              "7月6日",
              "7月13日",
              "7月20日",
              "7月27日",
              "8月3日",
              "8月10日",
            ]}
          />
          <ClassCard
            title="八月暑期班"
            time={["星期六、日", "10:00 - 19:00"]}
            dates={[
              "8月4日",
              "8月10日",
              "8月11日",
              "8月18日",
              "8月25日",
              "9月7日",
            ]}
          />
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
    <div className="bg-basic/50 flex flex-col items-center justify-start gap-4 rounded-lg border border-neutral/10 p-12 shadow-md">
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
