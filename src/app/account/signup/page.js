"use client";
import AppContainer from "@/components/layout/container/AppContainer";
import SignUpPage from "@/features/accounts/components/signup/SignUpPage";
import AuthRedirect from "@/utils/AuthRedirect";

import React from "react";
const page = () => {
  return (
    <>
      {" "}
      <AuthRedirect>
        <AppContainer>
          <SignUpPage />
        </AppContainer>{" "}
      </AuthRedirect>
    </>
  );
};

export default page;
