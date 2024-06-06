import React from "react";
import { Chart, registerables} from 'chart.js';
import { Line } from "react-chartjs-2";
import "./FIREChart.scss";

Chart.register(...registerables);

function FIREChart({ data }) {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <p>No data available. Please submit the form to calculate.</p>;
  }

  const chartData = {
    labels: data.map((data) => data.chartYear),
    datasets: [
      {
        label: "Net Worth",
        data: data.map((data) => data.netWorth),
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
    plugins: {
      title: {
        display: true,
        text: "Net Worth Over Time",
      },
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    animation: {
      duration: 1000,
      easing: "easeInOutElastic",
    },
    animations: {
      tension: {
        duration: 500,
        easing: "linear",
        from: 0.5,
        to: 0.3,
        loop: true,
      },
    },
    resizeDelay: 200,
  };

  return (
    <div className="chart-container">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
}

export default FIREChart;
