'use client'
import AppContainer from "@/components/layout/container/AppContainer";
import ForgotPasswordPage from "@/features/accounts/components/forgot-password/ForgotPasswordPage";
import { setUserAuthToken } from "@/redux/actions/authActions";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const page = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(setUserAuthToken("hello this is tokken"));
  }, []);
  return (
    <>
      <AppContainer>
        <ForgotPasswordPage />
        {token}
      </AppContainer>
    </>
  );
};

export default page;
