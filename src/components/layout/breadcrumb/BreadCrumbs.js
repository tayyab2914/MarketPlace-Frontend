import React from "react";
import BreadCrumbFullWidth from "./components/BreadCrumbFullWidth";
import "./styles/breadcrumb.css";
import BreadCrumbNormal from "./components/BreadCrumbNormal";
const BreadCrumbs = ({ type = "full-width", items = [] }) => {
  return (
    <>
      {" "}
      <div>{type == "full-width" && <BreadCrumbFullWidth items={items} />}</div>
      <div>{type == "normal" && <BreadCrumbNormal items={items} />}</div>
    </>
  );
};

export default BreadCrumbs;
