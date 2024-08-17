"use client";

import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

type KnowMoreCourseInfoProps = {
  href: string;
  className?: string;
};

const KnowMoreCourseInfo: FC<KnowMoreCourseInfoProps> = ({
  href,
  className,
}) => {
  return (
    <Button
      className={cn(
        "flex flex-row justify-between border-primary bg-basic font-normal text-neutral",
        className,
      )}
      variant="outline"
    >
      <Link href={href} target="_blank" className="mx-auto">
        <span>了解更多</span>
      </Link>
    </Button>
  );
};

export default KnowMoreCourseInfo;
