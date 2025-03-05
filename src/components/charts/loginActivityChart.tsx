"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "01/03", logins: 10 },
  { date: "02/03", logins: 30 },
  { date: "03/03", logins: 20 },
  { date: "04/03", logins: 50 }
];

export const LoginActivityChart = () => {
    return (
        <ResponsiveContainer width="100%" height={180} className="flex-1">
            <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="logins" stroke="#2196F3" strokeWidth={3} />
            </LineChart>
        </ResponsiveContainer>
    )
}