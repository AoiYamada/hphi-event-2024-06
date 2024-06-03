import Arrangements from "@/components/sections/Arrangements";
import Carousel from "@/components/sections/Carousel";
import CertCourses from "@/components/sections/CertCourses";
import ContactUs from "@/components/sections/ContactUs";
import CourseContents from "@/components/sections/CourseContents";
import Features from "@/components/sections/Features";
import Objectives from "@/components/sections/Objectives";
import RecAsso from "@/components/sections/RecAsso";

function Home() {
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
}

export default Home;
