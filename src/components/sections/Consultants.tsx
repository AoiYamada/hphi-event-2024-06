"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TutorCard, { TutorCardProps } from "../TutorCard";
import { Carousel } from "react-responsive-carousel";
import RenderIndicator from "../RenderIndicator";
import AnimatedSection from "../AnimatedSection";

const tutors: TutorCardProps[] = [
  {
    name: "Sam Sio",
    title: "首席外部顧問",
    img: {
      src: "/tutors/sam-sio.webp",
      width: 186,
      height: 270,
    },
    qualifications: [
      "專業心理治療及催眠應用(香港)有限公司暨身心語言程式學術中心首席外部顧問",
      "諾德保險經紀有限公司副行政總裁",
      "中國城鄉控股有限公司非執行主席",
      "御佳控股有限公司獨立非執行董事",
    ],
    descriptions: [
      "蕭錦成先生現為諾德保險經紀有限公司副行政總裁，專注大型企業及建造工程保險項目。他曾任職太古、匯豐及森那美等保險集團，具有超過四十年豐富金融及保險管理經驗。蕭先生亦為中國城鄉控股有限公司非執行主席；御佳控股有限公司獨立非執行董事；並出任專業心理治療及催眠應用(香港)有限公司暨身心語言程式學術中心首席外部顧問。",
      "在專業資格方面，蕭先生為美國人壽管理學院院士；澳洲及新西蘭金融保險學會高級會員、認可保險師；澳洲及新西蘭管理會計師學會資深會員、認可管理會計師；英國環保工程師學會會員；英國皇家特許建造工程學會會員、皇家特許建造工程師。",
      "蕭先生亦擔任中港澳不同公職，包括中國人民政治協商會議韶關市委員；澳門保險業專業人材協會執行委員；香港韶關同鄉聯誼總會常務副會長；香港童軍總會九龍地域副會長暨產業委員會主席；新界總商會常務會董；廣東社團總會會董；香港工業總會工業支援服務協會執行委員；國際扶輪3450地區會員事務副主席；及國際青年商會香港總會資深青商會顧問。",
    ],
  },
  {
    name: "Winson Kwok",
    title: "NLP應用專家、商業顧問",
    img: {
      src: "/tutors/winson-kwok.webp",
      width: 326,
      height: 324,
    },
    qualifications: [
      "專業心理治療及催眠應用（香港）中心 & 身心語言程式學術中心首席內部顧問",
      "美國加利福尼亞大學爾灣分校 University of California Irvine (經濟學系)畢業",
      "美國NLP機構 NFNLP 發證培訓講師及培訓機構負責人之一",
    ],
    descriptions: [
      "他強調NLP的理論的應用和實踐。他為美國 NFNLP 的課程負責人以及國際 NLP 英國協會 IBNLP 的亞洲區代表之一。",
      "他曾在多間大專院校講授商業應用及NLP的大原則，包括︰IVE、香港理工大學、香港城市大學等，他亦具備培訓 NLP 導師的資格，多年來培養不少NLP導師及為他們建立中心提供了不少的意見，現已超過 10 年，而合作機構多於150間。",
      "除培訓外，他亦獨具慧眼，憑自身的經驗創立機械人公司及諮詢公司，合作機構包括︰",
      "數碼港、貿發局、香港不同的商業機構等。",
      "他亦接受不同媒體訪問，包括新華網、CCTV 中文、人民網等。",
    ],
  },
];

const Consultants = () => {
  return (
    <AnimatedSection className="w-full py-4">
      <MaxWidthWrapper className="flex flex-col items-center justify-between gap-12 py-4 text-neutral">
        <h1 className="flex flex-col items-center justify-center text-3xl font-semibold sm:flex-row sm:text-4xl lg:text-5xl">
          顧問
        </h1>
        <Carousel
          className="w-full"
          autoPlay
          interval={30000}
          showArrows={false}
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          renderIndicator={RenderIndicator}
          // https://github.com/leandrowd/react-responsive-carousel/issues/469#issuecomment-1148934349
          preventMovementUntilSwipeScrollTolerance={true}
          swipeScrollTolerance={20}
        >
          {tutors.map((tutor, index) => (
            <TutorCard key={index} {...tutor} />
          ))}
        </Carousel>
      </MaxWidthWrapper>
    </AnimatedSection>
  );
};

export default Consultants;
