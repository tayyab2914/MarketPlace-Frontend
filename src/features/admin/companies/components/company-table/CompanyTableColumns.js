import ActionIcon from "@/components/ui/ActionIcon/ActionIcon";
import { BACKEND_DOMAIN } from "@/utils/Constants";
import { Space, Tooltip, Tag } from "antd";
import { Eye, Edit, Edit2 } from "lucide-react";

export function getCompaniesTableColumns(onView, onEdit) {
  return [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      responsive: ["lg"],
      sorter: (a, b) => a?.id - b?.id,
    },
    {
      title: "Company Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a?.name.localeCompare(b?.name),
      ellipsis: true,
    },
    {
      title: "Industry",
      dataIndex: "industry",
      key: "industry",
      ellipsis: true,
      responsive: ["sm"],
    },
    {
      title: "Phone Number",
      dataIndex: "phone_no",
      key: "phone_no",
      responsive: ["lg"],
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      ellipsis: true,
      responsive: ["lg"],
    },
    {
      title: "Profile Image",
      dataIndex: "profile_image",
      key: "profile_image",
      render: (url) =>
        url ? (
          <img
            src={`${BACKEND_DOMAIN}${url}`}
            style={{ width: 40, height: 40, borderRadius: "50%" }}
          />
        ) : (
          <Tag color="default">No Image</Tag>
        ),
      responsive: ["xl"],
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
            tooltip="View Company"
            onClick={() => onView(record)}
          />
          <ActionIcon
            color="#0d6efd" // green
            icon={<Edit2 />}
            tooltip="Edit Company"
            onClick={() => onEdit(record)}
          />
        </div>
      ),
    },
  ];
}
