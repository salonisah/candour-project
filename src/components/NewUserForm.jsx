import React, { useState } from 'react';
import './NewUserForm.css';
import { FaUser, FaTimes, FaUndoAlt, FaArrowRight } from 'react-icons/fa';

const NewUserForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setFormData({ name: '', email: '', password: '', role: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('User saved: ' + JSON.stringify(formData, null, 2));
    onClose(); // close modal after save
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>New User</h2>
          <button className="close-btn" onClick={onClose}><FaTimes /></button>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-icon">
            <div className="icon-circle">
              <FaUser className="user-icon" />
            </div>
          </div>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="John Doe"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="abc@gmail.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="xxxxxxxxxx"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Role Type</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="moderator">Moderator</option>
            </select>
          </div>

          <div className="form-actions">
            <button type="button" className="clear-btn" onClick={handleClear}>
              <FaUndoAlt /> Clear all
            </button>
            <button type="submit" className="save-btn">
              Save <FaArrowRight />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewUserForm;
