import React from "react";
import "./DashboardGraph.css";

import LineGraph from "../../components/LineGraph/LineGraph";
import PieChart from "../../components/PieChart/PieChart";

const DashboardGraph = () => {
  return (
    <div className="container">
      <div className="heading-container">
        <h1 className="heading">Dashboard</h1>
      </div>
      <div className="dashboard-container">
        <div className="graph-container">
          <LineGraph />
        </div>
        <div className="graph-container">
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default DashboardGraph;
