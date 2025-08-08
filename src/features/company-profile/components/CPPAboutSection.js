import React from "react";
import Image from "next/image";
import { IMAGES } from "@/components/ui/Image/ImageData";
import { HexagonImage } from "@/components/decor/hexagon-image/HexagonImage";

const CPPAboutSection = ({ CompanyData }) => {
  const {
    name = "",
    company_description = "",
    phone_no = "",
    industry = "",
    location = "",
    profile_image = null,
  } = CompanyData || {};

  return (
    <section className="stp-30 sbp-30 mt-[100px] bg-bg2">
      <div className="container flex max-md:flex-col items-center justify-start gap-6 md:gap-10 lg:gap-20">
        <div className="max-md:overflow-hidden relative">
          <HexagonImage src={profile_image} />
        </div>

        {/* Company Info */}
        <div className="max-xl:overflow-hidden" id="about">
          <p
            className="heading-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="0"
          >
            * A 3-4 word tagline *
          </p>

          <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="0">
            <h2 className="heading-2 pt-5">
              Here brief description of 1-2 lines will be used currently this is
              dummy line
            </h2>

            <div className="flex items-center justify-start gap-4 pt-2">
              <Image src={IMAGES.big_arrow_2} alt="Arrow" />
              <h2 className="heading-2">based in {location}</h2>
            </div>
          </div>

          <p
            className="pt-6 text-base font-medium text-n300 lg:text-xl"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="0"
          >
            {company_description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CPPAboutSection;
