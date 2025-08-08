import { IMAGES } from "@/components/ui/Image/ImageData";
import Image from "next/image";
import React from "react";

const CPPServicesCard = ({ title, image }) => (
  <div className="service-card">
    <div className="service-image-wrapper">
      <Image src={image} alt={title} className="service-image" />
    </div>
    <div className="service-info">
      <p className="service-title">{title}</p>
      <a href="./worker-portfolio-details.html">
        <Image src={IMAGES.big_arrow_2} alt="arrow" className="service-arrow" />
      </a>
    </div>
  </div>
);

export default CPPServicesCard;
