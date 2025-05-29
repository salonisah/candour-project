import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Tab from "../components/Tab";
import InfoBox from "../components/InfoBox";
import Table from "../components/Table";
import DropdownButton from "../components/Button";

const UserDetail = () => {
  const { userId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user || {};

  const [activeTab, setActiveTab] = useState("Content");
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for filter popup

  const headers = ["Title", "Type", "Published Date", "No. of Views", "Status"];
  const tableData = [
    {
      title: "5 ways to start crocheting",
      type: "Information",
      publisheddate: "1st Feb 2025",
      views: 6787,
      status: "Active",
    },
    {
      title: "Tips and tricks for clicking best picture",
      type: "Information",
      publisheddate: "1st Feb 2025",
      views: 35,
      status: "Active",
    },
    {
      title: "Healthy way to loose weight",
      type: "Information",
      publisheddate: "1st Feb 2025",
      views: 634,
      status: "Inactive",
    },
    {
      title: "Top 5 workout to loose belly fats",
      type: "Information",
      publisheddate: "1st Feb 2025",
      views: 6672,
      status: "Active",
    },
    {
      title: "Top hiking destination near Kathmandu",
      type: "News",
      publisheddate: "1st Feb 2025",
      views: 23,
      status: "Active",
    },
    {
      title: "Your next hobby in 2025",
      type: "Information",
      publisheddate: "1st Feb 2025",
      views: 1,
      status: "Active",
    },
    {
      title: "Healthy diet for healthy life",
      type: "Information",
      publisheddate: "1st Feb 2025",
      views: 50,
      status: "Active",
    },
  ];

  const headerToKeyMap = {
    Title: "title",
    Type: "type",
    "Published Date": "publisheddate",
    "No. of Views": "views",
    Status: "status",
  };

  // Sample data for Edit Suggestion tab
  const suggestionHeaders = ["Title", "Suggested By", "Date", "Status"];
  const suggestionData = [
    {
      title: "Improve crochet tutorial layout",
      suggestedby: "Abiral Pradhanang",
      date: "15 May 2025",
      status: "Valid",
    },
    {
      title: "Add more photography tips",
      suggestedby: "Anusha Puri",
      date: "16 May 2025",
      status: "Invalid",
    },
    {
      title: "Update weight loss article",
      suggestedby: "Bishal Khadka",
      date: "17 May 2025",
      status: "Pending",
    },
    {
      title: "Enhance workout guide visuals",
      suggestedby: "Isha Thapa Magar",
      date: "18 May 2025",
      status: "Valid",
    },
  ];

  const suggestionHeaderToKeyMap = {
    Title: "title",
    "Suggested By": "suggestedby",
    Date: "date",
    Status: "status",
  };

  // Custom status options for Edit Suggestion tab
  const suggestionStatusOptions = [
    { label: "Valid", value: "Valid" },
    { label: "Invalid", value: "Invalid" },
    { label: "Pending", value: "Pending" },
  ];

  const handleEdit = () => {
    alert(`Editing user: ${user.name}`);
  };

  const handleDelete = () => {
    alert(`Deleting user: ${user.name}`);
  };

  const menuItems = [
    { label: "Edit", action: handleEdit },
    {
      label: (
        <div className="flex items-center text-red-600">
          <svg
            className="w-4 h-4 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          Delete
        </div>
      ),
      action: handleDelete,
    },
  ];

  const handleBackClick = () => {
    navigate(-1);
  };

  // Placeholder popup component
  const FilterPopup = () => (
    <div
      className="filter-popup"
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "#fff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
        width: "300px",
      }}
    >
      <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Filter Options</h3>
      <p>Placeholder for filter form (e.g., type, status, date).</p>
      <div style={{ marginTop: "20px", textAlign: "right" }}>
        <button
          onClick={() => setIsPopupOpen(false)}
          style={{
            padding: "8px 16px",
            background: "#800000",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );

  const contentIcon = (
    <svg
      width="16"
      height="19"
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "50px", height: "20px", fill: "#800000", marginBottom: "10px" }}
    >
      <path
        d="M5 15.25H11C11.2167 15.25 11.3917 15.1833 11.525 15.05C11.675 14.9 11.75 14.7167 11.75 14.5C11.75 14.2833 11.675 14.1083 11.525 13.975C11.3917 13.825 11.2167 13.75 11 13.75H5C4.78333 13.75 4.6 13.825 4.45 13.975C4.31667 14.1083 4.25 14.2833 4.25 14.5C4.25 14.7167 4.31667 14.9 4.45 15.05C4.6 15.1833 4.78333 15.25 5 15.25ZM5 11.25H11C11.2167 11.25 11.3917 11.1833 11.525 11.05C11.675 10.9 11.75 10.7167 11.75 10.5C11.75 10.2833 11.675 10.1083 11.525 9.975C11.3917 9.825 11.2167 9.75 11 9.75H5C4.78333 9.75 4.6 9.825 4.45 9.975C4.31667 10.1083 4.25 10.2833 4.25 10.5C4.25 10.7167 4.31667 10.9 4.45 11.05C4.6 11.1833 4.78333 11.25 5 11.25ZM2.3 19C1.8 19 1.375 18.825 1.025 18.475C0.675 18.125 0.5 17.7 0.5 17.2V1.8C0.5 1.3 0.675 0.874999 1.025 0.525C1.375 0.174999 1.8 -9.53674e-07 2.3 -9.53674e-07H9.5C9.75 -9.53674e-07 9.98333 0.0499988 10.2 0.149998C10.4167 0.233332 10.6083 0.358333 10.775 0.525L14.975 4.725C15.1417 4.89167 15.2667 5.08333 15.35 5.3C15.45 5.51667 15.5 5.75 15.5 6V17.2C15.5 17.7 15.325 18.125 14.975 18.475C14.625 18.825 14.2 19 13.7 19H2.3ZM9.5 5.1V1.5H2.3C2.23333 1.5 2.16667 1.53333 2.1 1.6C2.03333 1.66667 2 1.73333 2 1.8V17.2C2 17.2667 2.03333 17.3333 2.1 17.4C2.16667 17.4667 2.23333 17.5 2.3 17.5H13.7C13.7667 17.5 13.8333 17.4667 13.9 17.4C13.9667 17.3333 14 17.2667 14 17.2V6H10.4C10.15 6 9.93333 5.91667 9.75 5.75C9.58333 5.56667 9.5 5.35 9.5 5.1ZM2 1.5V5.1C2 5.35 2 5.56667 2 5.75C2 5.91667 2 6 2 6V1.5V5.1C2 5.35 2 5.56667 2 5.75C2 5.91667 2 6 2 6V17.2C2 17.2667 2 17.3333 2 17.4C2 17.4667 2 17.5 2 17.5C2 17.5 2 17.4667 2 17.4C2 17.3333 2 17.2667 2 17.2V1.8C2 1.73333 2 1.66667 2 1.6C2 1.53333 2 1.5 2 1.5Z"
        fill="#333333"
      />
    </svg>
  );

  const rewardIcon = (
    <svg
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "50px", height: "20px", fill: "#800000", marginBottom: "10px" }}
    >
      <path
        d="M8.5835 15.5V12.075C7.71683 11.9417 6.95016 11.6 6.2835 11.05C5.6335 10.5 5.1835 9.80833 4.9335 8.975C3.7835 8.84167 2.8085 8.35 2.0085 7.5C1.22516 6.65 0.833496 5.65 0.833496 4.5V3.8C0.833496 3.3 1.0085 2.875 1.3585 2.525C1.7085 2.175 2.1335 2 2.6335 2H4.6585V1.8C4.6585 1.3 4.8335 0.874999 5.1835 0.524999C5.55016 0.174999 5.97516 -4.76837e-07 6.4585 -4.76837e-07H12.2085C12.6918 -4.76837e-07 13.1085 0.174999 13.4585 0.524999C13.8252 0.874999 14.0085 1.3 14.0085 1.8V2H16.0335C16.5335 2 16.9585 2.175 17.3085 2.525C17.6585 2.875 17.8335 3.3 17.8335 3.8V4.5C17.8335 5.65 17.4335 6.65 16.6335 7.5C15.8502 8.35 14.8835 8.84167 13.7335 8.975C13.4835 9.80833 13.0252 10.5 12.3585 11.05C11.7085 11.6 10.9502 11.9417 10.0835 12.075V15.5H12.8835C13.1002 15.5 13.2752 15.575 13.4085 15.725C13.5585 15.8583 13.6335 16.0333 13.6335 16.25C13.6335 16.4667 13.5585 16.65 13.4085 16.8C13.2752 16.9333 13.1002 17 12.8835 17H5.7835C5.56683 17 5.3835 16.9333 5.2335 16.8C5.10016 16.65 5.0335 16.4667 5.0335 16.25C5.0335 16.0333 5.10016 15.8583 5.2335 15.725C5.3835 15.575 5.56683 15.5 5.7835 15.5H8.5835ZM4.6585 7.35V3.5H2.6335C2.55016 3.5 2.47516 3.53333 2.4085 3.6C2.3585 3.65 2.3335 3.71667 2.3335 3.8V4.5C2.3335 5.18333 2.55016 5.79167 2.9835 6.325C3.41683 6.85833 3.97516 7.2 4.6585 7.35ZM9.3335 10.625C10.2168 10.625 10.9585 10.325 11.5585 9.725C12.1752 9.10833 12.4835 8.35833 12.4835 7.475V1.8C12.4835 1.71667 12.4502 1.65 12.3835 1.6C12.3335 1.53333 12.2668 1.5 12.1835 1.5H6.4835C6.40016 1.5 6.32516 1.53333 6.2585 1.6C6.2085 1.65 6.1835 1.71667 6.1835 1.8V7.475C6.1835 8.35833 6.4835 9.10833 7.0835 9.725C7.70016 10.325 8.45016 10.625 9.3335 10.625ZM14.0085 7.35C14.6918 7.2 15.2502 6.85833 15.6835 6.325C16.1168 5.79167 16.3335 5.18333 16.3335 4.5V3.8C16.3335 3.71667 16.3002 3.65 16.2335 3.6C16.1835 3.53333 16.1168 3.5 16.0335 3.5H14.0085V7.35Z"
        fill="#333333"
      />
    </svg>
  );

  const revenueIcon = (
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "50px", height: "20px", fill: "#800000", marginBottom: "10px" }}
    >
      <path
        d="M9.6665 19C8.34984 19 7.10817 18.75 5.9415 18.25C4.7915 17.75 3.7915 17.075 2.9415 16.225C2.0915 15.375 1.4165 14.375 0.916504 13.225C0.416504 12.0583 0.166504 10.8167 0.166504 9.5C0.166504 8.18333 0.416504 6.95 0.916504 5.8C1.4165 4.63333 2.0915 3.625 2.9415 2.775C3.7915 1.925 4.7915 1.25 5.9415 0.749999C7.10817 0.249999 8.34984 -9.53674e-07 9.6665 -9.53674e-07C10.9832 -9.53674e-07 12.2165 0.249999 13.3665 0.749999C14.5332 1.25 15.5415 1.925 16.3915 2.775C17.2415 3.625 17.9165 4.63333 18.4165 5.8C18.9165 6.95 19.1665 8.18333 19.1665 9.5C19.1665 10.8167 18.9165 12.0583 18.4165 13.225C17.9165 14.375 17.2415 15.375 16.3915 16.225C15.5415 17.075 14.5332 17.75 13.3665 18.25C12.2165 18.75 10.9832 19 9.6665 19ZM9.6665 17.5C11.8998 17.5 13.7915 16.725 15.3415 15.175C16.8915 13.625 17.6665 11.7333 17.6665 9.5C17.6665 7.26667 16.8915 5.375 15.3415 3.825C13.7915 2.275 11.8998 1.5 9.6665 1.5C7.43317 1.5 5.5415 2.275 3.9915 3.825C2.4415 5.375 1.6665 7.26667 1.6665 9.5C1.6665 11.7333 2.4415 13.625 3.9915 15.175C5.5415 16.725 7.43317 17.5 9.6665 17.5ZM9.6415 16.3C9.82484 16.3 9.98317 16.2333 10.1165 16.1C10.2498 15.9667 10.3165 15.8083 10.3165 15.625V15.1C11.0998 15 11.7998 14.7083 12.4165 14.225C13.0498 13.7417 13.3665 13.0167 13.3665 12.05C13.3665 11.35 13.1582 10.7333 12.7415 10.2C12.3415 9.65 11.5415 9.15833 10.3415 8.725C9.2915 8.375 8.5915 8.06667 8.2415 7.8C7.8915 7.53333 7.7165 7.16667 7.7165 6.7C7.7165 6.23333 7.8915 5.85 8.2415 5.55C8.60817 5.25 9.09984 5.1 9.7165 5.1C10.0832 5.1 10.4082 5.175 10.6915 5.325C10.9748 5.45833 11.2082 5.64167 11.3915 5.875C11.5248 6.025 11.6665 6.13333 11.8165 6.2C11.9832 6.25 12.1332 6.24167 12.2665 6.175C12.4665 6.09167 12.5998 5.95833 12.6665 5.775C12.7498 5.59167 12.7332 5.425 12.6165 5.275C12.3498 4.89167 12.0165 4.575 11.6165 4.325C11.2332 4.075 10.8165 3.93333 10.3665 3.9V3.375C10.3665 3.19167 10.2998 3.03333 10.1665 2.9C10.0332 2.76667 9.87484 2.7 9.6915 2.7C9.50817 2.7 9.34984 2.76667 9.2165 2.9C9.08317 3.03333 9.0165 3.19167 9.0165 3.375V3.9C8.1665 4.06667 7.50817 4.41667 7.0415 4.95C6.5915 5.46667 6.3665 6.05 6.3665 6.7C6.3665 7.45 6.5915 8.05833 7.0415 8.525C7.4915 8.975 8.23317 9.38333 9.2665 9.75C10.3332 10.15 11.0582 10.5083 11.4415 10.825C11.8248 11.125 12.0165 11.5333 12.0165 12.05C12.0165 12.6833 11.7915 13.1417 11.3415 13.425C10.8915 13.7083 10.3832 13.85 9.8165 13.85C9.33317 13.85 8.89984 13.7333 8.5165 13.5C8.13317 13.25 7.8165 12.9 7.5665 12.45C7.4665 12.2833 7.32484 12.1667 7.1415 12.1C6.97484 12.0333 6.80817 12.0333 6.6415 12.1C6.47484 12.1667 6.34984 12.2917 6.2665 12.475C6.18317 12.6583 6.18317 12.8333 6.2665 13C6.53317 13.5667 6.8915 14.0167 7.3415 14.35C7.7915 14.6833 8.33317 14.9167 8.9665 15.05V15.625C8.9665 15.8083 9.03317 15.9667 9.1665 16.1C9.29984 16.2333 9.45817 16.3 9.6415 16.3Z"
        fill="#333333"
      />
    </svg>
  );

  return (
    <div
      className="user-detail"
      style={{ padding: "20px 0px", maxWidth: "1200px", margin: "0 auto", overflow: "hidden" }}
    >
      <div
        className="user-header"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div
          className="back-arrow arrowcls"
          onClick={handleBackClick}
          style={{ cursor: "pointer" }}
        >
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.375 8.25L8.55 13.425C8.7 13.575 8.76667 13.75 8.75 13.95C8.75 14.15 8.675 14.325 8.525 14.475C8.375 14.625 8.2 14.7 8 14.7C7.8 14.7 7.625 14.625 7.475 14.475L1.125 8.125C1.04167 8.04167 0.975 7.95 0.925 7.85C0.891667 7.73333 0.875 7.61667 0.875 7.5C0.875 7.38333 0.891667 7.275 0.925 7.175C0.975 7.05833 1.04167 6.95833 1.125 6.875L7.475 0.524999C7.60833 0.391666 7.775 0.324999 7.975 0.324999C8.19167 0.308332 8.375 0.374999 8.525 0.524999C8.675 0.674999 8.75 0.858332 8.75 1.075C8.75 1.275 8.675 1.45 8.525 1.6L3.375 6.75H14.75C14.9667 6.75 15.1417 6.825 15.275 6.975C15.425 7.10833 15.5 7.28333 15.5 7.5C15.5 7.71667 15.425 7.9 15.275 8.05C15.1417 8.18333 14.9667 8.25 14.75 8.25H3.375Z"
              fill="#333333"
            />
          </svg>
        </div>
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>User Details</h1>
        <div style={{ marginLeft: "auto" }}>
          <DropdownButton
            text=""
            icon={
              <svg
                width="4"
                height="16"
                viewBox="0 0 4 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2" cy="2" r="2" fill="#333333" />
                <circle cx="2" cy="8" r="2" fill="#333333" />
                <circle cx="2" cy="14" r="2" fill="#333333" />
              </svg>
            }
            items={menuItems}
            newcl="action-menu px-2 py-1 bg-white shadow-md"
          />
        </div>
      </div>

      <div className="user-content" style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <div
          style={{
            flex: "1",
            padding: "20px",
            borderRadius: "8px",
            background: "#fafafa",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                margin: "0 auto",
                backgroundColor: "#f5e6e6",
                borderRadius: "50%",
                padding: "10px",
              }}
            >
              <path
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                fill="#800000"
              />
            </svg>
            <h2
              style={{
                fontFamily: "lato",
                fontSize: "20px",
                fontWeight: "600",
                marginTop: "10px",
                color: "#484848",
              }}
            >
              {user.name || "N/A"}
            </h2>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "#800000",
                color: "white",
                padding: "5px 10px",
                borderRadius: "12px",
                fontSize: "14px",
                marginTop: "10px",
              }}
            >
              Publisher
            </span>
          </div>

          <div
            style={{
              display: "flex",
              gap: "10px",
              marginBottom: "20px",
              justifyContent: "center",
            }}
          >
            <InfoBox number="5012" label="Total Content" icon={contentIcon} />
            <InfoBox number="5" label="Total Reward" icon={rewardIcon} />
            <InfoBox number="0.05" label="Total Revenue" icon={revenueIcon} />
          </div>

          <div style={{ marginTop: "20px" }}>
            <p style={{ marginBottom: "15px", fontFamily: "font-primary" }}>
              <p style={{ color: "#7A7A7A", fontWeight: "600", fontSize: "14px" }}>Area of Interest:</p> Leisure & Lifestyle
            </p>
            <p style={{ marginBottom: "15px", fontFamily: "font-primary" }}>
              <p style={{ color: "#7A7A7A", fontWeight: "600", fontSize: "14px" }}>Email:</p> {user.email || "N/A"}
            </p>
            <p style={{ marginBottom: "15px", fontFamily: "font-primary" }}>
              <p style={{ color: "#7A7A7A", fontWeight: "600", fontSize: "14px" }}>Phone:</p> {user.phone || "N/A"}
            </p>
          </div>
        </div>

        <div style={{ flex: "3" }}>
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <Tab
              label="Content"
              active={activeTab === "Content"}
              onClick={() => setActiveTab("Content")}
            />
            <Tab
              label="Edit Suggestion"
              active={activeTab === "Edit Suggestion"}
              onClick={() => setActiveTab("Edit Suggestion")}
            />
          </div>

          {activeTab === "Content" && (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  {tableData.length} Content
                </h3>
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
              <div className="table-container" style={{ overflowX: "auto", maxWidth: "100%" }}>
                <Table
                  headers={headers}
                  data={tableData}
                  headerToKeyMap={headerToKeyMap}
                  showPagination={false}
                />
              </div>
            </div>
          )}

          {activeTab === "Edit Suggestion" && (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  {suggestionData.length} Suggestions
                </h3>
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
              <div className="table-container" style={{ overflowX: "auto", maxWidth: "100%" }}>
                <Table
                  headers={suggestionHeaders}
                  data={suggestionData}
                  headerToKeyMap={suggestionHeaderToKeyMap}
                  showPagination={false}
                  statusOptions={suggestionStatusOptions}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {isPopupOpen && <FilterPopup />}
    </div>
  );
};

export default UserDetail;