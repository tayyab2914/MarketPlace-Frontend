import React from "react";
import { Edit2, Eye, Trash2 } from "lucide-react";
import ActionIcon from "@/components/ui/ActionIcon/ActionIcon";
import AutoTextCropper from "@/components/ui/AutoTextCropper/AutoTextCropper";

export const getListingColumns = ({ onEdit, onDelete, onView }) => [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    sorter: (a, b) => a.title.localeCompare(b.title),
    width: 270,
    render: (text) => <AutoTextCropper>{text}</AutoTextCropper>,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    sorter: (a, b) => a.description.localeCompare(b.description),
    responsive: ["md", "lg", "xl"],
    width: 320,
    render: (text) => <AutoTextCropper>{text}</AutoTextCropper>,
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    sorter: (a, b) => a.category.localeCompare(b.category),
    responsive: ["md", "lg", "xl"],
    width: 200,
  },
  {
    title: "Budget ($)",
    dataIndex: "budget",
    key: "budget",
    sorter: (a, b) => a.budget - b.budget,
    responsive: ["md", "lg", "xl"],
    width: 200,
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
    fixed: "right",
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
