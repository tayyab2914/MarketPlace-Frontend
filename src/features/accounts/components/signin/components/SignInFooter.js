import Button from "@/components/ui/Button/Button";
import { ROUTES } from "@/utils/Constants";
import { useRouter } from "next/navigation";
import React from "react";
const SignInFooter = () => {
  const router = useRouter();
  return (
    <div>
      <div
        class="signin-f-forgot-password"
        onClick={() => router.push(ROUTES.forgotPassword)}
      >
        Forgot Password?
      </div>
      <Button variant="filled-animated" htmlType="submit">
        <span>Sign In</span>
      </Button>
      <div class="accounts-f-footer-text">
        <p>Don’t have an account?</p>
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
