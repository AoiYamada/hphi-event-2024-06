import React, { FC, PropsWithChildren } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";

// TODO: bear
const CertCourses = () => {
  return (
    <section className="w-full py-4">
      <MaxWidthWrapper className="flex flex-col justify-between py-4 text-center">
        <h2 className="flex flex-col pt-4 text-2xl font-semibold">
          <span>短期專業進修</span>
          <span>應用催眠心理學五證書課程</span>
        </h2>
        <div className="flex flex-row justify-center">
          <Image
            src="/GBUSHK.png"
            alt="5 certificates"
            width={51 * 1.5}
            height={17 * 1.5}
          />
        </div>
        <div className="grid grid-cols-3 flex-wrap items-start justify-center gap-x-4 gap-y-4 py-4 lg:grid-cols-5">
          <div className="flex flex-col items-center justify-center">
            <Wrapper>
              <Image
                src="/associations/ibnlp.png"
                alt="ibnlp"
                width={100}
                height={100}
              />
            </Wrapper>
            <div className="flex flex-row items-center justify-center pt-4">
              <div className="h-5 w-5">
                <Image src="/GB.png" alt="GB" width={28} height={28} />
              </div>
              <div className="text-xl font-bold">IBNLP</div>
              <div className="h-5 w-5">
                <Image src="/GB.png" alt="GB" width={28} height={28} />
              </div>
            </div>
            <div className="text-xs">
              The International Board Of Neuro Linguistic Programming
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Wrapper>
              <Image
                src="/associations/abnlp.png"
                alt="abh"
                width={100}
                height={100}
              />
            </Wrapper>
            <div className="flex flex-row items-center justify-center pt-4">
              <div className="h-5 w-5">
                <Image src="/GB.png" alt="GB" width={28} height={28} />
              </div>
              <div className="text-xl font-bold">ABH</div>
              <div className="h-5 w-5">
                <Image src="/GB.png" alt="GB" width={28} height={28} />
              </div>
            </div>
            <div className="text-xs">American Board of Hypnotherapy</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Wrapper>
              <Image
                src="/associations/ngh.gif"
                alt="ngh"
                width={100}
                height={100}
              />
            </Wrapper>
            <div className="flex flex-row items-center justify-center pt-4">
              <div className="h-5 w-5">
                <Image src="/US.png" alt="US" width={28} height={28} />
              </div>
              <div className="text-xl font-bold">NGH</div>
              <div className="h-5 w-5">
                <Image src="/US.png" alt="US" width={28} height={28} />
              </div>
            </div>
            <div className="text-xs">National Guild of Hypnotists</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Wrapper>
              <Image
                src="/associations/uchs.png"
                alt="uchs"
                width={100}
                height={100}
              />
            </Wrapper>
            <div className="flex flex-row items-center justify-center pt-4">
              <div className="h-5 w-5">
                <Image src="/US.png" alt="US" width={28} height={28} />
              </div>
              <div className="text-xl font-bold">UCHS</div>
              <div className="h-5 w-5">
                <Image src="/US.png" alt="US" width={28} height={28} />
              </div>
            </div>
            <div className="text-xs">University of Clinical Health Science</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Wrapper>
              <Image src="/hphi-logo.png" alt="hphi" width={100} height={100} />
            </Wrapper>
            <div className="flex flex-row items-center justify-center pt-4">
              <div className="h-5 w-5">
                <Image src="/HK.png" alt="HK" width={28} height={28} />
              </div>
              <div className="text-xl font-bold">HPHI</div>
              <div className="h-5 w-5">
                <Image src="/HK.png" alt="HK" width={28} height={28} />
              </div>
            </div>
            <div className="text-xs">
              HK Psychotherapy & Healthcare Institute
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default CertCourses;
const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="flex h-[100px] w-[100px] flex-row items-center justify-center rounded-full bg-white">
        {children}
      </div>
    </div>
  );
};
