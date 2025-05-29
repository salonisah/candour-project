import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./layout/Dashboard";
import Cms from "./pages/Cms";
import UserManagement from "./pages/Um";
import EditContent from "./pages/EditContent";
import CrochetPost from "./layout/CrochetPost";
import ChatList from "./components/ChatList";
import UserDetail from "./pages/Userdetail";
import AdminManagement from "./pages/AdminManagement";
import Rewards from "./pages/Rewards";
import Reports from "./pages/Reports";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/cms" element={<Cms />} />
          <Route path="/chat-list" element={<ChatList />} />
        <Route path="/posts/:slug" element={<CrochetPost />} /> 
         <Route path="/edit-suggestion" element={<EditContent />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/user/:userId" element={<UserDetail />} />
          <Route path="/admin-management" element={<AdminManagement/>} />
            <Route path="/rewards" element={<Rewards/>} />
            <Route path="/reports" element={<Reports/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
