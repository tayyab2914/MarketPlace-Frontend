import React, { useState, useMemo } from "react";
import { Table, Input } from "antd";
import useWindowWidth from "@/hooks/useWindowWidth";
import { getCompaniesTableColumns } from "./UserTableColumns";
import { FILTER_DATA_BY_SEARCH } from "../../utils/utils";

const { Search } = Input;

const CompaniesTable = ({ data, loading, onView, onEdit }) => {
  const width = useWindowWidth();
  const [searchText, setSearchText] = useState("");

  const columns = getCompaniesTableColumns(width, onView, onEdit);

  const filteredData = useMemo(
    () => FILTER_DATA_BY_SEARCH(searchText, data),
    [data, searchText]
  );

  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      <Search
        placeholder="Search.."
        allowClear
        onChange={(e) => setSearchText(e.target.value)}
        style={{ marginBottom: 16, maxWidth: 300 }}
      />
      <Table
        dataSource={filteredData}
        columns={columns}
        rowKey="id"
        loading={loading}
        pagination={{ pageSize: 10, showSizeChanger: true }}
        bordered
        size="middle"
      />
    </div>
  );
};

export default CompaniesTable;
