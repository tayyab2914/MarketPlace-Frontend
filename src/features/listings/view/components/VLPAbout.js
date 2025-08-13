

const VLPAbout = ({ ListingDetails }) => {
  return (
    <div className="lis-viw-about-container">
      <div className="lis-viw-about-header">
        <h4 className="lis-viw-about-title">About This Project</h4>
      </div>

      <div className="lis-viw-about-content">
        <div className="lis-viw-about-description">
          <p className="lis-viw-description-text">{ListingDetails?.description}</p>
        </div>

        <div className="lis-viw-about-details">
          <div className="lis-viw-detail-grid">
            <div className="lis-viw-detail-item">
              <span className="lis-viw-detail-label">Category</span>
              <span className="lis-viw-detail-value">{ListingDetails?.category}</span>
            </div>

            <div className="lis-viw-detail-item">
              <span className="lis-viw-detail-label">Skills/Tags</span>
              <div className="lis-viw-tags-container">
                {ListingDetails?.tags?.map((tag, index) => (
                  <span key={index} className="lis-viw-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lis-viw-detail-item">
              <span className="lis-viw-detail-label">Budget</span>
              <span className="lis-viw-detail-value lis-viw-budget">
                ${ListingDetails?.budget} <span className="lis-viw-budget-type">(Fixed Price)</span>
              </span>
            </div>

            <div className="lis-viw-detail-item">
              <span className="lis-viw-detail-label">Deadline</span>
              <span className="lis-viw-detail-value">{new Date(ListingDetails?.deadline).toLocaleDateString()}</span>
            </div>

            <div className="lis-viw-detail-item">
              <span className="lis-viw-detail-label">Status</span>
              <span className={`lis-viw-status lis-viw-status-${ListingDetails?.status?.toLowerCase()}`}>
                {ListingDetails?.status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VLPAbout
