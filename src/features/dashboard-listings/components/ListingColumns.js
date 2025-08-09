import React from "react";
import { Space, Popconfirm } from "antd";
import { BadgeDollarSign,  Pencil, Trash } from "lucide-react";

export const getListingColumns = ({ onEdit, onDelete, onView }) => [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    sorter: (a, b) => a.title.localeCompare(b.title),
    // responsive: ["sm", "md", "lg", "xl"],
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
        <div className="lis-upd-form-icons-wrapper">
          <div className="lis-upd-form-icon-btn green">
            <Pencil
              style={{ color: "green" }}
              onClick={() => onEdit(record)}
              title="Edit"
              strokeWidth={1.5}
              size={16}
            />
          </div>

          <div className="lis-upd-form-icon-btn blue">
            <BadgeDollarSign
              style={{ color: "blue" }}
              onClick={() => onView(record.id)}
              title="View Offers"
              strokeWidth={1.5}
              size={16}
            />
          </div>

          <Popconfirm
            title="Are you sure you want to delete this listing?"
            onConfirm={() => onDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <div className="lis-upd-form-icon-btn red">
              <Trash
                style={{ color: "red" }}
                title="Delete"
                strokeWidth={1.5}
                size={16}
              />
            </div>
          </Popconfirm>
        </div>
      </Space>
    ),
  },
];
