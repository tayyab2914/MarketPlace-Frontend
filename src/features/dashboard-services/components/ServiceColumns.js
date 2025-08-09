import React from "react";
import { Space, Popconfirm } from "antd";
import { Eye, Pencil, Trash } from "lucide-react";

export const ServiceColumns = ({ onEdit, onDelete, onView }) => [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    sorter: (a, b) => a.title.localeCompare(b.title),
    // responsive: ["sm", "md", "lg", "xl"],
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    sorter: (a, b) => a.description.localeCompare(b.description),
    responsive: ["md", "lg", "xl"],
  },

  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    sorter: (a, b) => a.category.localeCompare(b.category),
    responsive: ["md", "lg", "xl"],
  },
  {
    title: "Starting From",
    dataIndex: "price_starting_from",
    key: "price_starting_from",
    sorter: (a, b) => a.price_starting_from - b.price_starting_from,
    responsive: ["md", "lg", "xl"],
  },
  {
    title: "Actions",
    key: "actions",
    fixed: "right",
    width: 100,
    responsive: ["xs", "sm", "md", "lg", "xl"],
    render: (_, record) => (
      <Space size="middle">
        <div className="srv-upd-form-icons-wrapper">
          <div className="srv-upd-form-icon-btn green">
            <Pencil
              style={{ color: "green" }}
              onClick={() => onEdit(record)}
              title="Edit"
              strokeWidth={1.5}
              size={16}
            />
          </div>

          <div className="srv-upd-form-icon-btn blue">
            <Eye
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
            <div className="srv-upd-form-icon-btn red">
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
