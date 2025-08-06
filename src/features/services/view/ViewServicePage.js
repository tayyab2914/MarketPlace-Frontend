"use client";
import { API_SERVICE_GET } from "@/apis/ServiceApis";
import Navbar from "@/components/layout/navbar/Navbar";
import { ROUTES } from "@/utils/Constants";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VSPBreadCrumbs from "./components/VSPBreadCrumbs";
import VSPInfo from "./components/VSPInfo";
import VSPAbout from "./components/VSPAbout";
import VSPPricing from "./components/VSPPricing";

const ViewServicePage = ({ service_id }) => {
  const { token } = useSelector((state) => state.auth);
  const [ServiceDetails, setServiceDetails] = useState({});
  const router = useRouter();

  const getServiceById = async (id) => {
    const res = await API_SERVICE_GET(token, service_id);

    setServiceDetails(res);
  };
  useEffect(() => {
    getServiceById();
  }, []);

  return (
    <div>
      <Navbar /> {/* <section className="sbp-30 mt-[100px] bg-n20 pt-6"> */}
      <VSPBreadCrumbs />
      {/* <section className="sbp-30 stp-30"> */}
      <section className="sbp-30 pt-4">
        <div className="container grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8">
            <VSPInfo ServiceDetails={ServiceDetails} />

            <VSPAbout ServiceDetails={ServiceDetails} />
          </div>

          <div className="col-span-12 lg:col-span-4">
            <VSPPricing ServiceDetails={ServiceDetails} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewServicePage;
