import React from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF4567'];

export const Analytics = () => {
  const expenses = useSelector((state) => state.expenses) || [];

  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  const CategaryTotal = expenses.reduce((acc, expense) => {
    const category = expense.category || "Unknown"; // Ensure category is always valid
  
    if (!acc[category]) acc[category] = 0;
    acc[category] += expense.amount;
  
    return acc;
  }, {});

  // Convert category totals into percentage-based data for the PieChart
  const pieChartData = Object.keys(CategaryTotal).map((category) => ({
    name: `${category} (${((CategaryTotal[category] / totalAmount) * 100).toFixed(0)}%)`,
    value: CategaryTotal[category],
  }));

  console.log(pieChartData);

  return (
    <div className="shadow-md w-3/4 m-auto p-4 bg-white rounded-lg text-center mt-20">
      <h2 className="text-2xl text-start font-semibold mb-4">Expenses Analytics</h2>

      {pieChartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={300} style={{ minHeight: 300 }}>
          <PieChart>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name }) => name} 
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-gray-500 mt-4">No expense data available.</p>
      )}
    </div>
  );
};
