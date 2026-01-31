'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight, Plus, Minus } from 'lucide-react';
import Link from 'next/link';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Solar Energy?",
      answer: "Solar Energy refers to energy obtained from the sun through use of photovoltaic cells or solar panels. These panels convert sunlight directly into electricity, providing a clean, renewable source of power for homes and businesses."
    },
    {
      question: "How does Solar Energy work?",
      answer: "Solar panels consist of photovoltaic cells that absorb sunlight and generate direct current (DC) electricity. An inverter then converts this DC power into alternating current (AC) that can be used to power your home or business. Any excess energy can be stored in batteries or fed back to the grid."
    },
    {
      question: "What are the benefits of solar installation?",
      answer: "Solar installation offers numerous benefits including significant reduction in electricity bills, protection against rising energy costs, increased property value, reduced carbon footprint, and energy independence. With government subsidies like PM Surya Ghar Yojana, the initial investment becomes even more affordable."
    },
    {
      question: "How much can I save with solar panels?",
      answer: "Savings depend on your current electricity consumption, system size, and local sunlight conditions. On average, our customers save 50-80% on their electricity bills. A typical 5kW residential system can save ₹5,000-8,000 per month."
    },
    {
      question: "How long do solar panels last?",
      answer: "High-quality solar panels typically last 25-30 years or more. Most manufacturers provide 25-year performance warranties. With minimal maintenance, your solar system will continue generating clean energy for decades."
    },
    {
      question: "Do you provide maintenance services?",
      answer: "Yes, we offer comprehensive maintenance packages including regular cleaning, performance monitoring, inverter checkups, and repair services. Our team ensures your system operates at peak efficiency throughout its lifetime."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-0 w-80 h-80 bg-emerald-100 rounded-full blur-[120px] opacity-40" />
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-violet-100 rounded-full blur-[150px] opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Frequently Asked
            <span className="block bg-gradient-to-r from-violet-500 via-purple-500 to-violet-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Find answers to common questions about solar energy and our services.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === index
                    ? 'border-emerald-200 shadow-lg shadow-emerald-100/50'
                    : 'border-slate-100 shadow-sm hover:border-slate-200'
                    }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded-2xl"
                  >
                    <div className="flex justify-between items-center gap-4">
                      <div className="flex items-center gap-4">
                        <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-colors ${openIndex === index
                          ? 'bg-emerald-500 text-white'
                          : 'bg-slate-100 text-slate-500'
                          }`}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className={`text-lg font-semibold transition-colors ${openIndex === index ? 'text-emerald-600' : 'text-slate-900'
                          }`}>
                          {faq.question}
                        </h3>
                      </div>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all ${openIndex === index
                        ? 'bg-emerald-500 text-white rotate-0'
                        : 'bg-slate-100 text-slate-500'
                        }`}>
                        {openIndex === index ? (
                          <Minus className="w-5 h-5" />
                        ) : (
                          <Plus className="w-5 h-5" />
                        )}
                      </div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-0">
                          <div className="pl-12 pr-12 text-slate-600 leading-relaxed border-l-2 border-emerald-200">
                            <p className="pl-4">{faq.answer}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
};

export default FAQ;
