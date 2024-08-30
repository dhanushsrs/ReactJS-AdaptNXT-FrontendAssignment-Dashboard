import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Sidebar.css";

const SideBar = () => {
  const [selected, setSelected] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Inventory", path: "/inventory" },
    { name: "Order", path: "/order" },
    { name: "Returns", path: "/return" },
    { name: "Customers", path: "/customer" },
    { name: "Shipping", path: "/shipping" },
    { name: "Channel", path: "/channel" },
    { name: "Integrations", path: "/integrations" },
    { name: "Calculators", path: "/calculators" },
    { name: "Reports", path: "/reports" },
    { name: "Account", path: "/account" },
  ];

  return (
    <div className="sidebar-container">
      {menuItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`sidebar-item ${selected === item.name ? "selected" : ""}`}
          onClick={() => setSelected(item.name)}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
