"use client";
import React from "react";
import AuthRedirect from "@/utils/AuthRedirect";
import DashboardPage from "@/features/dashboard/DashboardPage";
import DashboardNavbar from "@/features/dashboard/components/navbar/DashboardNavbar";
const page = () => {
  return (
    <AuthRedirect allowLoggedIn>
      <DashboardNavbar />
      <DashboardPage />
    </AuthRedirect>
  );
};

export default page;
