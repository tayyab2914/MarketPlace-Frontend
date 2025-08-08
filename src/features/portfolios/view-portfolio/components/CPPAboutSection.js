import React from "react";
import Image from "next/image";
import { IMAGES } from "@/components/ui/Image/ImageData";
import { HexagonImage } from "@/components/decor/hexagon-image/HexagonImage";

const CPPAboutSection = ({ CompanyData }) => {
  const {
    name = "",
    company_description = "",
    location = "",
    profile_image = null,
  } = CompanyData || {};

  return (
    <section className="cpp-section">
      <div className="cpp-container">
        <div className="cpp-image-wrapper">
          <HexagonImage src={profile_image} size={320} />
        </div>

        <div className="cpp-about-text" id="about">
          <p
            className="cpp-heading-3"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="0"
          >
            {name}
          </p>

          <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="0">
            <h2 className="cpp-heading-5 cpp-pt-5">
              Here brief description of 1-2 lines will be used currently this is
              dummy line
            </h2>

            <div className="cpp-location-wrapper">
              <Image src={IMAGES.big_arrow_2} alt="Arrow" />
              <p className="cpp-heading-5">based in {location}</p>
            </div>
          </div>

          <p
            className="cpp-description"
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
