import React from 'react';
import { motion } from 'framer-motion';
import { Check, Diamond, Calendar, User } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/Blog.css';

function Blog() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="blog-section">
        <div className="blog-content">
          <motion.div 
            className="blog-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Blog
            </h1>
            <p className="text-xl text-gray-600">
              Latest insights in AI-powered medical imaging
            </p>
          </motion.div>

          <motion.article 
            className="blog-article"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <header className="article-header">
              <h2 className="article-title">
                Enhancing MRI Images for Ankylosing Spondylitis Diagnosis Using AI
              </h2>
              <div className="article-meta">
                <span className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  March 15, 2024
                </span>
                <span className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Dr. Sarah Johnson
                </span>
              </div>
            </header>

            <div className="article-section">
              <h3 className="section-title">Introduction</h3>
              <div className="section-content">
                <p>
                  Ankylosing Spondylitis (AS) is a chronic inflammatory disease that primarily affects the spine and sacroiliac joints. Early detection through MRI imaging is crucial for timely treatment and management. However, MRI images can often be noisy or unclear, making diagnosis challenging. This is where AI-driven image enhancement plays a vital role.
                </p>
              </div>
            </div>

            <div className="article-section">
              <h3 className="section-title">How Our System Works</h3>
              <div className="section-content">
                <motion.img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="AI Medical Imaging System"
                  className="w-full h-64 object-cover rounded-xl mb-6"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
                <ol className="list-decimal list-inside space-y-4 ml-4">
                  <li><strong>MRI Image Upload:</strong> Users upload an MRI image through our web-based interface.</li>
                  <li><strong>AI-Powered Image Enhancement:</strong> The system processes the MRI image to enhance clarity, contrast, and reduce noise.</li>
                  <li><strong>Disease Detection:</strong> A deep learning model, built using CNN U-Net, analyzes the enhanced image and determines whether Ankylosing Spondylitis is present.</li>
                  <li><strong>Results and Insights:</strong> The system provides a diagnosis result (Yes/No).</li>
                </ol>
              </div>
            </div>

            <div className="article-section">
              <h3 className="section-title">Why Image Enhancement Matters in Medical Imaging</h3>
              <div className="section-content">
                <ul className="feature-list">
                  <motion.li 
                    className="feature-item"
                    {...fadeInUp}
                  >
                    <Check className="check-icon h-5 w-5" />
                    <span>Low contrast: Makes it difficult to detect abnormalities.</span>
                  </motion.li>
                  <motion.li 
                    className="feature-item"
                    {...fadeInUp}
                  >
                    <Check className="check-icon h-5 w-5" />
                    <span>Noise and artifacts: Affect visibility of crucial structures.</span>
                  </motion.li>
                  <motion.li 
                    className="feature-item"
                    {...fadeInUp}
                  >
                    <Check className="check-icon h-5 w-5" />
                    <span>Variations in brightness: Lead to inconsistent diagnoses.</span>
                  </motion.li>
                </ul>
              </div>
            </div>

            <div className="article-section">
              <h3 className="section-title">Future Scope</h3>
              <div className="section-content">
                <ul className="future-list">
                  <motion.li 
                    className="future-item"
                    {...fadeInUp}
                  >
                    <Diamond className="diamond-icon h-5 w-5" />
                    <span>Improve model accuracy with more training data.</span>
                  </motion.li>
                  <motion.li 
                    className="future-item"
                    {...fadeInUp}
                  >
                    <Diamond className="diamond-icon h-5 w-5" />
                    <span>Introduce severity grading for better disease management.</span>
                  </motion.li>
                  <motion.li 
                    className="future-item"
                    {...fadeInUp}
                  >
                    <Diamond className="diamond-icon h-5 w-5" />
                    <span>Develop a mobile-friendly version for easy access.</span>
                  </motion.li>
                </ul>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Blog;