import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./layout/Dashboard";
import Cms from "./pages/Cms";
import EditContent from "./pages/EditContent";
import CrochetPost from "./layout/CrochetPost";
import ChatList from "./components/ChatList";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
