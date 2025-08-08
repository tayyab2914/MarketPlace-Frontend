"use client";
import AppContainer from "@/components/layout/container/AppContainer";
import ResetPasswordPage from "@/features/accounts/components/reset-password/ResetPasswordPage";
import AuthRedirect from "@/utils/AuthRedirect";
const page = () => {
  return (
    <>
      <AuthRedirect allowLoggedIn={false}>
        <AppContainer>
          <ResetPasswordPage />
        </AppContainer>
      </AuthRedirect>
    </>
  );
};

export default page;
