import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'A1',
        marks: 60,
        amt: 2400,
    },
    {
        name: 'A2',
        marks: 59,
        amt: 2210,
    },
    {
        name: 'A3',
        marks: 59,
        amt: 2290,
    },
    {
        name: 'A4',
        marks: 60,
        amt: 2000,
    },
    {
        name: 'A5',
        marks: 59,
        amt: 2181,
    },
    {
        name: 'A6',
        marks: 28,
        amt: 2500,
    },
    {
        name: 'A7',
        marks: 30,
        amt: 2100,
    },
    {
        name: 'A8',
        marks: 30,
        amt: 2100,
    },
    {
        name: 'A9',
        marks: 29,
        amt: 2100,
    },
];
const Statistics = () => {
    return (
        <div>
            <div className='bg-header-texture bg-auto h-56 bg-no-repeat flex items-center justify-center'>
                <h1 className='text-4xl font-manrope font-bold text-center'>Assignment Analytics</h1>
            </div>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    width="100%"
                    height={600}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="marks" stroke="#8884d8" strokeDasharray="8 4" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;