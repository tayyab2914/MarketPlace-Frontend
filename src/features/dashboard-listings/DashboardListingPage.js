import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { Table } from "antd";
import {
  API_DELETE_LISTING_BY_ID,
  API_LISTING_LIST,
  API_LISTING_UPDATE,
} from "@/apis/ListingApis";

import { getListingColumns } from "./components/ListingColumns";
import EditListingModal from "./components/EditListingModal";

import "./styles/dashboard-listing-page.css";

const DashboardListingPage = () => {
  const { token } = useSelector((state) => state.auth);
  const [listings, setListings] = useState([]);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedListing, setSelectedListing] = useState(null);

  const getListings = useCallback(async () => {
    const res = await API_LISTING_LIST(token);
    setListings(res?.data || []);
  }, [token]);

  useEffect(() => {
    getListings();
  }, [getListings]);

  const handleEdit = (record) => {
    setSelectedListing(record);
    setEditModalVisible(true);
  };

  const handleSave = async (listing_id,values) => {
    await API_LISTING_UPDATE(token,listing_id,values);
    setEditModalVisible(false);
    getListings();
  };

  const handleDelete = async (id) => {
    await API_DELETE_LISTING_BY_ID(token, id);
    getListings();
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
          // Add your real tags here
        ]}
      />
    </div>
  );
};

export default DashboardListingPage;
