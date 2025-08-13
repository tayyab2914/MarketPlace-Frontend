import React from "react";
import HowItWorks from "./components/HowItWorks";
import Booking from "./components/Booking";
import RecentPosts from "./components/RecentPosts";
import FindWorkAndHiring from "./components/FindWorkAndHiring";
import GetHelp from "./components/GetHelp";
import Navbar from "@/components/layout/navbar/Navbar";
import HeroSection from "./components/HeroSection";
import ScrollToTop from "@/components/ui/scroll-to-top/ScrollToTop";
import TopExpertsComponent from "@/components/decor/top-experts/TopExpertsComponent";
import TestimonialsComponent from "@/components/decor/testimonials/TestimonialsComponent";
import Footer from "./components/Footer";
import './styles/home.css'
const HomePage = () => {
  return (
    <>
      <div className="bg-white">
        <Navbar />

        <HeroSection />
        <HowItWorks />
        <TopExpertsComponent />
        {/* <Booking /> */}
        {/* <NewsLetter /> */}

        {/* <SecureGuard /> */}
        <TestimonialsComponent />
        <RecentPosts />
        <FindWorkAndHiring />
        <GetHelp />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default HomePage;
