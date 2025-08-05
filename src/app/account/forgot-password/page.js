"use client";
import AppContainer from "@/components/layout/container/AppContainer";
import ForgotPasswordPage from "@/features/accounts/components/forgot-password/ForgotPasswordPage";
import AuthRedirect from "@/utils/AuthRedirect";

const page = () => {
  return (
    <>
      <AuthRedirect>
        <AppContainer>
          <ForgotPasswordPage />
        </AppContainer>
      </AuthRedirect>
    </>
  );
};

export default page;
