import React from "react";
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

const UserTraffic: React.FC = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "User Visits",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.4, // Smooth line
      },
      {
        label: "Unique Visitors",
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
        tension: 0.4, // Smooth line
      },
      {
        label: "Repeated Users",
        data: [18, 38, 30, 9, 96, 47, 120],
        borderColor: "rgba(120, 92, 192, 1)",
        backgroundColor: "rgba(120, 92, 192, 0.2)",
        fill: true,
        tension: 0.4, // Smooth line
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        mode: "index" as const,
        intersect: false,
      },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 py-10">
      <h2 className="text-lg font-semibold mb-4">User Traffic Overview</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default UserTraffic;
