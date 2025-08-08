import React from "react";
import { ABOUT_US_CONTENT } from "@/constants/static-pages/about-us";

const AboutInfo = () => {
  const {
    experienceYears = 0,
    images = [],
    title = "",
    subtitle = "",
    description = "",
    features = [],
    knowMoreLink = "",
    knowMoreText = "",
  } = ABOUT_US_CONTENT;

  return (
    <div className="container -mt-40 rounded-xl bg-white p-2 sm:p-4 md:rounded-3xl xl:rounded-[60px] xl:p-15">
      <section className="stp-0 sbp-15">
        <div className="container grid grid-cols-12 max-xl:gap-6">
          <div className="col-span-12 lg:col-span-7 xl:col-span-6">
            <div className="flex items-start justify-start gap-4 sm:gap-8">
              <div className="overflow-hidden rounded-2xl">
                <img src={images[0]} alt="About Us Image 1" />
              </div>
              <div className="flex flex-col items-center justify-center md:mt-16 xl:mt-4">
                <p className="display-3 font-extrabold text-b300">
                  0
                  <span
                    className="odometer"
                    data-odometer-final={experienceYears}
                  >
                    0
                  </span>
                  +
                </p>
                <p className="text-lg font-medium sm:min-w-[200px] xxl:text-xl">
                  Years Experience
                </p>
              </div>
            </div>

            <div className="-mt-24 flex items-end justify-end overflow-hidden min-[370px]:-mt-40 sm:-mt-72 md:-mt-80 lg:-mt-52 xl:-mt-64 xxl:-mt-80">
              <img
                src={images[1]}
                alt="About Us Image 2"
                className="rounded-2xl max-sm:max-w-[250px] max-[480px]:max-w-[180px] max-[370px]:max-w-[130px]"
              />
            </div>
          </div>

          <div className="col-span-12 flex flex-col items-start justify-center lg:col-span-5 xl:col-start-8">
            <h5 className="heading-5 text-r300">About Us</h5>
            <h2 className="heading-2 max-w-[500px] pt-4">{title}</h2>
            <p className="pb-4 pt-3 text-n300 xl:pb-8">{description}</p>

            <ul className="ml-4 flex list-disc flex-col gap-3 pb-6 xl:pb-10">
              {features.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className="text-sm text-white">
              <a
                href={knowMoreLink}
                className="group relative flex items-center justify-start pr-12 font-semibold"
              >
                <span className="rounded-full bg-b300 px-6 py-3 duration-500 group-hover:translate-x-12 group-hover:text-white">
                  {knowMoreText}
                </span>
                <i className="ph-bold ph-arrow-up-right absolute right-0.5 top-0 translate-x-0 rounded-full bg-b300 p-[14px] text-lg leading-none text-white transition-all duration-500 group-hover:right-[178px] group-hover:rotate-[45deg] group-hover:text-white"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutInfo;
