import React from 'react';
import Table from '../components/Table';

const UserManagement = () => {
  const headers = [
    'Name',
    'Email',
    'Phone',
    'Role Type',
    'Last Active Date',
    'Status',
  ];

  const data = [
    {
      name: 'Aavesh Raimajhi',
      email: 'abc@gmail.com',
      phone: '1234567890',
      roletype: 'Publisher',
      lastactivedate: '15th Jan, 2025',
      status: 'Active',
    },
    {
      name: 'Abiral Pradhanang',
      email: 'lmn@gmail.com',
      phone: '1234567890',
      roletype: 'Publisher',
      lastactivedate: '15th Jan, 2025',
      status: 'Active',
    },
    {
      name: 'Abiral Pradhanang',
      email: 'lmn@gmail.com',
      phone: '1234567890',
      roletype: 'Publisher',
      lastactivedate: '15th Jan, 2025',
      status: 'Active',  
    },
    {
      name: 'Abiral Pradhanang',
      email: 'lmn@gmail.com',
      phone: '1234567890',
      roletype: 'Publisher',
      lastactivedate: '15th Jan, 2025',
      status: 'Active',  
    },
    {
      name: 'Abiral Pradhanang',
      email: 'lmn@gmail.com',
      phone: '1234567890',
      roletype: 'Publisher',
      lastactivedate: '15th Jan, 2025',
      status: 'Active',  
    },
    {
      name: 'Abiral Pradhanang',
      email: 'lmn@gmail.com',
      phone: '1234567890',
      roletype: 'Publisher',
      lastactivedate: '15th Jan, 2025',
      status: 'Active',  
    },
    {
      name: 'Abiral Pradhanang',
      email: 'lmn@gmail.com',
      phone: '1234567890',
      roletype: 'Publisher',
      lastactivedate: '15th Jan, 2025',
      status: 'Active',  
    },
     {
      name: 'Abiral Pradhanang',
      email: 'lmn@gmail.com',
      phone: '1234567890',
      roletype: 'Publisher',
      lastactivedate: '15th Jan, 2025',
      status: 'Active',  
    },
     {
      name: 'Abiral Pradhanang',
      email: 'lmn@gmail.com',
      phone: '1234567890',
      roletype: 'Publisher',
      lastactivedate: '15th Jan, 2025',
      status: 'Active',  
    },
     {
      name: 'Abiral Pradhanang',
      email: 'lmn@gmail.com',
      phone: '1234567890',
      roletype: 'Publisher',
      lastactivedate: '15th Jan, 2025',
      status: 'Active',  
    },
     {
      name: 'Abiral Pradhanang',
      email: 'lmn@gmail.com',
      phone: '1234567890',
      roletype: 'Publisher',
      lastactivedate: '15th Jan, 2025',
      status: 'Active',  
    },
     {
      name: 'Abiral Pradhanang',
      email: 'lmn@gmail.com',
      phone: '1234567890',
      roletype: 'Publisher',
      lastactivedate: '15th Jan, 2025',
      status: 'Active',  
    },
     {
      name: 'Abiral Pradhanang',
      email: 'lmn@gmail.com',
      phone: '1234567890',
      roletype: 'Publisher',
      lastactivedate: '15th Jan, 2025',
      status: 'Active',  
    },
     {
      name: 'Abiral Pradhanang',
      email: 'lmn@gmail.com',
      phone: '1234567890',
      roletype: 'Publisher',
      lastactivedate: '15th Jan, 2025',
      status: 'Active',  
    },
     {
      name: 'Abiral Pradhanang',
      email: 'lmn@gmail.com',
      phone: '1234567890',
      roletype: 'Publisher',
      lastactivedate: '15th Jan, 2025',
      status: 'Active',  
    },
     {
      name: 'Abiral Pradhanang',
      email: 'lmn@gmail.com',
      phone: '1234567890',
      roletype: 'Publisher',
      lastactivedate: '15th Jan, 2025',
      status: 'Active',  
    },
     {
      name: 'Abiral Pradhanang',
      email: 'lmn@gmail.com',
      phone: '1234567890',
      roletype: 'Publisher',
      lastactivedate: '15th Jan, 2025',
      status: 'Active',  
    },
     {
      name: 'Abiral Pradhanang',
      email: 'lmn@gmail.com',
      phone: '1234567890',
      roletype: 'Publisher',
      lastactivedate: '15th Jan, 2025',
      status: 'Active',  
    },
     {
      name: 'Abiral Pradhanang',
      email: 'lmn@gmail.com',
      phone: '1234567890',
      roletype: 'Publisher',
      lastactivedate: '15th Jan, 2025',
      status: 'Active',  
    },

    
    // Add more rows if needed
  ];

  // Mapping headers with non-standard object keys
  const headerToKeyMap = {
  'Name': 'name',
  'Email': 'email',
  'Phone': 'phone',
  'Role Type': 'roletype',
  'Last Active Date': 'lastactivedate',
  'Status': 'status',
  'Title': 'title',
  'Type': 'type',
  'Category': 'category',
  'Published By': 'publishedBy',
  'Published Date': 'publishedDate',
  'No. of Views': 'views',
};


  return (
     <div className="UserManagement">
   <div className="cms-header">
      <h1>User Management</h1>
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
              d="M6.525 13.125C4.80833 13.125 3.35833 12.5333 2.175 11.35C0.991667 10.15 0.4 8.7 0.4 7C0.4 5.3 0.991667 3.85833 2.175 2.675C3.35833 1.475 4.80833 0.874999 6.525 0.874999C8.225 0.874999 9.66667 1.475 10.85 2.675C12.0333 3.85833 12.625 5.3 12.625 7C12.625 7.71667 12.5083 8.4 12.275 9.05C12.0417 9.7 11.725 10.2667 11.325 10.75L17.075 16.5C17.2083 16.6333 17.275 16.8083 17.275 17.025C17.275 17.225 17.2083 17.4 17.075 17.55C16.925 17.7 16.7417 17.775 16.525 17.775C16.325 17.775 16.1583 17.7 16.025 17.55L10.25 11.8C9.75 12.2167 9.175 12.5417 8.525 12.775C7.875 13.0083 7.20833 13.125 6.525 13.125ZM6.525 11.625C7.80833 11.625 8.89167 11.175 9.775 10.275C10.675 9.375 11.125 8.28333 11.125 7C11.125 5.71667 10.675 4.625 9.775 3.725C8.89167 2.825 7.80833 2.375 6.525 2.375C5.225 2.375 4.125 2.825 3.225 3.725C2.34167 4.625 1.9 5.71667 1.9 7C1.9 8.28333 2.34167 9.375 3.225 10.275C4.125 11.175 5.225 11.625 6.525 11.625Z"
              fill="#333333"
            />
          </svg>
          <button
            onClick={() => setIsPopupOpen(true)}
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
      <Table headers={headers} data={data} headerToKeyMap={headerToKeyMap} 
        showPagination={true}
      />

   
    </div>
  );
};

export default UserManagement;
