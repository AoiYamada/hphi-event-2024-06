"use client";

import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type KnowMoreProps = {
  className?: string;
};

const KnowMore: FC<KnowMoreProps> = ({ className }) => {
  return (
    <Button
      className={cn(
        "flex flex-row justify-between border-primary bg-basic font-normal text-neutral",
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
