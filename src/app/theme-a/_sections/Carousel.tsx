"use client";

import React from "react";
import { Carousel as RRCarousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "../_components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";

const Carousel = () => {
  return (
    <section className="w-full bg-[#F5F7FA]">
      <MaxWidthWrapper className="flex flex-row justify-center">
        <RRCarousel
          className="w-full"
          autoPlay
          showArrows
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            if (isSelected) {
              return (
                <li
                  className="mx-1 inline-block h-2 w-2 cursor-pointer rounded-full bg-primary"
                  role="active indicator"
                  title={`Selected: ${label} ${index + 1}`}
                  aria-label={`Selected: ${label} ${index + 1}`}
                />
              );
            }
            return (
              <li
                className="mx-1 inline-block h-2 w-2 cursor-pointer rounded-full bg-primary/30"
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="indicator"
                tabIndex={0}
                title={`${label} ${index + 1}`}
                aria-label={`${label} ${index + 1}`}
              />
            );
          }}
        >
          <Slider />
          <Slider />
        </RRCarousel>
      </MaxWidthWrapper>
    </section>
  );
};

export default Carousel;

const Slider = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-x-16 gap-y-4 pb-16 pt-4 lg:h-[420px] lg:flex-row-reverse lg:py-0">
      <div className="h-[282px] w-[282px]">
        <Image
          src="/ten-years-of-experience.png"
          alt="10 years of experience"
          width={282}
          height={282}
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-4">
        <h2 className="flex flex-col items-start justify-center gap-2 text-5xl font-semibold">
          <span>博士級導師親身授課</span>
          <span className="text-primary">10+年教學經驗</span>
        </h2>
        <Button
          className="flex flex-row justify-between gap-2 text-xs font-normal"
          style={{
            backgroundColor: "#4CAF4F",
          }}
        >
          <Link href="#content">了解更多</Link>
        </Button>
      </div>
    </div>
  );
};
