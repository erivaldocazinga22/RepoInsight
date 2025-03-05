"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { role: "Administradores", count: 5 },
  { role: "Moderadores", count: 15 },
  { role: "Usuários", count: 80 }
];

export const AccessLevelsChart = () => {
    return (
        <ResponsiveContainer width="100%" height={300} >
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="role" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#4CAF50" />
            </BarChart>
        </ResponsiveContainer>
    )
}