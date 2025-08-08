import { ROUTES } from "@/utils/Constants";
import { useRouter } from "next/navigation";
import React from "react";
const SignInFooter = () => {
  const router = useRouter();
  return (
    <div>
      <div className="acc-pg-footer-text">
        <span>Already have an account?</span>
        <a
          className="acc-pg-toggle-btn"
          onClick={() => router.push(ROUTES.signin)}
        >
          Sign In Here
        </a>
      </div>
    </div>
  );
};

export default SignInFooter;
