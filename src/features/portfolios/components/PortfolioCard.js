import { ROUTES } from "@/utils/Constants";
import { useRouter } from "next/navigation";
import React from "react";

const PortfolioCard = ({ portfolio }) => {
  const services = portfolio?.services || [];
  const router = useRouter();

  // Get the minimum price (ignoring nulls)
  const minPrice = services
    .map((s) => s.price_starting_from)
    .filter((p) => p != null)
    .sort((a, b) => a - b)[0];

  // Extract unique categories
  const uniqueCategories = [
    ...new Set(services.map((s) => s.category).filter(Boolean)),
  ];
  const categoriesToShow = uniqueCategories.slice(0, 6);
  const remainingCount = uniqueCategories.length - categoriesToShow.length;

  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-n30 p-3 max-md:flex-col">
      {/* Left Side */}
      <div className="flex items-center justify-start gap-6 max-xxl:gap-2 max-sm:flex-col">
        {/* Profile Image */}
        <div className="flex items-center justify-center self-stretch w-[150px] h-[150px]">
          <img
            src={
              portfolio?.profile_image ||
              "/assets/images/workers_profile_service_img-2.png"
            }
            className="min-w-[150px] h-auto object-contain rounded-2xl w-full pe-2"
            alt={portfolio?.name || "Service Provider"}
          />
        </div>

        {/* Info */}
        <div>
          <h3 className="heading-3">{portfolio?.name || "No Name Provided"}</h3>
          <p>{portfolio?.company_description}</p>

          {/* Categories */}
          <div className="flex flex-wrap gap-1 pt-3 text-sm text-n400 xxl:pt-6">
            {categoriesToShow.map((category, idx) => (
              <p
                key={idx}
                className="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
              >
                <span>{category}</span>
              </p>
            ))}
            {remainingCount > 0 && (
              <p className="flex items-center justify-center gap-2 rounded-xl bg-b100 px-3 py-2 font-medium text-b400">
                +{remainingCount} more
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Right Side: Pricing */}
      <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl border border-n30 px-6 py-8 text-center text-n300 md:max-w-[176px]">
        <div className="text-sm font-semibold">STARTING AT</div>
        <div className="py-1 font-semibold text-r300">
          {minPrice ? `Rs ${minPrice}` : "Not Set"}
        </div>
        <div className="pb-5 text-sm font-semibold">Fixed Price</div>
        <a
          onClick={() => router.push(`${ROUTES.viewPortfolio}${portfolio.id}`)}
          className="relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-3 py-2 text-sm font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-4 lg:py-3"
        >
          <span className="relative z-10">View Details</span>
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;

