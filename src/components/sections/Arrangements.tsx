import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";

const Arrangements = () => {
  return (
    <section className="w-full py-4">
      <MaxWidthWrapper className="flex flex-col items-center justify-center py-4">
        <h2 className="flex flex-col items-center justify-center text-2xl font-semibold">
          課程安排 Course Arrangement
        </h2>
        <Image
          src="/course-arrangement.png"
          alt="Course Arrangement"
          width={499}
          height={328}
        />
        <div className="flex max-w-lg flex-col items-center justify-start gap-y-4 pt-8 text-center">
          <p>教學語言：廣東話，部分重點輔以英文詞彙。</p>
          <p>教學形式：小組互動形式（每班10人以內）、課後支援。</p>
          <p>2024年7月 - 2024年8月常規假日加開班招生中:</p>
          <p>
            星期六 10:00 - 19:00
            <br />
            7月6日、7月13日、7月20日、7月27日、8月3日、8月10日
            <br />
            (共六課。除六課必修課外，本課程亦設有額外進修時數及網上授課時數，同學可選擇是否參與，彈性完成。共120小時。如同學未能依時完成，本中心亦設一年免費補課及補考服務，時間彈性。)
            <br />
            （一班最多 8 人，現正招生中，確認會開辦。）
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Arrangements;
