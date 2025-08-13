import ActionIcon from "@/components/ui/ActionIcon/ActionIcon";
import { Space, Tooltip, Tag } from "antd";
import { Eye, Edit, Edit2 } from "lucide-react";

export function getListingsTableColumns(onView, onEdit) {
  return [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      responsive: ["lg"],
      sorter: (a, b) => a?.id - b?.id,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: (a, b) => a?.title.localeCompare(b?.title),
      ellipsis: true,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      ellipsis: true,
      responsive: ["sm"],
    },
    {
      title: "Budget",
      dataIndex: "budget",
      key: "budget",
      sorter: (a, b) => a?.budget - b?.budget,
      responsive: ["lg"],
      render: (budget) => `$${budget.toLocaleString()}`,
    },
    {
      title: "Deadline",
      dataIndex: "deadline",
      key: "deadline",
      sorter: (a, b) => new Date(a?.deadline) - new Date(b?.deadline),
      responsive: ["lg"],
      render: (date) => new Date(date).toLocaleDateString(),
    },
    {
      title: "Verified By Admin",
      dataIndex: "verified_by_admin",
      key: "verified_by_admin",
      filters: [
        { text: "Verified", value: true },
        { text: "Not Verified", value: false },
      ],
      onFilter: (value, record) => record.verified_by_admin === value,
      responsive: ["xl"],
      render: (verified_by_admin) => (
        <Tag color={verified_by_admin ? "green" : "red"}>
          {verified_by_admin ? "Verified" : "Not Verified"}
        </Tag>
      ),
    },

    {
      title: "Public",
      dataIndex: "is_public",
      key: "is_public",
      responsive: ["xl"],
      render: (isPublic) =>
        isPublic ? <Tag color="green">Yes</Tag> : <Tag>No</Tag>,
    },
    {
      title: "Actions",
      key: "actions",
      fixed: "right",
      width: 100,
      render: (_, record) => (
        <div style={{ display: "flex", gap: "8px" }}>
          <ActionIcon
            color="#28a745" // blue
            icon={<Eye />}
            tooltip="View Listing"
            onClick={() => onView(record)}
          />
          <ActionIcon
            color="#0d6efd" // green
            icon={<Edit2 />}
            tooltip="Edit Listing"
            onClick={() => onEdit(record)}
          />
        </div>
      ),
    },
  ];
}
