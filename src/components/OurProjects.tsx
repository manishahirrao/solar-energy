'use client';

import { motion } from 'framer-motion';
import { MapPin, Zap, Users } from 'lucide-react';

const OurProjects = () => {
  const projects = [
    {
      title: 'adani plant - gujarat',
      location: 'Gujarat',
      capacity: 'power plant',
      clients: 'Commercial',
      description: 'Successfully commissioned a 10MW commercial solar power plant for Adani Enterprises in Gujarat. This flagship project features state-of-the-art monocrystalline solar panels with 22% efficiency, advanced tracking systems, and smart grid integration. The plant generates approximately 16,000 MWh annually, offsetting 12,000 metric tons of CO2 emissions and powering over 2,500 commercial establishments.',
      image: '/adani-plant-gujarat.jpg'
    },
    {
      title: 'goldi plant - gujarat',
      location: 'Gujarat', 
      capacity: 'solar plant',
      clients: 'Industrial',
      description: 'Designed and implemented a cutting-edge 5MW industrial solar facility for Goldi Solar Manufacturing Unit. This project incorporates bifacial solar panels, AI-powered monitoring systems, and automated cleaning mechanisms. The installation achieved grid parity within 18 months and delivers consistent power for 24/7 industrial operations with 98% uptime.',
      image: '/goldi-plant-gujarat.jpg'
    },
    {
      title: 'adani plant - gujarat',
      location: 'Gujarat',
      capacity: 'mega plant', 
      clients: 'Commercial',
      description: 'Led the development of a 50MW mega solar power plant featuring advanced energy storage solutions and predictive maintenance systems. This project spans 200 acres with over 150,000 high-efficiency solar panels, includes a 10MWh battery storage system, and supplies clean energy to multiple industrial zones through a dedicated transmission infrastructure.',
      image: '/tata-plant-gujarat.jpg'
    },
    {
      title: 'tata plant - gujarat',
      location: 'Gujarat',
      capacity: 'power plant',
      clients: 'Government',
      description: 'Executed a prestigious government-backed 25MW solar initiative under the National Solar Mission. This project serves rural electrification programs across 150 villages, includes community solar pumps for agriculture, and features a hybrid solar-wind configuration. Successfully completed 3 months ahead of schedule with zero safety incidents.',
      image: '/solar-park-rajasthan.jpg'
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
                      if (e.currentTarget.parentElement) {
                        e.currentTarget.parentElement.className = 'relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-green-400 to-emerald-600';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-black/60" />
                  
                  {/* Overlay Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/70 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center text-white text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-white text-sm">
                        <Zap className="w-4 h-4 mr-1" />
                        {project.capacity}
                      </div>
                      <div className="flex items-center text-white text-sm">
                        <Users className="w-4 h-4 mr-1" />
                        {project.clients}
                      </div>
                    </div>
                  </motion.div>
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
