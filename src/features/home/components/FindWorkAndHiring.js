import { HexagonImage } from "@/components/decor/hexagon-image/HexagonImage";
import { ArrowRight } from "lucide-react";
import React from "react";

const FindWorkAndHiring = ({ pages_content }) => {
  const { profiles = [] } = pages_content?.home?.findWork || {};

  console.log(pages_content);
  return (
    <section className="stp-30 sbp-30 relative">
      <div className="container relative z-10 grid grid-cols-12 overflow-hidden max-md:gap-6">
        {profiles?.map((profile, index) => (
          <div
            key={index}
            className={`col-span-12 md:col-span-5 ${
              index === 1 ? "md:col-start-8" : ""
            }`}
          >
            <div className="rounded-xl border bg-g75 p-8">
              <div className="flex items-start justify-between">
                <p className="rounded-full bg-y300 px-2 py-1 text-sm font-medium">
                  {profile?.badgeText}
                </p>
                <div className="flex items-center">
                  <img
                    src={profile?.verifyBadgeImg}
                    className=" rounded-full flex items-center justify-center"
                    style={{ maxHeight: "45px" }}
                  ></img>
                  <div className="flex gap-2 ">
                    <p className="flex items-center gap-2 text-sm font-bold text-o300">
                      <i className="ph-fill ph-star"></i> {profile?.rating}
                    </p>
                    <div className="text-sm text-n300">
                      <p>({profile?.reviewCount})</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center py-6">
                <div className="relative mb-3">
                  <HexagonImage src={profile?.reviewImage} size={250} />
                </div>
                <h5 className="heading-5">{profile?.heading}</h5>
                <p className="pt-2 text-center text-n500 sm:px-3">
                  {profile?.description}
                </p>
              </div>

              <div className="flex items-center justify-between border-b border-n40 pb-6">
                <div className="flex items-center justify-start gap-2">
                  <i className="ph ph-clock text-2xl"></i>
                  <p>{profile?.detail1}</p>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <i className="ph ph-chart-line text-2xl"></i>
                  <p>{profile?.detail2}</p>
                </div>
              </div>

              <div className="flex w-full items-center justify-center pt-8">
                <a
                  href={profile?.ctaHref}
                  className="group relative flex items-center justify-start pr-12 font-semibold"
                >
                  <span className="rounded-full bg-y300 px-6 py-3 duration-500">
                    {profile?.ctaText}
                  </span>
                  <span className="absolute right-0 top-0 p-[14px] text-xl rounded-full bg-y300 duration-500 ml-3 group-hover:rotate-360">
                    <ArrowRight size={16}/>
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FindWorkAndHiring;
