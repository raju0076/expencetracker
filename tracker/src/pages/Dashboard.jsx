import React from 'react';
import { Budget } from '../components/Budget';
import { ExpenseForm } from '../components/ExpenseForm';
import { ExpenseTable } from '../components/ExpenseTable';
import { motion } from 'framer-motion';

export const Dashboard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-100">
      <motion.div
        className="bg-white bg-opacity-90 p-10 w-11/12 md:w-3/4 mt-10 rounded-xl shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-3xl font-bold mb-4 text-center text-green-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Expense Tracker
        </motion.h1>

        <Budget />
        <ExpenseForm />
        <ExpenseTable delete={true} />
      </motion.div>
    </div>
  );
};
