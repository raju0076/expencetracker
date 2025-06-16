import React from "react";
import { House, ChartPie, Mic } from "lucide-react";
import { Link } from "react-router-dom";
import SignOutButton from "../../pages/SignOutButton";

export const Navbar = ({ setIsAuthenticated }) => {
  return (
    <nav
      className="fixed top-0 left-0 z-50 w-full backdrop-blur-md shadow-md font-semibold border-b border-white/20"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        padding: "1rem 2rem",
      }}
    >
      <div className="flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2 hover:scale-105 transition cursor-pointer hover:text-green-700">
          <Link to="/home" className="flex items-center text-xl">
            <span className="text-red-500 text-3xl font-extrabold">X</span>pensr
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-md">
          <Link to="/dashboard" className="flex items-center gap-1 hover:text-green-900 transition">
            <House size={20} />
            Dashboard
          </Link>

          <Link to="/analytics" className="flex items-center gap-1 hover:text-green-700 transition">
            <ChartPie size={20} />
            Analytics
          </Link>

          <Link to="/mic" className="flex items-center gap-1 hover:text-green-700 transition">
            <Mic size={20} />
            Voice
          </Link>
        </div>

        {/* Sign Out */}
        <div>
          <SignOutButton setIsAuthenticated={setIsAuthenticated} />
        </div>
      </div>
    </nav>
  );
};
