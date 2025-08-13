import { Tag } from "antd";

export const InfoCard = ({ Icon, label, value, isBadge, isTag, tagColor }) => {
  if (!value) return null;

  return (
    <div className={`adm-info-v-detail-card ${isBadge ? "badge" : ""}`}>
      <div className="adm-info-v-detail-icon">
        <Icon />
      </div>
      <div className="adm-info-v-detail-content">
        <div className="adm-info-v-detail-label">{label}</div>

        {isTag ? (
          <Tag
            color={tagColor || "default"}
            style={{
              textTransform: "capitalize",
              fontWeight: 500,
            }}
          >
            {value}
          </Tag>
        ) : (
          <div
            className={`adm-info-v-detail-value ${
              label?.toLowerCase().includes("budget") ? "adm-info-v-budget" : ""
            }`}
          >
            {value}
          </div>
        )}
      </div>
    </div>
  );
};
