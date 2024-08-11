import React from "react";
import './Main.css';
import { Bar } from 'react-chartjs-2';
import { PieChart, Pie, Cell } from 'recharts';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale);


const Main = () => {

    const pieData = [
        { name: 'Engineering', value: 40, fill: 'red' },
        { name: 'Design', value: 25, fill: 'orange' },
        { name: 'Marketing', value: 20, fill: 'blue' },
        { name: 'HR', value: 15, fill: 'green' },
    ];

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

    const option = {
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

    const projectProgress = 70;

    const data = {
        labels: ['Allocated Budget', 'Spent', 'Remaining'],
        datasets: [
            {
                label: 'Budget ($)',
                data: [5000000, 3500000, 1500000],
                backgroundColor: ['green', 'orange', 'red'],
                borderColor: ['#388e3c', '#f57c00', '#d32f2f'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="main">
            <div className="main-nav">
                <a href="#"><i className="fa-solid fa-building"></i><span>Project Overview</span></a>
                <a href="#"><i className="fa-solid fa-list-check"></i>Resource Management</a>
                <a href="#"><i className="fa-solid fa-chart-line"></i>Budget Tracking</a>
                <a href="#"><i className="fa-solid fa-file-contract"></i><span>Schedule</span></a>
            </div>

            <div className="projectOverview">
                <div className="project-head">
                    <h2><span className="ongoing">ONGOING PROJECT:</span> Construction of Five Star Hotel</h2>
                    <p>Show more</p>
                </div>
                <div className="details">
                    <p><strong><i className="fa-regular fa-user"></i><span>Client:</span></strong> Five Star Corporation</p>
                    <p><strong><i className="fa-solid fa-power-off start"></i>Start Date:</strong> January 1, 2024</p>
                    <p><strong><i className="fa-regular fa-circle-check end"></i>Estimated Completion:</strong> December 31, 2024</p>
                </div>

                <div className="progress-container">
                    <div className="progress-title">Project Progress:</div>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${projectProgress}%` }}></div>
                        <div className="progress-percent">{projectProgress}%</div>
                    </div>
                </div>
            </div>

            <div className="resource-container">
                <div className="resource-allocation">
                    <PieChart width={500} height={500}>
                        <Pie 
                            data={pieData} 
                            dataKey="value" 
                            cx="50%" 
                            cy="50%" 
                            outerRadius={120}
                            label={({ name, value }) => `${name}: ${value}%`}
                        >
                            {
                                pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))
                            }
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </div>

                <div className="hours-worked">
                    <Bar data={barData} options={option} />
                </div>
        </div>

            <div className="budget-container">
                <div className="budget-title">Budget Overview</div>
                <div className="budget-content">
                    <div className="budget-info">
                        <p><strong><i className="fa-solid fa-circle-dollar-to-slot"></i>Allocated Budget:</strong> $5,000,000</p>
                        <p><strong><i className="fa-solid fa-money-check-dollar"></i>Spent:</strong> $3,500,000</p>
                        <p><strong><i className="fa-solid fa-vault"></i>Remaining:</strong> $1,500,000</p>
                    </div>
                    <div className="budget-chart">
                        <Bar data={data} options={options} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Main;
