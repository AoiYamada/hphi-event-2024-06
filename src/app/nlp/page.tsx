import React from "react";
import ContactUs from "@/components/sections/ContactUs";
import RecAsso from "@/components/sections/RecAsso";
import Students from "@/components/sections/Students";
import Tutor from "@/components/sections/Tutor";
import Hero from "./_sections/Hero";
import CourseInfo from "./_sections/CourseInfo";
import TimeSlot from "./_sections/TimeSlot";

const Page = () => {
  return (
    <div className="w-full">
      <Hero />
      <CourseInfo />
      <TimeSlot />
      <Tutor />
      <Students />
      <ContactUs />
      <RecAsso />
    </div>
  );
};

export default Page;
