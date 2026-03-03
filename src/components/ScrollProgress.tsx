import React from 'react';
import { motion } from 'motion/react';
import { useScrollProgress } from '../hooks/useResponsive';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: progress / 100 }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-50"
      style={{ scaleX: progress / 100 }}
    />
  );
}
