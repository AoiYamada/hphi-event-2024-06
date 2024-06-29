"use client";

import React, { FC } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SignUpProps = {
  className?: string;
};

const KnowMore: FC<SignUpProps> = ({ className }) => {
  return (
    <Link href="#contact-us">
      <Button
        className={cn(
          "bg-base text-neutral flex flex-row justify-between border-primary font-normal",
          className,
        )}
        variant="outline"
      >
        <span>了解更多</span>
      </Button>
    </Link>
  );
};

export default KnowMore;
