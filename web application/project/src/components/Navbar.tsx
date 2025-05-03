import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.header 
      className="bg-gray-900 shadow-md sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="border-b border-gray-800">
          <div className="flex justify-between items-center px-4 py-3">
            <Link to="/">
              <motion.div 
                className="flex items-center space-x-2 text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Stethoscope className="h-6 w-6" />
                <span className="text-xl font-bold">Ankylosing Spondylitis Diagnosis Center</span>
              </motion.div>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              <Link to="/how-it-works" className="text-gray-300 hover:text-white">How It Works</Link>
              <Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
            </nav>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;