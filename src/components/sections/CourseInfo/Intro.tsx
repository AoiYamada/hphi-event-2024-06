import { cn } from "@/lib/utils";
import { FC } from "react";

type IntroProps = {
  className?: string;
};

const Intro: FC<IntroProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col gap-8", className)}>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold text-primary lg:text-2xl">簡介</h3>
        <div className="flex flex-col gap-4 text-justify text-lg">
          <p>
            本中心現正推出 2025
            全新催眠課程。課程內容豐富，涵蓋催眠基本原理到進階應用技巧，並對應美國
            NGH
            催眠治療課程大綱。無論您是想提升個人技能，還是有志投身輔導行業，我們都能為您提供最專業的培訓。
          </p>
          <p>
            課程由擁有博士學位及超過十年教學經驗的專業導師、心理學家及社工親身授課，讓您能夠在短時間內掌握催眠心理學的精髓、全面提升心理輔導的技能。
          </p>
          <p>
            學員完成課程後，可同時獲得美國 NGH 及 ABH 證書，亦可免試申請英國
            IBNLP 學會簽發的催眠證書，取得多重國際專業認證以開展相關事業。
          </p>
          <p>
            畢業學員可參與我們的畢業群組。本中心會定期舉辦交流活動，為畢業生的事業提供專業意見。
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-end gap-2 text-sm font-semibold text-primary">
        <span>#博士導師</span>
        <span>#10年教學經驗</span>
        <span>#專業培訓</span>
        <span>#多重國際專業認證</span>
      </div>
    </div>
  );
};

export default Intro;
