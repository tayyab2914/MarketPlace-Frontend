import React from "react";
import CPPMobileMenu from "./CPPMobileMenu";
import { useRouter } from "next/navigation";

const CPPHeader = ({CompanyData}) => {
  console.log(CompanyData)
  const router = useRouter()
  const {
    name = "",
    company_description = "",
    phone_no = "",
    industry = "",
    location = "",
    profile_image = null
  } = CompanyData || {};
  
  return (
    <header className="header headerAbsolute left-0 right-0 top-0 z-50">
      <div className="max-xxl:container xxl:px-25">
        <div className="text-s1 flex items-center justify-between py-6">
          <div className="flex items-center justify-start gap-3 pb-1">
            <button className="mobileMenuOpenButton text-3xl lg:hidden">
              <i className="ph ph-list"></i>
            </button>
            <a href="#">
              <h2 className="heading-2">{name}</h2>
            </a>
          </div>

          <div className="flex items-center justify-between gap-6">
            <ul className="flex items-center justify-start gap-2 font-medium max-md:hidden xxl:gap-6">
              <li><a href="#services" className="rounded-lg px-2 py-3 duration-700">SERVICES</a></li>
              <li><a className="rounded-lg px-2 py-3 duration-700">FAQ</a></li>
            </ul>

            <div className="flex items-center justify-between gap-3 font-medium">
              <a href="./hire-me.html" className="relative flex items-center justify-center overflow-hidden rounded-full bg-b300 text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] max-xxl:size-11 max-xxl:!leading-none xxl:px-8 xxl:py-3">
                <span className="relative z-10 max-xxl:hidden"> WORK WITH ME</span>
                <i className="ph-bold ph-plus text-xl xxl:hidden"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <CPPMobileMenu />
    </header>
  );
};

export default CPPHeader;
