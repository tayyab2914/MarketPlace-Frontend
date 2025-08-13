import { Space, Tooltip } from "antd";
import { Eye, Edit, Edit2 } from "lucide-react";
import { RENDER_VERIFICATION_TAGS } from "../../utils/utils";
import ActionIcon from "@/components/ui/ActionIcon/ActionIcon";

const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
};

export function getUsersTableColumns(width, onView, onEdit) {
  const showVerifiedColumns =
    width >= breakpoints.sm &&
    (width < breakpoints.md || width >= breakpoints.lg);

  return [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      responsive: ["md"],
      sorter: (a, b) => a?.id - b?.id,
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      sorter: (a, b) => a?.username?.localeCompare(b?.username),
      ellipsis: true,
      responsive: ["xl"],
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      ellipsis: true,
    },
    ...(showVerifiedColumns
      ? [
          {
            title: "Email Verified",
            dataIndex: "email_verified",
            key: "email_verified",
            render: RENDER_VERIFICATION_TAGS,
            filters: [
              { text: "Verified", value: true },
              { text: "Not Verified", value: false },
            ],
            onFilter: (value, record) => record.email_verified === value,
          },
          {
            title: "Verified by Admin",
            dataIndex: "verified_by_admin",
            key: "verified_by_admin",
            render: RENDER_VERIFICATION_TAGS,
            filters: [
              { text: "Verified", value: true },
              { text: "Not Verified", value: false },
            ],
            onFilter: (value, record) => record.verified_by_admin === value,
          },
        ]
      : []),
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
            tooltip="View User"
            onClick={() => onView(record)}
          />
          <ActionIcon
            color="#0d6efd" // green
            icon={<Edit2 />}
            tooltip="Edit User"
            onClick={() => onEdit(record)}
          />
        </div>
      ),
    },
  ];
}
