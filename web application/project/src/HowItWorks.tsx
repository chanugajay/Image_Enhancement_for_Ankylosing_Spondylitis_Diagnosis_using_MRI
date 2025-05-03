import React from 'react';
import { motion } from 'framer-motion';
import {
  Upload,
  Cpu,
  LineChart,
  FileCheck,
  Shield,
  Clock,
  Zap,
  Brain,
  Database,
  Code,
  Server
} from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/HowItWorks.css';

function HowItWorks() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const processSteps = [
    {
      icon: Upload,
      title: "Upload MRI Scan",
      description: "Securely upload your spinal MRI scan through our user-friendly interface."
    },
    {
      icon: Cpu,
      title: "AI Processing",
      description: "Our advanced AI algorithms analyze the image using deep learning techniques."
    },
    {
      icon: LineChart,
      title: "Analysis",
      description: "The system identifies potential indicators of Ankylosing Spondylitis."
    },
    {
      icon: FileCheck,
      title: "Results",
      description: "Receive detailed results and recommendations for next steps."
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your medical data is protected with enterprise-grade encryption and security measures."
    },
    {
      icon: Clock,
      title: "Quick Results",
      description: "Get analysis results within minutes, not days or weeks."
    },
    {
      icon: Zap,
      title: "High Accuracy",
      description: "Our AI model has been trained on thousands of verified cases for optimal accuracy."
    }
  ];

  const technologies = [
    {
      icon: Brain,
      title: "Advanced AI",
      description: "Using state-of-the-art deep learning models specifically trained for AS detection."
    },
    {
      icon: Database,
      title: "Secure Storage",
      description: "HIPAA-compliant data storage with end-to-end encryption."
    },
    {
      icon: Code,
      title: "Modern Stack",
      description: "Built with cutting-edge technology for reliability and performance."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="how-it-works-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="how-it-works-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered system simplifies the process of detecting Ankylosing Spondylitis through advanced MRI analysis.
            </p>
          </motion.div>

          <motion.div 
            className="process-grid"
            initial="initial"
            animate="animate"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="process-card"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="process-number">{index + 1}</div>
                <div className="process-icon-container">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="benefits-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Benefits</h2>
            <div className="space-y-6">
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit.title}
                  className="benefit-card"
                  whileHover={{ x: 10 }}
                >
                  <div className="process-icon-container !w-12 !h-12 !mb-0">
                    <benefit.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="tech-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">Technology Stack</h2>
            <div className="tech-grid">
              {technologies.map((tech) => (
                <motion.div
                  key={tech.title}
                  className="tech-card"
                  whileHover={{ y: -5 }}
                >
                  <div className="tech-icon-container">
                    <tech.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {tech.title}
                  </h3>
                  <p className="text-gray-400">
                    {tech.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HowItWorks;