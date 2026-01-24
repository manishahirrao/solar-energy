'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Sun, Users, Award, Clock, Shield, Trees, Battery, Globe } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const usefulLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Projects', href: '/project' },
    { name: 'Gallery', href: '/gallery' }
  ];

  const services = [
    { name: 'Solar EPC', href: '/service/solar-epc' },
    { name: 'Solar Installation', href: '/service/solar-installation' },
    { name: 'Solar Maintenance', href: '/service/solar-maintenance' }
  ];

  const support = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Disclaimer', href: '/disclaimer' },
    { name: 'Refund Policy', href: '/refund-policy' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 p-4 sm:p-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <motion.div
              className="flex items-center mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/procura logo.png"
                alt="Procura Solar"
                className="h-16 w-auto mr-3"
              />
              <h3 className="text-xl font-bold">Procura Solar</h3>
            </motion.div>
            <motion.p
              className="text-gray-300 mb-6 leading-relaxed text-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Leading the renewable energy revolution with innovative solar solutions and unwavering commitment to excellence.
            </motion.p>
          </motion.div>

          {/* Useful Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <motion.h4
              className="text-lg font-semibold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Useful Links
            </motion.h4>
            <ul className="space-y-2">
              {usefulLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <Link href={link.href} className="text-gray-300 hover:text-green-400 transition-colors">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h4
              className="text-lg font-semibold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Services
            </motion.h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <Link href={service.href} className="text-gray-300 hover:text-green-400 transition-colors">
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.h4
              className="text-lg font-semibold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Support
            </motion.h4>
            <ul className="space-y-2">
              {support.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <Link href={item.href} className="text-gray-300 hover:text-green-400 transition-colors">
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info - Newly Moved */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.h4
              className="text-lg font-semibold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Contact Us
            </motion.h4>
            <div className="flex flex-col space-y-3">
              <motion.div
                className="flex items-center text-gray-300 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">+91 8959890113</span>
              </motion.div>
              <motion.div
                className="flex items-center text-gray-300 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">+91 7415550210</span>
              </motion.div>
              <motion.div
                className="flex items-center text-gray-300 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">sale.procura@gmail.com</span>
              </motion.div>
              <motion.div
                className="flex items-start text-gray-300 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span className="text-xs">E-3/114, 2nd Floor, 10 No. Market, Arera Colony, Bhopal, MP 462016</span>
              </motion.div>
              <motion.div
                className="flex items-center text-gray-300 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                <span className="text-xs font-medium text-gray-400">GST: 23GLBPS2222E12J</span>
              </motion.div>

              <div className="flex space-x-3 mt-4 pt-2 border-t border-gray-700/30">
                {[
                  { icon: Facebook, href: '#', label: 'Facebook' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Instagram, href: '#', label: 'Instagram' }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Serviceable Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            <span className="text-green-400 font-semibold">Serviceable Areas:</span> Bhopal, Mandideep, Hoshangabad, Raisen, Vidisha, Sehore, and nearby areas in Madhya Pradesh.
          </p>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-gray-700/50 mt-8 pt-6"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2024 Procura Solar. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm">
              <a
                href="https://adwikindia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors"
              >
                Design and Develop by AdwikIndia
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
