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
import Consultants from "@/components/sections/Consultants";
import Interviews from "./_sections/Interviews";
import GraduateInterviews from "@/components/sections/GraduateInterviews";

const Page = () => {
  return (
    <div className="w-full">
      <Hero />
      <CourseInfo />
      <Interviews />
      <GraduateInterviews />
      <TimeSlot />
      <DownloadLeaflet />
      <Tutors />
      <Consultants />
      <Students className="lg:hidden" />
      <Cooperators />
      <ContactUs />
      <RecAsso />
    </div>
  );
};

export default Page;
