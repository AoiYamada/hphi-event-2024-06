import React, { FC, PropsWithChildren } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";

const RecAsso = () => {
  return (
    // TODO: bear
    <section className="w-full py-4">
      <MaxWidthWrapper className="flex flex-col justify-between py-4 text-center">
        <h2 className="pt-4 text-3xl font-semibold">認可學會</h2>
        <div className="pb-4 text-sm">Recognized Association</div>
        <div className="grid grid-cols-3 flex-wrap justify-center gap-y-4 py-4 lg:grid-cols-6">
          <Wrapper>
            <Image
              src="/assos/ngh asso.png"
              alt="ngh association"
              width={100}
              height={100}
            />
          </Wrapper>
          <Wrapper></Wrapper>
          <Wrapper></Wrapper>
          <Wrapper></Wrapper>
          <Wrapper></Wrapper>
          <Wrapper></Wrapper>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default RecAsso;

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="h-[100px] w-[100px] rounded-full bg-green-500">
        {children}
      </div>
    </div>
  );
};
