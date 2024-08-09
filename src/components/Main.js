import React from "react";
import './Main.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Main = () => {
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
                <a href="#"><i class="fa-solid fa-building"></i>Project Overview</a>
                <a href="#"><i class="fa-solid fa-list-check"></i>Resource Management</a>
                <a href="#"><i class="fa-solid fa-chart-line"></i>Budget Tracking</a>
                <a href="#"><i class="fa-solid fa-file-contract"></i>Schedule</a>
            </div>

            <div className="projectOverview">
                <div className="project-head">
                    <h2><span className="ongoing">ONGOING PROJECT:</span> Construction of Five Star Hotel</h2>
                    <p>Show more</p>
                </div>
                <div className="details">
                    <p><strong><i class="fa-regular fa-user"></i><span>Client:</span></strong> Five Star Corporation</p>
                    <p><strong><i class="fa-solid fa-power-off"></i>Start Date:</strong> January 1, 2024</p>
                    <p><strong><i class="fa-regular fa-circle-check"></i>Estimated Completion:</strong> December 31, 2024</p>
                </div>

                <div className="progress-container">
                    <div className="progress-title">Project Progress:</div>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${projectProgress}%` }}></div>
                        <div className="progress-percent">{projectProgress}%</div>
                    </div>
                </div>
            </div>

            <div className="budget-container">
                <div className="budget-title">Budget Overview</div>
                <div className="budget-content">
                    <div className="budget-info">
                        <p><strong><i class="fa-solid fa-circle-dollar-to-slot"></i>Allocated Budget:</strong> $5,000,000</p>
                        <p><strong><i class="fa-solid fa-money-check-dollar"></i>Spent:</strong> $3,500,000</p>
                        <p><strong><i class="fa-solid fa-vault"></i>Remaining:</strong> $1,500,000</p>
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
