import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewBudget } from "../Redux/action";
import { IndianRupee ,Plus} from "lucide-react";
import { motion } from "framer-motion";

export const Budget = () => {
  const dispatch = useDispatch();
  const exp = useSelector((state) => state.expenses) || [];
  const newTotalBudget = useSelector((state) => state.budget);

    const [budget, setBudget] = useState(() => {
    return Number(localStorage.getItem("totalBudget")) || 0;
  });
  const [displayBudget, setDisplayBudget] = useState(budget);
  const [showCelebration, setShowCelebration] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const inputText = useRef(null);

  const TotalExpenses = exp.reduce(
    (total, expense) => total + Number(expense.amount),
    0
  );
  const Remaining = Number(newTotalBudget || budget) - TotalExpenses || 0;

  useEffect(() => {
    if (newTotalBudget > 0 && Remaining / newTotalBudget <= 0.10) {
      setShowAlert(true);
    }
  }, [Remaining, newTotalBudget]);

  useEffect(() => {
    localStorage.setItem("totalBudget", budget);
  }, [budget]);

  const animateBudget = (value) => {
    setDisplayBudget(value);
  };

  const handleSubmit = () => {
    dispatch(setNewBudget(Number(budget)));
    animateBudget(budget);
    setShowCelebration(true);
    setTimeout(() => setShowCelebration(false), 2000);
  };

  const handleNewBudget = () => {
    setBudget(0);
    dispatch(setNewBudget(0));
    setDisplayBudget(0);
  };

  useEffect(() => {
    inputText.current.focus();
  }, []);

  return (
    <div className="shadow-md p-4 mt-4 bg-white rounded-lg relative">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
        <input
          onChange={(e) => setBudget(Number(e.target.value))}
          ref={inputText}
          className="w-full md:w-2/4 py-2 px-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-400 transition-all"
          type="text"
          placeholder="Enter Budget Amount"
          value={budget === 0 ? "" : budget} 
        />

        <button
          onClick={handleSubmit}
          className="bg-pink-500 text-white rounded-md py-2 px-4 w-full md:w-auto hover:scale-105 hover:shadow-lg cursor-pointer"
        >
          Set Budget
        </button>

        <button
          onClick={handleNewBudget}
          className="bg-green-500 text-white rounded-md py-2 px-4 w-full md:w-auto hover:scale-105 hover:shadow-lg cursor-pointer"
        >
        New Budget
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 mt-6 text-center relative">
        <div className="bg-blue-100 p-4 rounded-lg shadow flex items-center flex-col
        hover:scale-105 hover:shadow-lg cursor-pointer">
          <p className="text-blue-600 font-semibold">Total Budget</p>
          <h1 className="text-xl font-bold flex items-center">
            <IndianRupee size={16} /> {displayBudget.toLocaleString("en-IN")}
          </h1>
        </div>

        <div className="bg-red-100 p-4 rounded-lg shadow flex items-center flex-col
        hover:scale-105 hover:shadow-lg cursor-pointer">
          <p className="text-red-600 font-semibold">Total Expenses</p>
          <h1 className="text-xl font-bold flex items-center">
            <IndianRupee size={16} /> {TotalExpenses.toLocaleString("en-IN")}
          </h1>
        </div>

        <div className="bg-green-50 p-4 rounded-lg shadow flex items-center flex-col
        hover:scale-105 hover:shadow-lg cursor-pointer">
          <p className="text-green-600 font-semibold">Remaining</p>
          <h1 className="text-xl font-bold flex items-center">
            <IndianRupee size={16} /> {Remaining.toLocaleString("en-IN")}
          </h1>
          {showCelebration &&
            [...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bottom-0 w-6 h-8 rounded-full"
                style={{
                  backgroundColor: ["#ff0000", "#ff9900", "#00ccff", "#ff66b2"][
                    Math.floor(Math.random() * 4)
                  ],
                  left: `${Math.random() * 80 + 10}%`,
                }}
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: -150, opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            ))}
        </div>
      </div>

      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div
            className="bg-white p-4 rounded-lg shadow-lg text-center"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-vector/modern-futuristic-black-red-esport-background_331749-854.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2 className="text-xl font-bold text-red-600 mb-2">
              ⚠️ Low Balance Alert!
            </h2>
            <p className="text-white">
              Your remaining balance is{" "}
              <span className="text-green-600 text-xl">₹{Remaining}</span>. Please be careful with your expenses.
            </p>
            <button
              className="mt-3 bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => setShowAlert(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
