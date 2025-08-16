import React from "react";
import { ABOUT_US_CONTENT } from "@/constants/static-pages/about-us";
import * as LucideIcons from "lucide-react";

const AboutHowServiceWork = ({pages_content}) => {
  const howWorks = pages_content?.about?.howDoesItWork || [];

  return (
    <section className="stp-30 sbp-30 bg-n900">
      <div className="container text-white">
        <h2 className="heading-2 text-center">
          {ABOUT_US_CONTENT?.howDoesItWorkTitle}
        </h2>

        <div className="stp-15 grid grid-cols-12 gap-6">
        {howWorks?.map(({ icon: iconName, title, description }, idx) => {
  const IconComponent = LucideIcons[iconName]; // dynamic lookup
  if (!IconComponent) return null; // skip if icon name is invalid
  return (
    <div
      key={idx}
      className="col-span-12 flex flex-col items-center justify-center text-center md:col-span-4"
    >
      <div className="flex items-center justify-center rounded-full bg-white p-[14px] text-n900">
        <IconComponent className="text-3xl !leading-none" />
      </div>
      <div className="max-w-[380px]">
        <h5 className="heading-5 pt-10">{title}</h5>
        <p className="pt-3">{description}</p>
      </div>
    </div>
  );
})}

        </div>
      </div>
    </section>
  );
};

export default AboutHowServiceWork;
