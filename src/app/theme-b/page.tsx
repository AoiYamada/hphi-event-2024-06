import React from "react";
import Hero from "../../components/sections/Hero";
import CourseInfo from "../../components/sections/CourseInfo";
import TimeSlot from "../../components/sections/TimeSlot";
import ContactUs from "../../components/sections/ContactUs";
import RecAsso from "../../components/sections/RecAsso";
import Students from "../../components/sections/Students";

const Page = () => {
  return (
    <div className="w-full">
      <Hero />
      <CourseInfo />
      <TimeSlot />
      <Students />
      <ContactUs />
      <RecAsso />
    </div>
  );
};

export default Page;
