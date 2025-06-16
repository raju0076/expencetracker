import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
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
      const res = await fetch("https://productlab-4.onrender.com/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "Signup successful!", {
          position: "top-center",
        });
        setTimeout(() => navigate("/signin"), 1000);
      } else {
        toast.error(data.message || "Signup failed!", {
          position: "top-center",
        });
      }
    } catch (err) {
      toast.error("Signup failed. Please try again.", {
        position: "top-center",
      });
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/abstract-uv-ultraviolet-light-composition_23-2149243965.jpg?semt=ais_hybrid&w=740')",
      }}
    >
      <div className="backdrop-blur-xl bg-white/10 border border-purple-300/40 shadow-xl rounded-2xl p-10 w-full max-w-md animate-fade-in transition-all duration-300">
        <h2 className="text-3xl font-extrabold text-center text-white mb-6 tracking-wide">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-purple-200 mb-1">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-purple-300 bg-white/20 text-white placeholder-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-md transition"
              placeholder="Enter your first name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-purple-200 mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-purple-300 bg-white/20 text-white placeholder-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-md transition"
              placeholder="Enter your last name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-purple-200 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
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
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-purple-300 bg-white/20 text-white placeholder-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-md transition"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 rounded-lg hover:from-pink-500 hover:to-purple-700 transition-all shadow-lg"
          >
            Sign Up
          </button>

          <div className="text-center text-purple-100 text-sm mt-4">
            Already have an account?{" "}
            <Link to="/signin" className="text-pink-400 font-medium hover:underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
