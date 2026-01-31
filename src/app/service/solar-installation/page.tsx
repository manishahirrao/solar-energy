'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupQuoteForm from '@/components/PopupQuoteForm';
import { motion } from 'framer-motion';
import { Sun, Home, Building, Factory, CheckCircle, ArrowRight, Phone, Sparkles, Award, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SolarInstallation() {
  const installationTypes = [
    {
      icon: Home,
      title: 'Residential',
      description: 'Custom solar solutions for homes of all sizes, helping you reduce energy bills and carbon footprint.',
      image: '/Rooftop Solar Installation.jpeg',
      color: 'from-emerald-500 to-green-600'
    },
    {
      icon: Building,
      title: 'Commercial',
      description: 'Cost-effective solar solutions for businesses, offices, and retail spaces.',
      image: '/Commercial Solar Farm.jpg',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Factory,
      title: 'Industrial',
      description: 'Large-scale solar installations for factories, warehouses, and manufacturing plants.',
      image: '/Industrial Solar Setup.jpg',
      color: 'from-amber-500 to-orange-600'
    }
  ];

  const processSteps = [
    { title: 'Site Assessment', description: 'Our experts evaluate your property to determine the best solar solution.' },
    { title: 'System Design', description: 'We create a customized solar system design optimized for your energy needs.' },
    { title: 'Permitting', description: 'We handle all necessary permits and paperwork for a hassle-free experience.' },
    { title: 'Installation', description: 'Our certified technicians install your system with minimal disruption.' },
    { title: 'Inspection', description: 'We coordinate with local authorities for system inspection and approval.' },
    { title: 'Activation', description: 'Your system is connected to the grid and ready to generate clean energy.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px] animate-pulse" />
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
            src="/Solar Installation Services.webp"
            alt="Solar Installation"
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
              <span className="text-white">Sahi Tarika,</span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                Behtar Result
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Ghar ho ya office, humari expert team karegi installation bina kisi pareshani ke.
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
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full font-semibold text-white flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    (window as any).openQuoteForm();
                  }
                }}
              >
                Book FREE Site Survey
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

      {/* Subsidy Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-amber-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/15 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Avail Subsidy of <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">₹78,000</span> for solar in Bhopal
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                From Habib Ganj to MP Nagar, families across Bhopal have trusted Procura Solar for rooftop solar solutions for their homes under the PM Surya Ghar Yojana.
              </p>

              {/* Subsidy Table */}
              <div className="mb-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-amber-500 to-orange-600 text-white">
                      <th className="py-4 px-6 text-left font-semibold">Capacity</th>
                      <th className="py-4 px-6 text-left font-semibold">Subsidy</th>
                    </tr>
                  </thead>
                  <tbody className="text-white">
                    {[
                      { capacity: '1 kW', subsidy: '₹30,000' },
                      { capacity: '2 kW', subsidy: '₹60,000' },
                      { capacity: '3 kW', subsidy: '₹78,000' },
                      { capacity: 'Above 3kW', subsidy: '₹78,000' }
                    ].map((row, i) => (
                      <tr key={i} className="border-t border-white/10">
                        <td className="py-3 px-6">{row.capacity}</td>
                        <td className="py-3 px-6 font-semibold text-amber-400">{row.subsidy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full font-semibold text-white flex items-center gap-2 shadow-lg shadow-amber-500/25"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    (window as any).openQuoteForm();
                  }
                }}
              >
                Book FREE Site Survey
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute top-4 right-4 bg-gradient-to-br from-amber-500 to-orange-600 text-white px-5 py-3 rounded-2xl font-bold z-10 shadow-lg">
                  <div className="text-3xl">250+</div>
                  <div className="text-xs opacity-90">संतुष्ट का परिवार</div>
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
      </section>

      {/* Installation Types */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-40 -left-20 w-80 h-80 bg-amber-100 rounded-full blur-[120px] opacity-40" />
          <div className="absolute bottom-40 -right-20 w-96 h-96 bg-emerald-100 rounded-full blur-[150px] opacity-30" />
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
              Our Installation
              <span className="block bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">Services</span>
            </h2>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Professional solar panel installation for all types of properties
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {installationTypes.map((type, index) => (
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
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={type.image}
                      alt={`${type.title} Installation`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className={`w-14 h-14 -mt-14 mb-4 bg-gradient-to-br ${type.color} text-white rounded-2xl flex items-center justify-center relative z-10 shadow-lg group-hover:scale-110 transition-transform`}>
                      <type.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">{type.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{type.description}</p>
                    <Link href="/project" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                      View Projects
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Our Installation
                <span className="block bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">Process</span>
              </h2>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We make going solar simple and stress-free with our streamlined installation process. Our team of certified professionals handles every step, from initial consultation to system activation.
              </p>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full font-semibold text-white flex items-center gap-2 shadow-lg shadow-emerald-500/25"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    (window as any).openQuoteForm();
                  }
                }}
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            <div className="lg:w-1/2">
              <div className="space-y-4">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-slate-600 text-sm">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Why Choose Our
              <span className="block bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">Installation Services?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                className="flex items-start gap-3 bg-slate-50 p-5 rounded-xl"
              >
                <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                <p className="text-slate-700 font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Sun className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Ready to
              <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Go Solar?</span>
            </h2>

            <p className="text-xl text-slate-400 mb-10">
              Take the first step towards energy independence with our expert solar installation services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full font-semibold inline-flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25"
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
              Need immediate assistance? <a href="tel:+918959890113" className="text-amber-400 font-medium hover:underline">Call our 24/7 support</a>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <PopupQuoteForm />
    </div>
  );
}
