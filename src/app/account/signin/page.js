"use client";
import AppContainer from "@/components/layout/container/AppContainer";
import SignInPage from "@/features/accounts/components/signin/SignInPage";
import { ROUTES } from "@/utils/Constants";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import React from "react";
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
          <SignInPage />
        </AppContainer>
      )}
    </>
  );
};

export default page;
