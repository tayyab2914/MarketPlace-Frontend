import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Table } from "antd";

import { getListingColumns } from "./components/ListingColumns";
import EditListingModal from "./components/EditListingModal";

import "./styles/dashboard-listing-page.css";
import useDashboardListings from "./hooks/useDashboardListing";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/utils/Constants";

const DashboardListingPage = () => {
  const { token } = useSelector((state) => state.auth);
  const { listings, updateListing, deleteListing } =
    useDashboardListings(token);
  const router = useRouter();

  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedListing, setSelectedListing] = useState(null);

  const handleEdit = (record) => {
    setSelectedListing(record);
    setEditModalVisible(true);
  };

  const handleSave = async (listing_id, values) => {
    await updateListing(listing_id, values);
    setEditModalVisible(false);
  };

  const handleDelete = async (id) => {
    await deleteListing(id);
  };

  const handleViewOffers = async (listing_id) => {
    router.push(`${ROUTES.DashboardListings}/${listing_id}`);
  };
  return (
    <div
      className="dashboard-listing-page-container"
      style={{ padding: "20px" }}
    >
      <Table
        columns={getListingColumns({
          onEdit: handleEdit,
          onDelete: handleDelete,
          onView: handleViewOffers,
        })}
        dataSource={listings}
        rowKey="id"
        pagination={{
          pageSize: 5,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "20"],
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} listings`,
        }}
        scroll={{ x: "max-content" }}
        bordered
      />

      <EditListingModal
        visible={editModalVisible}
        onCancel={() => setEditModalVisible(false)}
        onSave={handleSave}
        initialValues={selectedListing}
        tagOptions={[
          { label: "Mobile", value: "mobile" },
          { label: "Flutter", value: "flutter" },
          { label: "React Native", value: "react native" },
          { label: "Booking", value: "booking" },
          { label: "Payments", value: "payments" },
        ]}
      />
    </div>
  );
};

export default DashboardListingPage;
