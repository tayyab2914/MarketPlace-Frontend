import React from "react";
import UpdateCompanyProfile from "./components/update-company-profile/UpdateCompanyProfile";

const SettingsPage = () => {
  return (
    <div className="max-w-4xl mx-auto -mt-40 rounded-xl bg-white p-2 sm:p-4 md:rounded-3xl xl:rounded-[60px] xl:p-15">
     <UpdateCompanyProfile />
    </div>
  );
};

export default SettingsPage;
