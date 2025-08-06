import { ROUTES } from "@/utils/Constants";
import { useRouter } from "next/navigation";
import React from "react";

const VSPBreadCrumbs = () => {
  const router = useRouter();
  return (
    <section className=" mt-[100px] bg-n20 pt-6  pb-2">
      <div className="container">
        <ul className="flex flex-wrap items-center justify-start gap-2 pt-3 font-medium">
          <li>
            <a onClick={() => router.push(ROUTES.home)}>Home</a>
          </li>
          <li className="">
            <i className="ph ph-caret-double-right"></i>
          </li>
          <li>
            <a onClick={() => router.push(ROUTES.listServices)}>Services</a>
          </li>
          <li className="text-r300">
            <i className="ph ph-caret-double-right"></i>
          </li>
          <li className="text-r300">Services Details</li>
        </ul>
        {/* <div className="flex items-center justify-between pt-10 max-md:gap-6 max-sm:flex-col">
        <div className="flex flex-col items-start justify-start">
          <h3 className="heading-3">Turn this search into a job post</h3>
          <p className="max-w-[500px] pt-3 text-lg font-medium text-n300">
            Post a job for free and we’ll match you with experts perfect for
            your needs.
          </p>
          <div className="pt-8">
            <a
              href="./working-processed-step-01.html"
              className="relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-4 py-2 text-lg font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3"
            >
              <span className="relative z-10">Post a job for free</span>
            </a>
          </div>
        </div>

        <div className="rounded-xl border border-b50 bg-white p-6">
          <div className="flex items-center justify-between gap-10 pb-6">
            <p className="heading-5">Your job</p>
            <p className="rounded-lg bg-b50 px-3 py-2 font-medium">
              MATCHED
            </p>
          </div>
          <div className="flex items-center justify-start">
            <div className="rounded-full bg-white p-1">
              <img
                src="/assets/images/expert_img_1.png"
                alt=""
                className="size-12 rounded-full"
              />
            </div>
            <div className="-ml-4 rounded-full bg-white p-1">
              <img
                src="/assets/images/expert_img_2.png"
                alt=""
                className="size-12 rounded-full"
              />
            </div>
            <div className="-ml-4 rounded-full bg-white p-1">
              <img
                src="/assets/images/expert_img_3.png"
                alt=""
                className="size-12 rounded-full"
              />
            </div>

            <div className="pl-8 text-2xl">
              <i className="ph-bold ph-arrow-right"></i>
            </div>
          </div>
        </div>
      </div> */}
      </div>
    </section>
  );
};

export default VSPBreadCrumbs;
