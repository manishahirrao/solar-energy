'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Sun, Home, Building, Factory, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SolarInstallation() {
  const installationTypes = [
    {
      icon: Home,
      title: 'Residential',
      description: 'Custom solar solutions for homes of all sizes, helping you reduce energy bills and carbon footprint.'
    },
    {
      icon: Building,
      title: 'Commercial',
      description: 'Cost-effective solar solutions for businesses, offices, and retail spaces.'
    },
    {
      icon: Factory,
      title: 'Industrial',
      description: 'Large-scale solar installations for factories, warehouses, and manufacturing plants.'
    }
  ];

  const processSteps = [
    {
      title: 'Site Assessment',
      description: 'Our experts evaluate your property to determine the best solar solution.'
    },
    {
      title: 'System Design',
      description: 'We create a customized solar system design optimized for your energy needs.'
    },
    {
      title: 'Permitting',
      description: 'We handle all necessary permits and paperwork for a hassle-free experience.'
    },
    {
      title: 'Installation',
      description: 'Our certified technicians install your system with minimal disruption.'
    },
    {
      title: 'Inspection',
      description: 'We coordinate with local authorities for system inspection and approval.'
    },
    {
      title: 'Activation',
      description: 'Your system is connected to the grid and ready to generate clean energy.'
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
            src="/Solar Installation Services.webp"
            alt="Solar Installation"
            fill
            className="object-cover"
            priority
            sizes="100vw"
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
              Solar Installation Services
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Professional installation of high-quality solar panel systems for residential, commercial, and industrial properties.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Subsidy Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Avail Subsidy of <span className="text-blue-600">₹78,000</span> for solar in Bhopal
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  From Habib Ganj to MP Nagar, families across Bhopal have trusted Solarium for rooftop solar solutions for their homes under the PM Surya Ghar Yojana.
                </p>

                {/* Subsidy Table */}
                <div className="mb-8 overflow-hidden rounded-lg shadow-md">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-900 text-white">
                        <th className="py-3 px-6 text-left font-semibold">Capacity</th>
                        <th className="py-3 px-6 text-left font-semibold">Subsidy</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-6 text-gray-900">1 kW</td>
                        <td className="py-3 px-6 text-gray-900">₹30,000</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-6 text-gray-900">2 kW</td>
                        <td className="py-3 px-6 text-gray-900">₹60,000</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-6 text-gray-900">3 kW</td>
                        <td className="py-3 px-6 text-gray-900">₹78,000</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-6 text-gray-900">Above 3kW</td>
                        <td className="py-3 px-6 text-gray-900">₹78,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <Link 
                  href="/contact" 
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg"
                >
                  Book FREE Site Survey
                </Link>
              </motion.div>

              {/* Right Content - Image and Trust Badges */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6">
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-bold z-10">
                    <div className="text-2xl">250+</div>
                    <div className="text-xs">संतुष्ट का परिवार</div>
                  </div>
                  <Image
                    src="/subsidy-bhopal.png"
                    alt="Happy family with solar panels"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>

                
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Types with Images */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Installation Services</h2>
            <p className="text-lg text-gray-600">Professional solar panel installation for all types of properties</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {installationTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 bg-gray-100 relative overflow-hidden">
                  <Image
                    src={index === 0 ? '/Rooftop Solar Installation.jpeg' : 
                          index === 1 ? '/Commercial Solar Farm.jpg' : 
                          '/Industrial Solar Setup.jpg'}
                    alt={`${type.title} Installation`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <div className="w-14 h-14 -mt-12 mb-4 bg-gradient-to-br from-blue-600 to-emerald-600 text-white rounded-xl flex items-center justify-center relative z-10 shadow-lg">
                    <type.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span>View Projects</span>
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

      {/* Installation Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Installation Process
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We make going solar simple and stress-free with our streamlined installation process. Our team of certified professionals handles every step, from initial consultation to system activation, ensuring a seamless experience from start to finish.
                </p>
                
                <div className="mt-8">
                  <Link 
                    href="/contact" 
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-300"
                  >
                    Get a Free Quote
                  </Link>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 text-green-600">
                        {index + 1}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Installation Services?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Certified and experienced installers',
              'High-quality components with industry-leading warranties',
              'Competitive pricing and financing options',
              'Complete project management',
              'Post-installation support and maintenance',
              'Local expertise with national standards'
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="ml-3 text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Go Solar?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Take the first step towards energy independence with our expert solar installation services.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold rounded-lg transition-colors duration-300"
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
