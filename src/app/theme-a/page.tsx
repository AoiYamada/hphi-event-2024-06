import Arrangements from "./_sections/Arrangements";
import Carousel from "./_sections/Carousel";
import CertCourses from "./_sections/CertCourses";
import ContactUs from "./_sections/ContactUs";
import CourseContents from "./_sections/CourseContents";
import Features from "./_sections/Features";
import Objectives from "./_sections/Objectives";
import RecAsso from "./_sections/RecAsso";
import React, { FC } from "react";

const Page: FC = () => {
  return (
    <main>
      <Carousel />
      <RecAsso />
      <CertCourses />
      <Objectives />
      <CourseContents />
      <Features />
      <Arrangements />
      <ContactUs />
    </main>
  );
};

export default Page;
