import { API_LIST_ALL_COMPANIES } from "@/apis/AccountApis";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PortfolioCard from "./PortfolioCard";
import { Row, Col } from "antd";

const PortfolioList = () => {
  const { token } = useSelector((state) => state.auth);
  const [portfolios, setPortfolios] = useState([]);

  const getPortfolios = async () => {
    const res = await API_LIST_ALL_COMPANIES(token);
    console.log(res);
    if (Array.isArray(res)) {
      setPortfolios(res || []);
    }
  };

  useEffect(() => {
    getPortfolios();
  }, []);

  return (
    <div>
      <section className="por-l-section">
        <div className="por-l-container">
          <Row gutter={[24, 24]} className="por-l-row">
            <Col span={24} >
              <div className="por-l-list">
                {portfolios.map((portfolio) => (
                  <PortfolioCard key={portfolio.id} portfolio={portfolio} />
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default PortfolioList;
