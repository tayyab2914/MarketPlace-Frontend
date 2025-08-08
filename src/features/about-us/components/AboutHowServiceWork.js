import React from "react";
import { ABOUT_US_CONTENT } from "@/constants/static-pages/about-us";

const AboutHowServiceWork = () => {
  const howWorks = ABOUT_US_CONTENT?.howDoesItWork || [];

  return (
    <section className="stp-30 sbp-30 bg-n900">
      <div className="container text-white">
        <h2 className="heading-2 text-center">
          {ABOUT_US_CONTENT?.howDoesItWorkTitle}
        </h2>

        <div className="stp-15 grid grid-cols-12 gap-6">
          {howWorks?.map(({ icon: Icon, title, description }, idx) => (
            <div
              key={idx}
              className="col-span-12 flex flex-col items-center justify-center text-center md:col-span-4"
            >
              <div className="flex items-center justify-center rounded-full bg-white p-[14px] text-n900">
                <Icon className="text-3xl !leading-none" />
              </div>
              <div className="max-w-[380px]">
                <h5 className="heading-5 pt-10">{title}</h5>
                <p className="pt-3">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHowServiceWork;
