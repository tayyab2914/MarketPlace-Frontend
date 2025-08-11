import { BACKEND_DOMAIN } from "@/utils/Constants";
import { Space, Tooltip, Tag } from "antd";
import { Eye, Edit } from "lucide-react";

const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
};

export function getCompaniesTableColumns(width, onView, onEdit) {
  return [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      responsive: ["lg"],
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Company Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
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
            alt="Profile"
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
