import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API_ADMIN_GET_USERS } from "@/apis/AdminApis";
import UsersTable from "./components/user-table/UsersTable";
import UserDetailsModal from "./components/modals/UserDetailsModal";
import EditUserModal from "./components/modals/EditUserModal";
import "./styles/admin-user.css";
const AdminUsersPage = () => {
  const { token } = useSelector((state) => state.auth);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Separate modal states
  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [modalUser, setModalUser] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    const res = await API_ADMIN_GET_USERS(token);
    setUsers(res);
    setLoading(false);
  };

  useEffect(() => {
    if (token) {
      fetchUsers();
    }
  }, [token]);

  const handleView = (user) => {
    setModalUser(user);
    setViewModalVisible(true);
  };

  const handleEdit = (user) => {
    setModalUser(user);
    setEditModalVisible(true);
  };

  const closeViewModal = () => {
    setViewModalVisible(false);
    setModalUser(null);
  };

  const closeEditModal = () => {
    setEditModalVisible(false);
    setModalUser(null);
  };

  return (
    <div>
      <UsersTable
        data={users}
        loading={loading}
        onView={handleView}
        onEdit={handleEdit}
      />

      <UserDetailsModal
        visible={viewModalVisible}
        onClose={closeViewModal}
        user={modalUser}
      />

      <EditUserModal
        visible={editModalVisible}
        onClose={closeEditModal}
        user={modalUser}
        fetchUsers={fetchUsers}
      />
    </div>
  );
};

export default AdminUsersPage;
