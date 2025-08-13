import Button from "@/components/ui/Button/Button";
import ReadMore from "@/components/ui/ReadMore/ReadMore";
import { ROUTES } from "@/utils/Constants";
import { useRouter } from "next/navigation";
import React from "react";
import '../styles/service-page.css'
const ServiceCard = ({ service }) => {
  const router = useRouter();
  return (
    <div className="srv-lis-cd-serviceCard">
      <div className="srv-lis-cd-leftSection">
        <p className="srv-lis-cd-companyName">
          {service?.company_name} • {service?.company_location}
        </p>

        <div className="srv-lis-cd-serviceInfo">
          <h5 className="srv-lis-cd-heading5">{service?.title}</h5>
          <p className="srv-lis-cd-description">
            <ReadMore>{service?.description}</ReadMore>
          </p>
          <div className="srv-lis-cd-tagsContainer">
            <p className="srv-lis-cd-tag">
              <img src="./assets/images/tap_icon.png" alt="" />
              <span>{service?.category}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="srv-lis-cd-rightSection">
        <p className="srv-lis-cd-startingAt">STARTING AT</p>
        <p className="srv-lis-cd-price">${service?.price_starting_from}</p>
        <p className="srv-lis-cd-fixedPrice">Fixed Price</p>
        <Button
          variant="filled-animated"
          style={{fontSize:"12px"}}
          onClick={() => router.push(`${ROUTES.viewService}${service?.id}`)}
        >
          <span>View Details</span>
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
