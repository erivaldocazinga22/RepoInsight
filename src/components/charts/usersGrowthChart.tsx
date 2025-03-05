"use client";
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";


const data = [
  { date: "Jan", users: 200 },
  { date: "Feb", users: 400 },
  { date: "Mar", users: 800 },
  { date: "Apr", users: 1200 },
  { date: "May", users: 1500 }
];
export const UsersGrowthChart = () => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#4CAF50" strokeWidth={3} />
            </LineChart>
        </ResponsiveContainer>
    )
}

