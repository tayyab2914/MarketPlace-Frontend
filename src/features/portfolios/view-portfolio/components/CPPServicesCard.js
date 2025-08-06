import { IMAGES } from "@/components/ui/Image/ImageData";
import Image from "next/image";
import React from "react";

const CPPServicesCard = ({ title, image }) => (
  <div className="col-span-12 md:col-span-6">
    <div className="overflow-hidden rounded-2xl">
      <Image src={image} alt={title} />
    </div>
    <div className="flex items-center justify-between">
      <p className="heading-4">{title}</p>
      <a href="./worker-portfolio-details.html">
        <Image src={IMAGES.big_arrow_2} alt="arrow" />
      </a>
    </div>
  </div>
);

export default CPPServicesCard;
