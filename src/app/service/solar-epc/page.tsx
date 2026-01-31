'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupQuoteForm from '@/components/PopupQuoteForm';
import { motion } from 'framer-motion';
import { Settings, Check, Calendar, Shield, Zap, ArrowRight, Phone, Sparkles, Award, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SolarEPC() {
  const features = [
    {
      icon: Settings,
      title: 'Project Planning & Design',
      description: 'Custom solar solutions tailored to your specific energy needs and site conditions.',
      color: 'from-violet-500 to-purple-600'
    },
    {
      icon: Check,
      title: 'Equipment Procurement',
      description: 'Sourcing high-quality solar panels, inverters, and components from trusted manufacturers.',
      color: 'from-emerald-500 to-green-600'
    },
    {
      icon: Calendar,
      title: 'Installation & Commissioning',
      description: 'Professional installation by certified technicians with minimal disruption to your operations.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Shield,
      title: 'Performance Guarantees',
      description: 'Comprehensive warranties and performance guarantees for peace of mind.',
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: Zap,
      title: 'Grid Integration',
      description: 'Seamless integration with existing electrical systems and utility grids.',
      color: 'from-rose-500 to-pink-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-violet-500/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
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
            src="/Complete Solar EPC Solutions.jpg"
            alt="Complete Solar EPC Solutions"
            fill
            priority
            className="object-cover opacity-20"
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
              <span className="text-white">Chinta Chhodiye,</span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-violet-500 bg-clip-text text-transparent">
                Solar Lagwayein
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Design se lekar execution tak, hum samhalte hain sab kuch. Aap bas clean energy ka aanand lijiye.
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
                className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full font-semibold text-white flex items-center justify-center gap-2 shadow-lg shadow-violet-500/25"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    (window as any).openQuoteForm();
                  }
                }}
              >
                Get Free Quote
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

      {/* Service Details */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-40 -left-20 w-80 h-80 bg-violet-100 rounded-full blur-[120px] opacity-40" />
          <div className="absolute bottom-40 -right-20 w-96 h-96 bg-emerald-100 rounded-full blur-[150px] opacity-30" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/Solar EPC Services.png"
                  alt="Solar EPC Services"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Certified EPC Partner</h4>
                      <p className="text-emerald-600 text-sm font-medium">500+ Projects Completed</p>
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
                Complete Solar
                <span className="block bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent">EPC Solutions</span>
              </h2>

              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our Solar EPC (Engineering, Procurement, and Construction) services provide a single-point solution for all your solar power project needs. From initial site assessment to final commissioning, we handle every aspect of your solar installation with precision and expertise.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We work with commercial, industrial, and utility-scale clients to design and build solar power plants that maximize energy production and return on investment.
              </p>

              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full font-semibold text-white flex items-center gap-2 shadow-lg shadow-emerald-500/25"
                >
                  Get a Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Our EPC
              <span className="block bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">Process</span>
            </h2>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              End-to-end engineering solutions for your solar power projects
            </p>
          </motion.div>

          {/* Process Steps Indicator */}
          <div className="hidden md:flex justify-center items-center mb-16 relative">
            <div className="flex items-center gap-0">
              {[1, 2, 3, 4, 5].map((step, index) => (
                <div key={index} className="flex items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg"
                  >
                    {step}
                  </motion.div>
                  {index < 4 && (
                    <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-100 h-full">
                  <div className="h-48 bg-slate-100 relative overflow-hidden">
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
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className={`w-14 h-14 -mt-14 mb-4 bg-gradient-to-br ${feature.color} text-white rounded-2xl flex items-center justify-center relative z-10 shadow-lg group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-violet-600 transition-colors">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-violet-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/15 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Zap className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Power Your Future
              <span className="block bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">with Solar</span>
            </h2>

            <p className="text-xl text-slate-400 mb-10">
              Ready to switch to clean, renewable energy? Get started with our expert EPC services today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-full font-semibold inline-flex items-center justify-center gap-2 shadow-lg shadow-violet-500/25"
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
              Need immediate assistance? <a href="tel:+918959890113" className="text-violet-400 font-medium hover:underline">Call our 24/7 support</a>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <PopupQuoteForm />
    </div>
  );
}
