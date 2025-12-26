'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink, Calendar, Filter } from 'lucide-react';

export default function Project() {
  const projects = [
    {
      id: 1,
      title: 'Adani Plant',
      location: 'Gujarat',
      description: 'Large-scale solar installation for industrial power generation with advanced monitoring systems.',
      capacity: '50MW',
      type: 'Industrial',
      completed: 'March 2024',
      status: 'Completed',
      image: '/Adani Solar.png',
      href: '/project/adani-plant'
    },
    {
      id: 2,
      title: 'Goldi Plant',
      location: 'Gujarat',
      description: 'Commercial solar solution for manufacturing facility with hybrid energy storage system.',
      capacity: '25MW',
      type: 'Commercial',
      completed: 'February 2024',
      status: 'Completed',
      image: '/Agricultural Solar Pump.jpg',
      href: '/project/goldi-plant'
    },
    {
      id: 3,
      title: 'Tata Plant',
      location: 'Gujarat',
      description: 'Integrated solar and wind hybrid power system for sustainable industrial operations.',
      capacity: '75MW',
      type: 'Hybrid',
      completed: 'January 2024',
      status: 'Completed',
      image: '/Tata Power Solar.jpeg',
      href: '/project/tata-plant'
    },
    {
      id: 4,
      title: 'Solar Park',
      location: 'Rajasthan',
      description: 'Community solar project serving 10,000+ homes with grid distribution network.',
      capacity: '100MW',
      type: 'Utility',
      completed: 'December 2023',
      status: 'Completed',
      image: '/Floating Solar Plant.jpeg',
      href: '/project/solar-park'
    },
    {
      id: 5,
      title: 'Tech Campus',
      location: 'Bangalore',
      description: 'Rooftop solar installation for technology campus with smart energy management.',
      capacity: '5MW',
      type: 'Commercial',
      completed: 'November 2023',
      status: 'Completed',
      image: '/School Solar Installation.avif',
      href: '/project/tech-campus'
    },
    {
      id: 6,
      title: 'Residential Complex',
      location: 'Mumbai',
      description: 'Multi-story residential building solar installation with shared energy storage.',
      capacity: '2MW',
      type: 'Residential',
      completed: 'October 2023',
      status: 'Completed',
      image: '/Industrial Solar Setup.jpg',
      href: '/project/residential-complex'
    },
    {
      id: 7,
      title: 'Hospital Solar',
      location: 'Delhi',
      description: 'Critical healthcare facility solar installation with backup power systems.',
      capacity: '8MW',
      type: 'Healthcare',
      completed: 'September 2023',
      status: 'Completed',
      image: '/Hospital Solar System.jpg',
      href: '/project/hospital-solar'
    },
    {
      id: 8,
      title: 'Agricultural Farm',
      location: 'Punjab',
      description: 'Solar-powered irrigation and farming operations with water pumping systems.',
      capacity: '3MW',
      type: 'Agricultural',
      completed: 'August 2023',
      status: 'Completed',
      image: '/Solar Water Heater.jpg',
      href: '/project/agricultural-farm'
    }
  ];

  const categories = ['All', 'Industrial', 'Commercial', 'Residential', 'Utility', 'Hybrid', 'Healthcare', 'Agricultural'];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-green-800">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 sm:mb-10">Our Projects</h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto">
              Explore our portfolio of successful renewable energy installations across India
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  index === 0
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                    <div className="text-white text-opacity-50 text-lg font-semibold">
                      {project.type}
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-green-600 px-4 py-2 rounded-full font-medium flex items-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </button>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.completed}
                    </div>
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
                      {project.type}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-12"
          >
            <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors font-semibold">
              Load More Projects
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 sm:mb-10">Project Statistics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that speak for our success and expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-green-600 mb-2">1GW+</div>
              <div className="text-gray-600">Total Capacity</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600">States Covered</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
