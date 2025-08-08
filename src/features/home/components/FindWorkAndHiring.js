import React from "react";
import { HOME_CONTENT } from "@/constants/static-pages/home";

const FindWorkAndHiring = () => {
  const { leftBgClass, rightBgClass, profiles } = HOME_CONTENT?.findWork;

  return (
    <section className="stp-30 sbp-30 relative">
      <div
        className={`absolute left-0 top-0 w-full max-md:h-1/2 md:bottom-0 md:w-1/2 ${leftBgClass}`}
      ></div>
      <div
        className={`absolute bottom-0 right-0 w-full max-md:h-1/2 md:top-0 md:w-1/2 ${rightBgClass}`}
      ></div>
      <div className="container relative z-10 grid grid-cols-12 overflow-hidden max-md:gap-6">
        {/* Left Profile */}
        <div className="col-span-12 grid grid-cols-6 max-sm:pb-6 sm:max-md:pb-24 md:col-span-5">
          <div className="col-span-6 rounded-xl border bg-g75 p-8 lg:col-span-5">
            <div className="flex items-start justify-between">
              <p className="rounded-full bg-y300 px-2 py-1 text-sm font-medium">
                {profiles[0].badgeText}
              </p>
              <div>
                <img
                  src={profiles[0].reviewImage}
                  alt=""
                  className="w-[75px]"
                />
                <div className="flex gap-2 pt-2">
                  <p className="flex items-center justify-start gap-2 text-sm font-bold !leading-none text-o300">
                    <i className="ph-fill ph-star"></i> {profiles[0].rating}
                  </p>
                  <div className="text-sm text-n300">
                    <p>({profiles[0].reviewCount})</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center py-6">
              <div className="relative max-md:overflow-hidden">
                <div className="hexagon-styles my-[calc(200px*0.5/2)] h-[calc(200px*0.57736720554273)] w-[200px] rounded-[calc(200px/36.75)] bg-b50 before:rounded-[calc(200px/18.75)] after:rounded-[calc(200px/18.75)]">
                  <div className="absolute -top-11 left-[5px]">
                    <div className="hexagon-styles z-10 my-[calc(190px*0.5/2)] h-[calc(190px*0.57736720554273)] w-[190px] rounded-[calc(190px/50)] bg-b300 before:rounded-[calc(190px/50)] after:rounded-[calc(190px/50)]">
                      <div className="absolute -top-[42px] left-[5px] z-20">
                        <div className="hexagon-styles z-10 my-[calc(180px*0.5/2)] h-[calc(180px*0.57736720554273)] w-[180px] rounded-[calc(180px/50)] bg-b50 before:rounded-[calc(180px/50)] after:rounded-[calc(180px/50)]">
                          <div className="r-hex3 absolute -left-[5px] -top-[43px] z-30 inline-block w-[190px] overflow-hidden">
                            <div className="r-hex-inner3">
                              <div
                                className={`${profiles[0].hexagonImgClass} r-hex-inner-3 before:h-[190px] before:bg-cover`}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-5 right-1 z-30">
                  <img src={profiles[0].verifyBadgeImg} alt="" />
                </div>
              </div>
              <div className="pt-3">
                <div className="flex flex-col items-center justify-start gap-3">
                  <h5 className="heading-5">{profiles[0].heading}</h5>
                </div>
                <p className="pt-2 text-center text-n500 sm:px-3">
                  {profiles[0].description}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-n40 pb-6">
              <div className="flex items-center justify-start gap-2">
                <i className="ph ph-clock text-2xl !leading-none"></i>
                <p>{profiles[0].detail1}</p>
              </div>
              <div className="flex items-center justify-start gap-2">
                <i className="ph ph-chart-line text-2xl !leading-none"></i>
                <p>{profiles[0].detail2}</p>
              </div>
            </div>
            <div className="flex w-full items-center justify-center pt-8">
              <a
                href={profiles[0].ctaHref}
                className="group relative flex items-center justify-start pr-12 font-semibold"
              >
                <span className="rounded-full bg-g300 px-6 py-3 duration-500 group-hover:translate-x-12">
                  {profiles[0].ctaText}
                </span>
                <i className="ph-bold ph-arrow-up-right absolute right-0 top-0 translate-x-0 rounded-full bg-g300 p-[14px] text-xl !leading-none duration-500 group-hover:right-[152px] group-hover:rotate-45"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Right Profile */}
        <div className="col-span-12 flex flex-col items-start max-sm:pt-6 md:col-span-5 md:col-start-8">
          <div className="col-span-12 grid grid-cols-6 sm:col-span-5">
            <div className="col-span-6 rounded-xl border bg-r50 p-8 lg:col-span-5 lg:col-start-2">
              <div className="flex items-start justify-between">
                <p className="rounded-full bg-y300 px-2 py-1 text-sm font-medium">
                  {profiles[1].badgeText}
                </p>
                <div>
                  <img
                    src={profiles[1].reviewImage}
                    alt=""
                    className="w-[75px]"
                  />
                  <div className="flex gap-2 pt-2">
                    <p className="flex items-center justify-start gap-2 text-sm font-bold !leading-none text-o300">
                      <i className="ph-fill ph-star"></i> {profiles[1].rating}
                    </p>
                    <div className="text-sm text-n300">
                      <p>({profiles[1].reviewCount})</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center py-6">
                <div className="relative max-md:overflow-hidden">
                  <div className="hexagon-styles my-[calc(200px*0.5/2)] h-[calc(200px*0.57736720554273)] w-[200px] rounded-[calc(200px/36.75)] bg-b50 before:rounded-[calc(200px/18.75)] after:rounded-[calc(200px/18.75)]">
                    <div className="absolute -top-11 left-[5px]">
                      <div className="hexagon-styles z-10 my-[calc(190px*0.5/2)] h-[calc(190px*0.57736720554273)] w-[190px] rounded-[calc(190px/50)] bg-b300 before:rounded-[calc(190px/50)] after:rounded-[calc(190px/50)]">
                        <div className="absolute -top-[42px] left-[5px] z-20">
                          <div className="hexagon-styles z-10 my-[calc(180px*0.5/2)] h-[calc(180px*0.57736720554273)] w-[180px] rounded-[calc(180px/50)] bg-b50 before:rounded-[calc(180px/50)] after:rounded-[calc(180px/50)]">
                            <div className="r-hex3 absolute -left-[5px] -top-[43px] z-30 inline-block w-[190px] overflow-hidden">
                              <div className="r-hex-inner3">
                                <div
                                  className={`${profiles[1].hexagonImgClass} r-hex-inner-3 before:h-[190px] before:bg-cover`}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-5 right-1 z-30">
                    <img src={profiles[1].verifyBadgeImg} alt="" />
                  </div>
                </div>
                <div className="pt-3">
                  <div className="flex flex-col items-center justify-start gap-3">
                    <h5 className="heading-5">{profiles[1].heading}</h5>
                  </div>
                  <p className="pt-2 text-center text-n500 sm:px-3">
                    {profiles[1].description}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between border-b border-n40 pb-6">
                <div className="flex items-center justify-start gap-2">
                  <i className="ph ph-clock text-2xl !leading-none"></i>
                  <p>{profiles[1].detail1}</p>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <i className="ph ph-chart-line text-2xl !leading-none"></i>
                  <p>{profiles[1].detail2}</p>
                </div>
              </div>
              <div className="flex w-full items-center justify-center pt-8">
                <a
                  href={profiles[1].ctaHref}
                  className="group relative flex items-center justify-start pr-12 font-semibold"
                >
                  <span className="rounded-full bg-y300 px-6 py-3 duration-500 group-hover:translate-x-12">
                    {profiles[1].ctaText}
                  </span>
                  <i className="ph-bold ph-arrow-up-right absolute right-0 top-0 translate-x-0 rounded-full bg-y300 p-[14px] text-xl !leading-none duration-500 group-hover:right-[152px] group-hover:rotate-45"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindWorkAndHiring;
