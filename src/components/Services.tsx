'use client';

import { motion } from 'framer-motion';
import { Zap, Home, Wind, Leaf } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: 'Solar Energy',
      description: 'Harness the power of the sun with our cutting-edge solar panel technology and installation services.',
      features: ['High efficiency panels', '25-year warranty', 'Smart monitoring']
    },
    {
      icon: Home,
      title: 'Hybrid Energy',
      description: 'Combine solar with battery storage for maximum energy independence and reliability.',
      features: ['Battery backup', 'Grid-tie systems', 'Off-grid solutions']
    },
    {
      icon: Wind,
      title: 'Wind Energy',
      description: 'Supplement your solar system with wind turbines for comprehensive renewable energy solutions.',
      features: ['Small wind turbines', 'Hybrid systems', 'Site assessment']
    },
    {
      icon: Leaf,
      title: 'Renewable Energy',
      description: 'Complete renewable energy solutions tailored to your specific needs and location.',
      features: ['Custom solutions', 'Energy audit', 'Sustainability consulting']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Best offer for renewable energy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive renewable energy solutions that help you save money while protecting the environment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 group"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                <service.icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
