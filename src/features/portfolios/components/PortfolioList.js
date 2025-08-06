import { API_LIST_ALL_COMPANIES } from "@/apis/AccountApis";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PortfolioCard from "./PortfolioCard";
import { BACKEND_DOMAIN } from "@/utils/Constants";

const PortfolioList = () => {
  const { token } = useSelector((state) => state.auth);
  const [portfolios, setportfolios] = useState([]);

  const getPortfolios = async () => {
    const res = await API_LIST_ALL_COMPANIES(token);
    console.log(res);
    if (Array.isArray(res)) {
      setportfolios(res || []);
    }
  };

  useEffect(() => {
    getPortfolios();
  }, []);

  return (
    <div>
      <section className="mt-[80px]">
        <div className="4xl:large-container grid grid-cols-12 gap-6 overflow-hidden rounded-2xl bg-white p-4 max-4xl:mx-4 sm:p-10">
          <div className="col-span-12">
            <h4 className="heading-4">Order Status</h4>
          </div>

          <div className="col-span-12 flex flex-col gap-4">
            {portfolios.map((portfolio) => (
              <PortfolioCard key={portfolio.id} portfolio={portfolio} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioList;
