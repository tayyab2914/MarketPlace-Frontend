"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ROUTES } from "./Constants";

const AuthRedirect = ({ children }) => {
  const router = useRouter();
  const { is_user_logged_in } = useSelector((state) => state.auth);

  useEffect(() => {
    if (is_user_logged_in) {
      router.push(ROUTES.home);
    }
  }, [is_user_logged_in]);

  if (is_user_logged_in) return null; // or loader

  return <>{children}</>;
};

export default AuthRedirect;
