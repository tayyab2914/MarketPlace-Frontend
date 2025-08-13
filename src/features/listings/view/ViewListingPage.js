"use client";
import { API_SERVICE_GET } from "@/apis/ServiceApis";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VSPInfo from "./components/VLPInfo";
import VSPAbout from "./components/VLPAbout";
import VSPPricing from "./components/VLPPricing";
import { Row, Col } from "antd";
import "./styles/view-listing-page.css";
import Footer from "@/components/layout/footer/Footer";
import { API_GET_LISTING_BY_ID } from "@/apis/ListingApis";

import VLPInfo from "./components/VLPInfo";
import VLPPricing from "./components/VLPPricing";
import VLPAbout from "./components/VLPAbout";

const ViewListingPage = ({ listing_id }) => {
  const { token } = useSelector((state) => state.auth);
  const [ListingDetails, setListingDetails] = useState({});
  const router = useRouter();

  console.log(listing_id)
  const getListingById = async (id) => {
    const res = await API_GET_LISTING_BY_ID(token, listing_id);
    setListingDetails(res?.data);
    console.log(res)
  };

  useEffect(() => {
    getListingById();
  }, []);

  return (
    <div>
      <section className="sbp-30 pt-4">
        <div className="container">
          <Row gutter={[24, 24]}>
            <Col xs={24} lg={24}>
              <VLPInfo ListingDetails={ListingDetails} />
              <VLPAbout ListingDetails={ListingDetails} />
            </Col>
{/* 
            <Col xs={24} lg={8}>
              <VLPPricing ListingDetails={ListingDetails} />
            </Col> */}
          </Row>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default ViewListingPage;



