import { ROUTES } from "@/utils/Constants";
import { useRouter } from "next/navigation";
import React from "react";
import ReadMore from "@/components/ui/ReadMore/ReadMore";
import Button from "@/components/ui/Button/Button";

const ListingCard = ({ listing }) => {
  const router = useRouter();

  console.log(listing);
  const formattedDeadline = listing?.deadline
    ? new Date(listing.deadline).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  return (
    <div
      className="lis-lis-cd-serviceCard"
      onClick={(e) => {
        router.push(`${ROUTES.viewListing}${listing?.id}`);
      }}
    >
      <div className="lis-lis-cd-leftSection">
        <p className="lis-lis-cd-companyName">
          {listing?.company_name} • {listing?.company_location}
        </p>

        <div className="lis-lis-cd-serviceInfo">
          <h5 className="lis-lis-cd-heading5">{listing?.title}</h5>
          <p className="lis-lis-cd-description">
            <ReadMore>{listing?.description}</ReadMore>
          </p>
          <div className="lis-lis-cd-tagsContainer">
            {listing?.tags?.map((tag, index) => (
              <p key={index} className="lis-lis-cd-tag">
                <img
                  src="./assets/images/cleaning_icon.svg"
                  alt=""
                  className="lis-crd-tag-icon"
                />
                <span>{tag}</span>
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="lis-lis-cd-rightSection">
        <p className="lis-lis-cd-startingAt">STARTING AT</p>
        <p className="lis-lis-cd-price">${listing?.budget}</p>
        <p className="lis-lis-cd-fixedPrice">Fixed Price</p>

        {formattedDeadline && (
          <div className="lis-crd-deadline">Deadline: {formattedDeadline}</div>
        )}
        <Button
          variant="filled-animated"
          onClick={(e) => {
            e.stopPropagation();

            router.push(`${ROUTES.createOffer}?listing_id=${listing?.id}`);
          }}
          style={{ fontSize: "12px" }}
        >
          Send Offer
        </Button>
      </div>
    </div>
  );
};

export default ListingCard;
