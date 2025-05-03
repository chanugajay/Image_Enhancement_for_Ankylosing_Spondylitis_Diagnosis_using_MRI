import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.footer 
      className="bg-gray-900 text-white py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp}>
            <div className="flex items-center space-x-2 mb-4">
              <Stethoscope className="h-6 w-6" />
              <span className="text-xl font-bold">Ankylosing Spondylitis Diagnosis Center</span>
            </div>
            <p className="text-gray-400">
              Leading the way in AI-powered medical diagnostics for Ankylosing Spondylitis.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <motion.li whileHover={{ x: 5 }}>
                <Link to="/" className="hover:text-white">Home</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link to="/contact" className="hover:text-white">Contact</Link>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: chanugajay@gmail.com</li>
              <li>Phone: (076) 850-0372</li>
              <li>Address: 123 Medical Center Dr.</li>
            </ul>
          </motion.div>
        </motion.div>
        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
          variants={fadeInUp}
        >
          <p>&copy; 2025 Ankylosing Spondylitis Diagnosis Center. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;