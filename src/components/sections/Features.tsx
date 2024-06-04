import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";

const Features = () => {
  return (
    <section className="w-full py-4">
      <MaxWidthWrapper className="flex flex-col items-center justify-center py-4">
        <h2 className="flex flex-col items-center justify-center text-2xl font-semibold">
          <span>為何選擇我們？</span>
          <span>課程的五大特點︰</span>
        </h2>
        <Image
          src="/features.png"
          alt="課程的五大特點"
          width={334}
          height={336}
        />
        <div className="flex max-w-md flex-col items-start justify-start gap-y-4 pt-8">
          <p>
            1. 此課程可保證學員完成課程後可申請由英、美三大學會[包括The
            International Board Of Neuro Linguistic Programming (UK)、The
            American Board of Hypnotherapy（ABH）、National Guild of Hypnotists
            (NGH)]的註冊催眠師證書以及由本會的心理學家簽署的催眠治療師證書，而我們的課程由超過十年以上教學經驗，並有豐富實戰經驗的博士級導師、心理學家及社工任教。導師亦擁有多年催眠實戰經驗。課程專為繁忙人士而設，但不妨礙學員並可在催眠專業取得認證，我們特設70小時網上重溫課程，讓大忙人也可適時研讀催眠。此課程亦為有志投身於輔導行業的人士而設，全面對心理輔導打下良好基礎。
          </p>
          <p>
            2.
            學員可於畢業後參與我們的畢業群組，定期舉辦交流活動，費用全免，達至終生學習。學員亦可在完成課程後，開展相關的事業。本課程亦設助教團隊跟進學員情況。
          </p>
          <p>
            3.
            全港唯一設有三種模式上課，學員除可選擇修讀大班課程，私人課程，甚或網上課程，可因應學員情況作出對應安排。
          </p>
          <p>
            4.
            本中心非常重視教學質素及應用，校舍設於中環，為確保課堂質素及增加各學員參與度，每班只招收10名學員，以確保學員可以充分參與其中。
          </p>
          <p>
            5.
            學員完成此課程後，亦可以優惠價及補時形式報讀催眠深化班及NLP課程，取得其他認證資格，包括︰PBH、IBNLP、NFNLP、IMDHA、ABP,
            HPHI X HKNLP所頒發的證書，具國際認可資歷。
          </p>
          <p>
            學員完成此120小時文憑課程後，除獲得美國NGH(共兩張)及ABH證書，亦可免試申請英國IBNLP學會簽發的催眠證書(Certified
            Hypnotherapist)
            ，共最少五張證書，全面而有系統地認識催眠及輔導的應用技巧，並取得國際專業認證。
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Features;
