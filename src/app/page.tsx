import { Toaster } from "@/components/ui/toaster";
import SignUp from "../components/SignUp";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import ContactUs from "../components/sections/ContactUs";
import CourseInfo from "../components/sections/CourseInfo";
import Hero from "../components/sections/Hero";
import RecAsso from "../components/sections/RecAsso";
import TimeSlot from "../components/sections/TimeSlot";
import Students from "../components/sections/Students";
import Tutors from "../components/sections/Tutors";
import HypnosisIntroVideo from "@/components/HypnosisIntroVideo";

function Home() {
  return (
    <div className="theme-b relative">
      <Header />
      <div className="w-full pb-16">
        <Hero />
        <CourseInfo />
        <HypnosisIntroVideo />
        <TimeSlot />
        <Tutors />
        <Students className="lg:hidden" />
        <ContactUs />
        <RecAsso />
      </div>
      <Footer />
      <div className="sticky bottom-0 h-0 sm:hidden">
        <SignUp className="absolute bottom-4 right-4" />
      </div>
      <Toaster />
    </div>
  );
}

export default Home;
