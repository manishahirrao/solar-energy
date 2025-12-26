'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Users, Zap, Award, CheckCircle, Download, Mail } from 'lucide-react';
import Link from 'next/link';

export default function ProjectDetails() {
  const project = {
    title: "Adani Plant",
    location: "Gujarat",
    client: "Adani Group",
    completedDate: "March 2024",
    capacity: "50MW",
    type: "Industrial",
    duration: "18 months",
    teamSize: "45 professionals",
    status: "Completed",
    description: "A landmark industrial solar installation for Adani Group, featuring state-of-the-art solar technology and comprehensive monitoring systems. This project represents one of our largest industrial installations to date, demonstrating our capability to handle large-scale renewable energy projects.",
    overview: "The Adani Plant project involved the design, installation, and commissioning of a 50MW solar power system to meet the industrial energy needs of one of India's largest conglomerates. The project required careful planning, advanced engineering solutions, and seamless coordination with the client's existing infrastructure.",
    challenges: [
      "Limited available space requiring optimized panel layout",
      "Integration with existing industrial power systems",
      "Strict timeline requirements for commissioning",
      "Meeting high reliability standards for industrial operations"
    ],
    solutions: [
      "Custom-designed mounting systems for maximum space utilization",
      "Advanced grid-tied inverters with seamless integration",
      "Phased installation approach to meet deadlines",
      "Redundant systems and comprehensive monitoring setup"
    ],
    features: [
      "High-efficiency monocrystalline solar panels",
      "Smart monitoring system with real-time performance tracking",
      "Automated cleaning system for optimal efficiency",
      "Weather-resistant design for industrial environment",
      "Comprehensive safety and maintenance protocols",
      "24/7 remote monitoring and support"
    ],
    results: [
      "50MW clean energy generation capacity",
      "65,000 tons of CO2 emissions reduction annually",
      "30% reduction in energy costs for the client",
      "99.8% system uptime achieved",
      "Payback period of 4.5 years"
    ],
    testimonials: [
      {
        name: "Ramesh Patel",
        position: "Operations Director, Adani Group",
        content: "The solar installation exceeded our expectations. The team's expertise and professionalism throughout the project was exceptional."
      },
      {
        name: "Priya Sharma",
        position: "Sustainability Manager, Adani Group",
        content: "This project has significantly advanced our sustainability goals. The system's performance has been outstanding since day one."
      }
    ],
    specifications: {
      panels: "150,000+ high-efficiency solar panels",
      inverters: "Advanced string inverters with monitoring",
      mounting: "Custom-designed industrial mounting structures",
      monitoring: "IoT-enabled real-time monitoring system",
      warranty: "30-year performance warranty on panels"
    },
    images: [
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
      "/api/placeholder/800/500"
    ]
  };

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
            className="text-white"
          >
            <Link
              href="/project"
              className="inline-flex items-center text-white hover:text-green-200 transition-colors mb-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Projects
            </Link>
            
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-green-100">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  {project.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {project.completedDate}
                </div>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.status}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-2 space-y-12"
              >
                {/* Description */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
                  <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    {project.description}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {project.overview}
                  </p>
                </div>

                {/* Project Gallery */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.images.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="relative overflow-hidden rounded-xl"
                      >
                        <div className="w-full h-64 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                          <div className="text-white font-semibold">
                            Project Image {index + 1}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Challenges & Solutions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Challenges</h3>
                    <ul className="space-y-3">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Solutions</h3>
                    <ul className="space-y-3">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Results</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.results.map((result, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="bg-gray-50 rounded-xl p-6"
                      >
                        <div className="flex items-center">
                          <Award className="w-8 h-8 text-green-600 mr-4" />
                          <span className="text-gray-700 font-medium">{result}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Testimonials */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Client Testimonials</h3>
                  <div className="space-y-6">
                    {project.testimonials.map((testimonial, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="bg-gray-50 rounded-xl p-6"
                      >
                        <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                        <div>
                          <p className="font-semibold text-gray-900">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.position}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Project Info Card */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Project Information</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Client</p>
                      <p className="font-semibold text-gray-900">{project.client}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Location</p>
                      <p className="font-semibold text-gray-900">{project.location}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Capacity</p>
                      <p className="font-semibold text-gray-900">{project.capacity}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Type</p>
                      <p className="font-semibold text-gray-900">{project.type}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Duration</p>
                      <p className="font-semibold text-gray-900">{project.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Team Size</p>
                      <p className="font-semibold text-gray-900">{project.teamSize}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Completed</p>
                      <p className="font-semibold text-gray-900">{project.completedDate}</p>
                    </div>
                  </div>
                </div>

                {/* Specifications */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Specifications</h3>
                  <div className="space-y-3">
                    {Object.entries(project.specifications).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-sm text-gray-500 mb-1 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </p>
                        <p className="font-semibold text-gray-900">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-green-600 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Start Your Project</h3>
                  <p className="mb-6 text-green-100">
                    Interested in a similar solar installation for your business?
                  </p>
                  <div className="space-y-3">
                    <button className="w-full bg-white text-green-600 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                      Get Quote
                    </button>
                    <button className="w-full bg-transparent border-2 border-white text-white px-4 py-3 rounded-lg hover:bg-white hover:text-green-600 transition-colors font-semibold flex items-center justify-center">
                      <Download className="w-5 h-5 mr-2" />
                      Download Case Study
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
