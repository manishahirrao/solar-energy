'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, User, MessageSquare, Building, Home, Zap, Battery, Trees, Send, CheckCircle, Sun } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  propertyType: string;
  message: string;
}

export default function InquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    propertyType: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    { value: 'solar-energy', label: 'Solar Energy Installation', icon: Sun },
    { value: 'hybrid-energy', label: 'Hybrid Energy Systems', icon: Battery },
    { value: 'solar-consulting', label: 'Solar Consulting', icon: Trees },
    { value: 'solar-maintenance', label: 'Solar Maintenance', icon: Zap },
    { value: 'energy-storage', label: 'Energy Storage', icon: Battery }
  ];

  const propertyTypes = [
    { value: 'residential', label: 'Residential', icon: Home },
    { value: 'commercial', label: 'Commercial', icon: Building },
    { value: 'industrial', label: 'Industrial', icon: Building }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        propertyType: '',
        message: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <CheckCircle className="w-8 h-8 text-green-600" />
        </motion.div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-600 mb-4">Your inquiry has been submitted successfully.</p>
        <p className="text-gray-600 text-sm">Our team will contact you within 24 hours.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-xl p-8"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Your Free Quote</h2>
        <p className="text-gray-600">Fill in the details below and our solar experts will get back to you with a customized quote.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              placeholder="John Doe"
            />
          </motion.div>

          {/* Email Field */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="w-4 h-4 inline mr-2" />
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              placeholder="john@example.com"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="w-4 h-4 inline mr-2" />
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              placeholder="+91 00000 00000"
            />
          </motion.div>

          {/* Service Field */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Zap className="w-4 h-4 inline mr-2" />
              Service Interested *
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            >
              <option value="">Select a service</option>
              {services.map(service => (
                <option key={service.value} value={service.value}>
                  {service.label}
                </option>
              ))}
            </select>
          </motion.div>
        </div>

        {/* Property Type Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Building className="w-4 h-4 inline mr-2" />
            Property Type *
          </label>
          <div className="grid grid-cols-3 gap-4">
            {propertyTypes.map(type => (
              <label
                key={type.value}
                className="relative flex items-center justify-center p-4 border border-gray-300 rounded-lg cursor-pointer transition-all hover:border-green-500"
              >
                <input
                  type="radio"
                  name="propertyType"
                  value={type.value}
                  checked={formData.propertyType === type.value}
                  onChange={handleInputChange}
                  required
                  className="sr-only"
                />
                <div className={`text-center ${formData.propertyType === type.value ? 'text-green-600' : 'text-gray-600'}`}>
                  <type.icon className="w-6 h-6 mx-auto mb-2" />
                  <span className="text-sm font-medium">{type.label}</span>
                </div>
              </label>
            ))}
          </div>
        </motion.div>

        {/* Message Field */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MessageSquare className="w-4 h-4 inline mr-2" />
            Additional Details
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
            placeholder="Tell us about your requirements, property details, or any specific questions..."
          />
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              />
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Get Free Quote
              </>
            )}
          </button>
        </motion.div>

        {/* Privacy Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xs text-gray-500 text-center"
        >
          By submitting this form, you agree to our{' '}
          <a href="/privacy-policy" className="text-green-600 hover:underline">Privacy Policy</a>
          {' '}and{' '}
          <a href="/terms-of-service" className="text-green-600 hover:underline">Terms of Service</a>.
        </motion.p>
      </form>
    </motion.div>
  );
}
