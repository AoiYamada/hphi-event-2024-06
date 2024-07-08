import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "../_components/MaxWidthWrapper";
import ContactForm from "../_components/ContactForm";

const ContactUs = () => {
  return (
    <section className="w-full bg-[#F5F7FA]" id="contact-us">
      <MaxWidthWrapper className="flex flex-col items-center justify-center">
        <div className="flex w-full flex-row items-center justify-center gap-16">
          <Image
            src="/call-to-action.png"
            alt="立即報名"
            width={45}
            height={32}
          />
          <div>
            <p>
              如有任何問題，請致電📞26261828或
              <br />
              whatsapp📲93098317或
              <br />
              填妥下面表格📄:
            </p>
          </div>
        </div>
        <ContactForm />
      </MaxWidthWrapper>
    </section>
  );
};

export default ContactUs;
