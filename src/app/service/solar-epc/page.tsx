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
      
      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-blue-900/90 to-emerald-900/90 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/Complete Solar EPC Solutions.jpg"
            alt="Complete Solar EPC Solutions"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-emerald-900/80 mix-blend-multiply" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
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
                    src="/Solar EPC Services.png"
                    alt="Solar EPC Services"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
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

      {/* Features Section with Images */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our EPC Process</h2>
            <p className="text-lg text-gray-600">End-to-end engineering solutions for your solar power projects</p>
          </div>
          
          {/* Process Visualization */}
          <div className="relative mb-20">
            <div className="hidden md:flex justify-between items-center mb-12">
              {[1, 2, 3, 4, 5].map((step, index) => (
                <div key={index} className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-emerald-600 flex items-center justify-center text-white font-bold text-xl">
                    {step}
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-4/5 h-1 bg-gray-200 -z-0">
              <div className="h-full bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full" style={{ width: '100%' }}></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 bg-gray-100 relative overflow-hidden">
                  <Image
                    src={
                      index === 0 ? '/Project Planning & Design.jpg' :
                      index === 1 ? '/Equipment Procurement.webp' :
                      index === 2 ? '/Installation & Commissioning.jpeg' :
                      index === 3 ? '/Performance Guarantees.jpg' :
                      '/Grid Integration.jpg'
                    }
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="w-14 h-14 -mt-12 mb-4 bg-gradient-to-br from-blue-600 to-emerald-600 text-white rounded-xl flex items-center justify-center relative z-10 shadow-lg">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Power Your Future with Solar</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Ready to switch to clean, renewable energy? Get started with our expert EPC services today.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-semibold rounded-lg transition-colors duration-300"
              >
                Get a Free Quote
              </a>
              <a 
                href="tel:+918959890113" 
                className="px-8 py-3 flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                Call Now
              </a>
            </div>
            
            <div className="mt-8 text-sm text-gray-500">
              <p>Need immediate assistance? <a href="tel:+918959890113" className="text-blue-600 font-medium hover:underline">Call our 24/7 support</a></p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
