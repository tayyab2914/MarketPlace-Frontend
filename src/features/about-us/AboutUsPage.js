"use client";
import Navbar from "@/components/layout/navbar/Navbar";
import React from "react";
import AboutBreadCrumbs from "./components/AboutBreadCrumbs";
import AboutInfo from "./components/AboutInfo";
import AboutHowServiceWork from "./components/AboutHowServiceWork";
import AboutTopExpert from "./components/AboutTopExpert";
import "./styles/about-us.css";
import AboutTestimonials from "./components/AboutTestimonials";
import AboutFAQ from "./components/AboutFAQ";
import Footer from "@/components/layout/footer/Footer";

const AboutUsPage = () => {
  return (
    <div>
      <Navbar />

      <AboutBreadCrumbs />

      <AboutInfo />
      <AboutHowServiceWork />
      <AboutTopExpert />

      <AboutFAQ />
      <AboutTestimonials />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
