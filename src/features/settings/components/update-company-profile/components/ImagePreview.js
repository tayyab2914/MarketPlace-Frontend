import React from "react";
import { BACKEND_DOMAIN } from "@/utils/Constants";

const ImagePreview = ({ imagePath }) => {
  if (!imagePath) return null;
  return (
    <div className="upd-comp-f-profile-image-preview" style={{ marginBottom: 16 }}>
      <img
        src={`${BACKEND_DOMAIN}${imagePath}`}
        alt="Profile Preview"
        height={80}
        style={{ borderRadius: 8, objectFit: "cover" }}
      />
    </div>
  );
};

export default ImagePreview;
