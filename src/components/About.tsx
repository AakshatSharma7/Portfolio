import React from 'react';
import { motion } from 'motion/react';
import { useResponsive } from '../hooks/useResponsive';
import profileImage from '../assets/Aakshat.jpeg';

export function About() {
  const { isMobile } = useResponsive();

  return (
    <section id="about" className="py-16 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className={`grid gap-8 md:gap-12 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'} items-center`}>
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative mx-auto w-fit">
              <div className={`${isMobile ? 'w-64 h-64' : 'w-80 h-80'} rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-400/30 p-4 flex items-center justify-center overflow-hidden`}>
                <img
                  src={profileImage}
                  alt="Aakshat Sharma" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-blue-400/20 rounded-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
              Graduate AI Engineer passionate about building intelligent systems
            </h3>
            
            <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
              I specialize in creating AI-powered solutions that bridge the gap between complex algorithms 
              and real-world applications. My expertise spans Python, SQL, Machine Learning, Natural Language Processing, 
              Deep Learning, Agentic-AI, Gen-AI technologies.
            </p>

            <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
              With experience as a Data Analyst at IIT-Roorkee, I've developed 
              a strong foundation in data analysis, visualization, and machine learning implementation. I'm 
              passionate about making AI accessible and impactful.
            </p>

            <div className={`flex ${isMobile ? 'flex-col space-y-3' : 'flex-wrap md:flex-row'} ${!isMobile && 'items-center space-x-6'} text-gray-400`}>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">💻</span>
                <span className="text-sm md:text-base">Fluent in algorithms</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">☕</span>
                <span className="text-sm md:text-base">Powered by coffee</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">❤️</span>
                <span className="text-sm md:text-base">Passionate about AI</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 md:p-6 rounded-lg border border-blue-400/20"
            >
              <p className="text-blue-300 italic text-sm md:text-base">
                "Engineering the future with AI, one neural network at a time."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}