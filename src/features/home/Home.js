import React from "react";
import HowItWorks from "./components/HowItWorks";
import Booking from "./components/Booking";
import TopExperts from "./components/TopExperts";
import SecureGuard from "./components/SecureGuard";
import NewsLetter from "./components/NewsLetter";
import Testimonials from "./components/Testimonials";
import RecentPosts from "./components/RecentPosts";
import FindWorkAndHiring from "./components/FindWorkAndHiring";
import GetHelp from "./components/GetHelp";
import Footer from "./components/Footer";
import Navbar from "@/components/layout/navbar/Navbar";
import HeroSection from "./components/HeroSection";
import ScrollToTop from "@/components/ui/scroll-to-top/ScrollToTop";

const HomePage = () => {
  return (
    <>
      <div className="bg-white">
        <Navbar />

        <HeroSection />
        <HowItWorks />

        <TopExperts />
        <Booking />
        <NewsLetter />

        <SecureGuard />
        <Testimonials />
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
