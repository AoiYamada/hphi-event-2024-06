import React from "react";
import Hero from "./_sections/Hero";
import CourseInfo from "./_sections/CourseInfo";
import TimeSlot from "./_sections/TimeSlot";
import ContactUs from "./_sections/ContactUs";
import RecAsso from "./_sections/RecAsso";
import Students from "./_sections/Students";

const Page = () => {
  return (
    <div className="w-full">
      <Hero />
      <CourseInfo />
      <TimeSlot />
      <RecAsso />
      <Students />
      <ContactUs />
    </div>
  );
};

export default Page;
