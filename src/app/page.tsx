import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Arrangements from "@/components/sections/Arrangements";
import Carousel from "@/components/sections/Carousel";
import CertCourses from "@/components/sections/CertCourses";
import ContactUs from "@/components/sections/ContactUs";
import CourseContents from "@/components/sections/CourseContents";
import Features from "@/components/sections/Features";
import Objectives from "@/components/sections/Objectives";
import RecAsso from "@/components/sections/RecAsso";
import { Toaster } from "@/components/ui/toaster";

function Home() {
  return (
    <>
      <Header />
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
      <Footer />
      <Toaster />
    </>
  );
}

export default Home;
