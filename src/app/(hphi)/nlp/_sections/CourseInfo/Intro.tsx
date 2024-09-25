import { cn } from "@/lib/utils";
import { FC } from "react";

type IntroProps = {
  className?: string;
};

const Intro: FC<IntroProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col gap-8", className)}>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold text-primary lg:text-2xl">
          深入探索身心語言程式學的無限可能
        </h3>
        <div className="flex flex-col gap-4 text-justify text-lg">
          <p>
            身心語言程式學（NLP）是一門強大的應用心理學，被世界級領袖和企業家廣泛應用。馬雲曾言：「NLP是一門超級強而有力的溝通技術，我在節目訪談以及生活的各個層面時時刻刻都在運用。」
          </p>
          <p>
            美國《財富500強》的研究顯示，超過 80%
            的成功企業主管曾學習NLP技術，大幅提升營運績效和員工潛能。現在，您也有機會掌握這套快速有效的成功工具！。本中心的課程內容涵蓋面廣，務求讓您全面掌握
            NLP 的精髓。
          </p>
          <p>
            課程由擁有豐富經驗的業界專家和學者親自授課，他們不僅擁有博士學位，更有超過
            10 年的教學經驗。他們將以深入淺出的方式，引領您領略 NLP
            在各個領域的無限應用前景，從而開拓您的事業發展新視野。
          </p>
          <p>
            通過本課程，您更可成為我們的畢業生社群的一份子。我們將定期為畢業生提供專業交流活動和就業輔導，助您事業腳步更穩健。
          </p>
          <p>立即報名，開啟您事業的新篇章!</p>
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
