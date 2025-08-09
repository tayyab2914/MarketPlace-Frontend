import React from "react";
import { Space, Popconfirm } from "antd";
import {Eye ,Pencil, Trash } from "lucide-react";

export const getListingColumns = ({ onEdit, onDelete,onView }) => [
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
        <Pencil
          style={{ color: "green", cursor: "pointer" }}
          onClick={() => onEdit(record)}
          title="Edit"
            strokeWidth={2}
        />
        <Eye
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => onView(record.id)}
          title="View Offers"
            strokeWidth={2}
        />
        <Popconfirm
          title="Are you sure you want to delete this listing?"
          onConfirm={() => onDelete(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <Trash
            style={{ color: "red", cursor: "pointer" }}
            title="Delete"
            strokeWidth={2}
          />
        </Popconfirm>
      </Space>
    ),
  },
];
