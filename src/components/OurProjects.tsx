'use client';

import { motion } from 'framer-motion';
import { MapPin, Zap, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const OurProjects = () => {
  const projects = [
    {
      title: 'Rooftop Solar Installation',
      location: 'Bhopal',
      capacity: '3kW',
      clients: 'Residential',
      description: 'Successfully completed a 3kW residential rooftop solar installation with advanced backup system. This project features high-efficiency monocrystalline panels and smart inverter technology. The system generates significant savings on electricity bills and reduces the household carbon footprint.',
      image: '/solar-installed-at-terrace.jpeg'
    },
    {
      title: 'Commercial Solar Setup',
      location: 'Mandideep',
      capacity: '50kW',
      clients: 'Commercial',
      description: 'Deployed a 50kW commercial solar setup for a local business complex. This project utilizes high-efficiency panels to offset peak-hour energy usage, reducing operational costs significantly for the establishment.',
      image: '/Commercial Solar Farm.jpg'
    },
    {
      title: 'Small Scale Industrial Unit',
      location: 'Bhopal',
      capacity: '25kW',
      clients: 'Industrial',
      description: 'Designed and implemented a 25kW solar power system for a small industrial unit. Features durable solar panels and grid integration to support daily machinery operations and reduce dependency on the utility grid.',
      image: '/Floating Solar Plant.jpeg'
    },
    {
      title: 'Community Solar Pump',
      location: 'Bhopal',
      capacity: '10kW',
      clients: 'Government',
      description: 'Executed a 10kW solar water pumping project for agricultural application. This sustainable solution ensures reliable water supply for farming needs without relying on grid electricity.',
      image: '/Agricultural Solar Pump.jpg'
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
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 sm:mb-10 leading-tight"
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
              className="group"
              whileHover={{ y: -10 }}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full border border-gray-100 flex flex-col">
                <Link href="/project" className="flex flex-col flex-grow group/link">
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="bg-white/90 backdrop-blur-sm text-green-700 text-xs font-bold px-3 py-1 rounded-full flex items-center shadow-md">
                        <MapPin className="w-3 h-3 mr-1" />
                        {project.location}
                      </span>
                      <span className="bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-bold px-3 py-1 rounded-full flex items-center shadow-md">
                        <Zap className="w-3 h-3 mr-1" />
                        {project.capacity}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <span className="text-green-600 text-xs font-bold uppercase tracking-wider mb-2 block">
                        {project.clients} Project
                      </span>
                      <h3
                        className="text-xl font-bold text-gray-900 group-hover/link:text-green-600 transition-colors duration-300 line-clamp-2"
                      >
                        {project.title}
                      </h3>
                    </div>

                    <p
                      className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow"
                    >
                      {project.description}
                    </p>
                  </div>
                </Link>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between group-hover:border-green-100 transition-colors">
                    <div className="flex gap-3 items-center">
                      <Link href="/project" className="text-sm font-semibold text-gray-900 hover:text-green-700 transition-colors">
                        View Case Study
                      </Link>
                      <a
                        href={`https://wa.me/918959890113?text=Hi, I am interested in the ${project.title} project.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 text-white p-1.5 rounded-full transition-all hover:scale-110"
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                      </a>
                    </div>
                    <Link href="/project" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
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
