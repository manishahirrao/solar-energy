'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupQuoteForm from '@/components/PopupQuoteForm';
import { motion } from 'framer-motion';
import { Wrench, Shield, CheckCircle, Search, BarChart2, Zap, FileText, ArrowRight, Phone, Sparkles, Award } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SolarMaintenance() {
  const maintenanceProcess = [
    {
      title: 'Inspection & Assessment',
      description: 'Thorough examination of all system components to identify any issues or potential problems.',
      icon: Search,
      color: 'from-violet-500 to-purple-600'
    },
    {
      title: 'Cleaning & Maintenance',
      description: 'Professional cleaning of solar panels and maintenance of all system components.',
      icon: Wrench,
      color: 'from-emerald-500 to-green-600'
    },
    {
      title: 'Performance Testing',
      description: 'Detailed analysis of system performance and energy production metrics.',
      icon: BarChart2,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Electrical Checks',
      description: 'Comprehensive testing of all electrical connections and components.',
      icon: Zap,
      color: 'from-amber-500 to-orange-600'
    },
    {
      title: 'Report & Recommendations',
      description: 'Detailed report with findings and recommendations for optimal performance.',
      icon: FileText,
      color: 'from-rose-500 to-pink-600'
    },
    {
      title: 'Preventive Maintenance',
      description: 'Proactive measures to prevent future issues and extend system lifespan.',
      icon: Shield,
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  const benefits = [
    'Increase system efficiency and energy production',
    'Extend the lifespan of your solar panels',
    'Protect your investment and warranty',
    'Identify and fix issues before they become major problems',
    'Maintain optimal return on investment'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/solar-maintainance-service.jpg"
            alt="Solar Maintenance Services"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90" />
        </div>

        <div className="relative container mx-auto px-4 z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-white">Hamesha Active,</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">
                Hamesha Efficient
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Dekh-rekh humari zimmedari. Hum rakhenge aapke solar system ko hamesha naya jaisa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full font-semibold text-white flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    (window as any).openQuoteForm();
                  }
                }}
              >
                Schedule Maintenance
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.a
                href="tel:+918959890113"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold text-white flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Maintenance Process */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-40 -left-20 w-80 h-80 bg-emerald-100 rounded-full blur-[120px] opacity-40" />
          <div className="absolute bottom-40 -right-20 w-96 h-96 bg-blue-100 rounded-full blur-[150px] opacity-30" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Our Maintenance
              <span className="block bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">Process</span>
            </h2>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive care to keep your solar system performing at its best
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {maintenanceProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white p-7 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Maintenance Matters */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/solar-maintainance-service.jpg"
                  alt="Solar Maintenance Service"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Expert Technicians</h4>
                      <p className="text-emerald-600 text-sm font-medium">24/7 Support Available</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Keep Your Solar System
                <span className="block bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">Running at Peak</span>
              </h2>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Regular maintenance is essential to ensure your solar energy system operates efficiently and continues to deliver maximum energy savings. Our comprehensive maintenance services help prevent costly repairs and extend the lifespan of your solar investment.
              </p>

              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl"
                  >
                    <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full font-semibold text-white flex items-center gap-2 shadow-lg shadow-emerald-500/25"
                >
                  Schedule Maintenance
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-emerald-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/15 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Wrench className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Ready to Get
              <span className="block bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Started?</span>
            </h2>

            <p className="text-xl text-slate-400 mb-10">
              Contact us today to schedule your solar maintenance service and ensure your system operates at peak performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full font-semibold inline-flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    (window as any).openQuoteForm();
                  }
                }}
              >
                <Zap className="w-5 h-5" />
                Get a Free Quote
              </motion.button>
              <motion.a
                href="tel:+918959890113"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold text-white inline-flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.a>
            </div>

            <p className="text-slate-500 mt-6 text-sm">
              Need immediate assistance? <a href="tel:+918959890113" className="text-emerald-400 font-medium hover:underline">Call our 24/7 support</a>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <PopupQuoteForm />
    </div>
  );
}
