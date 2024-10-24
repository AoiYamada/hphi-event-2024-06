import { cn } from "@/lib/utils";
import {
  CircleDollarSign,
  Clock,
  Languages,
  MessagesSquare,
  UsersRound,
} from "lucide-react";
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
        <div className="flex max-w-72 flex-col">
          <span className="text-lg font-semibold">
            90.5 小時課程 (資歷學分︰9.05)
          </span>
          <span>導師真人面授：30.5 小時</span>
          <span>教學資源平台：30 小時</span>
          <span>自學時間（實習、個案報告）：30 小時</span>
          <span className="text-sm">* 實習、個案報告會在導師指導下完成。</span>
        </div>
      </div>
      <div className="flex flex-row items-start gap-4">
        <UsersRound size={36} className="shrink-0 pt-1" />
        <div className="flex flex-col">
          <span className="text-lg font-semibold">學員交流聚會</span>
          <span>
            課程完結後，學員可按需要重溫課程， 本中心亦設有不定期學員交流聚會、
            考試、NLP資訊分享、導師示範
          </span>
        </div>
      </div>
      <div className="flex flex-row items-start gap-4">
        <MessagesSquare size={36} className="shrink-0 pt-1" />
        <div className="flex flex-col">
          <span className="text-lg font-semibold">導師交流</span>
          <span>24 小時 WHATSAPP 與導師交流</span>
          <span>NLP 群組</span>
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
            正　　價：HKD <span className="text-nowrap">15,800/人</span>
          </span>
          <span className="text-sm">
            * 課程可分期付款，上課前付 $8,800，在上第三堂前把尾數繳付。
          </span>
          <span className="text-sm">
            * 申請可持續進修基金後，可獲政府高達 8
            成補貼，扣除減免後，實際只需付
            $3,160。(如曾申請可持續進修基金，請留意可用餘額)。
          </span>
          <span className="mt-2 text-red-500">
            早鳥優惠：HKD <span className="text-nowrap">13,800/人</span>
          </span>
          <span className="text-sm">
            * 提早兩星期報名，課程可分期付款，上課前付
            $8,800，在上第三堂前把尾數繳付。
          </span>
          <span className="text-sm">
            * 申請可持續進修基金後，可獲政府高達 8
            成補貼，扣除減免後，實際只需付 $2760。
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
