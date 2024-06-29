import React, { FC, PropsWithChildren } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { WhatsApp } from "@/components/icons/WhatsApp";
import { Instagram } from "@/components/icons/Instagram";
import { Youtube } from "@/components/icons/Youtube";
import { Mail } from "lucide-react";

const courses: {
  name: string;
  link: string;
}[] = [
  {
    name: "基礎催眠治療學證書課程",
    link: "https://www.hk-hphi.com/%E5%9F%BA%E7%A4%8E%E5%82%AC%E7%9C%A0%E6%B2%BB%E7%99%82%E5%AD%B8%E8%AD%89%E6%9B%B8%E8%AA%B2%E7%A8%8B",
  },
  {
    name: "美國註冊催眠治療師課程",
    link: "https://www.hk-hphi.com/%E7%BE%8E%E5%9C%8B%E8%A8%BB%E5%86%8A%E5%82%AC%E7%9C%A0%E6%B2%BB%E7%99%82%E5%B8%AB%E8%AA%B2%E7%A8%8B-abh-ngh",
  },
  {
    name: "深化催眠專業認證課程",
    link: "https://www.hk-hphi.com/%E6%B7%B1%E5%8C%96%E5%82%AC%E7%9C%A0%E5%B0%88%E6%A5%AD%E8%AA%8D%E8%AD%89%E8%AA%B2%E7%A8%8B-imdha",
  },
  {
    name: "NLP 執行師證書課程",
    link: "https://www.hk-hphi.com/ibnlp%E5%9F%B7%E8%A1%8C%E5%B8%AB%E8%AA%B2%E7%A8%8B",
  },
];

const contacts: {
  icon: JSX.Element;
  name: string;
  link: string;
}[] = [
  {
    icon: <WhatsApp />,
    name: "+852 9309 8317",
    link: "https://wa.me/85293098317",
  },
  {
    icon: <Instagram />,
    name: "@hphi_psychotherapy",
    link: "https://www.instagram.com/hphi_psychotherapy",
  },
  {
    icon: <Youtube />,
    name: "筆求人",
    link: "https://www.youtube.com/c/%E7%AD%86%E6%B1%82%E4%BA%BA",
  },
  {
    icon: <Mail />,
    name: "info@hk-hphi.com",
    link: "mailto:info@hk-hphi.com",
  },
];

const Footer = () => {
  return (
    <footer id="footer" className="text-basic w-full bg-neutral">
      <MaxWidthWrapper className="flex flex-col items-center justify-center gap-8 pb-4 pt-12">
        <div className="flex w-full flex-col justify-between gap-4 md:flex-row md:gap-16">
          <div className="flex-grow pb-8">
            <Image
              src="/hphi-logo-light.png"
              alt="HPHI 專業心理治療(香港)中心 Logo"
              width={45 * 3}
              height={32 * 3}
              className="mix-blend-screen"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-2">
            <h3 className="text-lg font-semibold">其他課程</h3>
            <ul className="text-md flex flex-col items-start justify-start gap-1">
              {courses.map((course) => (
                <li key={course.name}>
                  <Link href={course.link} target="_blank">
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start gap-2">
            <h3 className="text-lg font-semibold">聯絡我們</h3>
            <ul className="text-md flex flex-col items-start justify-start gap-1">
              {contacts.map((contact) => (
                <li
                  key={contact.name}
                  className="flex flex-row items-center justify-start gap-3"
                >
                  <IconWrapper>{contact.icon}</IconWrapper>
                  <Link href={contact.link} target="_blank">
                    {contact.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full text-xs font-light">
          <p className="leading-6">
            Copyright © 2024 HPHI EDUCATION LIMITED All rights reserved
          </p>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;

const IconWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="text-basic flex h-5 w-5 flex-row items-center justify-center rounded-full">
      {children}
    </div>
  );
};
