import Navbar from "@/components/layout/navbar/Navbar";
import React from "react";
import Footer from "@/components/layout/footer/Footer";
import { FAQ_CONTENT } from "@/constants/static-pages/faq";
import { BREADCRUMBS } from "@/utils/BreadCrumbs";
import BreadCrumbs from "@/components/layout/breadcrumb/BreadCrumbs";
import FaqComponent from "@/components/layout/faq/FaqComponent";

const FAQPage = () => {
  return (
    <div>
      <Navbar />
      <BreadCrumbs items={BREADCRUMBS.faq} />
      <div className="container -mt-40 rounded-xl bg-white p-2 sm:p-4 md:rounded-3xl xl:rounded-[60px] xl:p-15">
        <FaqComponent questionnaire={FAQ_CONTENT} />
      </div>
      <Footer />
    </div>
  );
};

export default FAQPage;
