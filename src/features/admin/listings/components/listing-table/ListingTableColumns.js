import { Space, Tooltip, Tag } from "antd";
import { Eye, Edit } from "lucide-react";

export function getListingsTableColumns( onView, onEdit) {
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
      title: "Status",
      dataIndex: "status",
      key: "status",
      filters: [
        { text: "Open", value: "open" },
        { text: "Closed", value: "closed" },
        { text: "In Progress", value: "in progress" },
      ],
      onFilter: (value, record) => record.status === value,
      responsive: ["xl"],
      render: (status) => (
        <Tag color={status === "open" ? "green" : status === "closed" ? "red" : "blue"}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Tag>
      ),
    },
    {
      title: "Public",
      dataIndex: "is_public",
      key: "is_public",
      responsive: ["xl"],
      render: (isPublic) => (isPublic ? <Tag color="green">Yes</Tag> : <Tag>No</Tag>),
    },
    {
      title: "Actions",
      key: "actions",
      fixed: "right",
      width: 80,
      render: (_, record) => (
        <Space size="middle">
          <Tooltip title="View">
            <Eye
              style={{ cursor: "pointer" }}
              size={18}
              onClick={() => onView(record)}
            />
          </Tooltip>
          <Tooltip title="Edit">
            <Edit
              style={{ cursor: "pointer" }}
              size={18}
              onClick={() => onEdit(record)}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];
}
