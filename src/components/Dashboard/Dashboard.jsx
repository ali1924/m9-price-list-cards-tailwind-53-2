import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {
    const marksArray = [
        { id: 1, name: "Alice", phy: 90, che: 80, math: 70 },
        { id: 2, name: "Bob", phy: 85, che: 90, math: 80 },
        { id: 3, name: "Charlie", phy: 95, che: 85, math: 90 },
        { id: 4, name: "Dave", phy: 80, che: 70, math: 75 },
        { id: 5, name: "Eve", phy: 75, che: 80, math: 85 },
        { id: 6, name: "Frank", phy: 85, che: 90, math: 80 },
        { id: 7, name: "Grace", phy: 90, che: 80, math: 70 },
        { id: 8, name: "Henry", phy: 80, che: 70, math: 75 },
        { id: 9, name: "Isaac", phy: 75, che: 80, math: 85 },
        { id: 10, name: "Jane", phy: 85, che: 90, math: 80 },
        { id: 11, name: "Kevin", phy: 90, che: 80, math: 70 },
        { id: 12, name: "Lily", phy: 80, che: 70, math: 75 }
    ];

    return (
        <div>
            <LineChart
                width={500}
                height={300}
                data={marksArray}
            >
                <Line dataKey="phy" stroke="#8884d8"></Line>
                <Line dataKey="che" stroke="#82ca9d"></Line>
                <Line dataKey="math"></Line>
                <YAxis />
                <XAxis dataKey="name" />
                <Tooltip />

            </LineChart>
        </div>
    );
};

export default Dashboard;