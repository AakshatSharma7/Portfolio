import React, { useState } from 'react';
import { motion } from 'motion/react';
import * as Lucide from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useResponsive } from '../hooks/useResponsive';

export function Contact() {
  const { isMobile } = useResponsive();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        'service_iut3eac',
        'template_x1ppstv',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        '68I5nCXe8Pu8LUfX1'
      );
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto">
            Ready to collaborate on the next big AI innovation? Let's build something amazing together.
          </p>
        </motion.div>

        <div className={`grid gap-8 md:gap-12 ${isMobile ? 'grid-cols-1' : 'lg:grid-cols-2'} items-start`}>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700/50 hover:border-blue-400/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2 text-base md:text-xl">
                  <Lucide.MessageSquare className="text-blue-400 w-5 h-5 md:w-6 md:h-6" />
                  <span>Send a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400 text-sm md:text-base"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400 text-sm md:text-base"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={isMobile ? 4 : 5}
                      className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400 resize-none text-sm md:text-base"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white text-sm md:text-base"
                  >
                    <Lucide.Send className="mr-2 w-4 h-4 md:w-5 md:h-5" size={16} />
                    {isSubmitting ? 'Sending...' : 'Launch Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            {/* Animated Avatar */}
            <div className="text-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 3, -3, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={`${isMobile ? 'w-32 h-32' : 'w-40 h-40'} mx-auto mb-4 md:mb-6 relative`}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-400/30 flex items-center justify-center text-4xl md:text-6xl">
                  🤖
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-purple-400/20 rounded-full"
                />
              </motion.div>
              <p className="text-gray-300 text-sm md:text-lg">
                "Ready to process your ideas into reality!"
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-white text-center mb-4 md:mb-6">Connect With Me</h3>
              <div className="space-y-2 md:space-y-3">
                {[
                  { icon: Lucide.Mail, label: "akshatssharma868@gmail.com", href: "mailto:akshatssharma868@gmail.com", color: "from-red-400 to-pink-400" },
                  { icon: Lucide.Phone, label: "+917037168741", href: "tel:+917037168741", color: "from-green-400 to-blue-400" },
                  { icon: Lucide.Github, label: "GitHub Profile", href: "https://github.com/AakshatSharma7", color: "from-gray-400 to-gray-600" },
                  { icon: Lucide.Linkedin, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/akshat-sharma-7a8b5a254/", color: "from-blue-400 to-blue-600" }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-gray-900/50 rounded-lg border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 group"
                  >
                    <div className={`p-2 rounded-full bg-gradient-to-r ${social.color} bg-opacity-20 flex-shrink-0`}>
                      <social.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-xs md:text-base truncate">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16 pt-6 md:pt-8 border-t border-gray-700/50"
        >
          <p className="text-gray-500 text-xs md:text-sm">
            © 2026 Akshat Sharma. Predicting the future isn't magic, it's artificial intelligence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}