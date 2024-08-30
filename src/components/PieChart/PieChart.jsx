import React from "react";
import "./PieChart.css";

import { IoIosInformationCircleOutline } from "react-icons/io";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = () => {
  // Sample data
  const data = {
    labels: ["Woo Commerce Store", "Shopify Store"],
    datasets: [
      {
        label: "Sales Portion",
        data: [55.8, 44.2],
        backgroundColor: ["#fa7e7e", "#2dded4"],
        borderColor: ["#fa7e7e", "#2dded4"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: false,
        text: "Sales Portion",
      },
      datalabels: {
        display: true,
        formatter: (value, context) => {
          // Calculate the percentage
          const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
          const percentage = ((value / total) * 100).toFixed(1) + "%";
          return percentage;
        },
        color: "#fff",
        font: {
          weight: "bold",
          size: 16,
        },
        anchor: "center",
        align: "center",
      },
    },
  };

  return (
    <div className="sales-portion">
      <div className="pie-chart-heading">
        <h2>Portion of Sales</h2>
        <IoIosInformationCircleOutline
          style={{
            fontSize: "25px",
            margin: "10px",
            marginTop: "0",
          }}
        />
      </div>
      <div className="chart-container">
        <Pie data={data} options={options} />
      </div>
      <div className="legend">
        <div className="legend-item">
          <div
            className="legend-color"
            style={{ backgroundColor: "#fa7e7e" }}
          ></div>
          <span>WooCommerce Store</span>
        </div>
        <div className="legend-item">
          <div
            className="legend-color"
            style={{ backgroundColor: "#2dded4" }}
          ></div>
          <span>Shopify Store</span>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
