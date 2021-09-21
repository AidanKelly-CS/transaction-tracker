import React from 'react';
import './Dashboard.css';
import {Bar, Doughnut, Line, Pie} from 'react-chartjs-2';

export default function Dashboard() {
    

    const data = {
        labels: ['food', 'transport', 'entertainment', 'cinema', 'car', 'date'],
        datasets: [{
            label: 'Total Spent',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }

    const pieData = {
        labels: ['Food', 'transport', 'entertainment', 'cinema', 'car', 'date'],
        datasets: [{
            label: 'Total Spent',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    const trendData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Total Spent',
                data: [12, 19, 3, 5, 2, 3],
                borderColor: [
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Total Budget',
                data: [13, 17, 5, 2, 3, 4],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1
            },
        ]
    };

    return (
        <>
        <h3>Monthly Spend By Categories</h3>
        <div className="chart">
            <Bar 
                data={data}
                options={{ 
                    maintainAspectRatio: false, 
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                }}
            />
        </div>

        <div className="chart">
            <Doughnut 
                data={pieData}
                options={{ 
                    maintainAspectRatio: false, 
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }}
            />
        </div>

        <h3>Monthly Spend Over Time</h3>
        <div className="chart">

            <Line 
                data={trendData}
                options={{ 
                    maintainAspectRatio: false, 
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                        
                    }
                }}
            />            
        </div>
        </>
    );
}
