import React, { useState, useRef } from 'react';
import { Upload, FileImage, Stethoscope, Users, Clock, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);


  // Handle image upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setSelectedImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  // Handle image deletion
  const handleDeleteImage = () => {
    setSelectedImage(null);
    setResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset the file input
    }
  };

  // Handle image analysis submission
 const handleSubmit = async () => {
  if (!fileInputRef.current || !fileInputRef.current.files?.[0]) return;

  setIsLoading(true);
  setResult(null);
  const file = fileInputRef.current.files[0];
  const formData = new FormData();
  formData.append("image", file);
  
  
  try {
    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to analyze the image.");
    }

    const data = await response.json();
    setResult(data.prediction || "Analysis failed. Try again.");
  } catch (error) {
    console.error(error);
    setResult("Error occurred during analysis.");
  } finally {
    setIsLoading(false);
  }
};

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
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2091&q=80')`
        }}
      >
        <motion.div 
          className="hero-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1 }}
        />
        <div className="hero-content">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div 
              className="mb-12 lg:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6 text-white"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
              >
                Image Enhancement for Medical Imaging for Ankylosing Spondylitis Diagnosis using MRI

              </motion.h1>
              <motion.p 
                className="text-xl mb-8 text-gray-200"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.2 }}
              >
                Upload your MRI scan and get instant analysis for early detection of AS symptoms.
              </motion.p>
              <motion.a
                href="#diagnosis"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Diagnosis
              </motion.a>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Medical Technology"
                  className="rounded-lg"
                />
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-900">State-of-the-art Analysis</h3>
                  <p className="text-gray-600 mt-2">Our system provides accurate and rapid analysis of spinal MRI scans.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: Clock, title: "Quick Results", description: "Get analysis of your MRI scans within minutes." },
              { icon: Users, title: "Expert Review", description: "Our model is trained on thousands of expert-reviewed cases." },
              { icon: Clock, title: "24/7 Support", description: "Access our diagnostic tools anytime, anywhere." }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="feature-card"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="feature-icon-container"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Diagnosis Section */}
      <section id="diagnosis" className="diagnosis-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-white rounded-xl shadow-xl p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-4"
                variants={fadeInUp}
              >
                Ankylosing Spondylitis Diagnosis
              </motion.h2>
              <motion.p 
                className="text-gray-600 max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                Upload your spinal MRI scan for instant analysis. Our advanced AI system will help identify potential indicators of Ankylosing Spondylitis.
              </motion.p>
            </div>

            <div className="space-y-8">
              <motion.div 
                className="upload-container"
                onClick={() => fileInputRef.current?.click()}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <AnimatePresence mode="wait">
                  {selectedImage ? (
                    <motion.div 
                      key="uploaded"
                      className="uploaded-image-container"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="relative inline-block">
                        <motion.img 
                          src={selectedImage} 
                          alt="Uploaded MRI" 
                          className="max-h-64 mx-auto rounded-lg"
                          layoutId="uploadedImage"
                        />
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteImage();
                          }}
                          className="delete-button"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          <X className="h-5 w-5" />
                        </motion.button>
                      </div>
                      <p className="text-sm text-gray-500">Click to change image</p>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="upload-prompt"
                      className="upload-prompt"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <FileImage className="h-16 w-16 mx-auto text-gray-400" />
                      <div className="space-y-2">
                        <p className="text-gray-900 font-medium">Upload MRI Scan</p>
                        <p className="text-sm text-gray-500">Click to select or drag and drop</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Loading Indicator */}
{isLoading && (
  <motion.div
    key="loading"
    className="flex justify-center mt-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Clock className="animate-spin h-6 w-6 text-gray-500" />
    <span className="ml-2 text-gray-700">Analyzing...</span>
  </motion.div>
)}
{/* Display Results */}
{result && (
  <motion.div
    key="result"
    className="mt-4 bg-green-100 text-green-800 p-4 rounded-lg shadow-lg"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
  >
    <h3 className="text-lg font-semibold">Analysis Result</h3>
    <p className="mt-2">{result}</p>
  </motion.div>
)}

                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                onClick={handleSubmit}
                disabled={!selectedImage || isLoading}
                className={`analyze-button ${
                  selectedImage && !isLoading 
                    ? 'analyze-button-enabled' 
                    : 'analyze-button-disabled'
                }`}
                whileHover={selectedImage && !isLoading ? { scale: 1.02 } : {}}
                whileTap={selectedImage && !isLoading ? { scale: 0.98 } : {}}
              >
                <Upload className="h-6 w-6" />
                <span>{isLoading ? 'Analyzing...' : 'Analyze MRI Scan'}</span>
              </motion.button>
            </div>
            
            
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;