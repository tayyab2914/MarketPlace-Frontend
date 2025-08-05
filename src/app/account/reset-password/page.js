"use client";
import AppContainer from "@/components/layout/container/AppContainer";
import { ROUTES } from "@/utils/Constants";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import React from "react";
import ResetPasswordPage from "@/features/accounts/components/reset-password/ResetPasswordPage";
const page = () => {
  const router = useRouter();
  const { is_user_logged_in } = useSelector((state) => state.auth);

  useEffect(() => {
    if (is_user_logged_in) {
      router.push(ROUTES.home);
    }
  }, []);
  return (
    <>
      {!is_user_logged_in && (
        <AppContainer>
          <ResetPasswordPage />
        </AppContainer>
      )}
    </>
  );
};

export default page;
