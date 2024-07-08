import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

const qualifications = [
  "​University of Clinical Health Science 院士",
  "香港城市大學哲學博士研究生(中研究國催眠​醫學史)",
  "香港大學行為健康碩士(研究催眠治療應用)",
  "香港城市大學文學專業教育碩士",
  "英國心理學家協會(ABP)註冊商業心理學家(編號: 6509)",
  "國際醫學及牙醫學催眠協會(IMDHA)發證培訓講師及培訓機構負責人",
  "美國國家催眠師公會(NGH)發證培訓講師及培訓機構負責人",
  "加拿大催眠學公會(PBH)發證培訓講師及培訓機構負責人",
  "美國催眠師協會(ABH)發證培訓講師及培訓機構負責人",
  "美國NLP機構NFNLP發證培訓講師及培訓機構負責人",
  "英國IBNLP發證培訓講師及培訓機構負責人",
  "香港心理衛生會(MHFA)精神健康急救學會員",
];

const descriptions = [
  "他是香港首位嘗試把催眠醫學學術史及 NLP 技巧糅合催眠教學，使其更適合應用於華人社會的博士級導師之一。他亦為 University of Clinical Health Science(US) 院士、美國國際醫學及牙科催眠治療協會(IMDHA)的課程負責人以及國際NLP英國協會IBNLP的亞洲區代表之一。他亦曾在美國麻省理工大學、美國耶魯大學、​美國芝加哥大學進修設計思維、行為心理學等多個相關課程。",
  "他亦具備催眠及 NLP 導師的資格，多年來培養不少催眠導師及為他們建立中心提供了不少的意見。中心亦培訓過不少傑出的學員，包括：心理學家、香港代表隊、大學講師、博士研究生、中醫師、西醫、藥劑師等。",
  "他亦曾撰寫催眠教材及為本會所有出版書籍編輯，包括催眠教材和 NLP 教材。他亦為 HKNLP 身心語言程式學術中心的學術負責人及本地藝術協會 ART MAPPING 的顧問。",
  "本中心多年來亦接受不同媒體訪問，包括100毛、明報等。",
  "本中心首席導師為香港註冊社工，亦曾於不同大學講解及分享其催眠的研究，如︰香港大學、香港城市大學等。他的論文散見於香港大學、香港城市大學，他的論文亦入選論文優秀集。他亦曾在全港公開研究生論文比賽中取得季軍成績。他於 2013 年到英國 The University of Liverpool 修讀 Conflict Management。導師持有四個碩士及博士研究生的資歷，鑽研輔導學、教育法、法律及人本治療。導師亦曾於 2012 年獲沙田區傑出青年，從事戒毒、Band 3 中學生輔導工作超過十年。在任社工期間，因參與由香港大學社會科學院、香港公益金合辦有關「生死」為主題的比賽，榮獲冠軍並有幸得到報章採訪，並於 2019年-2023 年書展期間共出版五本催眠及 NLP 的書籍，當中包括明報出報社。導師亦曾到柬埔寨從事義務社工工作。",
  "導師的早期催眠理論及技術啟蒙於亞洲首位 NGH 認可華人醫師陳一德、著名「現代催眠之父」Milton Hyland Erikson 及 Evolution of Psychotherapy 創辦人 Dr. Jeffery K.Zeig。其後，他在香港大學從事催眠治療與輔導應用的研究 ，致力把催眠治療融合到不同的輔導手法中。導師擁有超過十年的心理輔導及催眠治療經驗，案例包括不同的成癮治療、自我催眠引導、認知行為治療等範疇。此外，他的博士論文亦針對研究催眠在華人社會及醫學的發展。",
  "他除了持有社工、輔導等資歷，亦有法律的學位，並取得優良成績畢業，專長於仲裁及家庭調解等範疇。",
  '他亦曾在就讀香港大學Master Course期間，在有關"Counselling and Psychotherapy"的課程取得A grade的成績。',
];

const Tutor = () => {
  return (
    <section className="w-full py-4">
      <MaxWidthWrapper className="flex flex-col items-center justify-between gap-12 py-4 text-neutral">
        <h1 className="flex flex-col items-center justify-center text-3xl font-semibold sm:flex-row sm:text-4xl lg:text-5xl">
          首席導師
        </h1>
        <div className="flex flex-col-reverse justify-center gap-12 lg:flex-row">
          <div className="flex max-w-lg flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="hidden text-3xl font-semibold text-primary lg:block">
                Valient Leung
              </h2>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold lg:hidden">導師介紹</h3>
              {descriptions.map((description, index) => (
                <p key={index}>{description}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Image
              src="/tutors/valient-leung.webp"
              alt={`首席導師 Valient Leung`}
              width={330}
              height={410}
              className="mx-auto rounded-lg"
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold text-primary lg:hidden">
                Valient Leung
              </h2>
              <div>
                <h3 className="text-lg font-semibold">專業資格</h3>
                <ul className="list-outside list-disc">
                  {qualifications.map((qualification, index) => (
                    <li key={index}>{qualification}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Tutor;
