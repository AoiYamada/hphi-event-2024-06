"use client";

import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import * as pixel from "@/lib/f-pixel";

export type Contact = {
  icon: JSX.Element;
  name: string;
  link: string;
};

type ContactItemProps = {
  contact: Contact;
};

const ContactItem: FC<ContactItemProps> = ({ contact }) => {
  const handleClick = () => pixel.event("Contact", { contact: contact.name });

  return (
    <li
      key={contact.name}
      className="flex flex-row items-center justify-start gap-3"
      onClick={handleClick}
    >
      <IconWrapper>{contact.icon}</IconWrapper>
      <Link href={contact.link} target="_blank">
        {contact.name}
      </Link>
    </li>
  );
};

export default ContactItem;

const IconWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex h-5 w-5 flex-row items-center justify-center rounded-full text-basic">
      {children}
    </div>
  );
};
