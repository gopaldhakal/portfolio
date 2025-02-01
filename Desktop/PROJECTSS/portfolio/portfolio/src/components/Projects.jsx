import { motion } from 'framer-motion';
import { projects } from '../data/data';

const Projects = () => (
  <section id="projects" className="relative py-20">
    {/* Background Gradient */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"></div>

    <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
      <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:text-white leading-tight">
        Projects
      </h2>
      <div className="w-20 mb:4 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
      <div className="grid mt-4 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <img 
              src={project.image} // Corrected usage of project.image
              alt={project.title} 
              className="w-full h-48 object-cover rounded-lg mb-4"
              loading="lazy"
            />
            <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-100 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a 
                href={project.links.github} 
                className="text-blue-600 hover:underline flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;