'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Phone, Mail, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Solar Energy?",
      answer: "Solar energy is radiation from the Sun that is capable of producing heat, causing chemical reactions, or generating electricity. The total amount of solar energy incident on Earth is vastly in excess of the world's current and anticipated energy requirements. If suitably harnessed, this highly diffused source has the potential to satisfy all future energy needs."
    },
    {
      question: "How does Solar Energy work?",
      answer: "Solar panels work by absorbing sunlight with photovoltaic cells, generating direct current (DC) energy and then converting it to usable alternating current (AC) energy with the help of inverter technology. AC energy then flows through the home's electrical panel and is distributed accordingly. Solar panels can be used for a wide range of applications including remote power systems for cabins, telecommunications equipment, remote sensing, and of course for the production of electricity by residential and commercial solar electric systems."
    },
    {
      question: "What is Renewable Energy?",
      answer: "Renewable energy is energy derived from natural sources that are replenished on a human timescale. Examples include solar, wind, hydro, geothermal, and biomass. Unlike fossil fuels, which are finite, renewable sources are sustainable and have a much lower environmental impact. Renewable energy technologies convert natural energy sources into usable forms of energy like electricity or heat."
    },
    {
      question: "I have a bigger project. Can you handle it?",
      answer: "Absolutely! We have extensive experience with large-scale commercial and industrial solar installations. Our team can handle projects of any size, from small residential systems to multi-megawatt commercial installations. We have successfully completed projects ranging from 1kW residential systems to 100MW+ utility-scale solar farms. Our experienced team, robust supply chain, and proven project management methodologies ensure we can deliver projects of any scale on time and within budget."
    },
    {
      question: "How do you communicate?",
      answer: "We maintain clear communication throughout your project. You'll have a dedicated project manager, regular updates via email and phone, and 24/7 support for any urgent matters. We believe in transparency and keeping you informed every step of the way. Our communication process includes initial consultation, detailed project proposals, regular progress reports, site meetings, and post-installation support. We also provide a client portal where you can track project progress and access documentation."
    },
    {
      question: "What is the typical payback period for solar installation?",
      answer: "The payback period for solar installation typically ranges from 3-7 years in India, depending on factors like your electricity consumption, tariff rates, location, and system size. With government subsidies and falling solar panel costs, many homeowners and businesses see ROI in less than 5 years. After the payback period, you enjoy free electricity for the remaining 20+ years of the system's life."
    },
    {
      question: "Do solar panels work during cloudy days or at night?",
      answer: "Solar panels generate electricity from sunlight, so they produce less power on cloudy days and none at night. However, modern solar panels are designed to work efficiently even in low light conditions. For continuous power supply, we recommend installing battery storage systems that store excess energy generated during sunny periods for use during nights or cloudy days. Grid-tied systems can also draw power from the grid when needed."
    },
    {
      question: "What maintenance do solar panels require?",
      answer: "Solar panels require minimal maintenance. Regular cleaning to remove dust and debris, typically 2-4 times per year, is usually sufficient. We recommend annual professional inspections to check connections, inverters, and overall system performance. Most solar panels come with a 25-year performance warranty and require very little attention beyond basic cleaning. Our maintenance packages include regular inspections, cleaning, and performance optimization."
    },
    {
      question: "What government subsidies are available for solar installation?",
      answer: "The Indian government offers various subsidies and incentives for solar installation, including capital subsidies for residential systems, accelerated depreciation benefits for businesses, and tax benefits. State-specific schemes may also be available. Our team helps you navigate and apply for all eligible subsidies and incentives, significantly reducing your upfront investment costs."
    },
    {
      question: "Can I install solar panels on any type of roof?",
      answer: "Solar panels can be installed on most roof types including concrete, tile, metal, and composite roofs. The key factors are roof orientation (south-facing is ideal in India), structural integrity to support the panels, and available space. We conduct thorough site assessments to determine the best installation approach for your specific roof type and condition. For roofs unsuitable for direct installation, we can suggest ground-mounted systems or alternative arrangements."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
            className="text-center text-white"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 sm:mb-10">Frequently Asked Questions</h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto">
              Find answers to common questions about solar energy and our services
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="mb-4"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 pr-8">
                      {index + 1}. {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <ChevronUp className="w-6 h-6 text-green-600" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
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
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 sm:mb-10">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our solar energy experts are here to help you with any queries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our solar experts
              </p>
              <p className="text-green-600 font-semibold">+91 004-9985-484-44</p>
              <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-4">
                Get detailed responses to your questions
              </p>
              <p className="text-green-600 font-semibold">info@domain.com</p>
              <p className="text-sm text-gray-500">24-48 hour response</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-8 text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Live Chat</h3>
              <p className="text-gray-600 mb-4">
                Instant support during business hours
              </p>
              <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors font-semibold">
                Start Chat
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Request Consultation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 sm:mb-10">Request a Free Consultation</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get personalized advice and quotes from our solar energy experts
            </p>
            <button className="bg-white text-green-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold text-lg">
              Schedule Consultation
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
