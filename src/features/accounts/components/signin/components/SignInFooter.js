import Button from "@/components/ui/Button/Button";
import { ROUTES } from "@/utils/Constants";
import { useRouter } from "next/navigation";
import React from "react";
const SignInFooter = () => {
  const router = useRouter();
  return (
    <div>
      <div
        className="signin-f-forgot-password"
        onClick={() => router.push(ROUTES.forgotPassword)}
      >
        Forgot Password?
      </div>
      <Button variant="filled-animated" type="submit">
        <span>Sign In</span>
      </Button>
      <div className="accounts-f-footer-text">
        <span>Don’t have an account?</span>
        <a
          className="accounts-f-toggle-btn"
          onClick={() => router.push(ROUTES.signup)}
        >
          Sign Up with Email
        </a>
      </div>
    </div>
  );
};

export default SignInFooter;
