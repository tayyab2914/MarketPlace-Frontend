import React, { useEffect, useState } from "react";
import CPPHeader from "./components/CPPHeader";
import CPPAboutSection from "./components/CPPAboutSection";
import CPPPPortfolioSection from "./components/CPPPortfolioSection";
import CPPCallToAction from "./components/CPPCallToAction";
import CPPFooter from "./components/CPPFooter";
import { API_GET_COMPANY_PROFILE } from "@/apis/AccountApis";
import { useSelector } from "react-redux";

const CompanyProfilePage = ({ company_id }) => {
  const { token } = useSelector((state) => state.auth);
  const [CompanyData, setCompanyData] = useState({});

  const getCompanyDetails = async () => {
    const res = await API_GET_COMPANY_PROFILE(token);
    console.log(res);
    setCompanyData(res?.data)
    //   {
    //     "message": "Company profile retrieved successfully.",
    //     "data": {
    //         "name": "Muhaman Ijaz",
    //         "company_description": null,
    //         "phone_no": "03224922848",
    //         "industry": "Rugs",
    //         "location": "Naulakha Bazar Lahore",
    //         "profile_image": null
    //     }
    // }
  };
  useEffect(() => {
    console.log(company_id);
    getCompanyDetails();
  }, []);
  return (
    <div>
      <div>
        <CPPHeader CompanyData={CompanyData}/>
        <CPPAboutSection CompanyData={CompanyData}/>
        <CPPPPortfolioSection CompanyData={CompanyData}/>
        <CPPCallToAction CompanyData={CompanyData}/>
        <CPPFooter />
      </div>
    </div>
  );
};

export default CompanyProfilePage;
