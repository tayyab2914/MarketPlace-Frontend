import ViewServicePage from "@/features/services/view/ViewServicePage";
import React from "react";

// Example function to fetch service by ID (replace with your actual API call)

const Page = async ({ params }) => {
  const { service_id } = params;

  return (
    <div>
      <ViewServicePage service_id={service_id} />
    </div>
  );
};

export default Page;
