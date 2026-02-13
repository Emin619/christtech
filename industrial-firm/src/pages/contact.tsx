import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';
import Button from '../components/common/button';

const Contact: React.FC = () => {
  return (
    <main className="flex-grow bg-slate-50 text-industrial-navy">
      {/* Header */}
      <section className="pt-32 pb-12 bg-industrial-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Get in <span className="text-industrial-orange">Touch</span>
          </motion.h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Have a project in mind? Reach out to our engineering team for a consultation or quote.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:w-1/3 space-y-8"
            >
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold mb-6 border-b border-slate-100 pb-4">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-industrial-red/10 flex items-center justify-center text-industrial-red shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-industrial-navy">Headquarters</p>
                      <p className="text-gray-600 text-sm">123 Industrial Blvd, Sector 7<br/>Engineering District, NY 10012</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-industrial-red/10 flex items-center justify-center text-industrial-red shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-industrial-navy">Phone</p>
                      <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
                      <p className="text-gray-500 text-xs mt-1">Mon-Fri, 8am - 6pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-industrial-red/10 flex items-center justify-center text-industrial-red shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-industrial-navy">Email</p>
                      <p className="text-gray-600 text-sm">info@christtech.com</p>
                      <p className="text-gray-600 text-sm">support@christtech.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-industrial-navy p-8 rounded-2xl text-white shadow-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Globe size={20} className="text-industrial-orange" /> Global Support
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  We provide 24/7 emergency maintenance support for our contracted partners worldwide.
                </p>
                <div className="flex items-center gap-2 text-industrial-orange text-sm font-medium">
                  <Clock size={16} /> Average Response: 2 Hours
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:w-2/3"
            >
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-slate-100">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-industrial-red focus:ring-1 focus:ring-industrial-red outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-industrial-red focus:ring-1 focus:ring-industrial-red outline-none transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                    <select 
                      id="subject" 
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-industrial-red focus:ring-1 focus:ring-industrial-red outline-none transition-all"
                    >
                      <option value="">Select a topic</option>
                      <option value="quote">Request a Quote</option>
                      <option value="support">Technical Support</option>
                      <option value="careers">Careers</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                    <textarea 
                      id="message" 
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-industrial-red focus:ring-1 focus:ring-industrial-red outline-none transition-all resize-none"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>

                  <Button size="lg" variant="primary" className="w-full md:w-auto">
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
