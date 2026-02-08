import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import accentureImg from '../assets/Accenture.jpg';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  credentialUrl?: string;
}

export function Certifications() {
  const certificates: Certificate[] = [
    {
      id: 1,
      title: 'Advanced Certification in Data Science & AI',
      issuer: 'Intellipaat & IIT-Roorkee',
      date: 'April 2026',
      description: 'Comprehensive training in Python programming, data manipulation with Pandas, and visualization using Matplotlib and Seaborn for data science applications.',
      image: '/path/to/python-certificate.png',
      //credentialUrl: 'https://example.com/certificate-1',
    },
    {
      id: 2,
      title: 'MSSQL Certification',
      issuer: 'Microsoft',
      date: 'February 2025',
      description: 'Mastered supervised and unsupervised learning algorithms, model evaluation, hyperparameter tuning, and best practices for building production-ready ML models.',
      image: '/path/to/ml-certificate.png',
      //credentialUrl: 'https://example.com/certificate-2',
    },
    {
      id: 3,
      title: 'Deep Learning & Neural Networks',
      issuer: 'Andrew Ng - Coursera',
      date: 'September 2023',
      description: 'Advanced training in convolutional neural networks, recurrent neural networks, and deep learning optimization techniques using TensorFlow and PyTorch.',
      image: '/path/to/deep-learning-certificate.png',
      //credentialUrl: 'https://example.com/certificate-3',
    },
    {
      id: 4,
      title: 'Accenture Data Analyst Professional Certificate',
      issuer: 'Accenture',
      date: 'September 2024',
      description: 'Expert-level training in transformer models, large language models, prompt engineering, and building intelligent AI-powered applications with modern NLP techniques.',
      image: accentureImg,
      //credentialUrl: 'https://example.com/certificate-4',
    },
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-gray-300 text-lg">
            Professional certifications and credentials I've earned
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow border-blue-500/20 bg-slate-950">
                <CardHeader className="pb-3">
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-white">{cert.title}</CardTitle>
                    <CardDescription className="text-gray-400">{cert.issuer}</CardDescription>
                    <Badge variant="outline" className="w-fit mt-2 border-blue-500/30 text-blue-400">
                      {cert.date}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative w-full h-64 bg-slate-800 rounded-lg overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23374151" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="%239CA3AF" text-anchor="middle" dominant-baseline="middle"%3ECertificate Image%3C/text%3E%3C/svg%3E';
                      }}
                    />
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {certificates.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">Certifications coming soon...</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
