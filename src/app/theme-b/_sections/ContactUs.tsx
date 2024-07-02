import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ContactForm from "../_components/ContactForm";
import Sharing from "../_components/Sharing";

const ContactUs = () => {
  return (
    <section className="w-full pb-16" id="contact-us">
      <MaxWidthWrapper className="flex flex-col items-center justify-center gap-12">
        <h1 className="flex flex-col items-center justify-center text-3xl font-semibold sm:flex-row sm:text-4xl lg:text-5xl">
          聯絡我們
        </h1>
        <div className="flex w-full flex-row items-start justify-center gap-16">
          <Sharing className="hidden max-w-lg lg:inline" />
          <ContactForm className="w-full max-w-lg" />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ContactUs;
