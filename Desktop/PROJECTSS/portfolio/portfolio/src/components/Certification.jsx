import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/data';
import { FiAward,  FiCheck } from 'react-icons/fi';

const Certifications = () => {
  const learnings = [
    "Advanced React & Redux Development",
    "Node.js & Express API Development",
    "MongoDB Database Architecture",
    "RESTful API Design Patterns",
    "Authentication & Authorization",
    "Deployment & DevOps Basics"
  ];

  return (
    <section id="certifications" className="relative py-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:text-white mb-4">
            Certifications & Training
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* MindRisers Logo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <img
              src="/images/mr1.png"
              alt="MindRisers Logo"
              className="w-64 mx-auto  rounded-lg shadow-lg"
            />
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {cert.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{cert.issuer}</p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90"
                >
                  <FiAward /> Verify Certificate
                </motion.a>
              </motion.div>
            ))}
          </motion.div>

          {/* Key Learnings */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Key Learnings
            </h3>
            <div className="space-y-4">
              {learnings.map((learning, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300"
                >
                  <FiCheck className="text-green-500 flex-shrink-0" />
                  <span>{learning}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;