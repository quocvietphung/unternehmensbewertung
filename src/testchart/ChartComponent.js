import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';

const ChartComponent = () => {
    Chart.register();

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55],
                fill: false,
                borderColor: '#8884d8',
                pointRadius: 8,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                type: 'category',
                display: true,
            },
            y: {
                display: true,
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div>
            <h2>Chart Example</h2>
            <div>
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default ChartComponent;
