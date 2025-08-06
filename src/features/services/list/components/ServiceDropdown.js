import React, { useState } from "react";

const ServiceDropdown = ({ selected, setSelected, services = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="srv-p-services"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <span className="srv-p-service-text">
        {selected || <span><span className="srv-p-hide-400">Select your</span> service</span>}
      </span>
      <i className="ph ph-caret-down"></i>

      {isOpen && (
        <div className="srv-p-dropdown">
          {services.map((service) => (
            <p
              key={service}
              className="srv-p-service-item"
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
