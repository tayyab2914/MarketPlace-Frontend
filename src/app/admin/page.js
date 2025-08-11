import AdminPage from "@/features/admin/admin-page/AdminPage";
import AuthRedirect from "@/utils/AuthRedirect";
import React from "react";

const page = () => {
  return (
    <AuthRedirect allowLoggedIn>
      <AdminPage />
    </AuthRedirect>
  );
};

export default page;
