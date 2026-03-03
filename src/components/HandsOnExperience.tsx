import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Zap, Database, LineChart, ChevronDown } from 'lucide-react';
import { useResponsive } from '../hooks/useResponsive';

export function HandsOnExperience() {
  const { isMobile } = useResponsive();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handsonExperiences = [
    {
      title: "Statistical Testing and Data Visualization",
      company: "Personal Project",
      period: "JAN 2025 - FEB 2025",
      description: "Conducted comprehensive statistical testing and data visualization on a large dataset, utilizing Python libraries such as Pandas, Matplotlib, and Seaborn to derive actionable insights and present findings through interactive dashboards.",
      icon: Database,
      skills: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data Analysis", "Data Visualization", "Plotly"]
    },
    {
      title: "ML Model Development & Optimization",
      company: "Personal Project",
      period: "April 2025 - JUN 2026",
      description: "Built and optimized machine learning models achieving 94% accuracy through hyperparameter tuning, feature engineering, and model ensemble techniques. Deployed using FastAPI with Docker containerization.",
      icon: Zap,
      skills: ["TensorFlow", "Scikit-learn", "Data Visualization", "Python", "Data Analysis"]
    },
    {
      title: "ANN and CNN for Image Classification",
      company: "Personal Project",
      period: "Aug 2025 - Oct 2025",
      description: "Implemented Artificial Neural Networks (ANN) and Convolutional Neural Networks (CNN) for image classification tasks, achieving 92% accuracy on the CIFAR-10 dataset. Utilized data augmentation and transfer learning techniques.",
      icon: LineChart,
      skills: ["TensorFlow", "Keras", "Python", "Pandas", "NumPy", "Plotly"]
    },
    {
      title: "RNN and LSTM Model on Tesla Stock Price Prediction",
      company: "Personal Project",
      period: "Jan 2026 - FEB 2026",
      description: "Designed and implemented recurrent neural networks (RNNs) and Long Short-Term Memory (LSTM) models for stock price prediction, achieving 85% accuracy in forecasting Tesla's stock movements.",
      icon: Code2,
      skills: ["TensorFlow", "Keras", "Python", "Pandas", "NumPy"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Hands-on Experience
          </h2>
          <p className="text-gray-400 text-sm md:text-lg">
            Practical projects and technical implementations
          </p>
        </motion.div>

        {/* Timeline - Hidden on mobile, shown on larger screens */}
        {!isMobile ? (
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-400 via-red-400 to-pink-400 rounded-full" />

            {handsonExperiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-400 rounded-full border-4 border-gray-900 z-10"
                />

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className={`w-5/12 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
                >
                  <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-orange-400/50 transition-all duration-300">
                    <div className="flex items-start mb-4">
                      <div className="p-2 bg-orange-500/20 rounded-full mr-4 flex-shrink-0">
                        <exp.icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-orange-400 text-sm md:text-base">{exp.company}</p>
                      </div>
                    </div>
                    
                    <p className="text-red-300 text-xs md:text-sm mb-3">{exp.period}</p>
                    <p className="text-gray-300 text-sm md:text-base mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 md:px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-xs md:text-sm border border-red-400/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Mobile Timeline - Accordion Style */
          <div className="space-y-3">
            {handsonExperiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="w-full text-left bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 hover:border-orange-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start flex-1">
                      <div className="p-2 bg-orange-500/20 rounded-full mr-3 flex-shrink-0">
                        <exp.icon className="w-5 h-5 text-orange-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-white text-sm line-clamp-2">{exp.title}</h3>
                        <p className="text-orange-400 text-xs">{exp.company}</p>
                        <p className="text-red-300 text-xs mt-1">{exp.period}</p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      className="ml-2 flex-shrink-0"
                    >
                      <ChevronDown size={20} className="text-orange-400" />
                    </motion.div>
                  </div>
                </motion.button>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 border-t-0 rounded-b-lg p-4 mt-[-1px]">
                        <p className="text-gray-300 text-sm mb-4">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 bg-red-500/20 text-red-300 rounded-full text-xs border border-red-400/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
