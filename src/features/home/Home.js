import React from "react";
import HowItWorks from "./components/HowItWorks";
import RecentPosts from "./components/RecentPosts";
import FindWorkAndHiring from "./components/FindWorkAndHiring";
import GetHelp from "./components/GetHelp";
import Navbar from "@/components/layout/navbar/Navbar";
import HeroSection from "./components/HeroSection";
import ScrollToTop from "@/components/ui/scroll-to-top/ScrollToTop";
import TopExpertsComponent from "@/components/decor/top-experts/TopExpertsComponent";
import TestimonialsComponent from "@/components/decor/testimonials/TestimonialsComponent";
import './styles/home.css'
import { useSelector } from "react-redux";
import Footer from "@/components/layout/footer/Footer";
const HomePage = () => {
  const { pages_content } = useSelector((state) => state.pages);
  return (
    <>
      <div className="bg-white">
        <Navbar />

        <HeroSection pages_content={pages_content}/>
        <HowItWorks pages_content={pages_content}/>

        <TopExpertsComponent />
        <TestimonialsComponent />

        {/* <RecentPosts pages_content={pages_content}/> */}
        <FindWorkAndHiring pages_content={pages_content}/>
        <GetHelp pages_content={pages_content}/>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default HomePage;
