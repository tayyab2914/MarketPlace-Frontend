// CompaniesTable.jsx
import React, { useState, useMemo } from "react";
import { Table, Input } from "antd";
import { FILTER_LISTINGS_BY_SEARCH } from "../../utils/utils";
import { getListingsTableColumns } from "./ListingTableColumns";

const { Search } = Input;

const ListingTable = ({ data, onView, onEdit }) => {
  const [searchText, setSearchText] = useState("");

  const columns = getListingsTableColumns(onView, onEdit);

  const filteredData = useMemo(
    () => FILTER_LISTINGS_BY_SEARCH(searchText, data),
    [data, searchText]
  );

  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      <Search
        placeholder="Search by name, industry, location or phone"
        allowClear
        onChange={(e) => setSearchText(e.target.value)}
        style={{ marginBottom: 16, maxWidth: 300 }}
      />
      <Table
        dataSource={filteredData}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 10, showSizeChanger: true }}
        bordered
        size="middle"
      />
    </div>
  );
};

export default ListingTable;
