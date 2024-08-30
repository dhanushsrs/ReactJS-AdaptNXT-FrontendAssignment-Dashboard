import React from "react";
import "./LineGraph.css";

import { IoIosInformationCircleOutline } from "react-icons/io";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineGraph = () => {
  // Sample data
  const data = {
    labels: [
      "6/30/2024 - 7/6/2024",
      "7/7/2024 - 7/13/2024",
      "7/21/2024 - 7/27/2024",
    ],
    datasets: [
      {
        label: "Orders",
        data: [4, 2, 2],
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 1)",
        yAxisID: "y2", // Linked to the second y-axis
        fill: false,
        pointHoverRadius: 8,
      },

      {
        label: "Sales",
        data: [1400, 800, 420],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 1)",
        yAxisID: "y1", // Linked to the first y-axis
        fill: false,
        pointHoverRadius: 8,
      },
    ],
  };

  // Function to calculate average order value for the hovered week
  const calculateAverageOrderValue = (index) => {
    const salesData = data.datasets.find(
      (dataset) => dataset.label === "Sales"
    ).data;
    const ordersData = data.datasets.find(
      (dataset) => dataset.label === "Orders"
    ).data;
    const salesValue = salesData[index];
    const ordersValue = ordersData[index];
    return (salesValue / ordersValue).toFixed(2);
  };

  // Options to configure the chart
  const options = {
    responsive: true,
    interaction: {
      intersect: false,
      mode: "index",
    },

    scales: {
      x: {
        type: "category",
        title: {
          display: true,
          text: "Week",
        },
      },
      y1: {
        type: "linear",
        position: "left",
        title: {
          display: true,
          text: "Sales",
        },
        min: 0,
        max: 1600,
        ticks: {
          stepSize: 400,
          callback: function (value) {
            return value >= 1000 ? `${(value / 1000).toFixed(1)}k` : value;
          },
        },
      },
      y2: {
        type: "linear",
        position: "right",
        title: {
          display: true,
          text: "Orders",
        },
        min: 0,
        max: 4,
        ticks: {
          stepSize: 1,
          callback: function (value) {
            return value >= 1000 ? `${(value / 1000).toFixed(1)}k` : value;
          },
        },
        grid: {
          drawOnChartArea: false, // Hide grid lines for the right y-axis
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      datalabels: {
        display: false,
      },
      tooltip: {
        backgroundColor: "white",
        titleColor: "black",
        bodyColor: "black",
        callbacks: {
          title: function (tooltipItems) {
            return `Week: ${tooltipItems[0].label}`;
          },
          label: function (tooltipItem) {
            const datasetLabel = tooltipItem.dataset.label || "";
            const value = tooltipItem.raw;
            const index = tooltipItem.dataIndex;
            const avgOrderValue = calculateAverageOrderValue(index);

            // Format the tooltip with line breaks
            return [
              `${datasetLabel}: ${
                value >= 1000 ? (value / 1000).toFixed(1) + "k" : value
              }`,

              datasetLabel === "Sales"
                ? `Avg Order Value: ${
                    avgOrderValue >= 1000
                      ? (avgOrderValue / 1000).toFixed(1) + "k"
                      : avgOrderValue
                  }`
                : "",
            ];
          },
        },
      },
    },
  };

  return (
    <div className="line-graph">
      <div className="line-graph-heading">
        <h2>Sales vs Orders</h2>
        <IoIosInformationCircleOutline
          style={{
            fontSize: "25px",
            margin: "10px",
          }}
        />
      </div>
      <Line data={data} options={options} />
    </div>
  );
};
export default LineGraph;
