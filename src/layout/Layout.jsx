import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "../App.css";

const Layout = () => {
  return (
    <div className="content-container flex-1">
        <Header />
    <div className="layout-containe flex">
      <Sidebar />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
