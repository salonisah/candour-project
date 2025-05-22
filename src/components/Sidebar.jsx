import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  User,
  UserCog,
  DollarSign,
  BarChart2,
  MessageSquare,
} from "lucide-react";

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/" },
  { label: "Content Management", icon: FileText, path: "/cms" },
  { label: "User Management", icon: User, path: "/user-management" },
  { label: "Admin Management", icon: UserCog, path: "/admins" },
  { label: "Reward & Revenue", icon: DollarSign, path: "/rewards" },
  { label: "Reports & Metrics", icon: BarChart2, path: "/reports" },
  { label: "Chat", icon: MessageSquare, path: "/chat-list" },
];

const Sidebar = ({ activeItem, setActiveItem }) => {
  return (
    <div className="sidebar">
      <nav className="nav">
        {menuItems.map(({ label, icon: Icon, path }) => (
          <Link
            key={label}
            to={path}
            onClick={() => setActiveItem(label)}
            className={`menu-item ${activeItem === label ? "active" : ""}`}
          >
            <Icon size={30} className="icon" />
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;