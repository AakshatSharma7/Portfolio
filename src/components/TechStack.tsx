import React from 'react';
import { motion } from 'motion/react';
import { useResponsive } from '../hooks/useResponsive';

export function TechStack() {
  const { isMobile } = useResponsive();

  const techCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 95, icon: "🐍" },
        { name: "SQL", level: 90, icon: "🗃️" },
      ]
    },
    {
      category: "AI/ML Frameworks",
      skills: [
        { name: "TensorFlow-Keras", level: 90, icon: "🧠" },
        { name: "Scikit-learn", level: 95, icon: "🔬" },
        { name: "HuggingFace", level: 88, icon: "🤗" },
        { name: "LangChain", level: 85, icon: "🔗" }
      ]
    },
    {
      category: "Data & Visualization",
      skills: [
        { name: "Pandas", level: 95, icon: "🐼" },
        { name: "NumPy", level: 90, icon: "🔢" },
        { name: "Power BI", level: 90, icon: "📈" },
        { name: "Matplotlib", level: 89, icon: "📊" },
        { name: "Plotly", level: 85, icon: "📉" }
      ]
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "Git", level: 90, icon: "🌱" },
        { name: "AZURE-ML", level: 90, icon: "☁️" },
        { name: "Power-BI", level: 95, icon: "📶" }
      ]
    }
  ];

  return (
    <section id="tech" className="py-16 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-gray-400 text-sm md:text-lg">
            Technologies and tools I use to build intelligent systems
          </p>
        </motion.div>

        <div className={`grid gap-6 md:gap-8 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.15 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 md:p-6 hover:border-purple-400/50 transition-all duration-300"
            >
              <h3 className="text-base md:text-xl font-bold text-white mb-4 md:mb-6 text-center">
                {category.category}
              </h3>
              
              <div className="space-y-3 md:space-y-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.15 + index * 0.08 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 md:space-x-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 15 }}
                      className="text-xl md:text-2xl flex-shrink-0"
                    >
                      {skill.icon}
                    </motion.div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-white font-medium text-xs md:text-base truncate">{skill.name}</span>
                        <span className="text-purple-400 text-xs md:text-sm flex-shrink-0 ml-2">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.15 + index * 0.08 + 0.3 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}