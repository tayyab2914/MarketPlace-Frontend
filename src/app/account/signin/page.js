"use client";
import AppContainer from "@/components/layout/container/AppContainer";
import SignInPage from "@/features/accounts/components/signin/SignInPage";

import React from "react";
const page = () => {
  return (
    <>
      <AuthRedirect>
        <AppContainer>
          <SignInPage />
        </AppContainer>
      </AuthRedirect>
    </>
  );
};

export default page;
