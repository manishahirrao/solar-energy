'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PopupQuoteForm from '@/components/PopupQuoteForm';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone, Mail, MessageCircle, HelpCircle, Sparkles, ArrowRight, Zap } from 'lucide-react';
import { useState } from 'react';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Solar Energy?",
      answer: "Solar energy is radiation from the Sun that is capable of producing heat, causing chemical reactions, or generating electricity. The total amount of solar energy incident on Earth is vastly in excess of the world's current and anticipated energy requirements. If suitably harnessed, this highly diffused source has the potential to satisfy all future energy needs."
    },
    {
      question: "How does Solar Energy work?",
      answer: "Solar panels work by absorbing sunlight with photovoltaic cells, generating direct current (DC) energy and then converting it to usable alternating current (AC) energy with the help of inverter technology. AC energy then flows through the home's electrical panel and is distributed accordingly."
    },
    {
      question: "What is Renewable Energy?",
      answer: "Renewable energy is energy derived from natural sources that are replenished on a human timescale. Examples include solar, wind, hydro, geothermal, and biomass. Unlike fossil fuels, which are finite, renewable sources are sustainable and have a much lower environmental impact."
    },
    {
      question: "I have a bigger project. Can you handle it?",
      answer: "Absolutely! We have extensive experience with large-scale commercial and industrial solar installations. Our team can handle projects of any size, from small residential systems to multi-megawatt commercial installations. We have successfully completed projects ranging from 1kW residential systems to 100MW+ utility-scale solar farms."
    },
    {
      question: "How do you communicate?",
      answer: "We maintain clear communication throughout your project. You'll have a dedicated project manager, regular updates via email and phone, and 24/7 support for any urgent matters. We believe in transparency and keeping you informed every step of the way."
    },
    {
      question: "What is the typical payback period for solar installation?",
      answer: "The payback period for solar installation typically ranges from 3-7 years in India, depending on factors like your electricity consumption, tariff rates, location, and system size. With government subsidies and falling solar panel costs, many homeowners and businesses see ROI in less than 5 years."
    },
    {
      question: "Do solar panels work during cloudy days or at night?",
      answer: "Solar panels generate electricity from sunlight, so they produce less power on cloudy days and none at night. However, modern solar panels are designed to work efficiently even in low light conditions. For continuous power supply, we recommend installing battery storage systems."
    },
    {
      question: "What maintenance do solar panels require?",
      answer: "Solar panels require minimal maintenance. Regular cleaning to remove dust and debris, typically 2-4 times per year, is usually sufficient. We recommend annual professional inspections to check connections, inverters, and overall system performance."
    },
    {
      question: "What government subsidies are available for solar installation?",
      answer: "The Indian government offers various subsidies and incentives for solar installation, including capital subsidies for residential systems, accelerated depreciation benefits for businesses, and tax benefits. Our team helps you navigate and apply for all eligible subsidies."
    },
    {
      question: "Can I install solar panels on any type of roof?",
      answer: "Solar panels can be installed on most roof types including concrete, tile, metal, and composite roofs. The key factors are roof orientation (south-facing is ideal in India), structural integrity to support the panels, and available space. We conduct thorough site assessments for each project."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
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
              <span className="text-white">Frequently Asked</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Questions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
            >
              Find answers to common questions about solar energy and our services
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-40 -left-20 w-80 h-80 bg-emerald-100 rounded-full blur-[120px] opacity-40" />
          <div className="absolute bottom-40 -right-20 w-96 h-96 bg-blue-100 rounded-full blur-[150px] opacity-30" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`w-full text-left p-6 rounded-2xl transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/50 group ${openIndex === index
                      ? 'bg-white shadow-xl border border-slate-100'
                      : 'bg-white/50 hover:bg-white hover:shadow-lg border border-transparent hover:border-slate-100'
                      }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${openIndex === index
                        ? 'bg-gradient-to-br from-emerald-500 to-green-600 text-white'
                        : 'bg-slate-100 text-slate-500 group-hover:bg-emerald-100 group-hover:text-emerald-600'
                        }`}>
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <h3 className={`text-lg font-semibold leading-snug pr-4 transition-colors ${openIndex === index ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'
                            }`}>
                            {faq.question}
                          </h3>
                          <motion.div
                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${openIndex === index ? 'bg-emerald-100' : 'bg-slate-100'
                              }`}
                          >
                            <ChevronDown className={`w-5 h-5 ${openIndex === index ? 'text-emerald-600' : 'text-slate-400'
                              }`} />
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 pl-14 text-slate-600 leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Still Have
              <span className="block bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent">Questions?</span>
            </h2>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our solar energy experts are here to help you with any queries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Phone, title: 'Call Us', desc: 'Speak directly with our solar experts', value: '+91 8959890113', subtext: 'Mon-Sat, 9AM-7PM', color: 'from-emerald-500 to-green-600', href: 'tel:+918959890113' },
              { icon: Mail, title: 'Email Us', desc: 'Get detailed responses to your questions', value: 'sale.procura@gmail.com', subtext: '24-48 hour response', color: 'from-blue-500 to-cyan-600', href: 'mailto:sale.procura@gmail.com' },
              { icon: MessageCircle, title: 'WhatsApp', desc: 'Instant support and quick replies', value: 'Chat Now', subtext: 'Quick response guaranteed', color: 'from-violet-500 to-purple-600', href: 'https://wa.me/918959890113' }
            ].map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group block"
              >
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm mb-4">{item.desc}</p>
                  <p className="text-emerald-600 font-semibold">{item.value}</p>
                  <p className="text-xs text-slate-400 mt-1">{item.subtext}</p>
                </div>
              </motion.a>
            ))}
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

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Request a Free
              <span className="block bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Consultation</span>
            </h2>

            <p className="text-xl text-slate-400 mb-10">
              Get personalized advice and quotes from our solar energy experts
            </p>

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
              <Zap className="w-5 h-5" />
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <PopupQuoteForm />
    </div>
  );
}
