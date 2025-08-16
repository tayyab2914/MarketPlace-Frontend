import React, { useState, useMemo } from "react";
import { Table, Input } from "antd";
import useWindowWidth from "@/hooks/useWindowWidth";
import { getUsersTableColumns } from "./UserTableColumns";
import { FILTER_DATA_BY_SEARCH } from "../../utils/utils";

const { Search } = Input;

const UsersTable = ({ data, onView, onEdit }) => {
  const width = useWindowWidth();
  const [searchText, setSearchText] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const columns = getUsersTableColumns(width, onView, onEdit);

  const filteredData = useMemo(
    () => FILTER_DATA_BY_SEARCH(searchText, data),
    [data, searchText]
  );

  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      <Search
        placeholder="Search by username or email"
        allowClear
        onChange={(e) => setSearchText(e.target.value)}
        style={{ marginBottom: 16, maxWidth: 300 }}
      />
      <Table
        dataSource={filteredData}
        columns={columns}
        rowKey="id"
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "20"],
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} users`,
          onChange: (page, size) => {
            setCurrentPage(page);
            setPageSize(size);
          },
        }}
        bordered
        size="middle"
      />
    </div>
  );
};

export default UsersTable;
