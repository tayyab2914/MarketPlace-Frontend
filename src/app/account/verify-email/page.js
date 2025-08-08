"use client";
import AppContainer from "@/components/layout/container/AppContainer";
import VerifyEmailPage from "@/features/accounts/components/verify-email/VerifyEmailPage";
import AuthRedirect from "@/utils/AuthRedirect";
const page = () => {
  return (
    <>
      <AuthRedirect allowLoggedIn={false}>
        <AppContainer>
          <VerifyEmailPage />
        </AppContainer>
      </AuthRedirect>
    </>
  );
};

export default page;
