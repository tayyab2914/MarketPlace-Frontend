"use client";
import { API_SERVICE_GET } from "@/apis/ServiceApis";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VSPInfo from "./components/VSPInfo";
import VSPAbout from "./components/VSPAbout";
import VSPPricing from "./components/VSPPricing";
import { Row, Col } from "antd";
import "./styles/view-service-page.css";
import Footer from "@/components/layout/footer/Footer";

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
      <section className="sbp-30 pt-4">
        <div className="container">
          <Row gutter={[24, 24]}>
            <Col xs={24} lg={16}>
              <VSPInfo ServiceDetails={ServiceDetails} />
              <VSPAbout ServiceDetails={ServiceDetails} />
            </Col>

            <Col xs={24} lg={8}>
              <VSPPricing ServiceDetails={ServiceDetails} />
            </Col>
          </Row>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default ViewServicePage;
