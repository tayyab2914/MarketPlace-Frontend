import Navbar from "@/components/layout/navbar/Navbar";
import React from "react";
import FaqInfo from "./components/FaqInfo";
import Footer from "@/components/layout/footer/Footer";

const FAQPage = () => {
  return (
    <div>
      <Navbar />{" "}
      <section className="stp-30 4xl:large-container mx-4 mt-[100px] rounded-3xl bg-n900 pb-52 md:pb-60 lg:rounded-[60px] lg:pb-72">
        <div className="container flex flex-col items-center justify-center gap-3 text-white">
          <h2 className="heading-2">FAQ Page</h2>

          <ul className="flex items-center justify-start gap-2 pt-3 font-medium">
            <li>
              <a href="./index.html">Home</a>
            </li>
            <li className="text-r300">
              <i className="ph ph-caret-double-right"></i>
            </li>
            <li className="text-r300">FAQ</li>
          </ul>
        </div>
      </section>
      <section className="sbp-30">
        <div className="container -mt-40 rounded-xl bg-white p-2 sm:p-4 md:rounded-3xl xl:rounded-[60px] xl:p-15">
          <FaqInfo />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FAQPage;
