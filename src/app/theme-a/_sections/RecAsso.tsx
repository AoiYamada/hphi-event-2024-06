import React, { FC, PropsWithChildren } from "react";
import Image from "next/image";
import MaxWidthWrapper from "../_components/MaxWidthWrapper";

const RecAsso = () => {
  return (
    <section className="w-full py-4">
      <MaxWidthWrapper className="flex flex-col justify-between py-4 text-center">
        <h2 className="pt-4 text-2xl font-semibold">認可學會</h2>
        <div className="pb-4 text-sm">Recognized Association</div>
        <div className="grid grid-cols-3 flex-wrap justify-center gap-y-4 py-4 lg:grid-cols-6">
          <Wrapper>
            <Image
              src="/associations/ngh.gif"
              alt="ngh association"
              width={100}
              height={100}
            />
          </Wrapper>
          <Wrapper>
            <Image
              src="/associations/pbh.png"
              alt="pbh association"
              width={100}
              height={100}
            />
          </Wrapper>
          <Wrapper>
            <Image
              src="/associations/nfnlp.png"
              alt="nfnlp association"
              width={100}
              height={100}
            />
          </Wrapper>
          <Wrapper>
            <Image
              src="/associations/abnlp.png"
              alt="abnlp association"
              width={100}
              height={100}
            />
          </Wrapper>
          <Wrapper>
            <Image
              src="/associations/imdha.webp"
              alt="imdha association"
              width={100}
              height={100}
            />
          </Wrapper>
          <Wrapper>
            <Image
              src="/associations/ibnlp.png"
              alt="ibnlp association"
              width={100}
              height={100}
            />
          </Wrapper>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default RecAsso;

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="h-[100px] w-[100px] rounded-full bg-white">
        {children}
      </div>
    </div>
  );
};
