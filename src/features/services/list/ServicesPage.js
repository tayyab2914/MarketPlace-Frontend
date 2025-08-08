import Navbar from "@/components/layout/navbar/Navbar";
import React, { useEffect, useState } from "react";
import ServiceHeader from "./components/ServiceHeader";
import "./styles/service-page.css";
import ServiceContent from "./components/ServiceContent";
import { useSelector } from "react-redux";
import { API_SERVICE_LIST } from "@/apis/ServiceApis";
import BreadCrumbs from "@/components/layout/breadcrumb/BreadCrumbs";
import { BREADCRUMBS } from "@/utils/BreadCrumbs";
const ServicesPage = () => {
  const { token } = useSelector((state) => state.auth);
  const [Services, setServices] = useState([]);

  const getServices = async () => {
    const res = await API_SERVICE_LIST(token);
    setServices(res);
    console.log(res);
  };
  useEffect(() => {
    getServices();
  }, []);

  return (
    <div>
      <Navbar />
      {/* <ServiceHeader /> */}
      <BreadCrumbs items={BREADCRUMBS?.servicesList} />
      <ServiceContent Services={Services} />
    </div>
  );
};

export default ServicesPage;
