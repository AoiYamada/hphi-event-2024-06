import React, { FC } from "react";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const associations: AssoProps[] = [
  {
    title: "美國國家催眠師公會（NGH）",
    description:
      "成立於 1950 年，為國際性催眠學會，已有超過七十年培訓催眠師的經驗。",
    img: "/associations/ngh.gif",
  },
  {
    title: "加拿大催眠治療專業協會（PBH）",
    description:
      "由行內的職業催眠師組成，旨在為同行的專業資格提供同儕審查，以及提供專業的催眠師課程。",
    img: "/associations/pbh.png",
  },
  {
    title: "國際 NLP 聯盟（NFNLP）",
    description:
      "在 1990 年代初成立，第二古老的 NLP 認證機構，提供高質素的 NLP 培訓，其認證獲全球廣泛接受。",
    img: "/associations/nfnlp.png",
  },
  {
    title: "美國催眠治療委員會(ABH-ABNLP)",
    description:
      "在 1982 年成立，會員遍佈全球。致力於在行業中推廣最高標準的培訓和道德操守。",
    img: "/associations/abnlp.png",
  },
  {
    title: "美國國際醫學及牙科催眠治療協會 (IMDHA) ",
    description:
      "於 1986 年成立，致力提高對催眠術作為一種具有廣泛應用的輔助方案的接受度。",
    img: "/associations/imdha.webp",
  },
  {
    title: "國際商業 NLP 協會（IBNLP）",
    description:
      "由 NLP 專業人士組成的協會，致力於維護在專業和商業環境中應用 NLP 時的最高職業操守標準、最佳實踐和道德行為。",
    img: "/associations/ibnlp.png",
  },
];

const RecAsso = () => {
  return (
    <section className="w-full py-4">
      <MaxWidthWrapper className="flex flex-col justify-between gap-12 py-4 text-neutral">
        <h1 className="flex flex-col items-center justify-center text-3xl font-semibold sm:flex-row sm:text-4xl lg:text-5xl">
          認可學會
        </h1>
        <div className="grid grid-cols-2 flex-wrap justify-center gap-8 py-4 md:grid-cols-3">
          {associations.map((asso, index) => (
            <Asso key={index} {...asso} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default RecAsso;

type AssoProps = {
  title: string;
  description: string;
  img: string;
};

const Asso: FC<AssoProps> = ({ title, description, img }) => {
  return (
    <div className="flex flex-col items-start gap-6">
      <div className="h-28 w-28">
        <Image
          src={img}
          alt={title}
          width={100}
          height={100}
          className="h-full w-full rounded-full bg-basic"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
