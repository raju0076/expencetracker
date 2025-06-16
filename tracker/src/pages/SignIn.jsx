import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const SignInForm = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://productlab-4.onrender.com/users/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        navigate("/");
        setFormData({ email: "", password: "" });
        setIsAuthenticated(true);
      } else {
        toast.error(data.message || "Sign in failed", {
          autoClose: 2000,
        });
      }
    } catch (err) {
      console.error("Login error:", err);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-start bg-cover bg-center px-8"
      style={{
        backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20230525/pngtree-bitcoin-cryptocurrency-and-the-future-of-trading-portfolio-image_2630340.jpg')`,
      }}
    >
      <div className="backdrop-blur-xl bg-white/10 border border-purple-300/30 shadow-2xl rounded-3xl p-10 w-full max-w-md mt-10">
        <h2 className="text-3xl font-extrabold text-center text-white mb-8 tracking-wide">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-purple-200 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-purple-300 bg-white/20 text-white placeholder-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-md transition"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-purple-200 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-purple-300 bg-white/20 text-white placeholder-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-md transition"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 rounded-lg hover:from-pink-500 hover:to-purple-700 transition-all shadow-lg"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-purple-100">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-green-400 font-medium hover:underline hover:text-red-500 transition"
          >
            Sign Up
          </Link>
        </p>
      </div>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default SignInForm;
