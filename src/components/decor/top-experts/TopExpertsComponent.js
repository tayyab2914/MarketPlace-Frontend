import { ROUTES } from "@/utils/Constants";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const TopExpertsComponent = () => {
  const router = useRouter();
  const { pages_content } = useSelector((state) => state.pages);
  const { header, experts } = pages_content?.topExperts || {};

  return (
    <section className="stp-30 sbp-30">
      <div className="container">
        <div className="flex items-center justify-between gap-2">
          <div className="flex max-w-[600px] flex-col">
            <h2 className="heading-2 font-bold text-n900">
              Top{" "}
              <span className="text-b300 underline">
                {header?.highlightWord}
              </span>
            </h2>
            <p className="pt-4 font-medium text-n500">{header?.description}</p>
          </div>
          <div>
            <a
              onClick={() => router.push(ROUTES.portfolios)}
              className="flex items-center justify-start gap-3 font-bold duration-300 hover:text-b300"
            >
              {header?.allExpertsLink?.text}
              <i className={header?.allExpertsLink?.iconClass}></i>
            </a>
          </div>
        </div>

        {/* Experts List */}
        <div className="stp-15 grid grid-cols-12 gap-6">
          {experts?.map((expert, key) => (
            <div
              key={key}
              className="col-span-12 flex flex-col gap-6 rounded-3xl border border-n40 bg-n10 py-6 md:col-span-6 xl:col-span-4"
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="1000"
            >
              <div className="flex items-center justify-start gap-3 px-6">
                <div className="relative max-md:overflow-hidden">
                  <img
                    src={expert?.verifiedBadgeImage}
                    alt="Verified badge"
                    className="absolute bottom-3 right-1 z-30"
                  />
                </div>

                <div className="max-[350px]:max-w-20">
                  <div className="flex items-center justify-start gap-3">
                    <h5 className="heading-5">{expert?.name}</h5>
                    {expert?.badges?.map((badge, i) => (
                      <p
                        key={i}
                        className="rounded-full bg-y300 px-2 py-1 text-xs font-medium"
                      >
                        {badge}
                      </p>
                    ))}
                  </div>
                  <p className="pt-2 text-n500">{expert?.location}</p>
                </div>
              </div>

              {/* Pricing & tags */}
              <div className="flex flex-wrap gap-2 px-6 text-[13px]">
                <p className="rounded-full bg-r50 px-2 py-1 font-medium text-r300">
                  {expert?.priceRange}
                </p>
                {expert?.tags?.map((tag, i) => (
                  <p
                    key={i}
                    className="rounded-full bg-g50 px-2 py-1 font-medium text-g400"
                  >
                    {tag}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 px-6 text-n400">
                {expert?.skills?.map((skill, i) => (
                  <p
                    key={i}
                    className="rounded-xl bg-b50 px-3 py-2 font-medium flex items-center gap-2"
                  >
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopExpertsComponent;
