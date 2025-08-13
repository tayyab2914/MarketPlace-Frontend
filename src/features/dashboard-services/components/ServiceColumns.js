import React from "react";
import { Space, Popconfirm } from "antd";
import { Eye, Pencil, Trash } from "lucide-react";
import ActionIcon from "@/components/ui/ActionIcon/ActionIcon";

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
      <div style={{ display: "flex", gap: "8px" }}>
        <ActionIcon
          color="#28a745" // green
          icon={<Pencil />}
          tooltip="Edit"
          onClick={() => onEdit(record)}
        />
        <ActionIcon
          color="#0d6efd" // blue
          icon={<Eye />}
          tooltip="View Offers"
          onClick={() => onView(record.id)}
        />
        <ActionIcon
          type="delete"
          color="#dc3545" // red
          icon={<Trash />}
          tooltip="Delete"
          onClick={() => onDelete(record.id)}
        />
      </div>
    ),
  },
];
