"use client";
import React from "react";
import { useSelector } from "react-redux";
import { useCompanyData } from "./hooks/useCompanyData";
import CompanyForm from "./components/CompanyForm";
import { CONVERT_COMP_FORM_TO_FORM_DATA } from "./utils/utils";
import "./styles/update-company-profile.css";
import { printFormData } from "@/utils/Methods";
const UpdateCompanyProfile = () => {
  const { token } = useSelector((state) => state.auth);
  const { companyData, loading, updateCompanyData } = useCompanyData(token);

  const handleSubmit = async (values, fileList) => {
    const formData = CONVERT_COMP_FORM_TO_FORM_DATA(values, fileList);
    printFormData(formData)
    await updateCompanyData(formData);
  };

  return (
    <CompanyForm
      companyData={companyData}
      loading={loading}
      onSubmit={handleSubmit}
    />
  );
};

export default UpdateCompanyProfile;
