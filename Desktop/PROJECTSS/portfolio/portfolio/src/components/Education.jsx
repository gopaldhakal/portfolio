import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiAward } from 'react-icons/fi';

const Education = () => {
  const education = [
    {
      school: "Asian College of Higher Studies",
      degree: "Bachelor of Computer Application (BCA)",
      location: "Kathmandu, Nepal",
      year: "2018 - 2024",
      description: "Pursuing a comprehensive program focusing on computer applications and software development.",
      achievements: [
        "Core subjects: Programming, Database, Networking",
        "Project Management and System Analysis",
        "Web Development and Software Engineering"
      ]
    },
    {
      school: "Pentagon International College",
      degree: "+2 Science",
      location: "Kathmandu, Nepal",
      year: "Graduated 2018",
      description: "Completed higher secondary education with a focus on science subjects.",
      achievements: [
        "Major in Physics, Chemistry, and Mathematics",
        "Participated in science exhibitions and competitions"
        
      ]
    },
    {
      school: "Bal Bikas Boarding High School",
      degree: "SLC (3.60 GPA)",
      location: "Kathmandu, Nepal",
      year: "2015",
      description: "Completed School Leaving Certificate with a GPA of 3.60.",
      achievements: [
        "Excelled in all subjects",
        "Active participation in extracurricular activities",
        "Graduated with honors"
      ]
    }
  ];

  return (
    <section id="education" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:text-white mb-4">
            Education Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="md:flex items-start gap-6">
                <div className="flex-shrink-0 mb-4 md:mb-0">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                    <FiAward className="text-3xl text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400">
                        {edu.school}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        {edu.location}
                      </p>
                    </div>
                    <span className="px-4 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {edu.description}
                  </p>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <FiBook className="flex-shrink-0 text-blue-600" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;