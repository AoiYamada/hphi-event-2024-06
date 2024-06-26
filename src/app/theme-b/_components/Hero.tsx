"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React, { useEffect, useState } from "react";
import SignUp from "./SignUp";
import Image from "next/image";
import { cn } from "@/lib/utils";

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

const Hero = () => {
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
    <MaxWidthWrapper className="flex flex-row items-center justify-center gap-8 py-16">
      <div className="text-neutral flex w-1/2 flex-col items-start justify-center gap-16">
        <div className="flex w-full flex-col items-start justify-center gap-4">
          <div className="text-8xl">你...</div>
          <div className="relative w-full text-5xl font-semibold">
            {questions.map((question, idx) => (
              <h1
                key={idx}
                className={cn(
                  "absolute left-0 top-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text leading-tight text-transparent transition-all duration-700 ease-in-out",
                  {
                    "opacity-100": isShow && showIndex === idx,
                    "opacity-0": !isShow || showIndex !== idx,
                  },
                )}
              >
                {question}
              </h1>
            ))}
          </div>
          <p className="not-sr-only collapse text-5xl leading-tight">
            {longestQuestion}
          </p>
        </div>
        <SignUp />
      </div>
      <Image
        src="/hypnotherapy-session.png"
        className="hero-mask-to-r w-1/2 rounded-lg opacity-80"
        alt="hypnotherapy session"
        width={512}
        height={512}
      />
    </MaxWidthWrapper>
  );
};

export default Hero;
