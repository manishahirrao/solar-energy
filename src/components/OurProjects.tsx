'use client';

import { motion } from 'framer-motion';
import { MapPin, Zap, Users } from 'lucide-react';

const OurProjects = () => {
  const projects = [
    {
      title: 'Rooftop Solar Installation',
      location: 'Bhopal',
      capacity: '5kW',
      clients: 'Residential',
      description: 'Successfully completed a 5kW residential rooftop solar installation with advanced lithium-ion battery backup system. This project features high-efficiency monocrystalline panels, smart inverter technology, and real-time monitoring via mobile app. The system generates approximately 7,500 kWh annually, reducing household electricity costs by 85% and carbon footprint by 4.5 metric tons per year.',
      image: '/Rooftop Solar Installation.jpeg'
    },
    {
      title: 'Commercial Solar Farm',
      location: 'Mandideep',
      capacity: '50MW',
      clients: 'Commercial',
      description: 'Developed a 50MW commercial solar power plant with cutting-edge dual-axis tracking technology and AI-powered predictive maintenance systems. This flagship project spans 250 acres, incorporates 150,000 bifacial solar panels, and includes a 10MWh energy storage system. Generates 85,000 MWh annually, powering 15,000+ commercial establishments.',
      image: '/Commercial Solar Farm.jpg'
    },
    {
      title: 'Industrial Solar Plant',
      location: 'Bhopal',
      capacity: '25MW',
      clients: 'Industrial',
      description: 'Designed and implemented a comprehensive 25MW industrial solar facility with advanced energy management and grid integration systems. Features state-of-the-art solar panels, automated monitoring, and backup power systems for continuous operations.',
      image: '/Industrial Solar Setup.jpg'
    },
    {
      title: 'Government Solar Initiative',
      location: 'Bhopal',
      capacity: '10MW',
      clients: 'Government',
      description: 'Executed a prestigious government-backed solar initiative under the National Solar Mission. This project serves rural electrification programs across 150 villages and includes community solar pumps for agricultural applications.',
      image: '/Industrial Solar Setup.jpg'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-100 rounded-full blur-3xl opacity-30" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-gray-900">
              Explore Our Latest
            </span>
            <br />
            <span className="text-green-600">
              Solar Projects
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover our portfolio of successful solar installations across India
            <span className="block text-green-600 font-medium mt-3">Powering a sustainable future, one project at a time</span>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group cursor-pointer"
              whileHover={{ y: -10, scale: 1.03 }}
            >
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full border border-gray-100">
                {/* Image Section */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                {/* Content Section */}
                <div className="p-4 sm:p-6">
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <div className="space-y-1">
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-3 h-3 mr-2 text-green-600" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Zap className="w-3 h-3 mr-2 text-green-600" />
                      {project.capacity}
                    </div>
                  </div>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="text-gray-600 text-sm leading-relaxed mt-3 mb-4"
                  >
                    {project.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
