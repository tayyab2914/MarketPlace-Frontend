import React, { useState } from "react";

const ServiceDropdown = ({ selected, setSelected, services = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="lis-p-services"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <span className="lis-p-service-text">
        {selected || <span><span className="lis-p-hide-400">Select your</span> service</span>}
      </span>
      <i className="ph ph-caret-down"></i>

      {isOpen && (
        <div className="lis-p-dropdown">
          {services.map((service) => (
            <p
              key={service}
              className="lis-p-service-item"
              onClick={() => {
                setSelected(service);
                setIsOpen(false);
              }}
            >
              {service}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceDropdown;
