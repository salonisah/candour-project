import React, { useState, useEffect } from 'react';
import DropdownButton from '../components/Button';


const EditRoleModal = ({ isOpen, onClose, role, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    viewing: {
      enabled: false,
      dashboard: false,
      contentManagement: false,
      userManagement: false,
      adminRoleManagement: false,
      userRewardsRevenue: false,
      reportsMetrics: false,
      chats: false,
    },
    editing: {
      enabled: false,
      manageContent: false,
      manageUser: false,
    },
  });

  useEffect(() => {
    if (role) {
      setFormData({
        name: role.name || '',
        viewing: {
          enabled: role.viewing?.enabled || false,
          dashboard: role.viewing?.dashboard || false,
          contentManagement: role.viewing?.contentManagement || false,
          userManagement: role.viewing?.userManagement || false,
          adminRoleManagement: role.viewing?.adminRoleManagement || false,
          userRewardsRevenue: role.viewing?.userRewardsRevenue || false,
          reportsMetrics: role.viewing?.reportsMetrics || false,
          chats: role.viewing?.chats || false,
        },
        editing: {
          enabled: role.editing?.enabled || false,
          manageContent: role.editing?.manageContent || false,
          manageUser: role.editing?.manageUser || false,
        },
      });
    }
  }, [role]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name.includes('enabled')) {
        const section = name.split('.')[0];
        setFormData((prev) => ({
          ...prev,
          [section]: {
            ...prev[section],
            enabled: checked,
            ...(checked ? {} : Object.keys(prev[section]).reduce((acc, key) => {
              if (key !== 'enabled') acc[key] = false;
              return acc;
            }, {})),
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          [name.split('.')[0]]: {
            ...prev[name.split('.')[0]],
            [name.split('.')[1]]: checked,
          },
        }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleClearAll = () => {
    setFormData({
      name: formData.name,
      viewing: {
        enabled: false,
        dashboard: false,
        contentManagement: false,
        userManagement: false,
        adminRoleManagement: false,
        userRewardsRevenue: false,
        reportsMetrics: false,
        chats: false,
      },
      editing: {
        enabled: false,
        manageContent: false,
        manageUser: false,
      },
    });
  };

  const handleSubmit = () => {
    onSave({
      ...role,
      ...formData,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="edit-modal">
      <div className="modal-header">
        <h2 className="modal-title">Edit Role</h2>
        <button onClick={onClose} className="close-button">×</button>
      </div>
      <div className="form-group">
        <div>
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="checkbox-group">
          <label className="form-label">Role</label>
          <div>
            <div className="checkbox-container">
              <div className="checkbox-label">
                <input
                  type="checkbox"
                  name="viewing.enabled"
                  checked={formData.viewing.enabled}
                  onChange={handleChange}
                  className="checkbox"
                />
                <span className="checkbox-section-title">Viewing</span>
              </div>
              <DropdownButton
                text=""
                icon={
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.4 7.05L0.35 5.975L6 0.324999L11.65 5.975L10.6 7.05L6 2.45L1.4 7.05Z" fill="#333333"/>
                  </svg>
                }
                newcl="dropdown-button"
                items={[
                  {
                    label: (
                      <div className="dropdown-content">
                        <label className="dropdown-item checkbox-label">
                          <input
                            type="checkbox"
                            name="viewing.dashboard"
                            checked={formData.viewing.dashboard}
                            onChange={handleChange}
                            className="checkbox"
                            disabled={!formData.viewing.enabled}
                          />
                          <span className="checkbox-text">Dashboard</span>
                        </label>
                        <label className="dropdown-item checkbox-label">
                          <input
                            type="checkbox"
                            name="viewing.contentManagement"
                            checked={formData.viewing.contentManagement}
                            onChange={handleChange}
                            className="checkbox"
                            disabled={!formData.viewing.enabled}
                          />
                          <span className="checkbox-text">Content Management</span>
                        </label>
                        <label className="dropdown-item checkbox-label">
                          <input
                            type="checkbox"
                            name="viewing.userManagement"
                            checked={formData.viewing.userManagement}
                            onChange={handleChange}
                            className="checkbox"
                            disabled={!formData.viewing.enabled}
                          />
                          <span className="checkbox-text">User Management</span>
                        </label>
                        <label className="dropdown-item checkbox-label">
                          <input
                            type="checkbox"
                            name="viewing.userRewardsRevenue"
                            checked={formData.viewing.userRewardsRevenue}
                            onChange={handleChange}
                            className="checkbox"
                            disabled={!formData.viewing.enabled}
                          />
                          <span className="checkbox-text">User Rewards & Revenue</span>
                        </label>
                        <label className="dropdown-item checkbox-label">
                          <input
                            type="checkbox"
                            name="viewing.chats"
                            checked={formData.viewing.chats}
                            onChange={handleChange}
                            className="checkbox"
                            disabled={!formData.viewing.enabled}
                          />
                          <span className="checkbox-text">Chats</span>
                        </label>
                        <label className="dropdown-item checkbox-label">
                          <input
                            type="checkbox"
                            name="viewing.adminRoleManagement"
                            checked={formData.viewing.adminRoleManagement}
                            onChange={handleChange}
                            className="checkbox"
                            disabled={!formData.viewing.enabled}
                          />
                          <span className="checkbox-text">Admin Role Management</span>
                        </label>
                        <label className="dropdown-item checkbox-label">
                          <input
                            type="checkbox"
                            name="viewing.reportsMetrics"
                            checked={formData.viewing.reportsMetrics}
                            onChange={handleChange}
                            className="checkbox"
                            disabled={!formData.viewing.enabled}
                          />
                          <span className="checkbox-text">Reports & Metrics</span>
                        </label>
                      </div>
                    ),
                    action: () => {},
                  },
                ]}
              />
            </div>
            <div className="checkbox-container">
              <div className="checkbox-label">
                <input
                  type="checkbox"
                  name="editing.enabled"
                  checked={formData.editing.enabled}
                  onChange={handleChange}
                  className="checkbox"
                />
                <span className="checkbox-section-title">Editing</span>
              </div>
              <DropdownButton
                text=""
                icon={
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.4 7.05L0.35 5.975L6 0.324999L11.65 5.975L10.6 7.05L6 2.45L1.4 7.05Z" fill="#333333"/>
                  </svg>
                }
                newcl="dropdown-button"
                items={[
                  {
                    label: (
                      <div className="dropdown-content">
                        <label className="dropdown-item checkbox-label">
                          <input
                            type="checkbox"
                            name="editing.manageContent"
                            checked={formData.editing.manageContent}
                            onChange={handleChange}
                            className="checkbox"
                            disabled={!formData.editing.enabled}
                          />
                          <span className="checkbox-text">Manage Content (Create, Edit, Delete)</span>
                        </label>
                        <label className="dropdown-item checkbox-label">
                          <input
                            type="checkbox"
                            name="editing.manageUser"
                            checked={formData.editing.manageUser}
                            onChange={handleChange}
                            className="checkbox"
                            disabled={!formData.editing.enabled}
                          />
                          <span className="checkbox-text">Manage User (Create, Edit, Delete)</span>
                        </label>
                      </div>
                    ),
                    action: () => {},
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="action-buttons">
          <DropdownButton
            text="Clear all"
            startIcon="↻"
            icon=""
            newcl="clear-button"
            items={[]}
            onClick={handleClearAll}
          />
          <DropdownButton
            text="Save"
            icon=">"
            newcl="save-button"
            items={[]}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default EditRoleModal;