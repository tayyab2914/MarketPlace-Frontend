"use client";
import React from "react";
import AboutInfo from "./components/AboutInfo";
import AboutHowServiceWork from "./components/AboutHowServiceWork";
import "./styles/about-us.css";
import Footer from "@/components/layout/footer/Footer";
import FaqComponent from "@/components/layout/faq/FaqComponent";
import TopExpertsComponent from "@/components/decor/top-experts/TopExpertsComponent";
import TestimonialsComponent from "@/components/decor/testimonials/TestimonialsComponent";
import { useSelector } from "react-redux";

const AboutUsPage = () => {
  const { pages_content } = useSelector((state) => state.pages);
  return (
    <div>
      <AboutInfo pages_content={pages_content}/>
      <AboutHowServiceWork pages_content={pages_content}/>
      <TopExpertsComponent />
      <FaqComponent/>
      <TestimonialsComponent />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
