import React from "react";
import BreadCrumbFullWidth from "./components/BreadCrumbFullWidth";

const BreadCrumbs = ({ type = "full-width", items = [] }) => {
  return (
    <div>{type == "full-width" && <BreadCrumbFullWidth items={items} />}</div>
  );
};

export default BreadCrumbs;
