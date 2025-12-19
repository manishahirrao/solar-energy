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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore our latest solar projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our portfolio of successful renewable energy installations across India
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <div className="w-full h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <div className="text-white text-opacity-50 text-lg font-semibold">
                    {project.title}
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-green-600 px-4 py-2 rounded-full font-medium flex items-center">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </button>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  {project.location}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between pt-2">
                  <span className="text-green-600 font-semibold text-sm">
                    {project.capacity}
                  </span>
                  <span className="text-xs text-gray-500 uppercase tracking-wide">
                    Capacity
                  </span>
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
