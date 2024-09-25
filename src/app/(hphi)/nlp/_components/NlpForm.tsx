"use client";

import { cn } from "@/lib/utils";
import { FC, useEffect } from "react";

type NlpFormProps = {
  className?: string;
};

const NlpForm: FC<NlpFormProps> = ({ className }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//hknlp.info/form/js/mf.js";

    const mf = document.getElementById("mf_placeholder")!;
    mf.parentNode!.insertBefore(script, mf);
  }, []);

  return (
    <div
      id="mf_placeholder"
      data-formurl="//hknlp.info/form/embed.php?id=14255"
      data-formheight="1420"
      data-formtitle="聯絡我們"
      data-paddingbottom="10"
      className={cn("w-full", className)}
    ></div>
  );
};

export default NlpForm;
