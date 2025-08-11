
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
            <span
              className="adm-info-v-tag"
              style={{ backgroundColor: tagColor || "#eee" }}
            >
              {value}
            </span>
          ) : (
            <div className="adm-info-v-detail-value">{value}</div>
          )}
        </div>
      </div>
    );
  };