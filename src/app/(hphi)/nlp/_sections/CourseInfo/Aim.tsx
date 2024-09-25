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
        <li>讓學員熟練掌握並了解廣泛的 NLP 概念</li>
        <li>提升學生的人際溝通技巧</li>
        <li>在各種商業和工作場景中應用 NLP</li>
        <li>幫助學員更認同及認識自己的能力</li>
        <li>為發展人際關係奠定基礎</li>
        <li>提高商業行為及溝通的技巧</li>
        <li>實現與不同對話者的有效溝通</li>
      </ul>
    </div>
  );
};

export default Aim;
