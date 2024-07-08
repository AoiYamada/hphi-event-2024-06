import { cn } from "@/lib/utils";
import { FC } from "react";

type SyllabusProps = {
  className?: string;
};

const Syllabus: FC<SyllabusProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <h2 className="text-xl font-bold text-primary lg:text-2xl">教學大綱</h2>
      <ul className="list-inside list-disc">
        <li>催眠基礎及應用技巧</li>
        <li>催眠諮商原理及面談技巧</li>
        <li>催眠深度及如何設計建議</li>
        <li>現實個案的面談及處理手法</li>
        <li>認知行為治療在催眠中的應用</li>
        <li>正念 (Mindfulness) 與催眠</li>
      </ul>
    </div>
  );
};

export default Syllabus;
