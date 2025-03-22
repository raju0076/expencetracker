import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpense, editExpense } from "../Redux/action";
import { RESET_FORM } from "../Redux/actionType";

export const ExpenseForm = () => {
  const [description, setDes] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("other");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();
  const exp = useSelector((state) => state.expenses);
  const newTotalBudget = useSelector((state) => state.budget);
  const editExpenseData = useSelector((state) => state.editExpense);
  const isEdit1 = useSelector((state) => state.isEdit);

  useEffect(() => {
    if (isEdit1 && editExpenseData && Object.keys(editExpenseData).length > 0) {
      setDes(editExpenseData.description || ""); // Default to empty string if undefined
      setAmount(editExpenseData.amount ? editExpenseData.amount.toString() : ""); // Check before calling toString()
      setCategory(editExpenseData.category || "other");
      setDate(editExpenseData.date || "");
    }
  }, [isEdit1, editExpenseData]);
  

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
        id: isEdit1 ? editExpenseData.id : Date.now(),
        date,
        description,
        amount: Number(amount),
        category
    };

    if (isEdit1) {
        dispatch(editExpense(newExpense));
    } else {
        dispatch(addExpense(newExpense));
    }

    // Reset form after submission
    setDes("");
    setAmount("");
    setCategory("other");
    setDate("");

    // Reset edit mode
    dispatch({ type: RESET_FORM }); 
};

  return (
    <form onSubmit={handleFormSubmit} className="bg-white p-6 rounded-lg shadow-md mt-5">
      <div className="grid grid-cols-1 p-2 md:grid-cols-4 gap-4">
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-2 border rounded" required />
        <input value={description} onChange={(e) => setDes(e.target.value)} type="text" placeholder="Enter description" className="px-4 py-2 border rounded-md focus:outline-none" required />
        <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder="Enter amount" className="px-4 py-2 border rounded-md focus:outline-none" required />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="px-4 py-2 border rounded-md focus:outline-none">
          <option value="other">Other</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="activities">Activities</option>
          <option value="entertainment">Entertainment</option>
          <option value="accommodation">Accommodation</option>
        </select>
      </div>

      <div className="flex justify-center mt-4">
        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md transition duration-300">
          {isEdit1 ? "Update Expense" : "Add New Expense"}
        </button>
      </div>
    </form>
  );
};
