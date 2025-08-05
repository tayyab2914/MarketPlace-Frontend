"use client";
import React from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import Button from "@/components/ui/Button/Button";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/utils/Constants";

const SignupNavigation = ({
  currentStep,
  totalSteps,
  onNext,
  onPrev,
  isFinalStep,
  form
}) => {
  const router = useRouter()
  return (
    <div style={{ marginTop: 16 }}>
      {currentStep > 0 && (
        <div className="signup-f-nav-btn prev" onClick={onPrev}>
          <MoveLeft strokeWidth={1} />
          Previous
        </div>
      )}

      {currentStep < totalSteps - 1 && (
        <div className="signup-f-nav-btn next" onClick={onNext}>
          Next <MoveRight strokeWidth={1} />
        </div>
      )}

      {isFinalStep && (
        <>
          <a className="signup-f-forgot-password-link" onClick={()=>router.push(ROUTES.forgotPassword)}>Forgot Password?</a>
          <Button variant="filled-animated" type="submit">
  <span>Continue</span>
</Button>

        </>
      )}
    </div>
  );
};

export default SignupNavigation;
