import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Sharing from "../Sharing";
import { FC } from "react";
import { cn } from "@/lib/utils";

type StudentsProps = {
  className?: string;
};

const Students: FC<StudentsProps> = ({ className }) => {
  return (
    <section id="students" className={cn("block w-full", className)}>
      <MaxWidthWrapper className="flex flex-col items-center justify-center gap-12">
        <h1 className="flex flex-col items-center justify-center text-3xl font-semibold sm:flex-row sm:text-4xl lg:text-5xl">
          學員分享
        </h1>
        <Sharing className="w-sm max-w-full md:max-w-md" />
      </MaxWidthWrapper>
    </section>
  );
};

export default Students;
