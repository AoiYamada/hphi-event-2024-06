import React from "react";
import RecAsso from "@/components/sections/RecAsso";
import Students from "@/components/sections/Students";
import Tutors from "@/components/sections/Tutors";
import Hero from "./_sections/Hero";
import CourseInfo from "./_sections/CourseInfo";
import TimeSlot from "./_sections/TimeSlot";
import Cooperators from "@/components/sections/Cooperators";
import DownloadLeaflet from "./_sections/DownloadLeaflet";
import ContactUs from "./_sections/ContactUs";

const Page = () => {
  return (
    <div className="w-full">
      <Hero />
      <CourseInfo />
      <TimeSlot />
      <DownloadLeaflet />
      <Tutors />
      <Students className="lg:hidden" />
      <Cooperators />
      <ContactUs />
      <RecAsso />
    </div>
  );
};

export default Page;
