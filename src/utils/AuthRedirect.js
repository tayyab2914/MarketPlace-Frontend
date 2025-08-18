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
      if (!is_user_logged_in) {
        router.push(ROUTES.signin);
        return;
      }

      if (isAdmin) {
        if (!pathname.startsWith("/admin")) {
          router.push("/admin");
          return;
        }
        if (!is_admin) {
          router.push(ROUTES.home); 
          return;
        }
      }
    } else {
      if (is_user_logged_in) {
        router.push(ROUTES.home);
      }
    }
  }, [is_user_logged_in, allowLoggedIn, isAdmin, is_admin, pathname, router]);

  if (allowLoggedIn && !is_user_logged_in) return null;
  if (!allowLoggedIn && is_user_logged_in) return null;
  if (isAdmin && (!pathname.startsWith("/admin") || !is_admin)) return null;

  return <>{children}</>;
};

export default AuthRedirect;
