import React from "react";
import "./styles/Button.css";

const Button = ({
  variant = "filled",
  children,
  onClick,
  w = "100%",
  h = "40px",
  fs = "16px",
  m = "10px 0px 0px 0px",
  style,
  className,
}) => {
  return (
    <>
      {variant == "filled-animated" && (
        <button
          className={`btn-filled-animated ${className}`}
          style={{ height: h, width: w, fontSize: fs, margin: m, ...style }}
          onClick={onClick}
        >
          <span>{children}</span>
        </button>
      )}
      {/* {variant == "outlined" && (
        <button
          className={`btn-outlined ${className}`}
          style={{ height: h, width: w, fontSize: fs, margin: m, ...style }}
          onClick={onClick}
        >
          {children}
        </button>
      )}

      {variant == "outlined-dark" && (
        <button
          className={`btn-outlined-dark ${className}`}
          style={{ height: h, width: w, fontSize: fs, margin: m, ...style }}
          onClick={onClick}
        >
          {children}
        </button>
      )}
      {variant == "outlined-filled" && (
        <button
          className={`btn-outlined-filled ${className}`}
          style={{ height: h, width: w, fontSize: fs, margin: m, ...style }}
          onClick={onClick}
        >
          {children}
        </button>
      )} */}
    </>
  );
};

export default Button;
