import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API_ADMIN_GET_LISTINGS } from "@/apis/AdminApis";
import ListingDetailsModal from "./components/modals/ListingDetailsModal";
import EditListingModal from "./components/modals/EditListingModal";
import "./styles/admin-listing.css";
import '../styles/admin.css'
import ListingTable from "./components/listing-table/ListingTable";

const AdminListingPage = () => {
  const { token } = useSelector((state) => state.auth);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);

  // Modal states
  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [modalListing, setModalListing] = useState(null);

  const fetchListings = async () => {
    setLoading(true);
    try {
      const res = await API_ADMIN_GET_LISTINGS(token);
      console.log(res)
      setListings(res);
    } catch (error) {
      console.error("Failed to fetch listings", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (token) {
      fetchListings();
    }
  }, [token]);

  const handleView = (listing) => {
    setModalListing(listing);
    setViewModalVisible(true);
  };

  const handleEdit = (listing) => {
    setModalListing(listing);
    setEditModalVisible(true);
  };

  const closeViewModal = () => {
    setViewModalVisible(false);
    setModalListing(null);
  };

  const closeEditModal = () => {
    setEditModalVisible(false);
    setModalListing(null);
  };

  return (
    <div>
      <ListingTable
        data={listings}
        loading={loading}
        onView={handleView}
        onEdit={handleEdit}
      />
      <ListingDetailsModal
        visible={viewModalVisible}
        onClose={closeViewModal}
        listing={modalListing}
      />
      <EditListingModal
        visible={editModalVisible}
        onClose={closeEditModal}
        listing={modalListing}
        fetchListings={fetchListings}
      />
    </div>
  );
};

export default AdminListingPage;
