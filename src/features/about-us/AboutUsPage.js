"use client";
import Navbar from "@/components/layout/navbar/Navbar";
import React from "react";
import AboutInfo from "./components/AboutInfo";
import AboutHowServiceWork from "./components/AboutHowServiceWork";
import "./styles/about-us.css";
import Footer from "@/components/layout/footer/Footer";
import { BREADCRUMBS } from "@/utils/BreadCrumbs";
import BreadCrumbs from "@/components/layout/breadcrumb/BreadCrumbs";
import FaqComponent from "@/components/layout/faq/FaqComponent";
import { ABOUT_US_CONTENT } from "@/constants/static-pages/about-us";
import TopExpertsComponent from "@/components/decor/top-experts/TopExpertsComponent";
import TestimonialsComponent from "@/components/decor/testimonials/TestimonialsComponent";

const AboutUsPage = () => {
  return (
    <div>
      <Navbar />
      <BreadCrumbs items={BREADCRUMBS.aboutUs} />
      <AboutInfo />
      <AboutHowServiceWork />
      <TopExpertsComponent />
      <FaqComponent questionnaire={ABOUT_US_CONTENT} />
      <TestimonialsComponent />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
