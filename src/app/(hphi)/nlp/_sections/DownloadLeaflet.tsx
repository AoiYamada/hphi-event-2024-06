import AnimatedSection from "@/components/AnimatedSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

const DownloadLeaflet = () => {
  return (
    <AnimatedSection className="w-full" id="download-leaflet">
      <MaxWidthWrapper className="flex flex-col items-center gap-12 text-neutral">
        <h1 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
          下載課程手冊/單張
        </h1>
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg text-neutral/80">
            下載課程單張，了解更多詳情：
          </p>
          <Link
            href="/HPHI_Leaflet_with_QF.pdf"
            target="_blank"
            className="w-[230px] rounded-md bg-[#f6a327] p-4 text-center"
          >
            課程單張 (PDF)
          </Link>
        </div>
      </MaxWidthWrapper>
    </AnimatedSection>
  );
};

export default DownloadLeaflet;
