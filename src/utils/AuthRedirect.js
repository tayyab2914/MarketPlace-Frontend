"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ROUTES } from "./Constants";

const AuthRedirect = ({ children, allowLoggedIn = false }) => {
  const router = useRouter();
  const { is_user_logged_in } = useSelector((state) => state.auth);

  useEffect(() => {
    if (allowLoggedIn) {
      // If allowLoggedIn=true, redirect if NOT logged in
      if (!is_user_logged_in) {
        router.push(ROUTES.signin); // or wherever you want to redirect
      }
    } else {
      // Default: redirect if logged in
      if (is_user_logged_in) {
        router.push(ROUTES.home);
      }
    }
  }, [is_user_logged_in, allowLoggedIn, router]);

  // Show nothing while redirecting
  if (allowLoggedIn && !is_user_logged_in) return null;
  if (!allowLoggedIn && is_user_logged_in) return null;

  return <>{children}</>;
};

export default AuthRedirect;
