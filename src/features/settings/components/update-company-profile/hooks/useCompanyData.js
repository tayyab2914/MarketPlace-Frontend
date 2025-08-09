import { useState, useEffect } from "react";
import { API_GET_USER_COMPANY, API_SET_USER_COMPANY } from "@/apis/AccountApis";
import { message } from "antd";
import { useDispatch } from "react-redux";

export const useCompanyData = (token) => {
  const [companyData, setCompanyData] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()

  const fetchCompanyData = async () => {
    setLoading(true);
    const res = await API_GET_USER_COMPANY(token,dispatch);
    const data = res?.data || {};
    setLoading(false);
    setCompanyData(data);
  };

  const updateCompanyData = async (formData) => {
    setLoading(true);
    const res = await API_SET_USER_COMPANY(token, formData);

    await fetchCompanyData();
    setLoading(false);
    return res?.data;
  };

  useEffect(() => {
    if (token) fetchCompanyData();
  }, [token]);

  return { companyData, loading, fetchCompanyData, updateCompanyData };
};
