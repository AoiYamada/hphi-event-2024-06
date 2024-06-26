import React from "react";
import Hero from "./_components/Hero";
import Arrangements from "@/components/sections/Arrangements";
import CertCourses from "@/components/sections/CertCourses";
import ContactUs from "@/components/sections/ContactUs";
import CourseContents from "@/components/sections/CourseContents";
import Features from "@/components/sections/Features";
import Objectives from "@/components/sections/Objectives";
import RecAsso from "@/components/sections/RecAsso";

const Page = () => {
  return (
    <div className="w-full">
      <Hero />
      <RecAsso />
      <CertCourses />
      <Objectives />
      <CourseContents />
      <Features />
      <Arrangements />
      <ContactUs />
    </div>
  );
};

export default Page;
