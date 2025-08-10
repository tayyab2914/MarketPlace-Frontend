import React from "react";
import { Select } from "antd";

const LocationDropdown = ({ selected, setSelected, company_locations = [] }) => {
  return (
    <Select
      showSearch
      allowClear
      placeholder="Select Location"
      value={selected || undefined}
      onChange={(value) => setSelected(value || "")}
      options={company_locations.map((loc) => ({
        value: loc,
        label: loc,
      }))}
      style={{ width: "100%",height:"40px" }}
      filterOption={(input, option) =>
        option.label.toLowerCase().includes(input.toLowerCase())
      }
    />
  );
};

export default LocationDropdown;
