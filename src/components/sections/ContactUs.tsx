import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ContactForm from "../ContactForm";
import Sharing from "../Sharing";
import AnimatedSection from "../AnimatedSection";

const ContactUs = () => {
  return (
    <AnimatedSection className="w-full" id="contact-us">
      <MaxWidthWrapper className="flex flex-col items-center justify-center gap-12">
        <h1 className="flex flex-col items-center justify-center text-3xl font-semibold sm:flex-row sm:text-4xl lg:text-5xl">
          聯絡我們
        </h1>
        <div className="flex w-full flex-row items-start justify-center gap-16">
          <Sharing className="hidden max-w-md lg:inline" />
          <ContactForm className="w-full max-w-lg" />
        </div>
      </MaxWidthWrapper>
    </AnimatedSection>
  );
};

export default ContactUs;
