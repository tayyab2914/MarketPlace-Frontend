const { ImageIcon } = require("lucide-react");

export const InfoCard = ({ Icon, label, value, isBadge, isImage }) => (
  <div className="adm-info-v-detail-card">
    <div className="adm-info-v-detail-icon">
      <Icon size={18} />
    </div>
    <div className="adm-info-v-detail-content">
      <div className="adm-info-v-detail-label">{label}</div>
      {isImage ? (
        value ? (
          <img src={value} alt={label} className="adm-info-v-profile-image" />
        ) : (
          <div className="adm-info-v-no-image">
            <ImageIcon size={18} /> No image available
          </div>
        )
      ) : (
        <div
          className={`adm-info-v-detail-value ${
            isBadge ? "adm-info-v-badge" : ""
          }`}
        >
          {value || "-"}
        </div>
      )}
    </div>
  </div>
);
