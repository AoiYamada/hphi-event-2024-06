"use client";

import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SignUpProps = {
  className?: string;
};

const KnowMore: FC<SignUpProps> = ({ className }) => {
  return (
    <Button
      className={cn(
        "bg-basic flex flex-row justify-between border-primary font-normal text-neutral",
        className,
      )}
      variant="outline"
      onClick={() => {
        document.getElementById("course-info")?.scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      <span>了解更多</span>
    </Button>
  );
};

export default KnowMore;
