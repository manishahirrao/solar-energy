'use client';

import { motion } from 'framer-motion';
import { Sun, Zap, Wrench, ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Solar EPC',
      description: 'End-to-end Engineering, Procurement, and Construction services for turnkey solar power projects with guaranteed performance.',
      image: '/Complete Solar EPC Solutions.jpg',
      href: '/service/solar-epc',
      features: ['Design & Engineering', 'Quality Procurement', 'Expert Installation'],
      color: 'from-violet-500 to-purple-600'
    },
    {
      icon: Sun,
      title: 'Solar Installation',
      description: 'Professional installation of high-quality solar panel systems for residential, commercial, and industrial properties.',
      image: '/Rooftop Solar Installation.jpeg',
      href: '/service/solar-installation',
      features: ['Residential Setup', 'Commercial Projects', 'Industrial Solutions'],
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: Zap,
      title: 'Solar Maintenance',
      description: 'Comprehensive maintenance and cleaning services to keep your solar system operating at peak efficiency.',
      image: '/solar-maintainance-service.jpg',
      href: '/service/solar-maintenance',
      features: ['Regular Cleaning', 'Performance Check', '24/7 Support'],
      color: 'from-emerald-500 to-green-600'
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 -left-20 w-80 h-80 bg-emerald-100 rounded-full blur-[100px] opacity-50" />
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-amber-100 rounded-full blur-[120px] opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-50 rounded-full blur-[150px] opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Complete Solar
            <span className="block bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 bg-clip-text text-transparent">
              Energy Solutions
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Transform your energy future with our comprehensive range of solar services.
            From design to installation and ongoing maintenance.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link href={service.href} className="block h-full group">
                <motion.div
                  className="relative bg-white rounded-3xl overflow-hidden h-full border border-slate-100 shadow-lg shadow-slate-200/50"
                  whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Floating Icon */}
                    <motion.div
                      className={`absolute top-4 right-4 w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <service.icon className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Features Tags */}
                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-slate-700"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 lg:p-8">
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 text-base leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors">
                      <span>Explore Service</span>
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Hover Gradient Line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 mb-6">
            Not sure which service you need? We're here to help!
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              if (typeof window !== 'undefined') {
                (window as any).openQuoteForm();
              }
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full font-semibold shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-shadow"
          >
            Get Expert Consultation
            <ArrowUpRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
