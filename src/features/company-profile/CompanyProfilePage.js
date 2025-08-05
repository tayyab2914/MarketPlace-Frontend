import React, { useEffect } from "react";
import CPPHeader from "./components/CPPHeader";
import CPPAboutSection from "./components/CPPAboutSection";
import CPPPPortfolioSection from "./components/CPPPortfolioSection";
import CPPCallToAction from "./components/CPPCallToAction";
import CPPFooter from "./components/CPPFooter";
import { API_GET_COMPANY_PROFILE } from "@/apis/AccountApis";
import { useSelector } from "react-redux";

const CompanyProfilePage = ({company_id}) => {
  const { token } = useSelector((state) => state.auth);

  const getCompanyDetails = async() => {
    console.log("COMPANY CALLED",token)
    const res = await API_GET_COMPANY_PROFILE(token);
    console.log(res);
  };
  useEffect(() => {
    console.log(company_id)
    getCompanyDetails();
  }, []);
  return (
    <div>
      <div>
        helo
        <CPPHeader />
        <CPPAboutSection />
        <CPPPPortfolioSection />
        <CPPCallToAction />
        <CPPFooter />
      </div>
    </div>
  );
};

export default CompanyProfilePage;
