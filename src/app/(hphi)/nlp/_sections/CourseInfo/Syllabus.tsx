import { cn } from "@/lib/utils";
import { FC } from "react";

type SyllabusProps = {
  className?: string;
};

const Syllabus: FC<SyllabusProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <h2 className="text-xl font-bold text-primary lg:text-2xl">課程大綱</h2>
      <ul className="list-inside list-disc">
        <li>認識神經語言程式學的基本概念及歷史背景</li>
        <li>掌握人際溝通的要素和技巧</li>
        <li>學習語言和非語言溝通訊息的技巧</li>
        <li>在常見的商業情境中運用所學技巧</li>
        <li>學會自我調整技巧，調整心態</li>
      </ul>
    </div>
  );
};

export default Syllabus;
