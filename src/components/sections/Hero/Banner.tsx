"use client";

import { useEffect, useState } from "react";
import Question from "./Question";

const questions = [
  "想成為專業的催眠師？",
  "在尋找提升輔導技能的技巧？",
  "渴望探索大腦的奧秘？",
  "想要更好地幫助他人解決問題？",
  "希望了解自己的潛意識？",
  "想提升心理輔導的技巧？",
  "期望更好地管理自己的情緒？",
  "希望了解自己行為背後的原因？",
  "想要更好地控制自己的思維？",
  "渴望了解自己的夢境？",
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
