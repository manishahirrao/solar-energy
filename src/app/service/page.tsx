'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupQuoteForm from '@/components/PopupQuoteForm';
import { motion } from 'framer-motion';
import { Sun, Battery, ArrowRight, FileText, Settings, Award, Wrench, Zap, Shield, Phone, Sparkles, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Service() {
  const services = [
    {
      icon: Settings,
      title: 'Solar EPC',
      description: 'End-to-end Engineering, Procurement, and Construction services for turnkey solar power projects with guaranteed performance.',
      features: ['Project planning & design', 'Equipment procurement', 'Installation & commissioning', 'Performance guarantees'],
      image: '/solar-epc-service.jpg',
      href: '/service/solar-epc',
      color: 'from-violet-500 to-purple-600'
    },
    {
      icon: Sun,
      title: 'Solar Installation',
      description: 'Professional installation of high-quality solar panel systems for residential, commercial, and industrial properties.',
      features: ['Residential installations', 'Commercial projects', 'Industrial solutions', 'Custom system design'],
      image: '/solar-installation-service.jpg',
      href: '/service/solar-installation',
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: Wrench,
      title: 'Solar Maintenance',
      description: 'Comprehensive maintenance and repair services to keep your solar energy system operating at peak efficiency.',
      features: ['Preventive maintenance', 'Performance monitoring', 'System cleaning', '24/7 emergency support'],
      image: '/solar-maintenance-service.jpg',
      href: '/service/solar-maintenance',
      color: 'from-blue-500 to-cyan-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-violet-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px]" />
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
          <img
            src="/solar-energy-service.webp"
            alt="Solar Services Hero"
            className="w-full h-full object-cover opacity-20"
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
              <span className="text-white">Humari Solar</span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                Services
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Apki zaroorat ke hisaab se tailor-made solar solutions.
              <span className="block text-amber-400 font-medium mt-2">Consultation se lekar installation aur maintenance tak, hum hain aapke saath.</span>
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
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold text-white flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
                onClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Battery className="w-5 h-5" />
                Explore Services
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-40 -left-20 w-80 h-80 bg-emerald-100 rounded-full blur-[120px] opacity-40" />
          <div className="absolute bottom-40 -right-20 w-96 h-96 bg-violet-100 rounded-full blur-[150px] opacity-30" />
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
              Our
              <span className="block bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">Services</span>
            </h2>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Complete solar solutions from consultation to installation and maintenance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-slate-100 flex flex-col h-full">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          e.currentTarget.style.display = 'none';
                          parent.className = `relative h-52 overflow-hidden bg-gradient-to-br ${service.color} flex items-center justify-center`;
                          parent.innerHTML = `
                          <div class="text-white text-center">
                            <div class="text-3xl font-bold mb-2">${service.title}</div>
                            <div class="text-sm opacity-75">Service Image</div>
                          </div>
                        `;
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* View Details Badge */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                      <span className="text-xs font-semibold text-emerald-700">View Details →</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-grow">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 mb-5 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6 flex-grow">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link href={service.href}>
                      <button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white py-3.5 rounded-xl font-semibold flex items-center justify-center group/btn shadow-lg transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PM Surya Ghar Yojana Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-amber-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/15 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-amber-500/25"
            >
              <Sun className="w-10 h-10 text-white" />
            </motion.div>


            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              PM <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Surya Ghar</span> Yojana
            </h2>

            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Government of India's flagship solar rooftop scheme with maximum subsidies
              <span className="block text-amber-400 font-medium mt-2">Professional assistance for complete application and installation</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/pm-surya-ghar-yojana.jpg"
                  alt="PM Surya Ghar Yojana"
                  className="w-full h-[400px] object-cover"
                  onError={(e) => {
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      e.currentTarget.style.display = 'none';
                      parent.className = 'relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center h-[400px]';
                      parent.innerHTML = `
                        <div class="text-white text-center p-8">
                          <div class="text-4xl font-bold mb-4">PM Surya Ghar Yojana</div>
                          <div class="text-lg opacity-75">Government Solar Rooftop Scheme</div>
                        </div>
                      `;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Empaneled Partner</h4>
                      <p className="text-emerald-600 text-sm font-medium">Approved by Government of India</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Our Services Under PM Surya Ghar</h3>
                <div className="space-y-6">
                  {[
                    { icon: FileText, title: 'Application Assistance', desc: 'Complete documentation and application process support', color: 'from-emerald-500 to-green-600' },
                    { icon: Settings, title: 'Installation Service', desc: 'Professional installation with certified technicians', color: 'from-amber-500 to-orange-600' },
                    { icon: Award, title: 'Subsidy Claims', desc: 'Complete assistance in claiming government subsidies', color: 'from-blue-500 to-cyan-600' }
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-1">{item.title}</h4>
                        <p className="text-slate-400">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    (window as any).openQuoteForm();
                  }
                }}
              >
                <Phone className="w-5 h-5" />
                Apply for PM Surya Ghar
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-emerald-100 rounded-full blur-[120px] opacity-50" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-100 rounded-full blur-[150px] opacity-40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Need a <span className="bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent">Custom Solution</span>?
            </h2>

            <p className="text-xl text-slate-600 mb-10">
              Our team of experts can design a tailored solar energy system that meets your specific requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full font-semibold inline-flex items-center gap-2 shadow-lg shadow-emerald-500/25"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    (window as any).openQuoteForm();
                  }
                }}
              >
                <Phone className="w-5 h-5" />
                Get Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-slate-100 text-slate-700 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-slate-200 transition-colors"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <PopupQuoteForm />
    </div>
  );
}
