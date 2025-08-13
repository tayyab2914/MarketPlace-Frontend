import React from "react";
import { Space, Popconfirm } from "antd";
import {
  BadgeDollarSign,
  Edit2,
  Eye,
  Pencil,
  Trash,
  Trash2,
} from "lucide-react";
import ActionIcon from "@/components/ui/ActionIcon/ActionIcon";

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
    width: 100,
    render: (_, record) => (
      <div style={{ display: "flex", gap: "8px" }}>
        <ActionIcon
          color="#28a745" // green
          icon={<Edit2 />}
          tooltip="Edit Listing"
          onClick={() => onEdit(record)}
        />
        <ActionIcon
          type="delete"
          color="#dc3545" // red
          icon={<Trash2 />}
          tooltip="Delete Listing"
          onClick={() => onDelete(record.id)}
        />
        <ActionIcon
          color="#0d6efd" // blue
          icon={<Eye />}
          tooltip="View Offers"
          onClick={() => onView(record.id)}
        />
      </div>
    ),
  },
];
