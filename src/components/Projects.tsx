'use client';

import { motion } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Adani Plant',
      location: 'Gujarat',
      description: 'Large-scale solar installation for industrial power generation',
      capacity: '50MW',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Goldi Plant',
      location: 'Gujarat',
      description: 'Commercial solar solution for manufacturing facility',
      capacity: '25MW',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Tata Plant',
      location: 'Gujarat',
      description: 'Integrated solar and wind hybrid power system',
      capacity: '75MW',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Solar Park',
      location: 'Rajasthan',
      description: 'Community solar project serving 10,000+ homes',
      capacity: '100MW',
      image: '/api/placeholder/400/300'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            Explore our latest solar projects
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover our portfolio of successful solar installations across India
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Image Section */}
                <div className="relative h-48 bg-gradient-to-br from-green-500 via-green-600 to-emerald-500 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 z-20"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <ExternalLink className="w-4 h-4 text-green-600" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 z-20"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-sm font-semibold text-green-700">{project.capacity}</span>
                  </motion.div>
                </div>
                {/* Content Section */}
                <div className="p-6">
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="flex items-center text-gray-600 mb-3"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      <MapPin className="w-4 h-4 mr-2 text-green-600" />
                    </motion.div>
                    <span className="text-sm">{project.location}</span>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="text-gray-600 text-sm leading-relaxed"
                  >
                    {project.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors font-semibold">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
