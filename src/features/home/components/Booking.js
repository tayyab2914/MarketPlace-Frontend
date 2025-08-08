import { HOME_CONTENT } from "@/constants/static-pages/home";
import React from "react";
const Booking = () => {
  const {
    titleSmall,
    features,
    heading,
    description,
    subDescription,
    cta,
    imageSrc,
  } = HOME_CONTENT?.booking;

  return (
    <section className="stp-30 sbp-30">
      <div className="container grid grid-cols-12 max-lg:gap-6">
        <div className="relative col-span-12 lg:col-span-6">
          <div className="overflow-hidden pb-6 pl-6">
            <img
              src={imageSrc}
              alt=""
              className="relative z-10 overflow-hidden rounded-2xl"
            />
          </div>
          <div className="absolute bottom-0 left-0 h-[250px] w-[200px] rounded-2xl bg-n900 sm:h-[300px] lg:w-[300px] xl:h-[600px]"></div>
        </div>

        <div className="col-span-12 flex flex-col items-start justify-center lg:col-span-5 lg:col-start-8">
          <h5 className="heading-5 pb-4 text-r300">{titleSmall}</h5>
          <ul className="flex flex-wrap items-center justify-start gap-3">
            {features.map(({ iconClass, text }, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <i className={`${iconClass} text-xl !leading-none`}></i> {text}
              </li>
            ))}
          </ul>

          <h2 className="heading-2 max-w-[400px] pt-6 font-bold sm:pt-8">
            {heading}
          </h2>
          <p className="pt-4 font-medium text-n500">{description}</p>
          <p className="pb-6 pt-4 font-medium text-n800 sm:pb-10 sm:pt-8">
            {subDescription}
          </p>
          <div>
            <a
              href={cta.href}
              className="group relative flex items-center justify-start pr-12 font-semibold"
            >
              <span className="rounded-full bg-y300 px-6 py-3 duration-500 group-hover:translate-x-12">
                {cta.text}
              </span>
              <i className="ph-bold ph-arrow-up-right absolute right-0 top-0 translate-x-0 rounded-full bg-y300 p-[14px] text-xl !leading-none duration-500 group-hover:right-[154px] group-hover:rotate-45"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
