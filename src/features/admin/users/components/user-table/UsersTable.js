import React from "react";
import { Table } from "antd";
import useWindowWidth from "@/hooks/useWindowWidth";
import { getUsersTableColumns } from "./UserTableColumns";

const UsersTable = ({ data, loading, onView, onEdit }) => {
  const width = useWindowWidth();

  const columns = getUsersTableColumns(width, onView, onEdit);

  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      <Table
        dataSource={data}
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

export default UsersTable;
