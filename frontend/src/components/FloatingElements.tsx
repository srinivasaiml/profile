import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  const elements = [
    { size: 'w-4 h-4', color: 'from-blue-400 to-cyan-400', delay: 0 },
    { size: 'w-6 h-6', color: 'from-purple-400 to-pink-400', delay: 2 },
    { size: 'w-3 h-3', color: 'from-green-400 to-teal-400', delay: 4 },
    { size: 'w-5 h-5', color: 'from-orange-400 to-red-400', delay: 1 },
    { size: 'w-4 h-4', color: 'from-indigo-400 to-purple-400', delay: 3 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} bg-gradient-to-br ${element.color} rounded-full opacity-20`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;