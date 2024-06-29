import React from "react";
import Hero from "./_sections/Hero";
import RecAsso from "@/components/sections/RecAsso";
import CourseInfo from "./_sections/CourseInfo";
import TimeSlot from "./_sections/TimeSlot";
import ContactUs from "./_sections/ContactUs";

const Page = () => {
  return (
    <div className="w-full">
      <Hero />
      <CourseInfo />
      <TimeSlot />
      <RecAsso />
      <ContactUs />
    </div>
  );
};

export default Page;
