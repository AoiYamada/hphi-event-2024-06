import React, { FC } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
      asChild
    >
      <Link
        href="https://hknlp.info/form/view.php?id=15719"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="pl-2">立即報名</span>
        <ChevronRight size={20} />
      </Link>
    </Button>
  );
};

export default SignUp;
