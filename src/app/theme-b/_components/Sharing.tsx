"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";
import { Carousel, CarouselProps } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const students: StorySlideProps[] = [
  {
    image: "/students/faye-yip.webp",
    title: "世界桌球冠軍",
    name: "葉蘊妍",
    description: [
      "每位運動員的汗水背後，都背負無比壓力，葉蘊妍亦不例外。對催眠感到好奇的她在接受本中心的催眠治療後，心理質素和自信心有了大幅的提升。",
      "比起傳統心理輔導方法，她認為催眠治療更為快速有效。催眠有效地幫助她釋放自我及放鬆、調整情緒，並令她的心理保持在佳的狀態下面對比賽、發揮最佳水平。",
    ],
  },
  {
    image: "/students/alvin-wong.jpeg",
    title: "資深商業拓展經理",
    name: "Alvin Wong",
    subtitle: "Fast And Brilliant HR Group",
    description: [
      "Alvin 在數年前因工作壓力過大及希望改善溝通技巧，報讀了本中心的催眠及 NLP 導師課程。",
      "學會催眠及 NLP 後，他不但提升了溝通及與人相處的技巧，亦把這些技巧應用至公司的發展中，令他在數年間帶領公司從不足十人成長至數千人。",
      "他覺得一切得歸功於本中心紮實的課程內容，對此表示由衷感謝。",
    ],
  },
  {
    image: "/students/photo-placeholder-for-a-male.jpeg",
    title: "駐校社工",
    name: "Jason Kam",
    description: [
      "Jason 在實習期間，見過資深社工為經歷喪親的大學生進行心理輔導時，使用催眠的技術。催眠的成效顯著，有效地幫助求助者減輕喪慟情緒。",
      "及後他報讀了本中心的催眠師課程，畢業後結合本來在學院所學的心理輔導技巧，將催眠應用到會話與治療計劃當中。",
      "他表示催眠比起單純使用傳統心理輔導，效果更為明顯快捷，能幫助求助者有效面對負面情緒，課程十分適合有志投身輔導行業的人報讀。",
    ],
  },
];

type SharingProps = {
  className?: string;
};

const Sharing: FC<SharingProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col items-center gap-8", className)}>
      <Carousel
        className="w-full"
        autoPlay
        interval={20000}
        showArrows={false}
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        renderIndicator={RenderIndicator}
      >
        {students.map((student, i) => (
          <StorySlide key={i} {...student} />
        ))}
      </Carousel>
    </div>
  );
};

export default Sharing;

const RenderIndicator: CarouselProps["renderIndicator"] = (
  onClickHandler,
  isSelected,
  index,
  label,
) => {
  if (isSelected) {
    return (
      <li
        className="mx-1 inline-block h-2 w-2 cursor-pointer rounded-full bg-primary"
        role="active indicator"
        title={`Selected: ${label} ${index + 1}`}
        aria-label={`Selected: ${label} ${index + 1}`}
      />
    );
  }

  return (
    <li
      className="mx-1 inline-block h-2 w-2 cursor-pointer rounded-full bg-primary/30"
      onClick={onClickHandler}
      onKeyDown={onClickHandler}
      value={index}
      key={index}
      role="indicator"
      tabIndex={0}
      title={`${label} ${index + 1}`}
      aria-label={`${label} ${index + 1}`}
    />
  );
};

type StorySlideProps = {
  title: string;
  name: string;
  subtitle?: string;
  description: string[];
  image: string;
};

const StorySlide: FC<StorySlideProps> = ({
  title,
  name,
  subtitle,
  description,
  image,
}) => {
  return (
    <div className="flex max-w-sm flex-col items-start gap-4 text-start">
      <div className="mb-8 flex w-full flex-col items-center">
        <div className="h-48 w-48">
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-neutral">{title}</h3>
        {subtitle && (
          <h4 className="text-sm font-semibold text-neutral">{subtitle}</h4>
        )}
        <h3 className="text-xl font-semibold text-primary">{name}</h3>
      </div>
      {description.map((desc, i) => (
        <p key={i} className="">
          {desc}
        </p>
      ))}
      <p className="mb-16 mt-4 text-sm text-primary">
        * 學員資料為本中心所有，未經同意不得轉載
      </p>
    </div>
  );
};
