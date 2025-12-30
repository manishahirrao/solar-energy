'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Settings, Check, Calendar, Shield, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SolarEPC() {
  const features = [
    {
      icon: Settings,
      title: 'Project Planning & Design',
      description: 'Custom solar solutions tailored to your specific energy needs and site conditions.'
    },
    {
      icon: Check,
      title: 'Equipment Procurement',
      description: 'Sourcing high-quality solar panels, inverters, and components from trusted manufacturers.'
    },
    {
      icon: Calendar,
      title: 'Installation & Commissioning',
      description: 'Professional installation by certified technicians with minimal disruption to your operations.'
    },
    {
      icon: Shield,
      title: 'Performance Guarantees',
      description: 'Comprehensive warranties and performance guarantees for peace of mind.'
    },
    {
      icon: Zap,
      title: 'Grid Integration',
      description: 'Seamless integration with existing electrical systems and utility grids.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-blue-900 to-emerald-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Solar EPC Services
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              End-to-end Engineering, Procurement, and Construction services for turnkey solar power projects with guaranteed performance.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/solar-epc-service.jpg"
                    alt="Solar EPC Services"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Complete Solar EPC Solutions
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our Solar EPC (Engineering, Procurement, and Construction) services provide a single-point solution for all your solar power project needs. From initial site assessment to final commissioning, we handle every aspect of your solar installation with precision and expertise.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We work with commercial, industrial, and utility-scale clients to design and build solar power plants that maximize energy production and return on investment. Our team of certified engineers and project managers ensure that every project is completed on time, within budget, and to the highest quality standards.
                </p>
                <div className="mt-8">
                  <Link 
                    href="/contact" 
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-300"
                  >
                    Get a Free Consultation
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our EPC Process
            </h2>
            <p className="text-xl text-gray-600">
              A streamlined approach to delivering high-quality solar energy solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Solar Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and let us help you harness the power of solar energy.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-green-700 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition-colors duration-300"
            >
              Get Started Now
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
