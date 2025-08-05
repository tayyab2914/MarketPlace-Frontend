import React from "react";
import "./styles/AppContainer.css";
const AppContainer = ({
  children,
  bgColor = "transparent",
  height = "auto",
  padding="0px 20px"
}) => {
  return (
    <div
      className="app-container-wrapper"
      style={{ backgroundColor: bgColor, height: height , }}
    >
      <div className="app-container" style={{padding:padding}}>{children}</div>
    </div>
  );
};

export default AppContainer;
