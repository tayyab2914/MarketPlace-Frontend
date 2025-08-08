import React, { useEffect, useState } from "react";
import CPPHeader from "./components/CPPHeader";
import CPPAboutSection from "./components/CPPAboutSection";
import CPPPPortfolioSection from "./components/CPPPortfolioSection";
import CPPCallToAction from "./components/CPPCallToAction";
import CPPFooter from "./components/CPPFooter";
import { API_GET_COMPANY_BY_ID } from "@/apis/AccountApis";
import { useSelector } from "react-redux";
import "./styles/view-portfolio.css";
import Footer from "@/components/layout/footer/Footer";

const SinglePortfolioPage = ({ company_id }) => {
  const { token } = useSelector((state) => state.auth);
  const [CompanyData, setCompanyData] = useState({});

  const getCompanyDetails = async () => {
    const res = await API_GET_COMPANY_BY_ID(token, company_id);
    console.log(res);
    setCompanyData(res);
  };
  useEffect(() => {
    console.log(company_id);
    getCompanyDetails();
  }, []);
  return (
    <div>
      <div>
        <CPPAboutSection CompanyData={CompanyData} />
        <CPPPPortfolioSection CompanyData={CompanyData} />
        <CPPCallToAction CompanyData={CompanyData} />
        {/* <CPPFooter /> */}
        <Footer />
      </div>
    </div>
  );
};

export default SinglePortfolioPage;
