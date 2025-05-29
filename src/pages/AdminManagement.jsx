import React, { useState } from "react";
import Tab from "../components/Tab";
import Table from "../components/Table";
import EditRoleModal from "../layout/EditRole";
import DeleteUserModal from "../components/Delete";

const tabs = ["Role", "User", "Revenue"];

const AdminManagement = () => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("Role");
  const [data, setData] = useState([
    { id: 1, name: "Admin", roles: "View Roles" },
    { id: 2, name: "Finance Lead", roles: "View Roles" },
    { id: 3, name: "Customer Support", roles: "View Roles" },
  ]);

  const openEditModal = (role) => {
    setSelectedRole(role);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setSelectedRole(null);
  };

  const openDeleteModal = (rowIndex) => {
    setSelectedRowIndex(rowIndex);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setSelectedRowIndex(null);
  };

  const handleDeleteConfirm = () => {
    if (selectedRowIndex !== null) {
      setData((prev) => prev.filter((_, index) => index !== selectedRowIndex));
      closeDeleteModal();
    }
  };

  const handleEdit = (rowIndex) => {
    console.log(`Edit row ${rowIndex}:`, data[rowIndex]);
    openEditModal(data[rowIndex]);
  };

  const renderCustomActions = (rowIndex) => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px", paddingRight: "16px" }}>
      <button
        onClick={() => handleEdit(rowIndex)}
        className="text-blue-600 hover:text-blue-800"
      >
        <svg
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ cursor: "pointer", display: "block" }}
        >
          <path
            d="M2.15 15.5H3.4L12.65 6.25L11.425 5L2.15 14.275V15.5ZM15.85 5.15L12.475 1.8L13.8 0.499999C14.0833 0.216665 14.4333 0.0749984 14.85 0.0749984C15.2833 0.0749984 15.6417 0.216665 15.925 0.499999L17.15 1.725C17.4333 2.025 17.5833 2.38333 17.6 2.8C17.6167 3.2 17.475 3.54167 17.175 3.825L15.85 5.15ZM1.55 17C1.3 17 1.08333 16.9167 0.9 16.75C0.733333 16.5667 0.65 16.35 0.65 16.1V14C0.65 13.8833 0.666667 13.775 0.7 13.675C0.75 13.5583 0.825 13.45 0.925 13.35L11.4 2.875L14.775 6.25L4.3 16.725C4.2 16.825 4.09167 16.9 3.975 16.95C3.875 16.9833 3.76667 17 3.65 17H1.55ZM12.025 5.625L11.425 5L12.65 6.25L12.025 5.625Z"
            fill="#333333"
          />
        </svg>
      </button>
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ cursor: "pointer", display: "block" }}
        onClick={() => openDeleteModal(rowIndex)}
      >
        <path
          d="M3.3 17C2.8 17 2.375 16.825 2.025 16.475C1.675 16.125 1.5 15.7 1.5 15.2V2.5H1.25C1.03333 2.5 0.85 2.43333 0.7 2.3C0.566667 2.15 0.5 1.96667 0.5 1.75C0.5 1.53333 0.566667 1.35833 0.7 1.225C0.85 1.075 1.03333 0.999999 1.25 0.999999H5C5 0.749999 5.08333 0.541666 5.25 0.375C5.43333 0.208333 5.64167 0.124999 5.875 0.124999H10.125C10.3583 0.124999 10.5583 0.208333 10.725 0.375C10.9083 0.541666 11 0.999999 11 0.999999H14.75C14.9667 0.999999 15.1417 1.075 15.275 1.225C15.425 1.35833 15.5 1.53333 15.5 1.75C15.5 1.96667 15.425 2.15 15.275 2.3C15.1417 2.43333 14.9667 2.5 14.75 2.5H14.5V15.2C14.5 15.7 14.325 16.125 13.975 16.475C13.625 16.825 13.2 17 12.7 17H3.3ZM13 2.5H3V15.2C3 15.2833 3.025 15.3583 3.075 15.425C3.14167 15.475 3.21667 15.5 3.3 15.5H12.7C12.7833 15.5 12.85 15.475 12.9 15.425C12.9667 15.3583 13 15.2833 13 15.2V2.5ZM5.4 13.5H6.9V4.5H5.4V13.5ZM9.1 13.5H10.6V4.5H9.1V13.5Z"
          fill="#F45151"
        />
      </svg>
    </div>
  );

  return (
    <div className="UserManagement">
      <div className="cms-header">
        <h2>Admin Management</h2>
        <div className="cms-svg">
          <svg
            aria-hidden="true"
            width="20"
            height="20"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.525 13.125C4.80833 13.125 3.35833 12.5333 2.175 11.35C0.991667 10.15 0.4 8.7 0.4 7C0.4 5.3 0.991667 3.85833 2.175 2.675C3.35833 1.475 4.80833 0.874999 6.525 0.874999C8.225 0.874999 9.66667 1.475 10.85 2.675C12.0333 3.85833 12.625 5.3 12.625 7C12.625 7.71667 12.5083 8.4 12.275 9.05C12.0417 9.7 11.725 10.2667 11.325 10.75L17.075 16.5C17.2083 16.6333 17.275 16.8083 17.275 17.025C17.275 17.225 17.2083 17.4 17.075 17.55C16.925 17.7 16.7417 17.775 16.525 17.775C16.325 17.775 16.1583 17.7 16.025 17.55L10.25 11.8C9.75 12.2167 9.175 12.5417 8.525 12.775C7.875 13.0083 7.20833 13.125 6.525 13.125ZM6.525 11.625C7.80833 11.625 8.89167 11.175 9.775 10.275C10.675 9.375 11.125 8.28333 11.125 7C11.125 5.71667 10.675 4.625 9.775 3.725C8.89167 2.825 7.80833 2.375 6.525 2.375C5.225 2.375 4.125 2.825 3.225 3.725C2.34167 4.625 1.9 5.71667 1.9 7C1.9 8.28333 2.34167 9.375 3.225 10.275C4.125 11.625 5.225 11.625 6.525 11.625Z"
              fill="#333333"
            />
          </svg>
          <button
            onClick={() => console.log("Filter clicked")} // Placeholder for filter
            aria-label="Open Filter Popup"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.375 15C7.125 15 6.91667 14.9167 6.75 14.75C6.58333 14.5833 6.5 14.375 6.5 14.125V8.325L0.9 1.225C0.716667 0.958332 0.691667 0.691666 0.825 0.424999C0.958334 0.141665 1.18333 -1.43051e-06 1.5 -1.43051e-06H14.5C14.8167 -1.43051e-06 15.0417 0.141665 15.175 0.424999C15.3083 0.691666 15.2833 0.958332 15.1 1.225L9.5 8.325V14.125C9.5 14.375 9.41667 14.5833 9.25 14.75C9.08333 14.9167 8.875 15 8.625 15H7.375ZM8 7.8L12.95 1.5H3.05L8 7.8Z"
                fill="#333333"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="tabs-row">
        {tabs.map((tab) => (
          <Tab
            key={tab}
            label={tab}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </div>

      {activeTab === "Role" && (
        <Table
          headers={["Name", "Roles"]}
          data={data}
          headerToKeyMap={{ Name: "name", Roles: "roles" }}
          showPagination={true}
          renderCustomActions={renderCustomActions}
        />
      )}

      {activeTab === "User" && (
        <Table
          headers={["Name", "Email", "Role Type", "Status"]}
          data={[
            { id: 1, name: "Aavesh Raimajhi", email: "aavesh@gmail.com", roleType: "Finance Lead", status: "Active" },
            { id: 2, name: "Abiral Pradhanang", email: "abiral@gmail.com", roleType: "Admin", status: "Active" },
            { id: 3, name: "Anusha Puri", email: "anusha@gmail.com", roleType: "Customer Support", status: "Active" },
            { id: 4, name: "Prajjwal Khadka", email: "prajjwal@gmail.com", roleType: "Sub-Admin", status: "Active" },
            { id: 5, name: "Sakun Napit", email: "sakun@gmail.com", roleType: "Admin", status: "Active" },
            { id: 6, name: "Sambrina Kaut", email: "sambrina@gmail.com", roleType: "Admin", status: "Active" },
            { id: 7, name: "Saraswati Niroula", email: "saraswati@gmail.com", roleType: "Admin", status: "Active" },
          ]}
          headerToKeyMap={{ Name: "name", Email: "email", "Role Type": "roleType", Status: "status" }}
          showPagination={true}
          statusOptions={[
            { label: "Active", value: "Active" },
            { label: "Inactive", value: "Inactive" },
            { label: "Flagged", value: "Flagged" },
          ]}
        />
      )}

      {activeTab === "Revenue" && <div>No revenue data yet.</div>}
      
      <EditRoleModal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        role={selectedRole}
        onSave={(updatedRole) => {
          setData((prev) =>
            prev.map((r) => (r.id === updatedRole.id ? updatedRole : r))
          );
          closeEditModal();
        }}
      />

      <DeleteUserModal
        isOpen={isDeleteModalOpen}
        onCancel={closeDeleteModal}
        onDelete={handleDeleteConfirm}
      />
    </div>
  );
};

export default AdminManagement;