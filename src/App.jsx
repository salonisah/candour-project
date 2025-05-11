import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./layout/Dashboard";
import Cms from "./pages/cms";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/cms" element={<Cms />} />

          {/* Add more pages as needed */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
