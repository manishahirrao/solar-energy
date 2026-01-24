'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, Mail, Building, MessageSquare, Send, Zap, Sun, Battery, Trees } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  propertyType: string;
  message: string;
}

export default function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: 'solar-panels',
    propertyType: 'residential',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Navigate to WhatsApp with form data
    const whatsappMessage = `Hello! I'm interested in your solar services.%0A%0AName: ${formData.name}%0A%0APhone: ${formData.phone}%0A%0AEmail: ${formData.email}%0A%0AService: ${formData.service}%0A%0AProperty Type: ${formData.propertyType}%0A%0AMessage: ${formData.message || 'No additional message'}`;
    
    const whatsappUrl = `https://wa.me/918959890113?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'solar-panels',
        propertyType: 'residential',
        message: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-50 mb-6">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.6, repeat: Infinity }}
          >
            <Zap className="h-10 w-10 text-green-600" />
          </motion.div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
        <p className="text-gray-600 text-lg max-w-md mx-auto">
          Your quote request has been received. Our solar expert will contact you within 24 hours to discuss your requirements.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            <User className="w-4 h-4 inline mr-2 text-green-600" />
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-300 placeholder-gray-400 text-gray-900"
            placeholder="Enter your full name"
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            <Phone className="w-4 h-4 inline mr-2 text-green-600" />
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-300 placeholder-gray-400 text-gray-900"
            placeholder="+91 00000 00000"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          <Mail className="w-4 h-4 inline mr-2 text-green-600" />
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-300 placeholder-gray-400 text-gray-900"
          placeholder="your.email@example.com"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            <Sun className="w-4 h-4 inline mr-2 text-green-600" />
            Service Type
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-300 text-gray-900"
          >
            <option value="solar-panels">Solar Panel Installation</option>
            <option value="solar-water-heater">Solar Water Heater</option>
            <option value="solar-inverter">Solar Inverter Systems</option>
            <option value="solar-pumps">Solar Water Pumps</option>
            <option value="solar-maintenance">Solar System Maintenance</option>
            <option value="solar-rooftop">Rooftop Solar Solutions</option>
            <option value="solar-epc">Solar EPC Solutions</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            <Building className="w-4 h-4 inline mr-2 text-green-600" />
            Property Type
          </label>
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-300 text-gray-900"
          >
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="industrial">Industrial</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          <MessageSquare className="w-4 h-4 inline mr-2 text-green-600" />
          Message (Optional)
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-300 resize-none placeholder-gray-400 text-gray-900"
          placeholder="Tell us about your requirements, roof size, electricity consumption, etc..."
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex items-center text-sm text-gray-600">
          <Battery className="w-4 h-4 mr-2 text-green-600" />
          Save up to 95% on electricity bills
        </div>
        
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
        >
          <Send className="w-5 h-5" />
          Get Free Quote
        </motion.button>
      </div>

      <div className="text-center text-xs text-gray-500 pt-4 border-t">
        <div className="flex items-center justify-center">
          <Trees className="w-4 h-4 mr-1 text-green-600" />
          Your information is secure and will never be shared with third parties
        </div>
      </div>
    </form>
  );
}
