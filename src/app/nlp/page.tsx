import React from "react";
import ContactUs from "@/components/sections/ContactUs";
import RecAsso from "@/components/sections/RecAsso";
import Students from "@/components/sections/Students";
import Tutors from "@/components/sections/Tutors";
import Hero from "./_sections/Hero";
import CourseInfo from "./_sections/CourseInfo";
import TimeSlot from "./_sections/TimeSlot";
import Cooperators from "@/components/sections/Cooperators";

const Page = () => {
  return (
    <div className="w-full">
      <Hero />
      <CourseInfo />
      <TimeSlot />
      <Tutors />
      <Students />
      <Cooperators />
      {/* <ContactUs /> */}
      <RecAsso />
    </div>
  );
};

export default Page;
