'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "01 What is Solar Energy?",
      answer: "Solar Energy refers to energy obtained from sun through use of photovoltaic cells or solar panels."
    },
    {
      question: "02 How does Solar Energy work?",
      answer: "Solar Energy refers to energy obtained from sun through use of photovoltaic cells or solar panels."
    },
    {
      question: "03 What is Renewable Energy?",
      answer: "Solar Energy refers to energy obtained from sun through use of photovoltaic cells or solar panels."
    },
    {
      question: "04 I have a bigger project. Can you handle it?",
      answer: "Solar Energy refers to energy obtained from sun through use of photovoltaic cells or solar panels."
    },
    {
      question: "05 How do you communicate?",
      answer: "Solar Energy refers to energy obtained from sun through use of photovoltaic cells or solar panels."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-8 sm:mb-12">
            Find answers to common questions about solar energy and our services
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="mb-3 sm:mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-4 sm:p-6 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-4 sm:pr-8">
                    {index + 1}. {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                    )}
                  </div>
                </div>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 sm:p-6 pt-0 text-gray-600 leading-relaxed text-sm sm:text-base">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <Link href="/contact">
            <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors font-semibold">
              Contact Support
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
