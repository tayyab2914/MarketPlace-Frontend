
import React, { useEffect, useState } from "react";
import "./styles/service-page.css";
import ServiceContent from "./components/ServiceContent";
import { useSelector } from "react-redux";
import { API_SERVICE_LIST } from "@/apis/ServiceApis";
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
      <ServiceContent Services={Services} />
    </div>
  );
};

export default ServicesPage;
