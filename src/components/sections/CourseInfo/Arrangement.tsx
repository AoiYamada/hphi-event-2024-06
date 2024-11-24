import { cn } from "@/lib/utils";
import { CircleDollarSign, Clock, Languages, UsersRound } from "lucide-react";
import { FC } from "react";

type ArrangementProps = {
  className?: string;
};

const Arrangement: FC<ArrangementProps> = ({ className }) => {
  return (
    <div className={cn("flex w-full flex-col gap-2", className)}>
      <h2 className="text-xl font-bold text-primary lg:text-2xl">課程安排</h2>
      <div className="flex flex-row items-start gap-4">
        <Clock size={36} className="shrink-0 pt-1" />
        <div className="flex flex-col">
          <span className="text-lg font-semibold">120 小時課程</span>
          <span>實體課：54 小時（必修）</span>
          <span>網　課：66 小時（選修）</span>
        </div>
      </div>
      <div className="flex flex-row items-start gap-4">
        <UsersRound size={36} className="shrink-0 pt-1" />
        <div className="flex flex-col">
          <span className="text-lg font-semibold">小組教學</span>
          <span>10 人以內</span>
          <span>互動教學</span>
        </div>
      </div>
      <div className="flex flex-row items-start gap-4">
        <Languages size={36} className="shrink-0 pt-1" />
        <div className="flex flex-col">
          <span className="text-lg font-semibold">教學語言</span>
          <span>粵語授課</span>
          <span>英語輔助</span>
        </div>
      </div>
      <div className="flex flex-row items-start gap-4">
        <CircleDollarSign size={36} className="shrink-0 pt-1" />
        <div className="flex flex-col">
          <span className="text-lg font-semibold">學費</span>
          <span className="text-nowrap">
            原　價：HKD
            <span className="text-nowrap line-through"> 15,800/人</span>
          </span>
          <span className="text-nowrap text-red-600">
            優惠價：HKD<span className="text-nowrap"> 13,800/人</span>
            （88 折）
          </span>
          <span className="mt-2 text-sm font-semibold text-primary">
            * 十周年優惠、名額有限、先報先得
          </span>
        </div>
      </div>
      <p className="mt-4 text-sm">
        * 如同學未能依時完成課程，本中心亦設一年免費補課及補考服務
      </p>
    </div>
  );
};

export default Arrangement;
