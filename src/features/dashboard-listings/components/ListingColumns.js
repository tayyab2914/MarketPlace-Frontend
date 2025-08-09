import React from "react";
import { Space, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export const getListingColumns = ({ onEdit, onDelete }) => [
  {
    title: "Company",
    dataIndex: "company_name",
    key: "company_name",
    sorter: (a, b) => a.company_name.localeCompare(b.company_name),
    responsive: ["xs", "sm", "md", "lg", "xl"],
    render: (text, record) => (
      <>
        {record.company_name} <br />
        <small style={{ color: "#888" }}>{record.company_location}</small>
      </>
    ),
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    sorter: (a, b) => a.title.localeCompare(b.title),
    responsive: ["sm", "md", "lg", "xl"],
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    sorter: (a, b) => a.category.localeCompare(b.category),
    responsive: ["md", "lg", "xl"],
  },
  {
    title: "Budget ($)",
    dataIndex: "budget",
    key: "budget",
    sorter: (a, b) => a.budget - b.budget,
    responsive: ["md", "lg", "xl"],
  },
  {
    title: "Deadline",
    dataIndex: "deadline",
    key: "deadline",
    sorter: (a, b) => new Date(a.deadline) - new Date(b.deadline),
    responsive: ["lg", "xl"],
  },
  {
    title: "Actions",
    key: "actions",
    fixed: "right",
    width: 100,
    responsive: ["xs", "sm", "md", "lg", "xl"],
    render: (_, record) => (
      <Space size="middle">
        <EditOutlined
          style={{ color: "#1890ff", cursor: "pointer" }}
          onClick={() => onEdit(record)}
          title="Edit"
        />
        <Popconfirm
          title="Are you sure you want to delete this listing?"
          onConfirm={() => onDelete(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <DeleteOutlined
            style={{ color: "red", cursor: "pointer" }}
            title="Delete"
          />
        </Popconfirm>
      </Space>
    ),
  },
];
