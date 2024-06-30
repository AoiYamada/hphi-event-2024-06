import { Toaster } from "@/components/ui/toaster";
import SignUp from "./theme-b/_components/SignUp";
import Footer from "./theme-b/_layout/Footer";
import Header from "./theme-b/_layout/Header";
import ContactUs from "./theme-b/_sections/ContactUs";
import CourseInfo from "./theme-b/_sections/CourseInfo";
import Hero from "./theme-b/_sections/Hero";
import RecAsso from "./theme-b/_sections/RecAsso";
import TimeSlot from "./theme-b/_sections/TimeSlot";

function Home() {
  return (
    <div className="theme-b relative">
      <Header />
      <div className="w-full">
        <Hero />
        <CourseInfo />
        <TimeSlot />
        <RecAsso />
        <ContactUs />
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
