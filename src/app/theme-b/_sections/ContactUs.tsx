import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ContactForm from "../_components/ContactForm";

const ContactUs = () => {
  return (
    <section className="w-full" id="contact-us">
      <MaxWidthWrapper className="flex flex-col items-center justify-center gap-12">
        <h1 className="flex flex-col items-center justify-center text-3xl font-semibold sm:flex-row sm:text-4xl lg:text-5xl">
          聯絡我們
        </h1>
        <ContactForm />
      </MaxWidthWrapper>
    </section>
  );
};

export default ContactUs;
