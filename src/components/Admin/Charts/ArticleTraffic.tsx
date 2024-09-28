import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ArticleTraffic: React.FC = () => {
  const data = {
    labels: ['DSA', 'Algorithm'],
    datasets: [
      {
        label: 'Trending Topics',
        data: [300, 150], // Example data: 300 user visits and 150 page views
        backgroundColor: [
          'rgba(75, 192, 192, 1)', // User Visits color
          'rgba(255, 99, 132, 1)', // Page Views color
        ],
        hoverOffset: 4,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: { label: any; raw: any; }) => {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 py-10 h-max align-middle">
      <h2 className="text-lg font-semibold mb-4">Article Traffic Overview</h2>
      <div className="w-64 h-64 m-auto"> {/* Set width and height using Tailwind CSS */}
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default ArticleTraffic;