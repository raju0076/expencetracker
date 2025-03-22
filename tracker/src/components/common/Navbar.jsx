import React, { useState } from "react";
import { House, ChartPie, History, Mic } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


export const Navbar = () => {
  return (
    <nav className="flex items-center justify-around fixed top-0 left-0 z-50 w-full box-border bg-blue-100 p-3 shadow-md font-bold">
      <div className="flex items-center gap-2  hover:scale-105 hover: fluctuate-effect cursor-pointer hover:text-green-700">
        <Link to="/Home">
          <span className="text-red-500 text-4xl">X</span>pensr
        </Link>
      </div>

      <div className="flex items-center gap-2  hover:scale-105 hover:fluctuate-effect cursor-pointer hover:text-green-900">
        <House size={20} />
        <Link to="/Dashboard">Dashboard</Link>
      </div>

      <div className="flex items-center gap-2  hover:scale-105 hover:fluctuate-effect cursor-pointer hover:text-green-700">
        <ChartPie size={20} />
        <Link to="/analytics">Analytics</Link>
      </div>

      <div className="text-Blue-700  hover:scale-105 hover: fluctuate-effect cursor-pointer hover:text-green-700">
        <Link to="/Mic">
          <Mic size={24} className="hover:scale-150 transition-all" />
        </Link>
      </div>

      <div className="flex items-center gap-2  ">
       
        <Link to="/SignUp" className="hover:scale-105 hover:fluctuate-effect cursor-pointer hover:text-purple-700">  Sign Up</Link><span className="text-black">|</span>
        <Link to="/SignIn" className="hover:scale-105 hover:fluctuate-effect cursor-pointer hover:text-pink-700">Sign In</Link>

      </div>
    </nav>
  );
};
