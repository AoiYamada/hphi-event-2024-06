"use client";

import { useEffect, useState } from "react";
import Question from "./Question";

const questions = [
  "想掌握世界級領袖的溝通秘訣？",
  "渴望在職場中脫穎而出？",
  "希望提升您的人際關係技巧？",
  "想要更好地理解並影響他人？",
  "渴望學習快速有效的自我提升工具？",
  "想在商業談判中佔據上風？",
  "希望提升您的領導力和管理技能？",
  "想要更好地理解並控制自己的思維模式？",
  "渴望掌握讀懂他人心理的技巧？",
  "想要在生活和工作中實現突破性成長？",
];

const longestQuestion = questions.reduce(
  (acc, cur) => (cur.length > acc.length ? cur : acc),
  "",
);

const Banner = () => {
  const [isShow, setIsShow] = useState(true);
  const [showIndex, setShowIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsShow(false);
      setTimeout(() => {
        setIsShow(true);
      }, 1000);
    }, 3700);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isShow) {
      setShowIndex((prev) => (prev + 1) % questions.length);
    }
  }, [isShow]);

  return (
    <div className="flex w-full flex-col items-start justify-center gap-2 md:gap-4">
      <div className="text-4xl md:text-6xl lg:text-8xl">你...</div>
      <div className="relative w-full text-2xl font-semibold md:text-3xl lg:text-5xl">
        {questions.map((question, idx) => (
          <Question
            key={idx}
            question={question}
            visible={isShow && showIndex === idx}
          />
        ))}
      </div>
      <p className="collapse text-2xl leading-tight md:text-3xl lg:text-5xl">
        {longestQuestion}
      </p>
    </div>
  );
};

export default Banner;
