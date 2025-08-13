import Button from "@/components/ui/Button/Button";
import { ROUTES } from "@/utils/Constants";
import { useRouter } from "next/navigation";
import React from "react";

const AddOfferBtn = () => {
  const router = useRouter();
  return (
    <Button
      variant="filled-animated"
      onClick={() => router.push(ROUTES?.createOffer)}
      style={{ maxWidth: "180px", marginRight: "20px" }}
    >
      + Add Offer
    </Button>
  );
};

export default AddOfferBtn;
