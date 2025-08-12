"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ROUTES } from "./Constants";

const AuthRedirect = ({ children, allowLoggedIn = false, isAdmin = false }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { is_user_logged_in, is_admin } = useSelector((state) => state.auth);

  useEffect(() => {
    if (allowLoggedIn) {
      // Allow logged-in users, redirect if NOT logged in
      if (!is_user_logged_in) {
        router.push(ROUTES.signin);
        return;
      }

      // If admin mode, allow only /admin routes
      if (isAdmin) {
        if (!pathname.startsWith("/admin")) {
          router.push("/admin"); // Or an admin dashboard route
          return;
        }
        if (!is_admin) {
          router.push(ROUTES.home); // Non-admin trying to access admin route
          return;
        }
      }
    } else {
      // Default: redirect if logged in
      if (is_user_logged_in) {
        router.push(ROUTES.home);
      }
    }
  }, [is_user_logged_in, allowLoggedIn, isAdmin, is_admin, pathname, router]);

  // While redirecting, render nothing
  if (allowLoggedIn && !is_user_logged_in) return null;
  if (!allowLoggedIn && is_user_logged_in) return null;
  if (isAdmin && (!pathname.startsWith("/admin") || !is_admin)) return null;

  return <>{children}</>;
};

export default AuthRedirect;
