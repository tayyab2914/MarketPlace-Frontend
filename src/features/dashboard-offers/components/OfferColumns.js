import React from "react";
import { Space, Popconfirm } from "antd";
import { Eye, Pencil, Trash } from "lucide-react";
import { RENDER_VERIFICATION_TAGS } from "../utils/utils";
import ActionIcon from "@/components/ui/ActionIcon/ActionIcon";

export const OfferColumns = ({ onView }) => [
  {
    title: "Title",
    dataIndex: "sender_name",
    key: "sender_name",
    sorter: (a, b) => a?.sender_name?.localeCompare(b?.sender_name),
    // responsive: ["sm", "md", "lg", "xl"],
  },
  {
    title: "Listing",
    dataIndex: "listing_title",
    key: "listing_title",
    sorter: (a, b) => a?.listing_title?.localeCompare(b?.listing_title),
    responsive: ["sm"],
  },
  {
    title: "Message",
    dataIndex: "message",
    key: "message",
    sorter: (a, b) => a?.message?.localeCompare(b?.message),
    responsive: ["md", "lg", "xl"],
  },

  {
    title: "Proposed Price",
    dataIndex: "proposed_price",
    key: "proposed_price",
    sorter: (a, b) => a?.proposed_price - b?.proposed_price,
    responsive: ["md", "lg", "xl"],
  },
  {
    title: "Estimated Delivery Days",
    dataIndex: "estimated_delivery_days",
    key: "estimated_delivery_days",
    sorter: (a, b) => a?.estimated_delivery_days - b?.estimated_delivery_days,
    responsive: ["md", "lg", "xl"],
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: RENDER_VERIFICATION_TAGS,
    filters: [
      { text: "Pending", value: "pending" },
      { text: "Accepted", value: "accepted" },
    ],
    onFilter: (value, record) => record.status === value,
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
          color="#0d6efd" // blue
          icon={<Eye />}
          tooltip="View Offers"
          onClick={() => onView(record.id)}
        />
      </div>
    ),
  },
];
