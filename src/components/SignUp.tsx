"use client";

import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

const SignUp = () => {
  return (
    <Button
      className="flex flex-row justify-between gap-2"
      style={{
        backgroundColor: "#4CAF4F",
      }}
    >
      <span>立即報名</span>
      <MoveRight size={16} />
    </Button>
  );
};

export default SignUp;
