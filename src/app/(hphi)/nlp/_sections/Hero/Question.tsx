import { cn } from "@/lib/utils";
import { FC } from "react";

type QuestionProps = {
  question: string;
  visible: boolean;
};

const Question: FC<QuestionProps> = ({ question, visible }) => {
  return (
    <h2
      className={cn(
        "absolute left-0 top-2 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text leading-tight text-transparent transition-all duration-700 ease-in-out md:top-4",
        {
          "opacity-100": visible,
          "opacity-0": !visible,
        },
      )}
    >
      {question}
    </h2>
  );
};

export default Question;
