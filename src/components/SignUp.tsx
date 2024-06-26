"use client";

import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const SignUp = () => {
  return (
    <Link href="#contact-us">
      <Button className="flex flex-row justify-between gap-2 bg-primary text-xs font-normal">
        <span>立即報名</span>
        <MoveRight size={12} />
      </Button>
    </Link>
  );
};

export default SignUp;
