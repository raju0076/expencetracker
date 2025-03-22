import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../components/firebase';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("User logged in successfully!", { position: "top-center" });

      setTimeout(() => {
        navigate("/Homepage"); 
      }, 2000);
    } catch (error) {
      toast.error(error.message, { position: "top-center" });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-10">
      <div className="w-full max-w-md bg-[url('https://previews.123rf.com/images/virtosmedia/virtosmedia2303/virtosmedia230303665/199434354-3d-abstract-background-with-geometric-forms-3d-render-illustration.jpg')] bg-center bg-cover shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-black-700">Sign In</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-lg font-medium text-black-600"><strong>Email</strong></label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-lg font-medium text-black-600"><strong>Password</strong></label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter Your Password"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-5 flex items-center mt-5 text-black-600 text-lg"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition-all"
          >
            Sign In
          </button>

          <p className="text-sm text-center text-black-600">
            Don't have an account?
            <a href="/SignUp" className="text-black-500 font-bold hover:underline ml-1">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};
