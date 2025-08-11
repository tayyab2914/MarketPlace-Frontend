import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API_ADMIN_GET_COMPANIES } from "@/apis/AdminApis";
import CompaniesTable from "./components/company-table/CompaniesTable";
import CompanyDetailsModal from "./components/modals/CompanyDetailsModal";
import EditCompanyModal from "./components/modals/EditCompanyModal";
import "../styles/admin.css";
import "./styles/admin-company.css";

const AdminCompanyPage = () => {
  const { token } = useSelector((state) => state.auth);
  const [companies, setCompanies] = useState([]);

  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [modalCompany, setModalCompany] = useState(null);

  const fetchCompanies = async () => {
    const res = await API_ADMIN_GET_COMPANIES(token);
    setCompanies(res);
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
