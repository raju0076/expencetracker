import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhone, FaMoneyBillWave } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="w-full h-96 mt-20 bg-gradient-to-r from-blue-100 to-blue-200 relative overflow-hidden group flex flex-col items-center justify-center shadow-lg">
      
      
    
      <div className="text-center mt-10  w-1/2 h-full  flex flex-col justify-center align-center border border-black-600 ml-50">
        <p className="text-gray-800 font-semibold text-lg flex justify-center items-center space-x-2">
          <FaMoneyBillWave className="text-green-500" /> 
          <span>TrackExpense - Smart Expense Management</span>
        </p>
        
        {/* Footer Links */}
        <div className="flex justify-center space-x-6 mt-4 text-gray-700 text-sm">
          <Link to="/features" className="hover:text-blue-600">Features</Link>
          <Link to="/privacy-policy" className="hover:text-blue-600">Privacy Policy</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          
        </div>

        <p className="text-gray-600 text-sm mt-4 ">© {new Date().getFullYear()} TrackExpense | Built by G.N Raju</p>


        <div className="flex space-x-4 mt-2 justify-center">
            <Link to="https://www.linkedin.com/feed/" target="_blank" className="text-blue-600 hover:text-blue-800">
              <FaLinkedin className="text-2xl" />
            </Link>
            <a href="mailto:nagaraju@example.com" className="text-red-500 hover:text-red-700">
              <FaEnvelope className="text-2xl" />
            </a>
            <a href="tel:+916362038373" className="text-green-600 hover:text-green-800">
              <FaPhone className="text-2xl" />
            </a>
          </div>
      </div>
    </footer>
  );
};
