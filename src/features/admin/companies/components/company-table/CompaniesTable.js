import React, { useState, useMemo } from "react";
import { Table, Input } from "antd";
import { getCompaniesTableColumns } from "./CompanyTableColumns";
import { FILTER_DATA_BY_SEARCH } from "../../utils/utils";

const { Search } = Input;

const CompaniesTable = ({ data, onView, onEdit }) => {
  const [searchText, setSearchText] = useState("");

  const columns = getCompaniesTableColumns(onView, onEdit);

  const filteredData = useMemo(
    () => FILTER_DATA_BY_SEARCH(searchText, data),
    [data, searchText]
  );

  return (
    <div>
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
        pagination={{ pageSize: 10, showSizeChanger: true }}
        bordered
        size="middle"
      />
    </div>
  );
};

export default CompaniesTable;
