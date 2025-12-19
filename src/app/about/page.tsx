'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Users, Award, Leaf, Target } from 'lucide-react';

export default function About() {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '10+', label: 'Years Experience', icon: Users },
    { number: '100%', label: 'Customer Satisfaction', icon: Leaf },
    { number: '50MW', label: 'Solar Installed', icon: Target }
  ];

  const values = [
    {
      title: 'Sustainability',
      description: 'We are committed to promoting renewable energy solutions that protect our planet for future generations.',
      icon: Leaf
    },
    {
      title: 'Innovation',
      description: 'We continuously invest in the latest solar technology to provide the most efficient solutions.',
      icon: Target
    },
    {
      title: 'Quality',
      description: 'We never compromise on quality, using only the best materials and installation practices.',
      icon: Award
    },
    {
      title: 'Customer Focus',
      description: 'Our customers are at the heart of everything we do, ensuring complete satisfaction.',
      icon: Users
    }
  ];

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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We are the best of renewable energy solutions, committed to transforming the way India powers its future
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                We are the best of renewable energy
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At SolarBright, we've been at the forefront of India's renewable energy revolution for over a decade. Our mission is to make clean, sustainable energy accessible to everyone - from homeowners to large industrial facilities.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2014, we've grown from a small team of passionate engineers to one of India's most trusted solar energy companies. Our expertise spans residential, commercial, and utility-scale solar installations across the country.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that solar energy is not just about saving money - it's about creating a sustainable future for generations to come. Every installation we complete brings us closer to our vision of a 100% renewable India.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                <div className="text-white text-opacity-50 text-2xl font-semibold">
                  About SolarBright
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
