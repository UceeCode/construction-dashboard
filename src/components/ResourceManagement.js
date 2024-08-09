import React from 'react';
import './ResourceManagement.css';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale);

export default function ResourceManagement() {
    const pieData = {
        labels: ['Engineering', 'Design', 'Marketing', 'HR'],
        datasets: [
            {
                label: 'Resource Allocation',
                data: [40, 25, 20, 15],
                backgroundColor: ['red', 'navy', 'yellow', 'green'],
                borderColor: '#fff',
                borderWidth: 2,
            },
        ],
    };

    const barData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Hours Worked',
                data: [15, 25, 30, 20],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                    },
                },
            },
        },
    };

    return (
        <div className="resource-management">
            <h2>Resource Allocation</h2>
            <div className="chart-container">
                <div className="chart">
                    <h3>Resource Distribution</h3>
                    <Pie data={pieData} options={options} />
                </div>
                <div className="chart">
                    <h3>Work Hours Per Week</h3>
                    <Bar data={barData} options={options} />
                </div>
            </div>
        </div>
    );
}
