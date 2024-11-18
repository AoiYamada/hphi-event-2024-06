"use client";

import { useRef } from "react";
import type { FC, PropsWithChildren } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedSectionProps = PropsWithChildren & {
  className?: string;
  id?: string;
};

const AnimatedSection: FC<AnimatedSectionProps> = ({
  children,
  className,
  id,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "duration-500 ease-in",
        {
          "opacity-0": !isInView,
          "-translate-y-12 opacity-100": isInView,
        },
        className,
      )}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
