import React, { useState } from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";
import useDashboardOffers from "./hooks/useDashboardOffers";
import { OfferColumns } from "./components/OfferColumns";
import OfferDetailsModal from "./components/OfferDetailsModal";
import './styles/dashboard-offers.css'
const DashboardOffersPage = () => {
  const { token } = useSelector((state) => state.auth);
  const { Offers } = useDashboardOffers(token);
console.log(Offers)

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);

  const handleViewOffers = (offer_id) => {
    const offer = Offers.find((o) => o.id === offer_id);
    setSelectedOffer(offer || null);
    setIsModalVisible(true);
  };

  return (
    <div className="dashboard-listing-page-container" style={{ padding: "20px" }}>
      <Table
        columns={OfferColumns({
          onView: handleViewOffers,
        })}
        dataSource={Offers}
        rowKey="id"
        pagination={{
          pageSize: 5,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "20"],
          showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} offers`,
        }}
        scroll={{ x: "max-content" }}
        bordered
      />

      <OfferDetailsModal
        open={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        offer={selectedOffer}
      />
    </div>
  );
};

export default DashboardOffersPage;
