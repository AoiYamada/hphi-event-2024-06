import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";

// TODO: bear
const Objectives = () => {
  return (
    <section className="w-full py-4">
      <MaxWidthWrapper className="flex flex-col items-center justify-center gap-x-24 gap-y-4 py-4 text-center md:flex-row">
        <Image
          src="/target.png"
          alt="Course Objectives"
          width={245}
          height={245}
        />
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold">課程目標 Course Objectives</h2>
          <ol
            className="flex list-inside list-decimal flex-col items-start justify-center"
            style={{
              textShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
            }}
          >
            <li>讓學員了解催眠的原理</li>
            <li>介紹催眠師與催眠治療師的本領</li>
            <li>展示催眠在日常生活的應用</li>
            <li>展示香港的催眠行業</li>
            <li>演繹催眠有趣又實用的一面</li>
          </ol>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Objectives;
