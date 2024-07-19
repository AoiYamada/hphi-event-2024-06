"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TutorCard, { TutorCardProps } from "../TutorCard";
import { Carousel } from "react-responsive-carousel";
import RenderIndicator from "../RenderIndicator";

const tutors: TutorCardProps[] = [
  {
    name: "CW Leung",
    title: "首席導師",
    img: {
      src: "/tutors/cw-leung.png",
      width: 776,
      height: 546,
    },
    qualifications: [
      "麻省理工大學︰設計思維、學習管理及領導證書",
      "耶魯大學︰行為心理學相關證書",
      "專業心理治療及催眠應用（香港）中心 & 身心語言程式學術中心首席催眠教授",
      "專業心理治療及催眠應用(香港)中心 & 身心語言程式學術中心創辦人之一",
      "香港城市大學哲學博士 (主研中國催眠醫學史)",
      "正攻讀英國臨床心理學碩士",
      "香港大學法律碩士(仲裁及調解)︰註冊調解員(The Accord Group)",
      "香港大學行為健康碩士 (畢業研究論文針對應屆考生的催眠治療應用)",
      "香港城市大學文學專業教育碩士 ",
      "英國BPP University︰法律學士，以優異成績畢業",
      "英國 BPP University：法律深造文憑（GDL）(Commendation)，以優異成績畢業",
      "英國心理學家協會(ABP)註冊商業心理學家(編號︰6509)",
      "英國心理學家協會(ABP)成員",
      "國際醫學及牙醫學催眠協會 (IMDHA) 催眠治療師",
      "國際醫學及牙醫學催眠協會 (IMDHA) 發證培訓師",
      "美國國家催眠師公會 (NGH) 催眠治療師",
      "美國國家催眠師公會 (NGH) 發證培訓講師",
      "加拿大催眠學公會 (PBH) 發證培訓講師",
      "美國催眠師協會 (ABH) 發證培訓講師",
      "美國NLP機構NFNLP發證培訓講師",
      "英國機構IBNLP發證培訓講師",
      "香港心理衛生會 (MHFA) 精神健康急救學會員",
    ],
    descriptions: [
      "大專講師、心理學家、心理治療首席顧問導師",
      "PHD Candidate, City U",
      "MSocSc, Clinical Psychology, UK",
      "MSocSc, Behavioral Health,. HKU",
      "LLM,Arbi.&Dr. ,HKU",
      "MA,  Education, City U",
      "Registered  Academic Business Psychologist (ABP,UK,No.6509), Social Worker(HK)",
      "他是香港首位嘗試把催眠醫學學術史及NLP技巧糅合催眠教學，使其更適合應用於華人社會的博士級導師之一。他亦為University of Clinical Health Science(US)院士、美國國際醫學及牙科催眠治療協會(IMDHA)的課程負責人以及國際NLP英國協會IBNLP的亞洲區代表之一。他亦曾在美國麻省理工大學、美國耶魯大學、​美國芝加哥大學進修設計思維、行為心理學等多個相關課程。",
      "他亦具備催眠及NLP導師的資格，多年來培養不少催眠導師及為他們建立中心提供了不少的意見。中心亦培訓過不少傑出的學員，包括：心理學家、香港代表隊、大學講師、博士研究生、中醫師、西醫、藥劑師等。",
      "他亦曾撰寫催眠教材及為本會所有出版書籍編輯，包括催眠教材和NLP教材。他亦為HKNLP 身心語言程式學術中心的學術負責人及本地藝術協會ART MAPPING的顧問。",
      "本中心多年來亦接受不同媒體訪問，包括100毛、明報等。",
      "本中心首席導師為香港註冊社工，亦曾於不同大學講解及分享其催眠的研究，如︰香港大學、香港城市大學等。他的論文散見於香港大學、香港城市大學，他的論文亦入選論文優秀集。他亦曾在全港公開研究生論文比賽中取得季軍成績。他於2013年到英國 The University of Liverpool 修讀 Conflict Management。導師持有四個碩士及博士研究生的資歷，鑽研輔導學、教育法、法律及人本治療。導師亦曾於 2012 年獲沙田區傑出青年，從事戒毒、Band 3 中學生輔導工作超過十年。在任社工期間，因參與由香港大學社會科學院、香港公益金合辦有關「生死」為主題的比賽，榮獲冠軍並有幸得到報章採訪，並於2019年-2023年書展期間共出版五本催眠及NLP的書籍，當中包括明報出報社。導師亦曾到柬埔寨從事義務社工工作。",
      "導師的早期催眠理論及技術啟蒙於亞洲首位 NGH 認可華人醫師陳一德 、著名「現代催眠之父」Milton Hyland Erikson 及 Evolution of Psychotherapy 創辦人 Dr. Jeffery K.Zeig。其後，他在香港大學從事催眠治療與輔導應用的研究 ，致力把催眠治療融合到不同的輔導手法中。導師擁有超過十年的心理輔導及催眠治療經驗，案例包括不同的成癮治療、自我催眠引導、認知行為治療等範疇。此外，他的博士論文亦針對研究催眠在華人社會及醫學的發展。",
      "他除了持有社工、輔導等資歷，亦有法律的學位，並取得優良成績畢業，專長於仲裁及家庭調解等範疇。",
      '他亦曾在就讀香港大學Master Course期間，在有關"Counselling and Psychotherapy"的課程取得A grade的成績',
    ],
  },
  {
    name: "Valient Leung",
    title: "首席導師",
    img: {
      src: "/tutors/valient-leung.webp",
      width: 330,
      height: 410,
    },
    qualifications: [
      "專業心理治療及催眠應用（香港）有限公司 & 身心語言程式學術中心HKNLP首席教授",
      "專業心理治療及催眠應用(香港)中心 & 身心語言程式學術中心創辦人",
      "University of Clinical Health Science 院士",
      "國際醫學及牙醫學催眠協會 (IMDHA) 催眠治療師",
      "國際醫學及牙醫學催眠協會 (IMDHA) 發證培訓師及培訓機構負責人",
      "美國國家催眠師公會 (NGH) 催眠治療師",
      "美國國家催眠師公會 (NGH) 發證培訓講師及培訓機構負責人",
      "加拿大催眠學公會 (PBH) 發證培訓講師及培訓機構負責人",
      "美國催眠師協會 (ABH) 發證培訓講師及培訓機構負責人",
      "美國NLP機構NFNLP發證培訓講師及培訓機構負責人",
    ],
    descriptions: [],
  },
  {
    name: "Abby Chung 局目子",
    title: "Professional Hypnotherapist ",
    img: {
      src: "/tutors/abby-chung.webp",
      width: 198,
      height: 225,
    },
    qualifications: [
      "資訊科技學士",
      "電訊學碩士",
      "Professional Hypnotherapist 專業催眠治療師",
      "Specializes in Drawing Psychological Analysis 繪畫分析治療師",
      "國際醫學及牙醫學 催眠協會 (IMDHA)催眠治療師",
      "國際神經語言程式學聯合會 NLP Master Practitioner (NFNLP, USA)",
      "Life Member of Professional Board of Hypnotherapy, Inc.",
      "加拿大催眠治療師協會 (PBH) 健康及心靈催眠治療師",
      "加拿大催眠治療師協會 (PBH) 高級繪畫分析治療師",
      "加拿大催眠治療師協會 (PBH) 導師資格",
      "美國催眠師協會 (ABH) 註册催眠治療師",
      "美國國家催眠治療師公會 (NGH) 催眠治療師",
      "曾任香港專業教育學院（IVE)兼職講師",
    ],
    descriptions: [
      "「局目子」出生於修行之家，小時曾有幸遇明師，從此修學內、外家武學，哲、道、醫等學說。 此外他是催眠治療師、資訊科技人、畫家、武術家、和專業攝影師等",
      "在修行養生強生方面極有心得，「局目子」著作有 《樂問》、《心靈花園》、 《活生不死》 《酒徒與催眠》》、《催眠師的世界︰催眠． 聯想．異次元》",
    ],
  },
];

const Tutors = () => {
  return (
    <section className="w-full py-4">
      <MaxWidthWrapper className="flex flex-col items-center justify-between gap-12 py-4 text-neutral">
        <h1 className="flex flex-col items-center justify-center text-3xl font-semibold sm:flex-row sm:text-4xl lg:text-5xl">
          導師資歷
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
    </section>
  );
};

export default Tutors;
