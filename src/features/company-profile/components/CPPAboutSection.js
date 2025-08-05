import { IMAGES } from "@/components/ui/Image/ImageData";
import Image from "next/image";
import React from "react";

const CPPAboutSection = () => {
  return (
    <section class="stp-30 sbp-30 mt-[100px] bg-bg2">
      <div class="container flex items-center justify-start gap-6 max-md:flex-col md:gap-10 lg:gap-20">
        <div class="max-md:overflow-hidden">
          <div class="hexagon-styles my-[calc(300px*0.5/2)] h-[calc(300px*0.57736720554273)] w-[300px] rounded-[calc(300px/36.75)] bg-b50 before:rounded-[calc(300px/18.75)] after:rounded-[calc(300px/18.75)]">
            <div class="absolute -top-[60px] left-4">
              <div class="hexagon-styles z-10 my-[calc(270px*0.5/2)] h-[calc(270px*0.57736720554273)] w-[270px] rounded-[calc(270px/50)] bg-b300 before:rounded-[calc(270px/50)] after:rounded-[calc(270px/50)]">
                <div class="absolute -top-[55px] left-2.5 z-20">
                  <div class="hexagon-styles z-10 my-[calc(250px*0.5/2)] h-[calc(250px*0.57736720554273)] w-[250px] rounded-[calc(250px/50)] bg-b50 before:rounded-[calc(250px/50)] after:rounded-[calc(250px/50)]">
                    <div class="r-hex3 absolute -left-1.5 -top-[56px] z-30 inline-block w-[260px] overflow-hidden">
                      <div class="r-hex-inner3">
                        <div class="expertImgBig r-hex-inner-3 before:h-[260px] before:bg-cover"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="max-xl:overflow-hidden" id="about">
          <p
            class="heading-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="0"
          >
            Spotless Solutions
          </p>
          <div
            class=""
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="0"
          >
            <h2 class="heading-2 pt-5">
              Albert Flores is a<span class="underline">Cleaning services</span>
            </h2>
            <div class="flex items-center justify-start gap-4 pt-2">
              <Image src={IMAGES.big_arrow_2} alt="" />
              <h2 class="heading-2">based in Taiwan</h2>
            </div>
          </div>
          <p
            class="pt-6 text-base font-medium text-n300 lg:text-xl"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="0"
          >
            we are committed to providing top-quality cleaning services tailored
            to meet your specific needs. With years of experience in the
            industry, our team of professional cleaners is dedicated to
            delivering exceptional results,
          </p>
        </div>
      </div>
    </section>
  );
};

export default CPPAboutSection;
