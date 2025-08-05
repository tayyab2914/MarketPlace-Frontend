import AppContainer from "@/components/layout/container/AppContainer";
import SignInPage from "@/features/accounts/components/signin/SignInPage";

import React from "react";
const page = () => {
  return (
    <>
      <AppContainer>
        <SignInPage />
      </AppContainer>
    </>
  );
};

export default page;
