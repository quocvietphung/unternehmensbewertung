import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import htmlToImage from 'html-to-image';

const ChartComponent = () => {
    const data = [
        { name: 'January', Sales: 65 },
        { name: 'February', Sales: 59 },
        { name: 'March', Sales: 80 },
        // ...
    ];

    const exportChartAsImage = () => {
        const chart = document.getElementById('chart');

        htmlToImage.toPng(chart)
            .then((dataUrl) => {
                // Base64 image data
                console.log(dataUrl);
            })
            .catch((error) => {
                console.error('Error converting chart to image:', error);
            });
    };

    return (
        <div>
            <h2>Chart Example</h2>
            <div id="chart">
                <LineChart width={400} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Sales" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </div>
            <button onClick={exportChartAsImage}>Export as Image</button>
        </div>
    );
};

export default ChartComponent;
