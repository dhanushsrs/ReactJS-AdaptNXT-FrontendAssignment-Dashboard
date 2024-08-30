import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Sidebar from "./components/Sidebar/Sidebar";
import DashboardGraph from "./pages/DashboardGraph/DashboardGraph";

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="inside-container">
        <Routes>
          <Route path="/" element={<DashboardGraph />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
