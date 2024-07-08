import { cn } from "@/lib/utils";
import { FC } from "react";

type AimProps = {
  className?: string;
};

const Aim: FC<AimProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <h2 className="text-xl font-bold text-primary lg:text-2xl">課程目標</h2>
      <ul className="list-inside list-disc">
        <li>讓學員了解催眠的原理</li>
        <li>介紹催眠治療師的技能</li>
        <li>展示催眠在日常中的應用</li>
        <li>介紹香港的催眠行業狀況</li>
        <li>演繹催眠有趣又實用的一面</li>
      </ul>
    </div>
  );
};

export default Aim;
