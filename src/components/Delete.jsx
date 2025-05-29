import React from 'react';

const DeleteUserModal = ({ isOpen, onCancel, onDelete }) => {
  if (!isOpen) return null; // Do not render if isOpen is false
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="modal-close" onClick={onCancel}>×</button>
        <h2 className="modal-title">Delete User</h2>
        <p className="modal-message">Are you sure you want to delete user?</p>
        <div className="modal-actions">
          <button className="btn-cancel" onClick={onCancel}>Cancel</button>
          <button className="btn-delete" onClick={onDelete}>
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.3 17C2.8 17 2.375 16.825 2.025 16.475C1.675 16.125 1.5 15.7 1.5 15.2V2.5H0.5V0.999999H5V0.124999H11V0.999999H15.5V2.5H14.5V15.2C14.5 15.7 14.325 16.125 13.975 16.475C13.625 16.825 13.2 17 12.7 17H3.3ZM13 2.5H3V15.2C3 15.2833 3.025 15.3583 3.075 15.425C3.14167 15.475 3.21667 15.5 3.3 15.5H12.7C12.7667 15.5 12.8333 15.4667 12.9 15.4C12.9667 15.3333 13 15.2667 13 15.2V2.5ZM5.4 13.5H6.9V4.5H5.4V13.5ZM9.1 13.5H10.6V4.5H9.1V13.5Z"
                fill="white"
              />
            </svg>
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;