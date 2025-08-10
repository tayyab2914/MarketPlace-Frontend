import React from "react";
import { Select } from "antd";
import { TO_SENTENCE_CASE } from "@/utils/Methods";

const CategoryDropdown = ({ selected, setSelected, categories = [] }) => {
  return (
    <Select
      placeholder="Select Category"
      value={selected || undefined}
      onChange={(value) => setSelected(value || "")}
      options={categories.map((cat) => ({
        value: cat,
        label: TO_SENTENCE_CASE(cat),
      }))}
      style={{ width: "100%",height:"40px" }}
    />
  );
};

export default CategoryDropdown;
