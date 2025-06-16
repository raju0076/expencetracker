import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import SignInForm from "./pages/SignIn";
import Signup from "./components/SignUp";
import { Dashboard } from "./pages/Dashboard";
import { Analytics } from "./pages/Analytics";
import { VoiceRecorder } from "./pages/Mic";
import ProtectedRoute from "./routes/ProtectedRoute";
import { Navbar } from "./components/common/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HomePage } from "./pages/HomePage";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("https://productlab-4.onrender.com/users/verify", {
          credentials: "include",
        });
        setIsAuthenticated(res.ok);
      } catch {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  return (
    <Router>
      <ToastContainer />
      <Routes>
        {/* Redirect root based on auth */}
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/signin" />}
        />

        {/* Auth Routes */}
        <Route path="/signin" element={<SignInForm setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes with Navbar and setIsAuthenticated passed */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <>
                <Navbar setIsAuthenticated={setIsAuthenticated} />
                <Dashboard />
              </>
            </ProtectedRoute>
          }
        />

        <Route
          path="/analytics"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <>
                <Navbar setIsAuthenticated={setIsAuthenticated} />
                <Analytics />
              </>
            </ProtectedRoute>
          }
        />

        <Route
          path="/mic"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <>
                <Navbar setIsAuthenticated={setIsAuthenticated} />
                <VoiceRecorder />
              </>
            </ProtectedRoute>
          }
        />

        <Route
          path="/home"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <>
                <Navbar setIsAuthenticated={setIsAuthenticated} />
                <HomePage />
              </>
            </ProtectedRoute>
          }
        />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
};

export default App;
