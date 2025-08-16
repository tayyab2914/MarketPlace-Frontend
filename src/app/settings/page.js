import BreadCrumbs from "@/components/layout/breadcrumb/BreadCrumbs";
import Navbar from "@/components/layout/navbar/Navbar";
import SettingsPage from "@/features/settings/SettingsPage";
import AuthRedirect from "@/utils/AuthRedirect";
import { BREADCRUMBS } from "@/utils/BreadCrumbs";
import React from "react";

const page = () => {
  return (
    <AuthRedirect allowLoggedIn>
      <Navbar />
      <BreadCrumbs items={BREADCRUMBS?.settings}/>
      <SettingsPage />
    </AuthRedirect>
  );
};

export default page;
