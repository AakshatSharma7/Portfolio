import React from 'react';
import { motion } from 'motion/react';
import { Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import dataVizIcon from 'figma:asset/7fd5693fb4b858418ffd9c48a8f3f91fe3b3e3cc.png';
import dataVizIcon2 from '../assets/covid-19.png';
export function Projects() {
  const projects = [
    {
      title: "Customer Churn Prediction",
      description: "LLM-powered recipe recommendation app that understands your cravings and suggests personalized recipes",
      icon: "📉",
      iconType: 'emoji' as const,
      tech: ["Python", "Scikit-learn", "Data-visualization", "Feature Engineering"],
      gradient: "from-orange-400 to-red-500",
      demo: "#",
      github: "#"
    },
    {
      title: "AI-Chatbot",
      description: "An AI-powered conversational application designed to automate user queries and simulate human interactions",
      icon: "🤖",
      iconType: 'emoji' as const,
      tech: ["Python", "LangChain", "HuggingFace", "LLMs","Retrieval-Augmented Generation"],
      gradient: "from-blue-400 to-purple-500",
      demo: "#",
      github: "#"
    },
    {
      title: "New-York AirBnB Analysis",
      description: "Comprehensive data visualization dashboard analyzing New-York AirBnB market trends and pricing patterns",
      icon: dataVizIcon,
      iconType: 'image' as const,
      tech: ["Power BI", "Python", "Pandas", "Data Viz","Statistics"],
      gradient: "from-green-400 to-blue-500",
      demo: "#",
      github: "#"
    },
    {
      title: "Covid-19 Trend Analysis",
      description: "Comprehensive data visualization dashboard analyzing Covid-19 trends and patterns",
      icon: dataVizIcon2,
      iconType: 'image' as const,
      tech: ["Power BI", "Python", "Pandas", "Data Viz","Statistics"],
      gradient: "from-green-400 to-blue-500",
      demo: "#",
      github: "#"
    },
    {
      title: "Heart Disease Prediction",
      description: "LLM-powered recipe recommendation app that understands your cravings and suggests personalized recipes",
      icon: "🫀",
      iconType: 'emoji' as const,
      tech: ["Python", "LangChain", "Streamlit", "OpenAI"],
      gradient: "from-orange-400 to-red-500",
      demo: "#",
      github: "#"
    },
    {title: "Covid-19 Trend Analysis",
      description: "Comprehensive data visualization dashboard analyzing Covid-19 trends and patterns",
      icon: dataVizIcon2,
      iconType: 'image' as const,
      tech: ["Power BI", "Python", "Pandas", "Data Viz","Statistics"],
      gradient: "from-green-400 to-blue-500",
      demo: "#",
      github: "#",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Interactive gallery showcasing AI/ML projects that push the boundaries of what's possible
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-gray-900/50 border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-20`}
                    >
                      {project.iconType === 'emoji' ? (
                        <span className="text-2xl">{project.icon}</span>
                      ) : (
                        <img src={project.icon} alt="Data Viz Icon" className="w-6 h-6 object-contain" />
                      )}
                    </motion.div>
                    <div className="flex space-x-2">
                      {/*<a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9 text-gray-400 hover:text-blue-400"
                      >
                        🌐
                      </a>*/}
                      <a
                        //href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9 text-gray-400 hover:text-blue-400"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}