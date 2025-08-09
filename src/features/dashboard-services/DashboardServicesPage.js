import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Table } from "antd";

// import { getListingColumns } from "./components/ListingColumns";
// import EditListingModal from "./components/EditListingModal";

import "./styles/dashboard-services.css";
// import useDashboardListings from "./hooks/useDashboardListing";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/utils/Constants";
import useDashboardServices from "./hooks/useDashboardServices";
import { ServiceColumns } from "./components/ServiceColumns";
import EditServiceModal from "./components/EditServiceModal";

const DashboardServicesPage = () => {
  const { token } = useSelector((state) => state.auth);
  const { Services, deleteService, updateService } =
    useDashboardServices(token);
  const router = useRouter();

  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleEdit = (record) => {
    setSelectedService(record);
    setEditModalVisible(true);
  };

  const handleSave = async (service_id, values) => {
    await updateService(service_id, values);
    setEditModalVisible(false);
  };

  const handleDelete = async (id) => {
    await deleteService(id);
  };

  const handleViewOffers = async (service_id) => {
    router.push(`${ROUTES.DashboardServices}/${service_id}`);
  };
  return (
    <div
      className="dashboard-listing-page-container"
      style={{ padding: "20px" }}
    >
      <Table
        columns={ServiceColumns({
          onEdit: handleEdit,
          onDelete: handleDelete,
          onView: handleViewOffers,
        })}
        dataSource={Services}
        rowKey="id"
        pagination={{
          pageSize: 5,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "20"],
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} services`,
        }}
        scroll={{ x: "max-content" }}
        bordered
      />

      <EditServiceModal
        visible={editModalVisible}
        onCancel={() => setEditModalVisible(false)}
        onSave={handleSave}
        initialValues={selectedService}
      />
    </div>
  );
};

export default DashboardServicesPage;
