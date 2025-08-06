import { ROUTES } from "@/utils/Constants";
import { useRouter } from "next/navigation";
import React from "react";

const ListingCard = ({ listing }) => {
  const router = useRouter();

  // Format deadline date (e.g., "Oct 1, 2025")
  const formattedDeadline = listing?.deadline
    ? new Date(listing.deadline).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  return (
    <div className="flex w-full items-center justify-between gap-6 rounded-2xl border border-n30 px-6 py-5 max-sm:flex-col">
      {/* Left Content */}
      <div className="sm:max-w-[350px] lg:max-w-[340px] xxl:max-w-[340px]">
        {/* Title */}
        <p className="heading-5">{listing?.title}</p>

        {/* Company Name & Location */}
        <p className="text-sm text-n500 mt-2">
          <span className="font-medium">
            <u>{listing?.company_name}</u>
          </span>{" "}
          – {listing?.company_location}
        </p>

        {/* Description */}
        <div className="pt-4 text-sm text-n400 font-medium">
          <p>{listing?.description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 pt-6 text-sm font-medium text-n400">
          {listing?.tags?.map((tag, index) => (
            <p
              key={index}
              className="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2"
            >
              <img
                src="./assets/images/cleaning_icon.svg"
                alt=""
                className="w-4 h-4"
              />
              <span>{tag}</span>
            </p>
          ))}
        </div>
      </div>

      {/* Pricing & Deadline */}
      <div className="w-full rounded-2xl border border-n30 px-6 py-8 text-center font-medium text-n500 sm:w-[200px]">
        <div className="text-sm">STARTING AT</div>
        <div className="font-semibold text-r300">${listing?.budget}/hr</div>
        <div className="text-sm">Fixed Price</div>

        {/* Deadline Display */}
        {formattedDeadline && (
          <div className="text-xs text-n400 mt-2">
            Deadline: {formattedDeadline}
          </div>
        )}

        <button
          onClick={() =>
            router.push(`${ROUTES.createOffer}?listing_id=${listing?.id}`)
          }
          className="mt-4 block w-full rounded-full border border-n200 px-5 py-2 text-sm hover:bg-n100 transition"
        >
          Send Offer
        </button>
      </div>
    </div>
  );
};

export default ListingCard;
