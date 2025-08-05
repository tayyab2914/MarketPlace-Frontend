import { ROUTES } from "@/utils/Constants";
import { useRouter } from "next/navigation";
import React from "react";
const SignInFooter = () => {
  const router = useRouter();
  return (
    <div>
      <div class="accounts-f-footer-text">
        <p>Already have an account?</p>
        <a
          className="accounts-f-toggle-btn"
          onClick={() => router.push(ROUTES.signin)}
        >
          Sign In Here
        </a>
      </div>
    </div>
  );
};

export default SignInFooter;
