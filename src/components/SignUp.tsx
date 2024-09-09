"use client";

import React, { FC } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SignUpProps = {
  className?: string;
};

const SignUp: FC<SignUpProps> = ({ className }) => {
  return (
    <Button
      className={cn(
        "flex flex-row justify-center bg-primary font-normal text-basic",
        className,
      )}
      onClick={() => {
        document.getElementById("contact-us")?.scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      <span className="pl-2">立即報名</span>
      <ChevronRight size={20} />
    </Button>
  );
};

export default SignUp;
