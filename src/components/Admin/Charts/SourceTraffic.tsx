import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SourceTraffic: React.FC = () => {
  const data = {
    labels: [
      'Instagram',
      'Facebook',
      'Twitter',
      'Google Ads',
      'LinkedIn',
      'Other'
    ],
    datasets: [{
      label: 'All Sources',
      data: [300, 50, 100, 200, 150, 250],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        'rgb(255, 159, 64)'
      ],
      hoverOffset: 4
    }]
  };

  const options = {
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 py-10">
      <h2 className="text-lg font-semibold mb-4">User Source Overview</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SourceTraffic;