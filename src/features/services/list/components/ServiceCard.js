import { ROUTES } from "@/utils/Constants";
import { useRouter } from "next/navigation";
import React from "react";

const ServiceCard = ({ service }) => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-n30 p-3 max-md:flex-col">
      <div className="flex items-center justify-start gap-2 max-sm:flex-col">
        <div className="flex items-center justify-center self-stretch sm:w-[80%]">
          <img
            src={`./assets/images/workers_profile_service_img1.png`}
            alt=""
            className="rounded-2xl object-cover"
          />
        </div>
        <div>
          <h5 className="heading-5">{service?.title}</h5>
          <p className="">{service?.description}</p>
          <div className="flex flex-wrap gap-1 pt-3 text-sm text-n400 xxl:pt-6">
            {/* {tags.map((tag, i) => ( */}
            <p
              // key={i}
              className="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
            >
              <img src="./assets/images/tap_icon.png" alt="" />
              <span>{service?.category}</span>
            </p>
            {/* ))} */}
          </div>
        </div>
      </div>

      <div className="felx h-full w-full flex-col items-center justify-center rounded-2xl border border-n30 px-6 py-8 text-center text-n300 md:max-w-[176px]">
        <p className="text-sm font-semibold">STARTING AT</p>
        <p className="py-1 font-semibold text-r300">
          ${service?.price_starting_from}
        </p>
        <p className="pb-5 text-sm font-semibold">Fixed Price</p>
        <a
          onClick={() => router.push(`${ROUTES.viewService}${service?.id}`)}
          className="relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-3 py-2 text-sm font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-4 lg:py-3"
        >
          <span className="relative z-10">View Details</span>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
