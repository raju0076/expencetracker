import React from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF4567'];

export const Analytics = () => {
  const expenses = useSelector((state) => state.expenses) || [];

  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  const CategaryTotal = expenses.reduce((acc, expense) => {
    const category = expense.category || "Unknown";
    if (!acc[category]) acc[category] = 0;
    acc[category] += expense.amount;
    return acc;
  }, {});

  const pieChartData = Object.keys(CategaryTotal).map((category) => ({
    name: `${category} (${((CategaryTotal[category] / totalAmount) * 100).toFixed(0)}%)`,
    value: CategaryTotal[category],
  }));

  return (
    <motion.div
      className="shadow-md w-11/12 md:w-3/4 m-auto p-6 bg-white rounded-xl text-center mt-24"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h2
        className="text-2xl text-start font-semibold mb-6 text-blue-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Expenses Analytics
      </motion.h2>

      {pieChartData.length > 0 ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
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
        </motion.div>
      ) : (
        <motion.p
          className="text-gray-500 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          No expense data available.
        </motion.p>
      )}
    </motion.div>
  );
};
