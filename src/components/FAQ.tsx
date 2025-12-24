'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Solar Energy?",
      answer: "Solar energy is radiation from the Sun that is capable of producing heat, causing chemical reactions, or generating electricity. The total amount of solar energy incident on Earth is vastly in excess of the world's current and anticipated energy requirements."
    },
    {
      question: "How does Solar Energy work?",
      answer: "Solar panels work by absorbing sunlight with photovoltaic cells, generating direct current (DC) energy and then converting it to usable alternating current (AC) energy with the help of inverter technology. AC energy then flows through the home's electrical panel and is distributed accordingly."
    },
    {
      question: "What is Renewable Energy?",
      answer: "Renewable energy is energy derived from natural sources that are replenished on a human timescale. Examples include solar, wind, hydro, geothermal, and biomass. Unlike fossil fuels, these sources are not depleted when used."
    },
    {
      question: "I have a bigger project. Can you handle it?",
      answer: "Absolutely! We have extensive experience with large-scale commercial and industrial solar installations. Our team can handle projects of any size, from small residential systems to multi-megawatt commercial installations."
    },
    {
      question: "How do you communicate?",
      answer: "We maintain clear communication throughout your project. You'll have a dedicated project manager, regular updates via email and phone, and 24/7 support for any urgent matters. We believe in transparency and keeping you informed every step of the way."
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
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
          <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors font-semibold">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
