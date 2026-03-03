// Dynamic data configuration for portfolio content
export const portfolioData = {
  hero: {
    name: "AKSHAT SHARMA",
    title: "AI Engineer",
    subtitle: "Exploring AI, ML & Data Science",
    cta: "Explore My Work",
  },

  about: {
    heading: "About Me",
    mainHeading: "Graduate AI Engineer passionate about building intelligent systems",
    description: [
      "I specialize in creating AI-powered solutions that bridge the gap between complex algorithms and real-world applications. My expertise spans Python, SQL, Machine Learning, Natural Language Processing, Deep Learning, Agentic-AI, Gen-AI technologies.",
      "With experience as a Data Analyst at IIT-Roorkee, I've developed a strong foundation in data analysis, visualization, and machine learning implementation. I'm passionate about making AI accessible and impactful.",
    ],
    highlights: [
      { icon: "💻", text: "Fluent in algorithms" },
      { icon: "☕", text: "Powered by coffee" },
      { icon: "❤️", text: "Passionate about AI" },
    ],
  },

  projects: [
    {
      title: "Customer Churn Prediction",
      description: "ML model for predicting customer churn with 94% accuracy",
      icon: "📉",
      iconType: "emoji" as const,
      tech: ["Python", "Scikit-learn", "Data-visualization", "Feature Engineering"],
      gradient: "from-orange-400 to-red-500",
      demo: "#",
      github: "#",
    },
    {
      title: "AI-Chatbot",
      description: "An AI-powered conversational application designed to automate user queries",
      icon: "🤖",
      iconType: "emoji" as const,
      tech: ["Python", "LangChain", "HuggingFace", "LLMs", "Retrieval-Augmented Generation"],
      gradient: "from-blue-400 to-purple-500",
      demo: "#",
      github: "#",
    },
    {
      title: "New York Airbnb Analysis",
      description: "Comprehensive data visualization dashboard analyzing market trends",
      icon: "📊",
      iconType: "emoji" as const,
      tech: ["Power BI", "Python", "Pandas", "Data Viz", "Statistics"],
      gradient: "from-green-400 to-blue-500",
      demo: "#",
      github: "#",
    },
    {
      title: "Covid-19 Trend Analysis",
      description: "Data visualization dashboard analyzing Covid-19 trends and patterns",
      icon: "📈",
      iconType: "emoji" as const,
      tech: ["Power BI", "Python", "Pandas", "Data Viz", "Statistics"],
      gradient: "from-pink-400 to-rose-500",
      demo: "#",
      github: "#",
    },
    {
      title: "Heart Disease Prediction",
      description: "ML model for predicting heart disease risk with healthcare data",
      icon: "🫀",
      iconType: "emoji" as const,
      tech: ["Python", "LangChain", "Streamlit", "OpenAI"],
      gradient: "from-orange-400 to-red-500",
      demo: "#",
      github: "#",
    },
    {
      title: "Sentiment Analysis Model",
      description: "NLP model for analyzing sentiment in customer reviews",
      icon: "😊",
      iconType: "emoji" as const,
      tech: ["Python", "NLP", "Transformers", "TensorFlow"],
      gradient: "from-cyan-400 to-blue-500",
      demo: "#",
      github: "#",
    },
  ],

  experience: [
    {
      title: "Senior Data Analyst",
      company: "Tech Company",
      period: "2024 - Present",
      description: "Leading data analysis initiatives and building analytical dashboards",
      achievements: ["Increased reporting efficiency by 40%", "Mentored 3 junior analysts"],
    },
    {
      title: "Data Analyst Intern",
      company: "IIT-Roorkee",
      period: "2023 - 2024",
      description: "Analyzed datasets and created visualizations for research projects",
      achievements: ["Processed 10+ datasets", "Created 15+ interactive dashboards"],
    },
  ],

  handsonExperience: [
    {
      title: "Statistical Testing and Data Visualization",
      company: "Personal Project",
      period: "JAN 2025 - FEB 2025",
      description: "Conducted comprehensive statistical testing utilizing Python libraries",
      icon: "Database",
      skills: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data Analysis"],
    },
    {
      title: "ML Model Development & Optimization",
      company: "Personal Project",
      period: "April 2025 - JUN 2026",
      description: "Built and optimized ML models achieving 94% accuracy with hyperparameter tuning",
      icon: "Zap",
      skills: ["TensorFlow", "Scikit-learn", "Python", "Data Analysis"],
    },
    {
      title: "ANN and CNN for Image Classification",
      company: "Personal Project",
      period: "Aug 2025 - Oct 2025",
      description: "Implemented neural networks for image classification with 92% accuracy",
      icon: "LineChart",
      skills: ["TensorFlow", "Keras", "Python", "NumPy"],
    },
    {
      title: "RNN and LSTM Stock Price Prediction",
      company: "Personal Project",
      period: "Jan 2026 - FEB 2026",
      description: "Designed LSTM models for stock price prediction with 85% accuracy",
      icon: "Code2",
      skills: ["TensorFlow", "Keras", "Python", "NumPy"],
    },
  ],

  techStack: {
    languages: ["Python", "SQL", "JavaScript", "TypeScript"],
    ml: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost"],
    dl: ["CNN", "RNN", "Transformers", "LSTM"],
    tools: ["Power BI", "Tableau", "Git", "Docker"],
    web: ["React", "Node.js", "FastAPI", "Streamlit"],
  },

  certifications: [
    {
      title: "Machine Learning Specialization",
      issuer: "Coursera",
      date: "2024",
      credentialId: "CERT123",
    },
    {
      title: "Python for Data Science",
      issuer: "DataCamp",
      date: "2023",
      credentialId: "CERT124",
    },
  ],

  contact: {
    email: "akshat.sharma@example.com",
    phone: "+91 XXXXXXXXXX",
    location: "India",
    social: [
      { platform: "GitHub", url: "https://github.com" },
      { platform: "LinkedIn", url: "https://linkedin.com" },
      { platform: "Twitter", url: "https://twitter.com" },
    ],
  },
};

export type PortfolioData = typeof portfolioData;
