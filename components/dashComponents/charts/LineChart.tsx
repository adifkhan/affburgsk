import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { LineChartData } from './ChartsData';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            labels: {
                usePointStyle: true,
            },
            position: 'bottom' as const,
            align: 'end' as const,
        },
        // title: {
        //     display: true,
        //     text: 'Chart.js Line Chart',
        //     color: 'gray',
        //     font: {
        //         size: 12
        //     },

        // },
    },
    scales: {
        x: {
            ticks: { color: 'Grey' },
            border: {
                color: 'grey'
            },
            grid: {
                display: false,
            }
        },
        y: {
            ticks: { color: 'Grey' },
            border: {
                color: 'grey'
            },
            grid: {
                display: false,
            }
        }
    }
}

function LineChart() {
    const [userData, setUserData] = useState({
        labels: LineChartData.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained",
                data: LineChartData.map((data) => data.userGain),
                backgroundColor: '#3ec1a1',
                fill: true,
                borderWidth: 2,
                // tension: 0.5,
                borderColor: '#3ec1a1',
                lineTension: 0.4,
                pointHoverRadius: 9,
                pointRadius: 5,
            },
            {
                label: "Users Lost",
                data: LineChartData.map((data) => data.userLost),
                backgroundColor: '#7752FE',
                fill: true,
                borderWidth: 2,
                // tension: 0.5,
                borderColor: '#7752FE',
                lineTension: 0.4,
                pointHoverRadius: 9,
                pointRadius: 5,
            },
        ],
    });



    return <Line options={options} data={userData} />
}
export default LineChart;