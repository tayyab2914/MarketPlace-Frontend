import React from "react";
import BreadCrumbFullWidth from "./components/BreadCrumbFullWidth";
import "./styles/breadcrumb.css";
import BreadCrumbNormal from "./components/BreadCrumbNormal";
const BreadCrumbs = ({ type = "full-width", items = [] }) => {
  return (
    <>
      {type == "full-width" && <BreadCrumbFullWidth items={items} />}
      {type == "normal" && <BreadCrumbNormal items={items} />}
    </>
  );
};

export default BreadCrumbs;
