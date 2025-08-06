import React from "react";
import Image from "next/image";
import { IMAGES } from "@/components/ui/Image/ImageData";
const HexagonImage = ({ src, size = 320, borderWidth = 10 }) => {
  const hexWidth = size;
  const hexHeight = (size * Math.sqrt(3)) / 2;  // ≈ 0.866 * size

  const outerBorder = borderWidth;
  const middleBorder = borderWidth;
  const innerBorder = borderWidth;

  // Adjust sizes proportionally for height and width at each layer:
  const middleWidth = hexWidth - 2 * outerBorder;
  const middleHeight = hexHeight - 2 * outerBorder;

  const innerWidth = middleWidth - 2 * middleBorder;
  const innerHeight = middleHeight - 2 * middleBorder;

  const imageWidth = innerWidth - 2 * innerBorder;
  const imageHeight = innerHeight - 2 * innerBorder;

  const hexClipPath =
    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";

  return (
    <div
      style={{
        width: hexWidth,
        height: hexHeight,
        backgroundColor: "white",
        padding: outerBorder,
        clipPath: hexClipPath,
        WebkitClipPath: hexClipPath,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: middleWidth,
          height: middleHeight,
          backgroundColor: "#3B82F6",
          padding: middleBorder,
          clipPath: hexClipPath,
          WebkitClipPath: hexClipPath,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: innerWidth,
            height: innerHeight,
            backgroundColor: "white",
            padding: innerBorder,
            clipPath: hexClipPath,
            WebkitClipPath: hexClipPath,
            overflow: "hidden",
          }}
        >
          <img
            src={src}
            alt="Profile"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              clipPath: hexClipPath,
              WebkitClipPath: hexClipPath,
            }}
          />
        </div>
      </div>
    </div>
  );
};



const CPPAboutSection = ({ CompanyData }) => {
  const {
    name = "",
    company_description = "",
    phone_no = "",
    industry = "",
    location = "",
    profile_image = null,
  } = CompanyData || {};

  // Build the profile image URL, fallback to a placeholder if null
  console.log(profile_image)
  const profileImageUrl = profile_image
    ? `${process.env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:8000"}${profile_image}`
    : "/default-profile.jpg"; // Replace with your default placeholder

  return (
    <section className="stp-30 sbp-30 mt-[100px] bg-bg2">
      <div className="container flex max-md:flex-col items-center justify-start gap-6 md:gap-10 lg:gap-20">
        {/* Hexagon Image Container */}
        <div className="max-md:overflow-hidden relative">
          {/* Outer Hexagon */}
    
                    <HexagonImage src="http://127.0.0.1:8000/media/profile_image/OIP_1_S4KhbjO.jpg" />

             
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

          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="0"
          >
            <h2 className="heading-2 pt-5">
              Here brief description of 1-2 lines will be used currently this is dummy line
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
