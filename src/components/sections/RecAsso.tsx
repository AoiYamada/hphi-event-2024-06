import React, { FC, PropsWithChildren } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";

const RecAsso = () => {
  return (
    // TODO: bear
    <section className="w-full py-4">
      <MaxWidthWrapper className="flex flex-col justify-between py-4 text-center">
        <h2 className="text-3xl font-semibold pt-4">認可學會</h2>
        <div className="text-sm pb-4">Recognized Association</div>
        <div className="grid grid-cols-3 lg:grid-cols-6 justify-center flex-wrap gap-y-4 py-4">
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
    <div className="flex flex-row justify-center items-center">
      <div className="w-[100px] h-[100px] rounded-full bg-green-500">
        {children}
      </div>
    </div>
  );
};
