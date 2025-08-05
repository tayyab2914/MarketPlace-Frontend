"use client";

import React, { useEffect, useRef, useState } from "react";
import { Spin, Typography } from "antd";
import { API_VERIFY_EMAIL } from "@/apis/AccountApis";
import { useDispatch } from "react-redux";
import { setUserAuthToken } from "@/redux/actions/authActions";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/utils/Constants";
import { extractTokenAndEmail } from "../../utils/utils";

const { Text } = Typography;

const VerifyEmailForm = ({ next = ROUTES.home }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState(null);
  const hasVerifiedRef = useRef(false); // to prevent double call

  const verifyEmail = async (token, email) => {
    const res = await API_VERIFY_EMAIL({ token, email });
    if (res) {
      dispatch(setUserAuthToken(token));
      router.push(next);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (hasVerifiedRef.current) return; // block repeat
    hasVerifiedRef.current = true;

    const { token, email } = extractTokenAndEmail();
    setEmail(email);
    verifyEmail(token, email);
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <Spin size="large" />
        <Text style={{ display: "block", marginTop: 16 }}>
          Verifying your identity...
        </Text>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <Text>Verification complete for {email}</Text>
    </div>
  );
};

export default VerifyEmailForm;
