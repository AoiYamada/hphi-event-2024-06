import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";

// TODO: bear
const CourseContents = () => {
  return (
    <section className="w-full py-4">
      <MaxWidthWrapper className="flex flex-col items-center justify-center py-4 text-center">
        <h2 className="text-2xl font-semibold">課程內容 Course Content</h2>
        <Image
          src="/hypnosis.png"
          alt="Course Objectives"
          width={338}
          height={225}
        />
        <div>
          <div className="flex flex-col items-start justify-start pt-8">
            <h3 className="text-xl font-semibold">
              第一部分： 催眠基礎及應用技巧 (配合美國NGH課程大綱)
            </h3>
            <ul className="flex flex-col items-start pt-2">
              <li>- 催眠諮商原理及面談技巧</li>
              <li>- 催眠深度及如何設計建議</li>
              <li>- 催眠的應用及研究方向</li>
              <li>- 諮商技巧與實務操作</li>
              <li>- 現代及傳統催眠方式</li>
              <li>- NLP式催眠</li>
              <li>- 舞台催眠</li>
              <li>- 年齡回溯</li>
              <li>- 超時空之旅</li>
              <li>- 潛能開發技巧</li>
              <li>- 想像心理學和催眠</li>
              <li>- 催眠的執業</li>
              <li>- 催眠之原理及方法</li>
              <li>- 麻醉、止痛、戒煙、減肥技巧</li>
              <li>- 如何解釋何謂催眠</li>
              <li>- 十幾種瞬間催眠方式</li>
              <li>- 人本催眠方式</li>
              <li>- 艾瑞克森式催眠</li>
              <li>- 處理創傷的催眠技巧</li>
              <li>- 前世回溯</li>
              <li>- 與智慧大師會話</li>
              <li>- 催眠面談技巧</li>
              <li>- 行為分析-目標設定-強化</li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start pt-8">
            <h3 className="text-xl font-semibold">第二部分： 進階應用技巧</h3>
            <ul className="flex flex-col items-start pt-2">
              <li>- 現實中個案的面談及處理手法 "Case Summary" & "Case Plan"</li>
              <li>- 時間線技巧應用 - "過去、現在、將來法" 的探討與演練</li>
              <li>
                - 身心靈 (Mind-Body-Spirit) 整合催眠 - "自信壓力法" 的探討與演練
              </li>
              <li>- 催眠中的解離應用 - "抽離法" & "飛鳥法" 的探討與演練</li>
              <li>- 認知行為治療 CBT 學派在催眠面談及過程中的應用</li>
              <li>
                - "Focusing" (生命自覺) 與催眠 (參考 Prof. Leslie Greenberg,
                Ph.D.)
              </li>
              <li>
                - "Mindfulness" (正念) 與催眠 (參考 Dr. Jon Kabat-Zinn, MIT,
                U.S.A.)
              </li>
              <li>- 主流冥想方法 (e.g. Dr. Herbert Benson) 與催眠</li>
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default CourseContents;
