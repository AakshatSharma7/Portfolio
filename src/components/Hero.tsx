import React from 'react';
import { motion } from 'motion/react';
import { Brain, Cpu, Zap } from 'lucide-react';
import { useResponsive } from '../hooks/useResponsive';

export function Hero() {
  const { isMobile } = useResponsive();

  return (
    <section className="min-h-screen pt-20 md:pt-0 flex items-center justify-center px-6 relative">
      <div className="text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 md:mb-8"
        >
          <h1 className={`${isMobile ? 'text-2xl' : 'text-4xl md:text-6xl'} font-bold mb-3 md:mb-4`}>
            {"AKSHAT SHARMA".split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 40, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                  ease: "easeOut"
                }}
                className="inline-block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent"
                style={{ 
                  perspective: "1000px",
                  transformStyle: "preserve-3d"
                }}
                whileHover={{
                  scale: isMobile ? 1.1 : 1.2,
                  rotateY: 360,
                  transition: { duration: 0.5 }
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className={`${isMobile ? 'text-xl' : 'text-3xl md:text-5xl'} font-bold text-white mb-4 md:mb-6`}
          >
            Welcome to My Portfolio
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className={`${isMobile ? 'text-base' : 'text-xl md:text-2xl'} text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto px-2`}
        >
          Exploring AI, ML & Data Science
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className={`flex ${isMobile ? 'space-x-4' : 'space-x-8'} justify-center mb-8 md:mb-12`}
        >
          {[Brain, Cpu, Zap].map((Icon, index) => (
            <motion.div
              key={index}
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, delay: index * 0.3 }
              }}
              className={`${isMobile ? 'p-2' : 'p-4'} rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30`}
            >
              <Icon size={isMobile ? 24 : 40} className="text-blue-400" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="space-y-2 md:space-y-4 px-2"
        >
          <div className={`${isMobile ? 'text-sm' : 'text-lg'} text-gray-400`}>Graduate AI Engineer</div>
          <div className={`${isMobile ? 'text-xs' : 'text-blue-400'} text-blue-400`}>Building Intelligent Systems • Python • Machine Learning • Deep Learning • AI</div>
        </motion.div>
      </div>
    </section>
  );
}