import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API_ADMIN_GET_COMPANIES } from "@/apis/AdminApis";
import CompaniesTable from "./components/company-table/CompaniesTable"; // Assuming you have this
// import CompanyDetailsModal from "./components/modals/CompanyDetailsModal";
// import EditCompanyModal from "./components/modals/EditCompanyModal";
import "./styles/admin-company.css";
import CompanyDetailsModal from "./components/modals/UserDetailsModal";
import EditCompanyModal from "./components/modals/EditCompanyModal";

const AdminCompanyPage = () => {
  const { token } = useSelector((state) => state.auth);
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);

  // Separate modal states
  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [modalCompany, setModalCompany] = useState(null);

  const fetchCompanies = async () => {
    setLoading(true);
    try {
      const res = await API_ADMIN_GET_COMPANIES(token);
      console.log(res);
      setCompanies(res);
    } catch (error) {
      console.error("Failed to fetch companies", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (token) {
      fetchCompanies();
    }
  }, [token]);

  const handleView = (company) => {
    setModalCompany(company);
    setViewModalVisible(true);
  };

  const handleEdit = (company) => {
    setModalCompany(company);
    setEditModalVisible(true);
  };

  const closeViewModal = () => {
    setViewModalVisible(false);
    setModalCompany(null);
  };

  const closeEditModal = () => {
    setEditModalVisible(false);
    setModalCompany(null);
  };

  return (
    <div>
      <CompaniesTable
        data={companies}
        loading={loading}
        onView={handleView}
        onEdit={handleEdit}
      />
      <CompanyDetailsModal
        visible={viewModalVisible}
        onClose={closeViewModal}
        company={modalCompany}
      />


      <EditCompanyModal
        visible={editModalVisible}
        onClose={closeEditModal}
        company={modalCompany}
        fetchCompanies={fetchCompanies}
      />
    </div>
  );
};

export default AdminCompanyPage;
