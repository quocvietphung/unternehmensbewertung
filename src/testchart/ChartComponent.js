import React, { useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import html2canvas from 'html2canvas';

const ChartComponent = () => {
    const chartRef = useRef(null);

    const data = [
        { name: 'January', Sales: 65 },
        { name: 'February', Sales: 59 },
        { name: 'March', Sales: 80 },
        // ...
    ];

    const exportChartAsImage = () => {
        html2canvas(chartRef.current)
            .then((canvas) => {
                const dataUrl = canvas.toDataURL(); // Base64 image data

                // Tạo một thẻ <a> và đặt thuộc tính href thành base64 image data
                const link = document.createElement('a');
                link.href = dataUrl;

                // Đặt thuộc tính download để đặt tên tệp tin khi tải xuống
                link.download = 'chart.png';

                // Kích hoạt sự kiện click để tải về
                link.click();
            })
            .catch((error) => {
                console.error('Error converting chart to image:', error);
            });
    };

    return (
        <div>
            <h2>Chart Example</h2>
            <div ref={chartRef}>
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
