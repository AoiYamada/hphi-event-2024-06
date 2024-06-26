"use client";

import React, { FC } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SignUpProps = {
  className?: string;
};

const SignUp: FC<SignUpProps> = ({ className }) => {
  return (
    <Link href="#contact-us">
      <Button
        className={cn(
          "text-md flex flex-row justify-between bg-primary text-base font-normal",
          className,
        )}
      >
        <span className="pl-2.5">立即報名</span>
        <ChevronRight size={24} />
      </Button>
    </Link>
  );
};

export default SignUp;
