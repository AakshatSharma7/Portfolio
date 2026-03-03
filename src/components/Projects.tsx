import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useResponsive } from '../hooks/useResponsive';
import dataVizIcon from 'figma:asset/7fd5693fb4b858418ffd9c48a8f3f91fe3b3e3cc.png';
import dataVizIcon2 from '../assets/covid-19.png';

interface Project {
  title: string;
  description: string;
  icon: string;
  iconType: 'emoji' | 'image';
  tech: string[];
  gradient: string;
  demo: string;
  github: string;
  category?: string;
}

export function Projects() {
  const { isMobile } = useResponsive();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const projects: Project[] = [
    {
      title: "Customer Churn Prediction",
      description: "ML model for predicting customer churn with 94% accuracy using advanced feature engineering",
      icon: "📉",
      iconType: 'emoji' as const,
      tech: ["Python", "Scikit-learn", "Data-visualization", "Feature Engineering"],
      gradient: "from-orange-400 to-red-500",
      demo: "#",
      github: "#",
      category: "ML",
    },
    {
      title: "AI-Chatbot",
      description: "An AI-powered conversational application designed to automate user queries and simulate human interactions",
      icon: "🤖",
      iconType: 'emoji' as const,
      tech: ["Python", "LangChain", "HuggingFace", "LLMs", "Retrieval-Augmented Generation"],
      gradient: "from-blue-400 to-purple-500",
      demo: "#",
      github: "#",
      category: "AI",
    },
    {
      title: "New York Airbnb Analysis",
      description: "Comprehensive data visualization dashboard analyzing market trends and pricing patterns",
      icon: "📊",
      iconType: 'emoji' as const,
      tech: ["Power BI", "Python", "Pandas", "Data Viz", "Statistics"],
      gradient: "from-green-400 to-blue-500",
      demo: "#",
      github: "#",
      category: "Data",
    },
    {
      title: "Covid-19 Trend Analysis",
      description: "Comprehensive data visualization dashboard analyzing Covid-19 trends and patterns globally",
      icon: "📈",
      iconType: 'emoji' as const,
      tech: ["Power BI", "Python", "Pandas", "Data Viz", "Statistics"],
      gradient: "from-pink-400 to-rose-500",
      demo: "#",
      github: "#",
      category: "Data",
    },
    {
      title: "Heart Disease Prediction",
      description: "ML model for predicting heart disease risk with healthcare data using advanced algorithms",
      icon: "🫀",
      iconType: 'emoji' as const,
      tech: ["Python", "TensorFlow", "Streamlit", "Scikit-learn"],
      gradient: "from-red-400 to-pink-500",
      demo: "#",
      github: "#",
      category: "ML",
    },
    {
      title: "Sentiment Analysis Model",
      description: "NLP model for analyzing sentiment in customer reviews with 92% accuracy",
      icon: "😊",
      iconType: 'emoji' as const,
      tech: ["Python", "NLP", "Transformers", "TensorFlow"],
      gradient: "from-cyan-400 to-blue-500",
      demo: "#",
      github: "#",
      category: "NLP",
    },
  ];

  const categories = Array.from(new Set(projects.map(p => p.category).filter(Boolean)));

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = !selectedCategory || project.category === selectedCategory;
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Interactive gallery showcasing AI/ML projects that push the boundaries of what's possible
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          {/* Search Input */}
          <motion.input
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
          />

          {/* Category Filter */}
          <div className={`flex flex-wrap gap-2 ${isMobile ? 'justify-start' : 'justify-center'}`}>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === null
                  ? 'bg-purple-500/50 text-white border border-purple-400/50'
                  : 'bg-gray-800/50 text-gray-400 border border-gray-700/50 hover:border-gray-600/50'
              }`}
            >
              All
            </motion.button>
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-purple-500/50 text-white border border-purple-400/50'
                    : 'bg-gray-800/50 text-gray-400 border border-gray-700/50 hover:border-gray-600/50'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className={`grid gap-6 sm:gap-8 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="bg-gray-900/50 border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 overflow-hidden relative h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <CardHeader className="relative pb-3 md:pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`p-2 md:p-3 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-20`}
                      >
                        {project.iconType === 'emoji' ? (
                          <span className="text-xl md:text-2xl">{project.icon}</span>
                        ) : (
                          <img src={project.icon} alt="Icon" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
                        )}
                      </motion.div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md text-xs md:text-sm font-medium transition-colors text-gray-400 hover:text-blue-400 h-8 w-8 md:h-9 md:w-9 hover:bg-gray-800/50"
                      >
                        <Github size={isMobile ? 16 : 18} />
                      </a>
                    </div>
                    <CardTitle className="text-base md:text-lg text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-xs md:text-sm text-gray-400 line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="relative pt-2">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, isMobile ? 2 : 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 md:px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > (isMobile ? 2 : 3) && (
                        <span className="px-2 md:px-3 py-1 bg-gray-700/30 text-gray-300 rounded-full text-xs border border-gray-600/30">
                          +{project.tech.length - (isMobile ? 2 : 3)}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400">No projects found matching your criteria.</p>
          </motion.div>
        )}

        {/* Results Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-8 text-gray-500 text-sm"
        >
          Showing {filteredProjects.length} of {projects.length} projects
        </motion.p>
      </div>
    </section>
  );
}