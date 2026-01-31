'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, Sun, ArrowRight, Send, ExternalLink } from 'lucide-react';
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

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:bg-red-600' }
  ];

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-[120px]" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-white/10">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pt-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                Ready to Go <span className="text-emerald-400">Solar</span>?
              </h3>
              <p className="text-slate-400">Get a free consultation and start saving today!</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    (window as any).openQuoteForm();
                  }
                }}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <a
                href="tel:+918959890113"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 py-12 lg:py-16 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pt-4">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link href="/" className="inline-block mb-6">
              <img
                src="/procura logo.png"
                alt="Procura Solar"
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              Leading the renewable energy revolution with innovative solar solutions and unwavering commitment to excellence. Your trusted partner for sustainable energy.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${social.color} hover:border-transparent transition-all`}
                  whileHover={{ y: -3 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-5 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-5 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-500" />
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold mt-8 mb-5 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-violet-500" />
              Legal
            </h4>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-5 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              Contact Us
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+918959890113"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:border-emerald-500/30 transition-colors">
                  <Phone className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm">+91 8959890113</div>
                  <div className="text-xs text-slate-500">Primary</div>
                </div>
              </a>

              <a
                href="tel:+917415550210"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:border-emerald-500/30 transition-colors">
                  <Phone className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm">+91 7415550210</div>
                  <div className="text-xs text-slate-500">Alternate</div>
                </div>
              </a>

              <a
                href="mailto:sale.procura@gmail.com"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-amber-500/20 group-hover:border-amber-500/30 transition-colors">
                  <Mail className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-sm">sale.procura@gmail.com</span>
              </a>

              <div className="flex items-start gap-3 text-slate-400">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-sm leading-relaxed">
                  E-3/114, 2nd Floor, 10 No. Market,<br />
                  Arera Colony, Bhopal, MP 462016
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-xs text-slate-500">
                  GST: <span className="text-slate-400">23GLBPS2222E12J</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Service Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-slate-500 text-sm">
            <span className="text-emerald-400 font-medium">📍 Service Areas:</span>{' '}
            Bhopal, Mandideep, Hoshangabad, Raisen, Vidisha, Sehore, and nearby areas in Madhya Pradesh
          </p>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Procura Solar. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm flex items-center gap-2">
              Crafted with ❤️ by{' '}
              <a
                href="https://adwikindia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1"
              >
                AdwikIndia
                <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
